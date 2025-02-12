import React, { useState } from 'react'
import Navbar from './components/Navbar'
import About from './components/About'
import Services from './components/Services'
import Skills from './components/Skills'
import Contact from './components/Contact'
import LoadingBar from 'react-top-loading-bar'
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";


const App = ()=> {
  const [progress, setProgress] = useState(0);

  const updateProgress = () => {
    setProgress(0);
    let interval = setInterval(() => {
      setProgress((oldProgress) => {
        if (oldProgress === 100) {
          clearInterval(interval);
        }
        return Math.min(oldProgress + 10, 100);
      });
    }, 200);
  };
  
  

  return (
    <Router>
      <div>
      <LoadingBar color='#f11946' height={2} progress={progress}  onLoaderFinished={() => setProgress(0)} />

        <Navbar updateProgress={updateProgress} />
        <Routes>
          <Route exact path='/' element={
            <div>
              <About />
              <Services />
              <Skills />
              <Contact />
            </div>
             } />
          <Route exact path='/about' element={<About  /> } />
          <Route exact path='/services' element={<Services />} />
          <Route exact path='/skills' element={<Skills />}  />
          <Route exact path='/contact' element={<Contact />} />
        </Routes>


      </div>
    </Router>
  )
}

export default App
