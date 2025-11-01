import axios from "axios";
import { useEffect, useState } from "react";
import DataTable from "react-data-table-component";

const OCT11APIPaginationEx1 = () => {
  const [info, setInfo] = useState<any[]>([]);

  useEffect(() => {
    setTimeout(() => {
      axios
        .get("https://jsonplaceholder.typicode.com/posts")
        .then((response) => {
          //console.log(response.data);
          setInfo(response.data);
        })
        .catch((error) => {
          console.log(error);
        });
    }, 5000);
  }, []);

  const colData: any = [
    {
      name: "USER ID",
      // selector is used to display the data from the API
      // selector name must be the same as the API data
      // All objects are coming in row. So we can access the data using row. We must give row a type.
      selector: (row: { userId: number }) => {
        return row.userId;
      },
      width: "10%",
      // sortable is used to sort the data in ascending or descending order
      sortable: true,
    },
    {
      name: "POSTID",
      selector: (row: { id: number }) => {
        return row.id;
      },
      width: "10%",
      sortable: true,
    },
    {
      name: "TITLE",
      selector: (row: { title: string }) => {
        return row.title;
      },
      warp: true,
      width: "30%",
      sortable: true,
    },
    {
      name: "BODY",
      selector: (row: { body: string }) => {
        return row.body;
      },
      warp: true,
      width: "30%",
      sortable: false,
    },
  ];

  // Display the selected rows in the console
  const showRow = (rows: any) => {
    console.log(rows.selectedRows);
  };

  return (
    <>
      <DataTable
        title="Users Posts Info"
        data={info}
        columns={colData}
        pagination
        highlightOnHover
        dense
        responsive
        pointerOnHover
        paginationPerPage={10}
        // You can select individual rows using checkbox using selectableRows
        selectableRows
        onSelectedRowsChange={showRow}
      />
    </>
  );
};

export default OCT11APIPaginationEx1;
