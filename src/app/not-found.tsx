"use client";

import useMoveBack from "../hooks/useMoveBack";

const NotFound = () => {
  const moveBack = useMoveBack();

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
      }}
    >
      <div>
        <h1>Not Found 404</h1>
        <h2 onClick={moveBack}> back . . . </h2>
      </div>
    </div>
  );
};

export default NotFound;
