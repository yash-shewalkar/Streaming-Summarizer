import React from "react";
import { FaSearch } from "react-icons/fa";

const Header = () => {
  return (
    <header className="flex items-center justify-between px-6 py-4 bg-gray-800 border-b border-gray-700">
      <h1 className="text-2xl font-bold">Streamly</h1>
      <div className="flex items-center bg-gray-700 rounded-lg px-3 py-2">
        <FaSearch className="text-gray-400" />
        <input
          type="text"
          placeholder="Search..."
          className="ml-2 bg-transparent text-white outline-none placeholder-gray-400"
        />
      </div>
    </header>
  );
};

export default Header;
