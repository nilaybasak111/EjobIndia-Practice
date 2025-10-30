import { useEffect, useState } from "react";
import axios from "axios";

interface Geo {
  lat: string;
  lng: string;
}

interface Address {
  street: string;
  suite: string;
  city: string;
  zipcode: string;
  geo: Geo;
}

interface Company {
  name: string;
  catchPhrase: string;
  bs: string;
}

interface UserData {
  id: number;
  name: string;
  username: string;
  email: string;
  address: Address;
  phone: string;
  website: string;
  company: Company;
}

const OCT04APIUsersEx3 = () => {
  const [data, setData] = useState<UserData[]>([]);
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    const API_URL = "https://jsonplaceholder.typicode.com/users/";

    axios
      .get<UserData[]>(API_URL)
      .then((response) => {
        setTimeout(() => {
          setData(response.data);
          setLoading(true);
        }, 2000);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div>
      {loading ? (
        <>
          <h2 className="text-center">Users Information</h2>
          <table>
            <thead>
              <tr>
                <th>Username</th>
                <th>Email</th>
                <th>Street</th>
                <th>City</th>
                <th>Lat</th>
                <th>Lng</th>
                <th>Company Name</th>
              </tr>
            </thead>
            <tbody>
              {data.map((user) => (
                <tr key={user.id}>
                  <td>{user.username}</td>
                  <td>{user.email}</td>
                  <td>{user.address.street}</td>
                  <td>{user.address.city}</td>
                  <td>{user.address.geo.lat}</td>
                  <td>{user.address.geo.lng}</td>
                  <td>{user.company.name}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </>
      ) : (
        <p>Loading, Please Wait...</p>
      )}
    </div>
  );
};

export default OCT04APIUsersEx3;
