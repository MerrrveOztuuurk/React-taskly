import { Plus } from 'lucide-react'
import React from 'react'

const CreateTaskButton = () => {
  return (
    <div className='flex'>
      <button className='bg-blue-900 p-2 rounded-2xl text-white'>
        <Plus />
      <span className='text-white'>Create Task</span>
      </button>
    </div>
  )
}

export default CreateTaskButton