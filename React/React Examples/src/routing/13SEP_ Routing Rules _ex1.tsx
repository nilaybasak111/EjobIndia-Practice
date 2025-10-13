import SEP13RoutingMenuEx1 from "./13SEP_ Routing Menu _ex1";
import SEP13RoutingHomeEx1 from "./13SEP_ Routing Home _ex1";
import SEP13RoutingDemoEx1 from "./13SEP_ Routing Demo _ex1";
import SEP13RoutingLandingEx1 from "./13SEP_ Routing Landing _ex1";

import { BrowserRouter, Route, Routes } from "react-router-dom";

const SEP13RoutingRulesEx1 = () => {
  return (
    <>
      <BrowserRouter>
        <SEP13RoutingMenuEx1 />
        <Routes>
          <Route path="/" element={<SEP13RoutingLandingEx1 />} />
          <Route path="/home" element={<SEP13RoutingHomeEx1 />} />
          <Route path="/demo" element={<SEP13RoutingDemoEx1 />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default SEP13RoutingRulesEx1;
