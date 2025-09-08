import { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import "../App.css"; // CSS override için

const Navbar = () => {
  const [startDate, setStartDate] = useState<Date | null>(new Date());
  const today = new Date();

  // Bugünün tarihini yazdırmak için format
  const formattedDate = today.toLocaleDateString("en-US", {
    weekday: "long",
    day: "numeric",
    month: "long",
  });

  return (
    <div className="bg-[url('/src/assets/bg.png')] h-80 rounded-lg m-2 bg-no-repeat bg-cover flex flex-col items-center pt-4">
      {/* En üstte bugünün tarihi */}
      <div className="text-white text-2xl mb-4">{formattedDate}</div>

      {/* Takvim */}
      <div className="flex justify-center w-full">
        <DatePicker
          selected={startDate}
          onChange={(date) => setStartDate(date)}
          inline
          // renderCustomHeader={() => today()}// Üst başlığı gizle
          dayClassName={(date) =>
            date.getDate() === today.getDate() &&
            date.getMonth() === today.getMonth() &&
            date.getFullYear() === today.getFullYear()
              ? "bg-blue-500 text-white rounded-full" // bugünün tarihi mavi daire
              : "text-white bg-transparent"
          }
        />
      </div>
    </div>
  );
};

export default Navbar;
