import React from 'react'
import Navbar from './Navbar'
import { motion } from "framer-motion"
import { tr } from 'framer-motion/m'
import Hero from './Hero'
const Header = () => {
  return (
<div>
  <div>
  <Navbar/>
    <Hero/>
     </div>
    </div>
  )
}

export default Header
