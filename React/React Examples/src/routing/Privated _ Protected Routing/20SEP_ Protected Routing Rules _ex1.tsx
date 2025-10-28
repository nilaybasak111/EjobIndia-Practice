import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SEP20ProtectedRoutingHomeEx1 from "./20SEP_ Protected Routing Home _ex1";
import SEP20ProtectedRoutingDashboardEx1 from "./20SEP_ Protected Routing Dashboard _ex1";
import SEP20ProtectedRoutingProductsEx1 from "./20SEP_ Protected Routing Products _ex1";
import SEP20ProtectedRoutingMenuBarEx1 from "./20SEP_ Protected Routing MenuBar _ex1";
import SEP20ProtectedRoutingProtectedEx1 from "./20SEP_ Protected Routing Protected _ex1";

const SEP20ProtectedRoutingRulesEx1 = () => {
  const [isSignedIn, setIsSignedIn] = useState<boolean>(false);

  const signin = () => {
    setIsSignedIn(true);
  };

  const signout = () => {
    setIsSignedIn(false);
  };

  return (
    <div className="container">
      <h2 className="mb-5 text-center">React Protected Routes Example</h2>
      <BrowserRouter>
        <SEP20ProtectedRoutingMenuBarEx1 />
        <Routes>
          <Route path="/" element={<SEP20ProtectedRoutingHomeEx1 />} />
          <Route
            path="/dashboard"
            element={
              <SEP20ProtectedRoutingProtectedEx1 isSignedIn={isSignedIn}>
                {/* This SEP20ProtectedRoutingDashboardEx1 component is called Children props.
                Here we are sending isSignedIn prop to Protected Component. */}
                <SEP20ProtectedRoutingDashboardEx1 />
              </SEP20ProtectedRoutingProtectedEx1>
            }
          />
          <Route
            path="/products"
            element={
              // Here we are sending isSignedIn prop to Protected Component
              <SEP20ProtectedRoutingProtectedEx1 isSignedIn={isSignedIn}>
                <SEP20ProtectedRoutingProductsEx1 />
              </SEP20ProtectedRoutingProtectedEx1>
            }
          />
        </Routes>
        <br></br>
        {isSignedIn ? (
          <div>
            <button className="btn btn-danger" onClick={signout}>
              Sign Out
            </button>
          </div>
        ) : (
          <div>
            <button className="btn btn-success" onClick={signin}>
              Sign In
            </button>
          </div>
        )}
      </BrowserRouter>
    </div>
  );
};

export default SEP20ProtectedRoutingRulesEx1;
