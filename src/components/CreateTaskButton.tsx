import { Plus } from 'lucide-react'
import React from 'react'

const CreateTaskButton = () => {
  return (
    <div className='flex flex-col gap-4 mx-4 my-8'>
      <button className='bg-blue-900 p-2 rounded-2xl text-white flex items-center justify-center gap-2'>
        <Plus />
      <span className='text-white'>Create Task</span>
      </button>
    </div>
  )
}

export default CreateTaskButton