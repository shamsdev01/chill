'use client'
import { motion } from 'framer-motion'
import GlitchText from '@/components/common/GlitchText'
import Link from 'next/link'

const ProjectPlaceholder = ({ color }: { color: string }) => (
  <svg
    viewBox="0 0 400 300"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className="w-full h-full absolute inset-0"
  >
    <rect width="400" height="300" fill="#1a1a2e" />
    <path
      d="M0 0L400 300M400 0L0 300"
      stroke={color}
      strokeWidth="0.5"
      strokeOpacity="0.3"
    />
    <rect
      x="50"
      y="50"
      width="300"
      height="200"
      stroke={color}
      strokeWidth="2"
      strokeDasharray="10 5"
    />
    <circle
      cx="200"
      cy="150"
      r="50"
      stroke={color}
      strokeWidth="2"
      strokeDasharray="5 5"
    />
    <path
      d="M150 150L250 150M200 100L200 200"
      stroke={color}
      strokeWidth="2"
    />
    <text
      x="200"
      y="150"
      textAnchor="middle"
      dominantBaseline="middle"
      fill={color}
      fontSize="14"
      fontFamily="monospace"
    >
      PROJECT
    </text>
    <text
      x="200"
      y="170"
      textAnchor="middle"
      dominantBaseline="middle"
      fill={color}
      fontSize="10"
      fontFamily="monospace"
      opacity="0.7"
    >
      PREVIEW
    </text>
  </svg>
)

export default function Projects() {
  const featuredProjects = [
    {
      title: 'Project Omega',
      subtitle: 'DeFi Trading Platform',
      placeholder: <ProjectPlaceholder color="#00ff9d" />,
      description: 'Advanced decentralized trading platform with real-time analytics and AI-powered insights',
      tags: ['Solidity', 'React', 'Web3.js', 'GraphQL'],
      color: '#00ff9d'
    },
    {
      title: 'Project Nexus',
      subtitle: 'AI Trading Bot',
      placeholder: <ProjectPlaceholder color="#ff26b0" />,
      description: 'Machine learning powered trading bot with predictive analytics and automated strategies',
      tags: ['Python', 'TensorFlow', 'Rust', 'APIs'],
      color: '#ff26b0'
    },
    {
      title: 'Project Atlas',
      subtitle: 'Enterprise System',
      placeholder: <ProjectPlaceholder color="#4d4dff" />,
      description: 'Comprehensive business management solution with advanced analytics and reporting',
      tags: ['C#', '.NET', 'React', 'SQL'],
      color: '#4d4dff'
    }
  ]

  return (
    <section id="projects" className="py-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <GlitchText 
            text="Featured Projects" 
            variant="hover"
            className="text-4xl font-bold mb-4 bg-gradient-to-r from-[#00ff9d] via-[#4d4dff] to-[#ff26b0] text-transparent bg-clip-text"
          />
          <p className="text-gray-400 max-w-2xl mx-auto">
            Check out some of our recent work. Want to see more? Visit our projects page.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {featuredProjects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ scale: 1.02 }}
              className="relative group"
            >
              <div className="relative h-[300px] rounded-lg overflow-hidden">
                <div className="absolute inset-0">
                  {project.placeholder}
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0f] to-transparent opacity-90" />
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <GlitchText 
                    text={project.title}
                    variant="hover"
                    className="text-2xl font-bold mb-2"
                    style={{ color: project.color }}
                  />
                  <GlitchText 
                    text={project.subtitle}
                    variant="hover"
                    className="text-lg mb-3 opacity-80"
                    style={{ color: project.color }}
                  />
                  <p className="text-gray-300 mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map(tag => (
                      <span 
                        key={tag}
                        className="px-3 py-1 text-sm rounded-full bg-[#1a1a2e] text-gray-300"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* See More Button */}
        <div className="text-center">
          <Link href="/projects">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="group relative inline-flex items-center px-8 py-3 overflow-hidden rounded-lg bg-[#1a1a2e] transition-all duration-300"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-[#00ff9d] via-[#4d4dff] to-[#ff26b0] opacity-0 group-hover:opacity-50 transition-opacity" />
              <GlitchText 
                text="See More Projects"
                variant="hover"
                className="relative text-lg font-bold text-white group-hover:text-white transition-colors"
              />
              <motion.span 
                className="relative ml-2 text-xl"
                animate={{ x: [0, 5, 0] }}
                transition={{ 
                  repeat: Infinity, 
                  duration: 1.5,
                  ease: "easeInOut" 
                }}
              >
                →
              </motion.span>
            </motion.button>
          </Link>
        </div>
      </div>
    </section>
  )
} 