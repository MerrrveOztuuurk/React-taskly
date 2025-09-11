import React from 'react'
import Navbar from '../components/Navbar'
import TaskList from '../components/TaskList'
import TomorrowPreview from '../components/TomorrowPreview'
import BottomNavigation from '../components/BottomNavigation'

const Home = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <div className="flex-1 overflow-y-auto">
        <TaskList />
        <TomorrowPreview />
      </div>
      <BottomNavigation />
    </div>
  )
}

export default Home
