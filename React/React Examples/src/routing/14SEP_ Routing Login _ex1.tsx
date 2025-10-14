import { useRef } from "react";
import { useNavigate } from "react-router-dom";

const SEP14RoutingLoginEx1 = () => {
  const refEmail = useRef<HTMLInputElement>(null);
  const refPassword = useRef<HTMLInputElement>(null);
  // useNavigate hook is used to navigate to another route in React
  const navigate = useNavigate();

  const checkLogin = () => {
    let email = refEmail.current!.value;
    let password = refPassword.current!.value;
    if (email == "nilay@gmail.com" && password == "1234") {
      navigate("/dashboard");
    } else {
      alert("Invalid Credentials");
    }
  };
  return (
    <>
      <h3>LOGIN HERE :</h3>
      Email:
      <input type="email" ref={refEmail} />
      <br></br>
      Password :
      <input type="password" ref={refPassword} />
      <br></br>
      <button onClick={checkLogin}>Login</button>
    </>
  );
};

export default SEP14RoutingLoginEx1;
