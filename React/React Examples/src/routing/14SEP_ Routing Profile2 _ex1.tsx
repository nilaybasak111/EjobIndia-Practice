// useParams hook is used to get the parameters from the URL in React
import { useParams } from "react-router-dom";

const SEP14RoutingProfile2Ex1 = () => {
  const { username, department } = useParams();

  return (
    <>
      <h3>Welcome to Your Profile2</h3>
      <p>
        Here We Display username and department using useParams from params/url.
        We send multiple parameters in url and access them using useParams
      </p>
      <br />
      <p>
        Your Username is: {username} and Your Department is: {department}
      </p>
    </>
  );
};

export default SEP14RoutingProfile2Ex1;
