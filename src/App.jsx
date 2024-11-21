import React from "react";
import Split from "react-split";

const App = () => {

  const Live_Stream = import.meta.env.VITE_LIVE_STREAM_LINK;
  const Live_Chat = import.meta.env.VITE_LIVE_CHAT_LINK;

  return (
    <div className="h-screen w-screen bg-[#0F172A] text-white flex flex-col">
      {/* Header */}
      <header className="flex items-center justify-between p-4 bg-[#1E293B] shadow-md">
        <h1 className="text-2xl font-bold mx-20">Bharatsoft Streaming</h1>
      </header>

      {/* Main Content */}
      <Split
        sizes={[65, 35]} 
        minSize={200} 
        expandToMin={true}
        gutterSize={8} 
        gutterAlign="center"
        className="flex-1 flex cursor-col-resize"
      >
        {/* Video Section */}
        <div className="flex items-center justify-center bg-black rounded-lg overflow-hidden shadow-lg">
          <iframe
            className="w-full h-full"
            src= {Live_Stream}
            title="Video Stream"
           
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>

        {/* Chat Section */}
        <div className="bg-[#1E293B] rounded-lg overflow-hidden shadow-lg">
          <iframe
            className="w-full h-full"
            src={Live_Chat}
            title="Live Chat"
           
            allow="clipboard-write"
          ></iframe>
        </div>
      </Split>
    </div>
  );
};

export default App;
