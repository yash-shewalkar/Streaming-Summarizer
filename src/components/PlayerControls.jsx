import React from "react";
import { FaPlay, FaPause, FaStepBackward, FaStepForward } from "react-icons/fa";

const PlayerControls = () => {
  return (
    <footer className="flex items-center justify-center bg-gray-800 p-4 border-t border-gray-700">
      <FaStepBackward className="mx-4 text-2xl cursor-pointer hover:text-gray-400" />
      <FaPlay className="mx-4 text-2xl cursor-pointer hover:text-gray-400" />
      <FaStepForward className="mx-4 text-2xl cursor-pointer hover:text-gray-400" />
    </footer>
  );
};

export default PlayerControls;
