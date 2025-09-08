import Home from './components/Home'
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import NewTask from './components/NewTask'



function App() {


  return (
    <BrowserRouter>
  
      <Routes>
        <Route path="/" element={<Home />}/>
         <Route path="/" element={<NewTask />}/>
      </Routes>
    // <div></div></BrowserRouter>
 
    // <Home />
    // </div>
  )
}

export default App
