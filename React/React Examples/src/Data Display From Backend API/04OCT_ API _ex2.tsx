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

const OCT04APIEx2 = () => {
  const [data, setData] = useState<UserData | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);

    axios
      .get<UserData>("https://jsonplaceholder.typicode.com/users/1")
      .then((response) => {
        setTimeout(() => {
          setData(response.data);
          setLoading(false);
        }, 2000);
      })
      .catch((err) => {
        setLoading(false);
        console.log(err);
      });
  }, []);

  return (
    <>
      {loading && <p>Please wait...</p>}
      {data && !loading && (
        <ul>
          <li>Username: {data.username}</li>
          <li>Email: {data.email}</li>
          <li>Street: {data.address.street}</li>
          <li>City: {data.address.city}</li>
          <li>Lat: {data.address.geo.lat}</li>
          <li>Lng: {data.address.geo.lng}</li>
          <li>Company: {data.company.name}</li>
        </ul>
      )}
    </>
  );
};

export default OCT04APIEx2;
