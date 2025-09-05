import './App.css'
import BottomNavigation from './components/BottomNavigation'
import Navbar from './components/Navbar'
import TaskList from './components/TaskList'
import TomorroePreview from './components/TomorrowPreview'

function App() {


  return (
    <div>
     <Navbar />
     <TaskList />
     <TomorroePreview />
     <BottomNavigation />
    </div>
  )
}

export default App
