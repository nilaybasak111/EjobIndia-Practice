// useParams hook is used to get the parameters from the URL in React
import { useParams } from "react-router-dom";

const SEP14RoutingProfileEx1 = () => {
  const { id } = useParams();
  return (
    <div>
      <h3>Welcome to Your Profile</h3>
      <p>Your Id is: {id}</p>
    </div>
  );
};

export default SEP14RoutingProfileEx1;
