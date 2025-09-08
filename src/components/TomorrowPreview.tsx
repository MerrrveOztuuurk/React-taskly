import React, { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const TodayTasks = () => {
  const tasks = [
    { title: "Shopping", datetime: "Sep 8, 2025 - 10:00 AM" },
    { title: "Meeting", datetime: "Sep 8, 2025 - 2:00 PM" },
    { title: "Gym", datetime: "Sep 8, 2025 - 5:00 PM" },
    { title: "Call Sister", datetime: "Sep 8, 2025 - 8:00 PM" },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const visibleCount = 2; // ekranda aynı anda kaç kart görünsün

  const handlePrev = () => {
    setCurrentIndex((prev) => Math.max(prev - 1, 0));
  };

  const handleNext = () => {
    setCurrentIndex((prev) =>
      Math.min(prev + 1, tasks.length - visibleCount)
    );
  };

  return (
    <div className="p-4 pb-24"> {/* Bottom Navigation üstüne binmemesi için pb-24 */}
      <h2 className="text-blue-900 text-2xl font-bold mb-4">Tomorrow</h2>

      <div className="flex items-center gap-2">
        {/* Sol ok */}
        <button onClick={handlePrev} disabled={currentIndex === 0}>
          <ChevronLeft
            size={28}
            className={currentIndex === 0 ? "opacity-30" : "text-white"}
          />
        </button>

        {/* Kartlar */}
        <div className="flex overflow-hidden flex-1 gap-2">
          {tasks
            .slice(currentIndex, currentIndex + visibleCount)
            .map((task, index) => (
              <div
                key={index}
                className="bg-white bg-opacity-10 p-4 rounded-md w-1/2 flex-shrink-0"
              >
                <h3 className="text-blue-900 font-semibold">{task.title}</h3>
                <p className="text-gray-600 text-sm mt-2">{task.datetime}</p>
              </div>
            ))}
        </div>

        {/* Sağ ok */}
        <button
          onClick={handleNext}
          disabled={currentIndex >= tasks.length - visibleCount}
        >
          <ChevronRight
            size={28}
            className={
              currentIndex >= tasks.length - visibleCount
                ? "opacity-30"
                : "text-white"
            }
          />
        </button>
      </div>
    </div>
  );
};

export default TodayTasks;
