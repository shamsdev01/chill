'use client'
import { motion, useScroll, useTransform } from 'framer-motion'
import GlitchText from '@/components/common/GlitchText'
import Image from 'next/image'
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

export default function ProjectsPage() {
  const { scrollYProgress } = useScroll()
  const glitchOffset = useTransform(scrollYProgress, [0, 1], [0, 100])

  const categories = [
    'All', 'Web3', 'Full Stack', 'Bots', 'Mobile', 'Desktop'
  ]

  const projects = [
    {
      title: 'Project Omega',
      subtitle: 'DeFi Trading Platform',
      category: 'Web3',
      placeholder: <ProjectPlaceholder color="#00ff9d" />,
      description: 'Advanced decentralized trading platform with real-time analytics and AI-powered insights',
      tags: ['Solidity', 'React', 'Web3.js', 'GraphQL'],
      color: '#00ff9d',
      link: '/projects/project-omega'
    },
    {
      title: 'Project Nexus',
      subtitle: 'AI Trading Bot',
      category: 'Bots',
      placeholder: <ProjectPlaceholder color="#ff26b0" />,
      description: 'Machine learning powered trading bot with predictive analytics and automated strategies',
      tags: ['Python', 'TensorFlow', 'Rust', 'APIs'],
      color: '#ff26b0',
      link: '/projects/project-nexus'
    },
    {
      title: 'Project Atlas',
      subtitle: 'Enterprise System',
      category: 'Full Stack',
      placeholder: <ProjectPlaceholder color="#4d4dff" />,
      description: 'Comprehensive business management solution with advanced analytics and reporting',
      tags: ['C#', '.NET', 'React', 'SQL'],
      color: '#4d4dff',
      link: '/projects/project-atlas'
    },
    {
      title: 'Project Nova',
      subtitle: 'Mobile Platform',
      category: 'Mobile',
      placeholder: <ProjectPlaceholder color="#b026ff" />,
      description: 'Feature-rich cross-platform mobile application with real-time synchronization',
      tags: ['React Native', 'Node.js', 'Firebase'],
      color: '#b026ff',
      link: '/projects/project-nova'
    },
    {
      title: 'Project Quantum',
      subtitle: 'Trading Suite',
      category: 'Desktop',
      placeholder: <ProjectPlaceholder color="#00ff9d" />,
      description: 'High-performance desktop trading application with advanced market analysis',
      tags: ['Rust', 'C#', 'Electron', 'WebSocket'],
      color: '#00ff9d',
      link: '/projects/project-quantum'
    },
    {
      title: 'Project Phoenix',
      subtitle: 'Web3 Marketplace',
      category: 'Web3',
      placeholder: <ProjectPlaceholder color="#ff26b0" />,
      description: 'NFT marketplace with advanced trading features and creator tools',
      tags: ['Solidity', 'Next.js', 'IPFS', 'The Graph'],
      color: '#ff26b0',
      link: '/projects/project-phoenix'
    }
  ]

  return (
    <div className="min-h-screen bg-[#0a0a0f] pt-24 relative overflow-hidden">
      {/* Hexagonal Grid Pattern */}
      <div className="fixed inset-0 opacity-10">
        <svg className="w-full h-full">
          <pattern id="hexagons" x="0" y="0" width="50" height="86.6" patternUnits="userSpaceOnUse">
            <path 
              d="M25,43.3l-25-43.3h50L25,43.3z M25,43.3l25,43.3h-50L25,43.3z"
              stroke="#00ff9d"
              strokeWidth="0.5"
              fill="none"
            />
            <circle cx="25" cy="43.3" r="2" fill="#ff26b0" />
          </pattern>
          <rect x="0" y="0" width="100%" height="100%" fill="url(#hexagons)" />
        </svg>
      </div>

      {/* Matrix Rain Effect */}
      <div className="fixed inset-0 pointer-events-none opacity-20">
        {Array.from({ length: 20 }).map((_, i) => (
          <motion.div
            key={i}
            className="absolute text-[#00ff9d] text-xs font-mono whitespace-nowrap"
            style={{
              left: `${Math.random() * 100}%`,
              top: -20,
            }}
            animate={{
              y: ['0%', '200%'],
            }}
            transition={{
              duration: Math.random() * 10 + 5,
              repeat: Infinity,
              ease: "linear",
            }}
          >
            {Array.from({ length: Math.floor(Math.random() * 20) + 10 }).map(() => 
              String.fromCharCode(0x30A0 + Math.random() * 96)
            ).join('')}
          </motion.div>
        ))}
      </div>

      {/* Cyberpunk Circuit Lines */}
      <div className="fixed inset-0 opacity-10">
        <svg className="w-full h-full">
          <pattern id="circuits" x="0" y="0" width="100" height="100" patternUnits="userSpaceOnUse">
            <path 
              d="M10 10h80v80h-80z M30 10v80 M70 10v80 M10 30h80 M10 70h80"
              stroke="#4d4dff"
              strokeWidth="0.5"
              fill="none"
            />
            <circle cx="30" cy="30" r="3" fill="#00ff9d" />
            <circle cx="70" cy="70" r="3" fill="#ff26b0" />
          </pattern>
          <rect x="0" y="0" width="100%" height="100%" fill="url(#circuits)" />
        </svg>
      </div>

      {/* Diagonal Energy Lines */}
      <div className="fixed inset-0 opacity-5">
        {Array.from({ length: 10 }).map((_, i) => (
          <motion.div
            key={i}
            className="absolute h-[200%] w-px bg-gradient-to-b from-transparent via-[#00ff9d] to-transparent"
            style={{
              left: `${i * 10}%`,
              top: '-50%',
              transform: 'rotate(45deg)',
            }}
            animate={{
              y: [-1000, 1000],
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: "linear",
              delay: i * 0.5,
            }}
          />
        ))}
      </div>

      {/* Neon Grid Pulse */}
      <div className="fixed inset-0 opacity-10">
        <motion.div
          className="w-full h-full grid grid-cols-12 grid-rows-12 gap-8"
          animate={{
            opacity: [0.5, 1, 0.5],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          {Array.from({ length: 144 }).map((_, i) => (
            <div
              key={i}
              className="relative"
            >
              <div className="absolute inset-0 border border-[#4d4dff]/20" />
              <div className="absolute inset-0 bg-gradient-to-br from-[#00ff9d]/5 to-transparent" />
            </div>
          ))}
        </motion.div>
      </div>

      {/* Scanline Effect */}
      <motion.div 
        className="fixed inset-0 bg-gradient-to-b from-transparent via-[#00ff9d]/5 to-transparent pointer-events-none"
        style={{ y: glitchOffset }}
      />

      <div className="container mx-auto px-4 mb-32 relative">
        {/* Header with Neon Glow */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16 relative"
        >
          <div className="absolute -inset-1 bg-gradient-to-r from-[#00ff9d] via-[#4d4dff] to-[#ff26b0] opacity-75 blur-lg group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-gradient" />
          <div className="relative bg-[#0a0a0f] p-8 rounded-lg border border-[#2a2a4e]">
            <GlitchText 
              text="Our Projects"
              variant="hover"
              className="text-5xl font-bold mb-6 bg-gradient-to-r from-[#00ff9d] via-[#4d4dff] to-[#ff26b0] text-transparent bg-clip-text"
            />
            <p className="text-gray-400 max-w-2xl mx-auto">
              Explore our portfolio of cutting-edge digital solutions and innovations.
            </p>
          </div>
        </motion.div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-16">
          {categories.map((category, index) => (
            <motion.button
              key={category}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="px-6 py-2 rounded-full bg-[#1a1a2e] text-gray-300 hover:bg-[#2a2a4e] transition-colors"
            >
              <GlitchText 
                text={category}
                variant="hover"
                className="text-sm font-medium"
              />
            </motion.button>
          ))}
        </div>

        {/* Project Grid with Enhanced Effects */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="group relative"
            >
              <div className="absolute -inset-0.5 bg-gradient-to-r from-[project.color] to-[#ff26b0] rounded-lg blur opacity-25 group-hover:opacity-75 transition duration-1000 group-hover:duration-200" />
              <Link href={project.link}>
                <div className="relative h-[400px] rounded-lg overflow-hidden bg-[#1a1a2e] hover:bg-[#2a2a4e] transition-colors">
                  {/* Holographic Project Display */}
                  <div className="absolute inset-0">
                    {project.placeholder}
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0f] via-[#0a0a0f]/50 to-transparent opacity-90" />
                    
                    {/* Cyber Grid Overlay */}
                    <div className="absolute inset-0 opacity-20">
                      <div className="h-full w-full grid grid-cols-8 gap-px">
                        {Array.from({ length: 64 }).map((_, i) => (
                          <div 
                            key={i}
                            className="border border-[project.color]/10 group-hover:border-[project.color]/20 transition-colors duration-300"
                          />
                        ))}
                      </div>
                    </div>

                    {/* Project Info with Glowing Border */}
                    <div className="absolute bottom-0 left-0 right-0 p-6 backdrop-blur-sm">
                      <div className="relative">
                        <div className="mb-4">
                          <span 
                            className="px-3 py-1 rounded-full text-sm relative overflow-hidden group-hover:scale-110 transition-transform duration-300"
                            style={{ 
                              backgroundColor: `${project.color}20`,
                              color: project.color 
                            }}
                          >
                            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent animate-shimmer" />
                            {project.category}
                          </span>
                        </div>
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
                        
                        {/* Tags with Hover Glow */}
                        <div className="flex flex-wrap gap-2">
                          {project.tags.map(tag => (
                            <span 
                              key={tag}
                              className="px-2 py-1 text-xs rounded-full bg-[#1a1a2e] text-gray-300 hover:bg-[#2a2a4e] transition-colors relative group/tag"
                            >
                              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-[project.color]/0 via-[project.color]/20 to-[project.color]/0 opacity-0 group-hover/tag:opacity-100 transition-opacity duration-300" />
                              <span className="relative">{tag}</span>
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-center mt-20"
        >
          <GlitchText 
            text="Have a Project in Mind?"
            variant="hover"
            className="text-3xl font-bold mb-6 text-white"
          />
          <p className="text-gray-400 mb-8 max-w-2xl mx-auto">
            Let's collaborate to bring your ideas to life with cutting-edge technology and innovative solutions.
          </p>
          <Link href="/contact">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-3 rounded-lg bg-gradient-to-r from-[#00ff9d] to-[#4d4dff] text-white font-bold"
            >
              <GlitchText 
                text="Start a Project"
                variant="hover"
                className="text-lg"
              />
            </motion.button>
          </Link>
        </motion.div>
      </div>
    </div>
  )
} 