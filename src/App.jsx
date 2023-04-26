import React from 'react'
import Header from './components/Header'
import Home from './components/Home'
import Projects from './components/Projects'
import About from './components/About'
import Contact from './components/Contact'


const App = () => {
  return (
    <>
      <Header />
      <div id="content" className="sm:blur-0 z-0 overflow-hidden scroll-smooth hover:scroll-auto md:scroll-smooth " >
        <Home />
        <Projects />
        <About />
        <Contact />
      </div>
    </>

  )
}

export default App
