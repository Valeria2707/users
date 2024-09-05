import "./UserTable.css";
import { User } from "../../types/users.types";

interface Props {
  users: User[];
}

export default function UserTable({ users }: Props) {
  const isUsers = users.length > 0;
  return (
    <div className="user-table-container">
      <table className="user-table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Username</th>
            <th>Email</th>
            <th>Phone</th>
          </tr>
        </thead>
        <tbody>
          {isUsers ? (
            users.map((user) => (
              <tr key={user.id}>
                <td>{user.name}</td>
                <td>{user.username}</td>
                <td>{user.email}</td>
                <td>{user.phone}</td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan={4} className="no-users-text">
                There are no users
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}
