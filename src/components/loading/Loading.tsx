import { Spin } from "antd";
import React from "react";

const Loading = () => {
  return (
    <div
      style={{
        width: "100vw",
        height:'100vh',
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Spin size="large" />
    </div>
  );
};

export default Loading;
