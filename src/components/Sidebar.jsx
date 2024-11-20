import React from "react";
import { FaHome, FaList, FaUser } from "react-icons/fa";

const Sidebar = () => {
  return (
    <aside className="w-64 bg-gray-800 p-6 border-r border-gray-700 hidden md:block">
      <ul className="space-y-4">
        <li className="flex items-center gap-3 hover:bg-gray-700 rounded-lg px-4 py-2 cursor-pointer">
          <FaHome />
          <span>Home</span>
        </li>
        <li className="flex items-center gap-3 hover:bg-gray-700 rounded-lg px-4 py-2 cursor-pointer">
          <FaList />
          <span>Library</span>
        </li>
        <li className="flex items-center gap-3 hover:bg-gray-700 rounded-lg px-4 py-2 cursor-pointer">
          <FaUser />
          <span>Profile</span>
        </li>
      </ul>
    </aside>
  );
};

export default Sidebar;
