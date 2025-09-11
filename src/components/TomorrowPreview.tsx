import React from "react";

const TomorrowPreview = () => {
  const tasks = [
    { title: "Shopping", datetime: "Sep 8, 2025 - 10:00 AM" },
    { title: "Meeting", datetime: "Sep 8, 2025 - 2:00 PM" },
    { title: "Gym", datetime: "Sep 8, 2025 - 5:00 PM" },
    { title: "Call Sister", datetime: "Sep 8, 2025 - 8:00 PM" },
  ];

  return (
    <div className="p-4 pt-4 pb-24"> 
      <h2 className="text-blue-900 text-2xl font-bold mb-4">Tomorrow</h2>

      {/* 2 sütunlu grid */}
      <div className="grid grid-cols-2 gap-4">
        {tasks.map((task, index) => (
          <div
            key={index}
            className="bg-white shadow-md p-6 rounded-xl"
          >
            <h3 className="text-blue-900 font-semibold">{task.title}</h3>
            <p className="text-gray-600 text-sm mt-2">{task.datetime}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TomorrowPreview;
