import { useState } from "react";
import axios from "axios";

const OCT05APISEARCHEx1 = () => {
  const [data, setData] = useState<any>(null);
  const [loading, setLoading] = useState<any>(false);
  const [searchTerm, setSearchTerm] = useState<any>("");

  const valueUpdate = (e: any) => {
    setSearchTerm(e.target.value);
  };

  const handleSearch = () => {
    setLoading(true);
    setData(null);

    if (!searchTerm) {
      alert("Please Enter A User ID.");
      setLoading(false);
      return;
    }

    axios
      .get(`https://dummyjson.com/users/${searchTerm}`)
      .then((response: any) => {
        setData(response.data);
        setLoading(false);
        setSearchTerm("");
      })
      .catch(() => {
        alert(`User with ID '${searchTerm}' Not Found.`);
        setLoading(false);
        setData(null);
        setSearchTerm("");
      });
  };

  const renderContent = () => {
    if (loading) {
      return <p>Loading User Details...</p>;
    }

    if (data) {
      return (
        <>
          <h4>UserId : {data.id}</h4>
          <h4>FirstName : {data.firstName}</h4>
          <h4>LastName : {data.lastName}</h4>
          <h4>Email : {data.email}</h4>
        </>
      );
    }
  };

  return (
    <>
      Please Enter UserId :
      <input type="text" value={searchTerm} onChange={valueUpdate} />
      <br />
      <input type="button" value="Search" onClick={handleSearch} />
      <br />
      <br />
      {renderContent()}
    </>
  );
};

export default OCT05APISEARCHEx1;
