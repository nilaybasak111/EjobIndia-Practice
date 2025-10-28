import SEP13RoutingMenuEx1 from "./13SEP_ Routing Menu _ex1";
import SEP13RoutingHomeEx1 from "./13SEP_ Routing Home _ex1";
import SEP13RoutingDemoEx1 from "./13SEP_ Routing Demo _ex1";
import SEP13RoutingLandingEx1 from "./13SEP_ Routing Landing _ex1";
import SEP14RoutingProfileEx1 from "./14SEP_ Routing Profile _ex1";
import SEP14RoutingProfile2Ex1 from "./14SEP_ Routing Profile2 _ex1";
import SEP14RoutingShowInfoEx1 from "./14SEP_ Routing ShowInfo _ex1";
import SEP14RoutingLoginEx1 from "./14SEP_ Routing Login _ex1";
import SEP14RoutingDashboardEx1 from "./14SEP_ Routing Dashboard _ex1";
import SEP20NestedRoutingProductEx1 from "./Nested Routing/20SEP_ Nested Routing Product _ex1";
import SEP20NestedRoutingContactEx1 from "./Nested Routing/20SEP_ Nested Routing Contact _ex1";

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
          <Route path="/profile/:id" element={<SEP14RoutingProfileEx1 />} />
          <Route
            path="/profile2/name/:username/dept/:department"
            element={<SEP14RoutingProfile2Ex1 />}
          />
          <Route path="/info" element={<SEP14RoutingShowInfoEx1 />} />
          <Route path="/login" element={<SEP14RoutingLoginEx1 />} />

          {/* Writing A Nested Routing Rules for "/dashboard/product", etc */}
          <Route path="/dashboard" element={<SEP14RoutingDashboardEx1 />}>
            {/* We dont give "/" in path in Nested Routing */}
            <Route path="product" element={<SEP20NestedRoutingProductEx1 />} />
            <Route path="contact" element={<SEP20NestedRoutingContactEx1 />} />
          </Route>

          {/* "*" is Used For All Path Not Found */}
          <Route path="*" element={<h3>404 Page Not Found</h3>} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default SEP13RoutingRulesEx1;
