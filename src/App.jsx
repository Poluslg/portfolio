import React from 'react'
import Header from './components/Header'
import Home from './components/Home'
import Projects from './components/Projects'
import About from './components/About'
import Contact from './components/Contact'


const App = () => {
  return (
    <div className="scroll-smooth hover:scroll-auto md:scroll-auto" >
      <Header  className=" flex  absolute"/>
      <Home/>
      <Projects/>
      <About/>
      <Contact/>
    </div>
  )
}

export default App
