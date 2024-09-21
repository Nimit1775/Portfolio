"use client"

import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'

function Home() {
  const [gradientColor, setGradientColor] = useState('from-purple-900')

  useEffect(() => {
    const colors = ['from-purple-900', 'from-indigo-900', 'from-blue-900', 'from-violet-900' ]
    let colorIndex = 0

    const intervalId = setInterval(() => {
      colorIndex = (colorIndex + 1) % colors.length
      setGradientColor(colors[colorIndex])
    }, 1000)

    return () => clearInterval(intervalId)
  }, [])

  return (
    <div className="min-h-screen flex items-center justify-center overflow-hidden relative">
      {/* Starry night background */}
      <div className="absolute inset-0 bg-black">
        {[...Array(200)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute bg-white rounded-full"
            style={{
              width: Math.random() * 2 + 1,
              height: Math.random() * 2 + 1,
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
            }}
            animate={{
              opacity: [0, 1, 0],
              scale: [0, 1, 0],
            }}
            transition={{
              duration: Math.random() * 3 + 2,
              repeat: Infinity,
              repeatType: "reverse",
            }}
          />
        ))}
      </div>
      
      {/* Gradient overlay */}
      <div className={`absolute inset-0 bg-gradient-to-b ${gradientColor} to-transparent opacity-70 transition-colors duration-1000`} />

      <div className="text-center z-10 px-4">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-4 text-5xl font-bold tracking-tight text-white sm:text-7xl"
        >
          Nimit Sodhani
        </motion.h1>
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mb-8 text-2xl font-semibold text-gray-300"
        >
          Full Stack Developer
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mb-8 text-lg text-gray-300 max-w-2xl mx-auto"
        >
          Passionate about creating innovative web solutions and turning ideas into reality. 
          With expertise in React, Node.js, and cloud technologies, I build scalable and 
          efficient applications that solve real-world problems.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="flex justify-center space-x-4"
        >
          <Link to = {'/projects'}>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-6 py-3 text-lg font-medium text-white bg-purple-600 rounded-full hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 focus:ring-offset-purple-200"
          >
            Projects
          </motion.button>
          </Link>
          <Link to = {'/contact'}>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-6 py-3 text-lg font-medium text-purple-600 bg-white rounded-full hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 focus:ring-offset-purple-200"
          >
            Contact Me
          </motion.button>
          </Link>
        </motion.div>
      </div>
    </div>
  )
}

export default Home