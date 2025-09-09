import React, { useState } from 'react'

const StartTime = () => {

  const [time, setTime] = useState("");

      const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();
    };

  return (
    <div className='bg-white rounded-3xl m-4'>
      <form onSubmit={handleSubmit} className="flex flex-col gap-4 p-2">
         <span className='p-2 text-gray-500'>Starting Time</span>
           <input
          type="time"
          value={time}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setTime(e.target.value)
          }
          className="border-b-1 border-blue-900 p-2 rounded-xl"
        />
        </form>
    </div>
  )
}

export default StartTime