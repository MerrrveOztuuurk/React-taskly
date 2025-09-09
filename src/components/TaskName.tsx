import React from 'react'

const TaskName = () => {
  return (
    <div
    className='flex flex-col gap-4 px-4'>
      <input type='text' className='border-b-1 border-blue-900 p-2 rounded-xl' placeholder='Task name...'/>
    </div>
  )
}

export default TaskName