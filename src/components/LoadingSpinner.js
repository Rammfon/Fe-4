import React from "react";

const LoadingSpinner = () => {
  return (
    <div style={{ textAlign: "center", marginTop: "20px" }}>
      <div className="spinner-border" role="status">
        <span className="visually-hidden">Loading...</span>
      </div>
    </div>
  );
};

export default LoadingSpinner;
