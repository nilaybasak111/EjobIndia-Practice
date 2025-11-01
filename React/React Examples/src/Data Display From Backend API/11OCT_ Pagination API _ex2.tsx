import axios from "axios";
import { useEffect, useState } from "react";
import DataTable from "react-data-table-component";

const OCT11APIPaginationEx2 = () => {
  const [users, setUsers] = useState<any[]>([]);

  useEffect(() => {
    setTimeout(() => {
      axios
        .get("https://dummyjson.com/users")
        .then((response) => {
          console.log(response.data.users);
          setUsers(response.data.users);
        })
        .catch((error) => {
          console.log(error);
        });
    }, 5000);
  }, []);

  const colData: any = [
    {
      name: "ID",
      selector: (row: { id: number }) => row.id,
      width: "10%",
      sortable: true,
    },
    {
      name: "EMAIL",
      selector: (row: { email: string }) => row.email,
      wrap: true,
      sortable: true,
      width: "25%",
    },
    {
      name: "IMAGE",
      selector: (row: { image: string }) => (
        <img src={row.image} height="50" width="50" />
      ),
      width: "10%",
    },
    {
      name: "CITY",
      selector: (row: { address: { city: string } }) => row.address.city,
      wrap: true,
      sortable: true,
      width: "15%",
    },
    {
      name: "STATE",
      selector: (row: { address: { state: string } }) => row.address.state,
      wrap: true,
      sortable: true,
      width: "15%",
    },
    {
      name: "COUNTRY",
      selector: (row: { address: { country: string } }) => row.address.country,
      wrap: true,
      sortable: true,
      width: "15%",
    },
  ];

  return (
    <>
      <DataTable
        title="Users Locations Info"
        data={users}
        columns={colData}
        pagination
        highlightOnHover
        dense
        responsive
        pointerOnHover
        paginationPerPage={10}
      />
    </>
  );
};

export default OCT11APIPaginationEx2;
