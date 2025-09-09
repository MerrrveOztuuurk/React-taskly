import React, { useState } from 'react'

const DueDate = () => {
  const today = new Date().toISOString().split("T")[0];
  const [date, setDate] = useState(today);

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };

  return (
    <div className='bg-white rounded-3xl m-4'>
      <form onSubmit={handleSubmit} className="flex flex-col gap-4 p-2">
        <span className='p-2 text-gray-500'>Date</span>
       <input
          type="date"
          value={date}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setDate(e.target.value)
          }
          className="border-b-1 border-blue-900 p-2 rounded-xl"
        />
        </form>
    </div>
  )
}

export default DueDate