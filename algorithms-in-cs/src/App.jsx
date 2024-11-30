import './App.css'
import Navbar from './components/Navbar'
import { Routes, Route } from "react-router-dom";
import PageOne from './pages/PageOne';
import PageTwo from './pages/PageTwo';
import PageThree from './pages/PageThree';
import PageFour from './pages/PageFour';
import PageFive from './pages/PageFive';
import Home from './pages/Home';

function App() {
  return (
    <>
      <Navbar/>
      <div className='page-container'>
        <div className='page-wrapper'>
          <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/pageOne" element={<PageOne/>}/>
            <Route path="/pageTwo" element={<PageTwo/>}/>
            <Route path="/pageThree" element={<PageThree/>}/>
            <Route path="/pageFour" element={<PageFour/>}/>
            <Route path="/pageFive" element={<PageFive/>}/>
          </Routes>
        </div>
      </div>
    </>
  )
}

export default App
