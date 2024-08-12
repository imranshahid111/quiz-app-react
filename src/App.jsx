import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Header from './Header'
import Home from './Home'
import upperimg from './images/image.png'
import Quiz from './Quiz'
export default function App() {
  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='/quiz' element={<Quiz/>} />
    </Routes>
    </BrowserRouter>
  
    </>
  )
}
