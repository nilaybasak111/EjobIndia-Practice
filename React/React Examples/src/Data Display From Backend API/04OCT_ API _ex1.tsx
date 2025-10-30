import { useEffect, useState } from "react";
import axios from "axios";

interface AlbumData {
  userId: number;
  id: number;
  title: string;
}

const OCT04APIEx1 = () => {
  const [data, setData] = useState<AlbumData | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get<AlbumData>("https://jsonplaceholder.typicode.com/albums/1")
      .then((response) => {
        setTimeout(() => {
          setData(response.data);
          setLoading(false);
        }, 2000);
      })
      .catch((error) => {
        console.log(error);
        setLoading(false);
      });
  }, []);

  return (
    <>
      {loading && <p>Please wait...</p>}
      {data && !loading && (
        <ul>
          <li>Title : {data.title}</li>
          <li>Id : {data.id}</li>
          <li>UserId : {data.userId}</li>
        </ul>
      )}
    </>
  );
};

export default OCT04APIEx1;
