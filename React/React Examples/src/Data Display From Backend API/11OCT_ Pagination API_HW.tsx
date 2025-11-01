import axios from "axios";
import { useEffect, useState } from "react";
import DataTable from "react-data-table-component";
import OCT10DetailsAPIPaginationHW from "./11OCT_ Details Pagination API _HW";

interface OCT11APIPaginationHWType {
  id: number;
  title: string;
  price: number;
  brand: string;
  thumbnail: string;
}

const OCT11APIPaginationHW = () => {
  const [products, setProducts] = useState<any[]>([]);
  const [selectedRows, setSelectedRows] =
    useState<OCT11APIPaginationHWType | null>(null);

  useEffect(() => {
    setTimeout(() => {
      axios
        .get("https://dummyjson.com/products")
        .then((response) => {
          console.log(response.data.products);
          setProducts(response.data.products);
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
      name: "TITLE",
      selector: (row: { title: string }) => row.title,
      wrap: true,
      sortable: true,
      width: "25%",
    },
    {
      name: "PRICE",
      selector: (row: { price: number }) => row.price,
      sortable: true,
      width: "10%",
    },
    {
      name: "BRANDS",
      selector: (row: { brand: string }) => row.brand,
      wrap: true,
      sortable: true,
      width: "10%",
    },
    {
      name: "THUMBNAIL",
      selector: (row: { thumbnail: string }) => (
        <img src={row.thumbnail} width="70" height="70" />
      ),
      wrap: true,
      width: "50%",
    },
  ];

  const showRow = (rows: any) => {
    if (rows.selectedRows.length > 0) {
      console.log(rows.selectedRows);
      setSelectedRows(rows.selectedRows[0]);
    } else {
      setSelectedRows(null);
    }
  };

  const isRowSelected = (row: OCT11APIPaginationHWType) => {
    return selectedRows?.id === row.id;
  };

  return (
    <>
      <DataTable
        title="Products Info"
        data={products}
        columns={colData}
        pagination
        highlightOnHover
        dense
        responsive
        pointerOnHover
        fixedHeader
        paginationPerPage={10}
        selectableRows
        onSelectedRowsChange={showRow}
        selectableRowSelected={isRowSelected}
      />
      {selectedRows && (
        <OCT10DetailsAPIPaginationHW
          id={selectedRows.id}
          title={selectedRows.title}
          price={selectedRows.price}
          brand={selectedRows.brand}
          thumbnail={selectedRows.thumbnail}
        />
      )}
    </>
  );
};

export default OCT11APIPaginationHW;
