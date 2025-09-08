import React from 'react'
import Navbar from './Navbar'
import TaskList from './TaskList'
import TomorrowPreview from './TomorrowPreview'
import BottomNavigation from './BottomNavigation'


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