"use client"

import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const projects = [
  {
    id: 1,
    title: "E-commerce Platform",
    shortDescription: "A full-stack e-commerce solution",
    fullDescription: "Developed a comprehensive e-commerce platform using React for the frontend and Node.js with Express for the backend. Implemented features such as user authentication, product catalog, shopping cart, and secure payment integration. Utilized MongoDB for efficient data storage and retrieval. The platform includes an admin dashboard for inventory management and order processing.",
    technologies: ["React", "Node.js", "Express", "MongoDB", "Stripe"],
    image: "/placeholder.svg?height=200&width=300"
  },
  {
    id: 2,
    title: "Task Management App",
    shortDescription: "Collaborative task organizer",
    fullDescription: "Created a real-time task management application using React and Firebase. The app allows users to create, assign, and track tasks in a collaborative environment. Implemented features like real-time updates, task prioritization, and team chat. Utilized Firebase Authentication for secure user management and Firestore for scalable data storage.",
    technologies: ["React", "Firebase", "Material-UI", "Redux"],
    image: "/placeholder.svg?height=200&width=300"
  },
  {
    id: 3,
    title: "Weather Forecast Dashboard",
    shortDescription: "Interactive weather visualization",
    fullDescription: "Designed and built an interactive weather forecast dashboard using React and D3.js. The application fetches data from a weather API and presents it in an intuitive, visually appealing format. Features include location-based forecasts, interactive charts for temperature and precipitation, and severe weather alerts. Implemented geolocation for automatic local weather updates.",
    technologies: ["React", "D3.js", "OpenWeatherMap API", "Geolocation API"],
    image: "/placeholder.svg?height=200&width=300"
  }
]

function ProjectCard({ project, onClick }) {
  return (
    <motion.div
      className="bg-white bg-opacity-10 p-6 rounded-lg cursor-pointer hover:bg-opacity-20 transition-all"
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      onClick={() => onClick(project)}
    >
      <img src={project.image} alt={project.title} className="w-full h-40 object-cover rounded-md mb-4" />
      <h3 className="text-xl font-semibold text-white mb-2">{project.title}</h3>
      <p className="text-gray-300">{project.shortDescription}</p>
    </motion.div>
  )
}

function ExpandedProject({ project, onClose }) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.8 }}
      className="fixed inset-0 flex items-center justify-center z-50 px-4"
    >
      <div className="absolute inset-0 bg-black bg-opacity-70" onClick={onClose}></div>
      <div className="bg-white bg-opacity-10 p-8 rounded-lg max-w-2xl w-full relative z-10">
        <button
          className="absolute top-4 right-4 text-white hover:text-gray-300"
          onClick={onClose}
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
        <img src={project.image} alt={project.title} className="w-full h-64 object-cover rounded-md mb-6" />
        <h2 className="text-3xl font-bold text-white mb-4">{project.title}</h2>
        <p className="text-gray-300 mb-6">{project.fullDescription}</p>
        <div className="flex flex-wrap gap-2">
          {project.technologies.map((tech, index) => (
            <span key={index} className="bg-purple-600 text-white px-3 py-1 rounded-full text-sm">
              {tech}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  )
}

function Projects() {
  const [gradientColor, setGradientColor] = useState('from-purple-900')
  const [selectedProject, setSelectedProject] = useState(null)

  useEffect(() => {
    const colors = ['from-purple-900', 'from-indigo-900', 'from-blue-900', 'from-violet-900']
    let colorIndex = 0

    const intervalId = setInterval(() => {
      colorIndex = (colorIndex + 1) % colors.length
      setGradientColor(colors[colorIndex])
    }, 3000)

    return () => clearInterval(intervalId)
  }, [])

  return (
    <div className="min-h-screen relative overflow-hidden">
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

      <div className="relative z-10 container mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold text-white mb-12 text-center">My Projects</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} onClick={setSelectedProject} />
          ))}
        </div>
      </div>

      <AnimatePresence>
        {selectedProject && (
          <ExpandedProject project={selectedProject} onClose={() => setSelectedProject(null)} />
        )}
      </AnimatePresence>
    </div>
  )
}

export default Projects