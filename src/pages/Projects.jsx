"use client"

import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { ArrowLeft } from 'lucide-react'
import { Link } from 'react-router-dom'

const projects = [
  {
    id: 1,
    title: "Wave",
    shortDescription: "A Social Media Platform",
    fullDescription: "Developed a full-stack social media platform using the MERN stack. Wave allows users to create posts, like and comment on posts, and follow other users. Implemented features like real-time updates, image uploads, and user authentication with MongoDB for data storage.",
    technologies: ["React", "Node.js", "Express", "MongoDB", "Chakra-UI"],
    link: "https://github.com/Nimit1775/wave"
  },
  {
    id: 2,
    title: "FinanSmart",
    shortDescription: "AI driven financial advisor",
    fullDescription: "Built a financial advisor web app that uses machine learning to provide personalized investment advice. The app analyzes user data to generate investment recommendations and forecasts. Made using Next.js and implemented Clerk for User Authentication.",
    technologies: ["Next.js", "Aceternity-UI", "Redux", "Clerk"],
    link: "https://github.com/Nimit1775/Financial_Advisor-"
  },
  {
    id: 3,
    title: "Medium",
    shortDescription: "A Blogging Platform",
    fullDescription: "Developed a full-stack blogging platform using React and Hono. Medium allows users to create and publish blog posts. Implemented features like user authentication and real-time updates.",
    technologies: ["React", "Hono.js", "Cloudflare", "Postgres", "TypeScript"],
    link: "https://medium-clone-flame-five.vercel.app/"
  }
]

function ProjectCard({ project }) {
  return (
    <motion.a
      href={project.link}
      target="_blank"
      rel="noopener noreferrer"
      className="block bg-white bg-opacity-10 rounded-lg overflow-hidden hover:bg-opacity-20 transition-all"
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      <div className="p-6 relative z-10">
        <h3 className="text-2xl font-semibold text-white mb-2">{project.title}</h3>
        <p className="text-gray-300 mb-2">{project.shortDescription}</p>
        <p className="text-gray-400 mb-4 text-sm">{project.fullDescription}</p>
        <div className="flex flex-wrap gap-2">
          {project.technologies.map((tech, index) => (
            <span key={index} className="bg-purple-600 text-white px-2 py-1 rounded-full text-xs">
              {tech}
            </span>
          ))}
        </div>
      </div>
    </motion.a>
  )
}

function Projects() {
  const [gradientColor, setGradientColor] = useState('from-purple-900')

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

      {/* Back button */}
      <Link to={'/'} className="absolute top-4 left-4 z-20">
        <motion.div
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className="bg-white bg-opacity-20 p-2 rounded-full"
        >
          <ArrowLeft className="text-white" size={24} />
        </motion.div>
      </Link>

      <div className="relative z-10 container mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold text-white mb-12 text-center">My Projects</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </div>
  )
}

export default Projects
