import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState, AppDispatch } from "./store/store";
import { fetchUsersData, selectFilteredUsers } from "./store/usersSlice";
import useFilters from "./hooks/useFilters";
import FilterInputs from "./components/filterInputs/FilterInputs";
import UserTable from "./components/userTable/UserTable";
import "./Users.css";

export default function Users() {
  const dispatch = useDispatch<AppDispatch>();
  const { loading, error } = useSelector((state: RootState) => state.users);
  const filteredUsers = useSelector(selectFilteredUsers);

  const { filters, handleFilterChange } = useFilters();

  useEffect(() => {
    dispatch(fetchUsersData());
  }, [dispatch]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div className="container">
      <h1 className="title">Users Table</h1>
      <FilterInputs filters={filters} onFilterChange={handleFilterChange} />
      <UserTable users={filteredUsers} />
    </div>
  );
}
