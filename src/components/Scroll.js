import React from "react";

const Scroll = (props) => {
  return (
    <div
      style={{
        overflowY: "scroll",
        borderTop: "5px solid black",
        height: "80vh",
      }}
    >
      {props.children}
    </div>
  );
};

export default Scroll;
