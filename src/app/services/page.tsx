'use client'
import { motion, useScroll, useTransform } from 'framer-motion'
import GlitchText from '@/components/common/GlitchText'
import Link from 'next/link'

export default function ServicesPage() {
  const { scrollYProgress } = useScroll()
  const glitchOffset = useTransform(scrollYProgress, [0, 1], [0, 100])

  const services = [
    {
      title: 'Web3 Development',
      description: 'Building the future of decentralized applications with cutting-edge blockchain technology.',
      icon: '🔮',
      color: '#00ff9d',
      features: ['Smart Contracts', 'DeFi Platforms', 'NFT Marketplaces', 'Web3 Integration'],
      link: '/services/web3-development'
    },
    {
      title: 'Full Stack Development',
      description: 'End-to-end solutions that bring your digital vision to life.',
      icon: '💻',
      color: '#ff26b0',
      features: ['Custom Web Apps', 'API Development', 'Database Design', 'Cloud Solutions'],
      link: '/services/full-stack-development'
    },
    {
      title: 'Custom Bots',
      description: 'Intelligent automated solutions for enhanced efficiency.',
      icon: '🤖',
      color: '#4d4dff',
      features: [
        'Discord Bots',
        'Telegram Bots',
        'Trading Bots',
        'Custom Integrations'
      ],
      link: '/services/custom-bots'
    },
    {
      title: 'Custom Applications',
      description: 'Tailored software solutions for your unique needs.',
      icon: '📱',
      color: '#b026ff',
      features: ['Mobile Apps', 'Desktop Software', 'Enterprise Solutions', 'System Development'],
      link: '/services/custom-applications'
    },
    {
      title: 'DevOps & Cloud',
      description: 'Streamline your development and deployment with our expert DevOps services.',
      icon: '☁️',
      color: '#00ff9d',
      features: ['CI/CD Pipelines', 'Cloud Architecture', 'Container Orchestration', 'Infrastructure as Code'],
      link: '/services/devops-cloud'
    },
    {
      title: 'Cybersecurity',
      description: 'Protect your digital assets with our comprehensive security solutions.',
      icon: '🔒',
      color: '#ff26b0',
      features: ['Security Audits', 'Penetration Testing', 'Secure Architecture', 'Compliance'],
      link: '/services/cybersecurity'
    },
    {
      title: 'UI/UX Design',
      description: 'Create stunning, user-friendly interfaces that captivate and convert.',
      icon: '🎨',
      color: '#4d4dff',
      features: ['User Research', 'Wireframing', 'Prototyping', 'Design Systems'],
      link: '/services/ui-ux-design'
    },
    {
      title: 'Technology Consulting',
      description: 'Strategic technology consulting to guide your digital transformation journey.',
      icon: '💡',
      color: '#b026ff',
      features: ['Tech Strategy', 'Architecture Review', 'Digital Transformation', 'Team Augmentation'],
      link: '/services/consulting'
    }
  ]

  const botServices = {
    title: 'Custom Bots',
    description: 'Intelligent automated solutions for enhanced efficiency.',
    features: [
      {
        name: 'Discord Bots',
        description: 'Custom Discord bots for server management, automation, and engagement.',
        capabilities: ['Server Management', 'Custom Commands', 'Role Management', 'Event Handling']
      },
      {
        name: 'Telegram Bots',
        description: 'Powerful Telegram bots with advanced features and seamless integration.',
        capabilities: [
          'Community Management',
          'Custom Commands & Menus',
          'Media Processing',
          'Inline Queries',
          'Payment Integration',
          'Group Administration'
        ]
      },
      {
        name: 'Trading Bots',
        description: 'Automated trading solutions with advanced strategies and risk management.',
        capabilities: ['Market Analysis', 'Automated Trading', 'Risk Management', 'Performance Tracking']
      },
      {
        name: 'Custom Integrations',
        description: 'Tailored bot solutions for your specific platform or service.',
        capabilities: ['API Integration', 'Custom Workflows', 'Data Processing', 'Automation']
      }
    ]
  };

  return (
    <div className="min-h-screen bg-[#0a0a0f] pt-24 relative overflow-hidden">
      {/* Cyberpunk Grid Background */}
      <div className="fixed inset-0 opacity-10">
        <svg className="w-full h-full">
          <pattern 
            id="cyber-grid" 
            x="0" 
            y="0" 
            width="50" 
            height="50" 
            patternUnits="userSpaceOnUse"
          >
            <rect width="50" height="50" fill="none" stroke="#00ff9d" strokeWidth="0.5"/>
            <circle cx="25" cy="25" r="1" fill="#ff26b0"/>
            <path d="M25 0v50 M0 25h50" stroke="#4d4dff" strokeWidth="0.5"/>
          </pattern>
          <rect x="0" y="0" width="100%" height="100%" fill="url(#cyber-grid)"/>
        </svg>
      </div>

      {/* Floating Data Particles */}
      <div className="fixed inset-0 opacity-20">
        {Array.from({ length: 50 }).map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-[#00ff9d] rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              scale: [1, 1.5, 1],
              opacity: [0.5, 1, 0.5],
            }}
            transition={{
              duration: Math.random() * 2 + 1,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>

      {/* Circuit Lines */}
      <div className="fixed inset-0 opacity-10">
        {Array.from({ length: 10 }).map((_, i) => (
          <motion.div
            key={i}
            className="absolute h-full w-[2px]"
            style={{
              left: `${i * 10}%`,
              background: `linear-gradient(to bottom, 
                transparent,
                ${i % 2 === 0 ? '#00ff9d' : '#ff26b0'},
                transparent
              )`,
            }}
            animate={{
              y: [-1000, 1000],
            }}
            transition={{
              duration: 10,
              repeat: Infinity,
              ease: "linear",
              delay: i * 0.5,
            }}
          />
        ))}
      </div>

      {/* Hexagonal Pattern */}
      <div className="fixed inset-0 opacity-5">
        <svg className="w-full h-full">
          <pattern 
            id="hex-pattern" 
            x="0" 
            y="0" 
            width="50" 
            height="86.6" 
            patternUnits="userSpaceOnUse"
          >
            <path 
              d="M25,43.3l-25-43.3h50L25,43.3z M25,43.3l25,43.3h-50L25,43.3z"
              stroke="#4d4dff"
              strokeWidth="0.5"
              fill="none"
            />
          </pattern>
          <rect x="0" y="0" width="100%" height="100%" fill="url(#hex-pattern)"/>
        </svg>
      </div>

      {/* Scanline Effect */}
      <motion.div 
        className="fixed inset-0 bg-gradient-to-b from-transparent via-[#00ff9d]/5 to-transparent pointer-events-none"
        style={{ y: glitchOffset }}
      />

      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-20"
        >
          <GlitchText 
            text="Our Services"
            variant="hover"
            className="text-5xl font-bold mb-6 bg-gradient-to-r from-[#00ff9d] via-[#4d4dff] to-[#ff26b0] text-transparent bg-clip-text"
          />
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            Cutting-edge solutions for the digital age. We transform ideas into reality.
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="group relative"
            >
              <div className="absolute -inset-0.5 bg-gradient-to-r from-[#00ff9d] to-[#ff26b0] rounded-lg blur opacity-25 group-hover:opacity-75 transition duration-1000 group-hover:duration-200" />
              <div className="relative bg-[#1a1a2e] p-6 rounded-lg">
                <div className="text-4xl mb-4">{service.icon}</div>
                <GlitchText 
                  text={service.title}
                  variant="hover"
                  className="text-xl font-bold mb-3"
                  style={{ color: service.color }}
                />
                <p className="text-gray-400 mb-4">{service.description}</p>
                <div className="space-y-2 mb-6">
                  {service.features.map((feature, i) => (
                    <div 
                      key={feature}
                      className="flex items-center space-x-2"
                    >
                      <div className="w-1 h-1 bg-[#00ff9d] rounded-full" />
                      <span className="text-gray-300">{feature}</span>
                    </div>
                  ))}
                </div>
                <Link href={service.link}>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="w-full group relative inline-flex items-center justify-center px-4 py-2 overflow-hidden rounded-lg bg-[#2a2a4e] transition-all duration-300"
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-[#00ff9d] via-[#4d4dff] to-[#ff26b0] opacity-0 group-hover:opacity-50 transition-opacity" />
                    <GlitchText 
                      text="Learn More"
                      variant="hover"
                      className="relative text-sm font-bold text-white group-hover:text-white transition-colors"
                    />
                    <motion.span 
                      className="relative ml-2"
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
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  )
} 