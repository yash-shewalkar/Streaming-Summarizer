import React from "react";

const MainContent = () => {
  return (
    <main className="flex-1 p-6 overflow-y-auto">
      <h2 className="text-xl font-semibold mb-4">Your Playlists</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        <div className="bg-gray-700 rounded-lg p-4 hover:scale-105 transition-transform cursor-pointer">
          Playlist 1
        </div>
        <div className="bg-gray-700 rounded-lg p-4 hover:scale-105 transition-transform cursor-pointer">
          Playlist 2
        </div>
        <div className="bg-gray-700 rounded-lg p-4 hover:scale-105 transition-transform cursor-pointer">
          Playlist 3
        </div>
      </div>
    </main>
  );
};

export default MainContent;
