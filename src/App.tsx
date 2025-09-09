import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import NewTask from './screens/NewTask'
import Home from './screens/Home'



function App() {


  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}/>
         <Route path="/newtask" element={<NewTask />}/>
      </Routes>
    </BrowserRouter>
 
    // <Home />
    // </div>
  )
}

export default App
