import React from "react";

const TaskList = () => {
  const tasks = [
    {
      title: "Buy groceries",
      datetime: "Sep 8, 2025 - 10:00 AM",
    },
    {
      title: "Meeting with team",
      datetime: "Sep 8, 2025 - 2:00 PM",
    },
  ];

  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-4 text-blue-900">Today</h2>

    
      <div className="flex flex-col gap-4">
        {tasks.map((task, index) => (
          <div
            key={index}
            className="bg-white bg-opacity-10 p-4 rounded-lg shadow-md text-blue-900"
          >
            <h3 className="text-lg font-semibold">{task.title}</h3>
            <p className="text-sm text-gray-600">{task.datetime}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TaskList;
