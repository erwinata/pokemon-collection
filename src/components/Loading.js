import React from "react";
import PulseLoader from "react-spinners/PulseLoader";

export const Loading = () => {
  return (
    <div style={{ padding: "1rem 0" }}>
      <PulseLoader
        size={15}
        //size={"150px"} this also works
        color={"#4ACCFF"}
      />
    </div>
  );
};

export default Loading;
