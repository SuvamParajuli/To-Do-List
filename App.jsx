import React, { useState } from "react";
import profilePic from "./assets/profile.png";

function App() {
  const [tasks, setTasks] = useState([]);
  const [inputValue, setInputValue] = useState("");

  const addTask = () => {
    if (inputValue.trim() === "") return;

    const newTask = {
      id: Date.now(),
      text: inputValue,
      completed: false
    };

    setTasks([newTask, ...tasks]);
    setInputValue("");
  };

  const toggleTask = (id) => {
    setTasks(tasks.map(task =>
      task.id === id ? { ...task, completed: !task.completed } : task
    ));
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter(task => task.id !== id));
  };

  const deleteAllTasks = () => {
    setTasks([]);
  };




  return (
    <div className="flex h-screen bg-gray-50 text-gray-800 font-sans overflow-hidden">
      {/* yo navbar side ma rakheko */}
      <nav className="w-72 bg-orange-500 border-r border-gray-200 flex flex-col items-center py-12 px-8 shadow-2xl z-10 transition-all">
        {/* yo profile section ho */}
        <div className="flex flex-col items-center mb-12 w-full text-center">
          <div className="w-28 h-28 rounded-full overflow-hidden border-4 border-white/30 shadow-2xl mb-5 hover:scale-105 transition-transform cursor-pointer">
            <img
              src={profilePic}
              alt="Profile"
              className="w-full h-full object-cover"
            />
          </div>
          <h2 className="text-2xl font-black text-white tracking-tight mb-1">Suvam Parajuli</h2>
          <p className="text-xs text-orange-100 font-medium opacity-90 uppercase tracking-widest">suvamparajuli@gmail.com</p>
        </div>



      </nav>

      {/* yo main content area ho */}
      <main className="flex-1 overflow-y-auto p-12 bg-white flex flex-col items-center">
        <div className="w-full max-w-3xl space-y-12">
          {/* yo header ho */}
          <div className="space-y-2">
            <h1 className="text-5xl font-black text-gray-900 tracking-tight leading-tight">
              Add New  <span className="text-orange-500 underline decoration-orange-200 underline-offset-8">Task</span>
            </h1>
            <p className="text-gray-400 font-medium text-lg">Track your daily tasks.</p>
          </div>

          {/* yo task add garne section ho */}
          <div className="group relative w-full flex items-center gap-4 bg-gray-50 p-3 rounded-[3rem] border-2 border-transparent focus-within:border-orange-100 focus-within:bg-white focus-within:shadow-2xl focus-within:shadow-orange-100/50 transition-all duration-500">
            <button
              onClick={addTask}
              className="flex items-center justify-center w-16 h-16 bg-orange-500 text-white rounded-[2rem] shadow-lg shadow-orange-500/30 hover:bg-orange-600 hover:scale-110 active:scale-95 transition-all duration-300 z-10"
            >
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={3} stroke="currentColor" className="w-8 h-8">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
              </svg>
            </button>

            <input
              type="text"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && addTask()}
              placeholder="Add Tasks Here..."
              className="flex-1 bg-transparent border-none py-5 px-4 text-xl font-medium text-gray-800 placeholder-gray-300 focus:outline-none focus:ring-0 transition-all"
            />

            <div className="pr-6 opacity-0 group-focus-within:opacity-100 transition-opacity flex items-center gap-3">
              <span className="px-3 py-1 bg-gray-100 rounded-full text-[10px] font-bold text-gray-400 uppercase tracking-widest">Press Enter</span>
            </div>
          </div>

          {/* yo task list ho */}
          <div className="space-y-4 pb-20">
            {tasks.length > 0 ? (
              <>
                {tasks.map((task) => (
                  <div
                    key={task.id}
                    className={`group flex items-center gap-4 bg-white p-6 rounded-[2.5rem] border border-gray-100 shadow-sm hover:shadow-xl hover:border-orange-50 transition-all duration-300 transform hover:-translate-y-1 ${task.completed ? 'opacity-60' : ''}`}
                  >
                    {/* yo checkbox style toggle ho  */}
                    <div
                      onClick={() => toggleTask(task.id)}
                      className={`w-8 h-8 rounded-lg border-2 flex items-center justify-center cursor-pointer transition-all ${task.completed ? 'bg-orange-500 border-orange-500 text-white' : 'border-gray-200 hover:border-orange-400 bg-white'}`}
                    >
                      {task.completed && (
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={4} stroke="currentColor" className="w-5 h-5">
                          <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
                        </svg>
                      )}
                    </div>

                    <div className="flex-1">
                      <p className={`text-xl font-bold transition-all ${task.completed ? 'line-through text-gray-400' : 'text-gray-800'}`}>
                        {task.text}
                      </p>
                    </div>

                    <button
                      onClick={() => deleteTask(task.id)}
                      className="opacity-0 group-hover:opacity-100 p-3 text-gray-300 hover:text-red-500 hover:bg-red-50 rounded-2xl transition-all"
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="m14.74 9-.34 6m-4.77 0L9.34 9m4.77-9L10.66 2.5m-4.01 0H4.5m1.1 0h12.8M17.15 4.5h.35m-14 0h.35M17.15 21.5H6.85a2.25 2.25 0 0 1-2.25-2.25V6.75h12.9v12.5a2.25 2.25 0 0 1-2.25 2.25z" />
                      </svg>
                    </button>
                  </div>
                ))}

                {/* yo delete all button ho */}
                <div className="pt-8 flex justify-center">
                  <button
                    onClick={deleteAllTasks}
                    className="flex items-center gap-2 px-8 py-4 bg-red-50 text-red-500 font-bold rounded-2xl hover:bg-red-500 hover:text-white hover:scale-105 active:scale-95 transition-all shadow-sm hover:shadow-lg"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5">
                      <path strokeLinecap="round" strokeLinejoin="round" d="m14.74 9-.34 6m-4.77 0L9.34 9m4.77-9L10.66 2.5m-4.01 0H4.5m1.1 0h12.8M17.15 4.5h.35m-14 0h.35M17.15 21.5H6.85a2.25 2.25 0 0 1-2.25-2.25V6.75h12.9v12.5a2.25 2.25 0 0 1-2.25 2.25z" />
                    </svg>
                    Delete All Tasks
                  </button>
                </div>
              </>
            ) : (
              <div className="pt-20 flex flex-col items-center opacity-20">

              </div>
            )}
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;
