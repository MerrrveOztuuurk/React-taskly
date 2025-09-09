import React from 'react'
import Header from '../components/Header'
import TaskName from '../components/TaskName'
import StartTime from '../components/StartTime'
import CreateTaskButton from '../components/CreateTaskButton'
import DueDate from '../components/DueDate'

const NewTask = () => {
  return (
<div className='bg-pink-100'>
    <Header />
    <TaskName />
    <DueDate />
    <StartTime />
    <CreateTaskButton />
</div>
  
  )
}

export default NewTask