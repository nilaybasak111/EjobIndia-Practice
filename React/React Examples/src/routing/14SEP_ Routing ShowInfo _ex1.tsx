// useLocation hook is used to get the location from the URL in React.
// Here we catch the data from the state(Router) and display it
import { useLocation } from "react-router-dom";

const SEP14RoutingShowInfoEx1 = () => {
  // You have to create an object to store the data
  const location = useLocation();
  // Then you can access the data using the state props
  const { info } = location.state;
  return (
    <>
      <h3>Welcome to Your Information</h3>
      <p>
        Here We Display Your Information using useLocation. When You need whole
        data from router then you can pass value using "state" props and access
        it using "useLocation". If you want to see the data from the
        state(Router). Then you have to create an object to store the data
      </p>
      <ul>
        <li>Name: {info.username}</li>
        <li>Location: {info.location}</li>
        <li>Skills: {info.skills}</li>
        <li>Department: {info.department}</li>
      </ul>
    </>
  );
};

export default SEP14RoutingShowInfoEx1;
