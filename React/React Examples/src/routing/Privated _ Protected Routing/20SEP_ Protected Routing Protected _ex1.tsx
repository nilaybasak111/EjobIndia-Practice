import React from "react";
import { Navigate } from "react-router-dom";

interface Props {
  isSignedIn: boolean;
  // Here we are receiving a component so we have to write children & the type of children is React.ReactNode
  children: React.ReactNode;
}

const SEP20ProtectedRoutingProtectedEx1 = (props: Props) => {
  if (!props.isSignedIn) {
    return <Navigate to="/" replace={true} />;
  }
  return props.children;
};

export default SEP20ProtectedRoutingProtectedEx1;
