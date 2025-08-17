import React from "react";

const Loader = () => {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-cyan-300 z-50">
      <img
        src="/logo.svg"
        alt="Loading..."
        className=" text-white w-40 h-50 animate-pulse"
      />
    </div>
  );
};

export default Loader;

