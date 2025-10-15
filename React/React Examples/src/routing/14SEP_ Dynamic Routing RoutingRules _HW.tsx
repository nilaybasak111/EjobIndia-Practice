import SEP14DynamicRoutingUserInfoHW from "./14SEP_ Dynamic Routing UserInfo _HW";
import SEP14DynamicRoutingDetailsHW from "./14SEP_ Dynamic Routing Details _HW";
import SEP14DynamicRoutingDeleteHW from "./14SEP_ Dynamic Routing Delete _HW";
import { BrowserRouter, Routes, Route } from "react-router-dom";

const SEP14DynamicRoutingRoutingRulesHW = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<SEP14DynamicRoutingUserInfoHW />} />
          <Route
            path="/details/:userId"
            element={<SEP14DynamicRoutingDetailsHW />}
          />
          <Route
            path="/delete/:userId"
            element={<SEP14DynamicRoutingDeleteHW />}
          />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default SEP14DynamicRoutingRoutingRulesHW;
