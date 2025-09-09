import React from 'react'
import Navbar from '../components/Navbar'
import TaskList from '../components/TaskList'
import TomorrowPreview from '../components/TomorrowPreview'
import BottomNavigation from '../components/BottomNavigation'


const Home = () => {


  return (
    <div>
     <Navbar />
     <TaskList />
     <TomorrowPreview />
     <BottomNavigation />
    </div>
  )
}

export default Home