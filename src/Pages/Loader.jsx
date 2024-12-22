import React from "react";
import { LineWave } from "react-loader-spinner";

const Loader = () => {
  return (
    <div className="min-h-screen min-w-screen flex justify-center items-center">
      <LineWave
        visible={true}
        height="100"
        width="100"
        color="#4fa94d"
        ariaLabel="line-wave-loading"
      />
    </div>
  );
};

export default Loader;
