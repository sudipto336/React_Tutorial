import React from "react";
import WithPortal from "./WithPortal";
import WithoutPortal from "./WithoutPortal";

function SimpleModalComp() {
  return (
    <div>
      <WithPortal />
      <br />
      <WithoutPortal />
    </div>
  );
}

export default SimpleModalComp;
