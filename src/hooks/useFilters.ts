import { useDispatch, useSelector } from "react-redux";
import { useCallback } from "react";
import { setFilter } from "../store/usersSlice";
import { RootState } from "../store/store";

export default function useFilters() {
  const dispatch = useDispatch();
  const filters = useSelector((state: RootState) => state.users.filters);

  const handleFilterChange = useCallback(
    (field: keyof typeof filters) => (value: string) => {
      dispatch(setFilter({ field, value }));
    },
    [dispatch]
  );

  return { filters, handleFilterChange };
}
