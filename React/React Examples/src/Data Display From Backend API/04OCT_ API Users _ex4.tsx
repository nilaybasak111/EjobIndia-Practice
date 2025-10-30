import { useEffect, useState } from "react";
import axios from "axios";

interface Coordinates {
  lat: number;
  lng: number;
}

interface Address {
  address: string;
  city: string;
  state: string;
  stateCode: string;
  postalCode: string;
  coordinates: Coordinates;
  country: string;
}

interface UserData {
  id: number;
  firstName: string;
  lastName: string;
  username: string;
  email: string;
  phone: string;
  image: string;
  address: Address;
}

interface APIResponse {
  users: UserData[];
  total: number;
  skip: number;
  limit: number;
}

const OCT04APIUsersEx4 = () => {
  const [users, setUsers] = useState<UserData[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get<APIResponse>("https://dummyjson.com/users")
      .then((response) => {
        setTimeout(() => {
          setUsers(response.data.users);
          setLoading(false);
        }, 2000);
      })
      .catch(() => {
        console.log("error");
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <p>Please Wait...</p>;
  }

  // Get the first 5 users from the API response and display them using slice
  const firstTenUsers = users.slice(0, 5);

  return (
    <div>
      <h2>User Data (First 5 Users)</h2>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>State</th>
            <th>Country</th>
            <th>Image</th>
          </tr>
        </thead>
        <tbody>
          {firstTenUsers.map((user) => (
            <tr key={user.id}>
              <td>{user.id}</td>
              <td>{user.firstName}</td>
              <td>{user.lastName}</td>
              <td>{user.address.state}</td>
              <td>{user.address.country}</td>
              <td>
                <img
                  src={user.image}
                  alt={`${user.firstName} ${user.lastName}`}
                  width="50"
                  height="50"
                />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default OCT04APIUsersEx4;
