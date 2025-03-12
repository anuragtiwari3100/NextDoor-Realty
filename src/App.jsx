import React from 'react'
import Header from './components/Header'
import About from './components/About'
import Projects from './components/Projects'
import Testimonails from './components/Testimonails'
import Contact from './components/Contact'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Footer from './components/Footer'
import { Home } from 'lucide-react'
import { Route,Routes,Link } from 'react-router-dom'

const App = () => {
  return (
    <div className='w-full overflow-hidden'>
      <ToastContainer/>
      <Header/>
      <About/>
      <Projects/>
      <Testimonails/>
      <Contact/>
      <Footer/>
    </div>
  )
}

export default App
