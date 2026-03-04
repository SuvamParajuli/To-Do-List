import React from "react";
import profilePic from "./assets/profile.png";

function App() {
  return (
    <div className="flex h-screen bg-gray-50 text-gray-800">
      {/* navbar side ma rakhxa yesle */}
      <nav className="w-64 bg-orange-500 border-r border-gray-200 flex flex-col items-center py-10 px-6 shadow-sm">
        {/* golo profile picture hunxa yesle */}
        <div className="flex flex-col items-center mb-10 w-full text-center">
          <div className="w-24 h-24 rounded-full overflow-hidden border-4 border-blue-50 shadow-md mb-4 bg-gray-100">
            <img
              src={profilePic}
              alt="Profile"
              className="w-full h-full object-cover"
            />
          </div>
          <h2 className="text-xl font-bold text-gray-900 tracking-tight">Suvam Parajuli</h2>
          <p className="text-sm text-gray-900 font-semibold">suvamparajuli@gmail.com</p>
        </div>

        {/* yesma aaja ko tasks ra total tasks complete gareko dekhauxa numbers ma */}
        <div className="w-full space-y-8 pt-12 border-t border-black-100">
          <div className="bg-blue-50/50 p-4 rounded-2xl flex flex-col">
            <span className="text-sm font-semibold text-gray-500 mb-1">Today Tasks</span>
            <span className="text-2xl font-black text-blue-600">0</span>
          </div>

          <div className="bg-green-50/50 p-4 rounded-2xl flex flex-col">
            <span className="text-sm font-semibold text-gray-500 mb-1">Total Complete</span>
            <span className="text-2xl font-black text-green-600">0</span>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default App;
