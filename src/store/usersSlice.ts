import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import { User, UsersState } from "../types/users.types";
import { RootState } from "./store";
import { fetchUsers } from "../api/usersApi";
import { applyFilters } from "../utils/filterUtils";

const initialState: UsersState = {
  data: [],
  loading: false,
  error: null,
  filters: {
    name: "",
    username: "",
    email: "",
    phone: "",
  },
};

export const fetchUsersData = createAsyncThunk<User[]>(
  "users/fetchUsersData",
  async () => await fetchUsers()
);

export const usersSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    setFilter: (
      state,
      action: PayloadAction<{
        field: keyof UsersState["filters"];
        value: string;
      }>
    ) => {
      state.filters[action.payload.field] = action.payload.value;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchUsersData.pending, (state) => {
        state.loading = true;
      })
      .addCase(
        fetchUsersData.fulfilled,
        (state, action: PayloadAction<User[]>) => {
          state.loading = false;
          state.data = action.payload;
        }
      )
      .addCase(fetchUsersData.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || "Failed to fetch users";
      });
  },
});

export const { setFilter } = usersSlice.actions;

export default usersSlice.reducer;

export const selectFilteredUsers = (state: RootState) =>
  applyFilters(state.users.data, state.users.filters);
