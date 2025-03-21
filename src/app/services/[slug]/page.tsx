'use client'
import { motion, useScroll, useTransform } from 'framer-motion'
import GlitchText from '@/components/common/GlitchText'
import { useParams } from 'next/navigation'
import Link from 'next/link'

export default function ServiceDetail() {
  const { slug } = useParams()
  const { scrollYProgress } = useScroll()
  const glitchOffset = useTransform(scrollYProgress, [0, 1], [0, 100])
  
  const serviceDetails = {
    'full-stack-development': {
      title: 'Full Stack Development',
      color: '#00ff9d',
      icon: '🌐',
      description: 'End-to-end web development solutions that power modern businesses',
      longDescription: 'We create robust, scalable, and high-performance applications that drive business growth. Our full-stack development service covers everything from front-end user interfaces to back-end systems and database architecture.',
      offerings: [
        {
          title: 'Frontend Development',
          description: 'Modern, responsive user interfaces built with React, Next.js, and other cutting-edge technologies.',
          features: [
            'Responsive Design',
            'Progressive Web Apps',
            'Cross-browser Compatibility',
            'Performance Optimization',
            'SEO-friendly Architecture'
          ]
        },
        {
          title: 'Backend Development',
          description: 'High-performance server-side solutions that power your applications.',
          features: [
            'RESTful API Development',
            'GraphQL Implementation',
            'Microservices Architecture',
            'High-Performance Rust Services',
            '.NET Core Development',
            'Real-time Data Processing',
            'Security Implementation'
          ]
        },
        {
          title: 'Database Solutions',
          description: 'Efficient data management and storage solutions.',
          features: [
            'Database Design & Optimization',
            'Data Migration Services',
            'NoSQL & SQL Solutions',
            'Caching Strategies',
            'Data Security & Encryption'
          ]
        }
      ],
      technologies: [
        'React/Next.js', 'Node.js', 'Python',
        'C#', 'Rust', 'PostgreSQL', 
        'MongoDB', 'Redis', 'AWS/GCP/Azure', 
        'Docker', 'Kubernetes'
      ]
    },
    'web3-development': {
      title: 'Web3 Development',
      color: '#ff26b0',
      icon: '⛓️',
      description: 'Building the future of decentralized applications',
      longDescription: 'We specialize in creating secure, efficient, and innovative blockchain solutions. From smart contracts to complete DeFi platforms, we help bring your Web3 vision to life.',
      offerings: [
        {
          title: 'Smart Contract Development',
          description: 'Secure and efficient smart contracts for various blockchain platforms.',
          features: [
            'Solidity Development',
            'Contract Auditing',
            'Gas Optimization',
            'Testing & Deployment',
            'Contract Upgrades'
          ]
        },
        {
          title: 'DeFi Solutions',
          description: 'Complete decentralized finance applications and platforms.',
          features: [
            'Token Development',
            'DEX Implementation',
            'Yield Farming',
            'Liquidity Pools',
            'Governance Systems'
          ]
        },
        {
          title: 'NFT Platforms',
          description: 'End-to-end NFT marketplace and collection solutions.',
          features: [
            'NFT Minting',
            'Marketplace Development',
            'Collection Management',
            'Royalty Systems',
            'Meta Transactions'
          ]
        }
      ],
      technologies: [
        'Solidity', 'Web3.js', 'Ethers.js',
        'Hardhat', 'IPFS', 'The Graph',
        'OpenZeppelin', 'Chainlink', 'Polygon'
      ]
    },
    'custom-bots': {
      title: 'Custom Bots',
      color: '#4d4dff',
      icon: '🤖',
      description: 'Automated solutions for enhanced efficiency',
      longDescription: 'We develop custom bot solutions that automate processes, enhance user engagement, and provide real-time data analysis. From trading bots to community management across Discord and Telegram, we create intelligent tools that work for you 24/7.',
      offerings: [
        {
          title: 'Discord & Telegram Bots',
          description: 'Enhanced community management and engagement tools for multiple platforms.',
          features: [
            'Custom Commands & Slash Commands',
            'Role & Permission Management',
            'Multi-Platform Integration',
            'Inline Queries & Keyboards',
            'Media Processing & Filters',
            'Payment Integration (Telegram)',
            'Analytics & Reporting',
            'Advanced Moderation Tools'
          ]
        },
        {
          title: 'Trading Bots',
          description: 'Automated trading solutions for various markets.',
          features: [
            'Market Analysis',
            'Strategy Implementation',
            'Risk Management',
            'Performance Monitoring',
            'Multi-exchange Support',
            'Real-time Alerts'
          ]
        },
        {
          title: 'Automation Bots',
          description: 'Task automation for business processes.',
          features: [
            'Workflow Automation',
            'Data Collection & Processing',
            'Report Generation',
            'API Integration',
            'Scheduled Tasks',
            'Custom Notifications'
          ]
        }
      ],
      technologies: [
        'Python',
        'Node.js',
        'Discord.js',
        'Telegram Bot API',
        'telegraf.js',
        'WebSocket',
        'REST APIs',
        'MongoDB',
        'Redis',
        'AWS Lambda',
        'Docker'
      ]
    },
    'custom-applications': {
      title: 'Custom Applications',
      color: '#b026ff',
      icon: '💻',
      description: 'Tailored software solutions for unique needs',
      longDescription: 'We create custom applications that solve specific business challenges. Whether you need a mobile app, desktop software, or a specialized tool, we build solutions that perfectly fit your requirements.',
      offerings: [
        {
          title: 'Mobile Applications',
          description: 'Native and cross-platform mobile solutions.',
          features: [
            'iOS Development',
            'Android Development',
            'Cross-platform Solutions',
            'App Store Optimization',
            'Mobile Security'
          ]
        },
        {
          title: 'Desktop Applications',
          description: 'High-performance desktop software for Windows, Mac, and Linux.',
          features: [
            'Cross-platform Development',
            'Native Windows Apps (.NET/C#)',
            'High-Performance Computing (Rust)',
            'System Integration',
            'Performance Optimization',
            'Offline Capabilities',
            'Auto-updates'
          ]
        },
        {
          title: 'Enterprise Solutions',
          description: 'Custom enterprise-grade applications with high performance and security.',
          features: [
            'Business Process Automation',
            'High-Performance Microservices (Rust)',
            '.NET Enterprise Solutions',
            'Data Analytics',
            'Legacy System Integration',
            'Scalable Architecture',
            'Security Compliance'
          ]
        },
        {
          title: 'System Development',
          description: 'Low-level system development and optimization.',
          features: [
            'System Level Programming (Rust)',
            'Performance Critical Applications',
            'Hardware Integration',
            'Custom Protocols',
            'Memory-safe Solutions'
          ]
        }
      ],
      technologies: [
        'React Native', 'Flutter', 'Electron',
        'C#', '.NET Core', 'Rust',
        'Swift', 'Kotlin', 'SQLite', 
        'REST APIs', 'WebAssembly'
      ]
    },
    'devops-cloud': {
      title: 'DevOps & Cloud',
      color: '#00ff9d',
      icon: '☁️',
      description: 'Streamline your development and deployment processes',
      longDescription: 'Our DevOps and Cloud services help organizations build, test, and deploy applications faster and more reliably. We implement modern DevOps practices and cloud solutions that scale with your needs.',
      offerings: [
        {
          title: 'CI/CD Implementation',
          description: 'Automated pipelines for continuous integration and deployment.',
          features: [
            'Pipeline Automation',
            'Build Optimization',
            'Deployment Strategies',
            'Quality Gates',
            'Release Management'
          ]
        },
        {
          title: 'Cloud Architecture',
          description: 'Scalable and reliable cloud infrastructure solutions.',
          features: [
            'Multi-cloud Strategy',
            'Serverless Architecture',
            'Container Orchestration',
            'Cloud Cost Optimization',
            'High Availability Design'
          ]
        },
        {
          title: 'Infrastructure as Code',
          description: 'Automated infrastructure provisioning and management.',
          features: [
            'Terraform Development',
            'AWS CloudFormation',
            'Azure ARM Templates',
            'Configuration Management',
            'Infrastructure Testing'
          ]
        }
      ],
      technologies: [
        'Docker', 'Kubernetes', 'Terraform',
        'AWS', 'Azure', 'GCP',
        'Jenkins', 'GitLab CI', 'ArgoCD',
        'Prometheus', 'Grafana'
      ]
    },
    'cybersecurity': {
      title: 'Cybersecurity',
      color: '#ff26b0',
      icon: '🔒',
      description: 'Comprehensive security solutions for digital assets',
      longDescription: 'We provide end-to-end security services to protect your applications, infrastructure, and data from evolving cyber threats. Our approach combines proactive security measures with continuous monitoring and incident response, powered by our custom-built security tools.',
      offerings: [
        {
          title: 'Security Audits',
          description: 'Comprehensive assessment of security posture.',
          features: [
            'Code Security Review',
            'Infrastructure Audit',
            'Compliance Assessment',
            'Risk Analysis',
            'Security Architecture Review'
          ]
        },
        {
          title: 'Penetration Testing',
          description: 'Identify and exploit security vulnerabilities.',
          features: [
            'Web Application Testing',
            'Network Penetration',
            'Mobile App Security',
            'API Security Testing',
            'Social Engineering Tests'
          ]
        },
        {
          title: 'Security Implementation',
          description: 'Implementation of security measures and controls.',
          features: [
            'Zero Trust Architecture',
            'Identity Management',
            'Encryption Solutions',
            'Security Monitoring',
            'Incident Response'
          ]
        }
      ],
      technologies: [
        'OWASP Tools', 'Burp Suite', 'Metasploit',
        'Nmap', 'Wireshark', 'SIEM',
        'WAF', 'IDS/IPS', 'Zero Trust',
        'ChillGuard™ (Custom IDS)',
        'ChillScan (Vulnerability Scanner)',
        'ChillTrace (Threat Detection)',
        'ChillCrypt (Encryption Suite)',
        'ChillAudit (Code Analysis)',
        'ChillWatch (Security Monitoring)',
        'ChillBlock (Access Control)'
      ]
    },
    'ui-ux-design': {
      title: 'UI/UX Design',
      color: '#4d4dff',
      icon: '🎨',
      description: 'Creating exceptional digital experiences',
      longDescription: 'We design intuitive and engaging user interfaces that combine aesthetic appeal with functional efficiency. Our UX process ensures your applications not only look great but deliver meaningful user experiences.',
      offerings: [
        {
          title: 'User Research',
          description: 'Understanding user needs and behaviors.',
          features: [
            'User Interviews',
            'Usability Testing',
            'Analytics Analysis',
            'Persona Development',
            'Journey Mapping'
          ]
        },
        {
          title: 'Interface Design',
          description: 'Creating visually appealing and functional interfaces.',
          features: [
            'Wireframing',
            'Visual Design',
            'Interaction Design',
            'Design Systems',
            'Responsive Design'
          ]
        },
        {
          title: 'Prototyping',
          description: 'Building interactive prototypes for testing and validation.',
          features: [
            'Low-fi Prototypes',
            'High-fi Prototypes',
            'Animation Design',
            'Interactive Mockups',
            'User Testing'
          ]
        }
      ],
      technologies: [
        'Figma', 'Adobe XD', 'Sketch',
        'Principle', 'Framer', 'InVision',
        'Zeplin', 'Abstract', 'Storybook'
      ]
    },
    'consulting': {
      title: 'Technology Consulting',
      color: '#b026ff',
      icon: '💡',
      description: 'Strategic guidance for digital transformation',
      longDescription: 'Our technology consulting services help organizations navigate digital transformation, optimize their technology stack, and make informed decisions about their technical direction.',
      offerings: [
        {
          title: 'Digital Strategy',
          description: 'Strategic planning for digital initiatives.',
          features: [
            'Technology Roadmap',
            'Digital Transformation',
            'Innovation Strategy',
            'Technology Assessment',
            'ROI Analysis'
          ]
        },
        {
          title: 'Architecture Review',
          description: 'Evaluation and optimization of technical architecture.',
          features: [
            'System Architecture Review',
            'Performance Analysis',
            'Scalability Planning',
            'Technology Stack Assessment',
            'Best Practices Implementation'
          ]
        },
        {
          title: 'Team Augmentation',
          description: 'Expert resources to supplement your team.',
          features: [
            'Technical Leadership',
            'Skill Gap Analysis',
            'Team Training',
            'Process Improvement',
            'Best Practices Coaching'
          ]
        }
      ],
      technologies: [
        'Enterprise Architecture', 'Agile', 'DevOps',
        'Cloud Technologies', 'Security Frameworks',
        'Digital Transformation', 'ITIL'
      ]
    }
  }

  const service = serviceDetails[slug as keyof typeof serviceDetails]

  if (!service) {
    return <div>Service not found</div>
  }

  return (
    <div className="min-h-screen bg-[#0a0a0f] pt-24 relative overflow-hidden">
      {/* Hexagonal Grid Pattern */}
      <div className="fixed inset-0 opacity-10">
        <svg className="w-full h-full">
          <pattern id="hexagons" x="0" y="0" width="50" height="86.6" patternUnits="userSpaceOnUse">
            <path 
              d="M25,43.3l-25-43.3h50L25,43.3z M25,43.3l25,43.3h-50L25,43.3z"
              stroke={service.color}
              strokeWidth="0.5"
              fill="none"
            />
            <circle cx="25" cy="43.3" r="2" fill={service.color} />
          </pattern>
          <rect x="0" y="0" width="100%" height="100%" fill="url(#hexagons)" />
        </svg>
      </div>

      {/* Matrix Rain Effect */}
      <div className="fixed inset-0 pointer-events-none opacity-20">
        {Array.from({ length: 20 }).map((_, i) => (
          <motion.div
            key={i}
            className="absolute text-xs font-mono whitespace-nowrap"
            style={{
              left: `${Math.random() * 100}%`,
              top: -20,
              color: service.color
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
                ${service.color},
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

      {/* Floating Data Particles */}
      <div className="fixed inset-0 opacity-20">
        {Array.from({ length: 50 }).map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              background: service.color
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

      {/* Scanline Effect */}
      <motion.div 
        className="fixed inset-0 pointer-events-none"
        style={{ 
          y: glitchOffset,
          background: `linear-gradient(to bottom, 
            transparent,
            ${service.color}05,
            transparent
          )`
        }}
      />

      {/* Content Container */}
      <div className="container mx-auto px-4 mb-32 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-4xl mx-auto mb-16"
        >
          <div className="text-5xl mb-6">{service.icon}</div>
          <GlitchText 
            text={service.title}
            variant="hover"
            className="text-5xl font-bold mb-6"
            style={{ color: service.color }}
          />
          <p className="text-2xl text-gray-400 mb-6">{service.description}</p>
          <p className="text-gray-400 leading-relaxed">{service.longDescription}</p>
        </motion.div>

        {/* Service Offerings */}
        <div className="max-w-6xl mx-auto mb-20">
          <GlitchText 
            text="What We Offer"
            variant="hover"
            className="text-3xl font-bold mb-12 text-center"
            style={{ color: service.color }}
          />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {service.offerings.map((offering, index) => (
              <motion.div
                key={offering.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-[#1a1a2e] p-6 rounded-lg"
              >
                <GlitchText 
                  text={offering.title}
                  variant="hover"
                  className="text-xl font-bold mb-4"
                  style={{ color: service.color }}
                />
                <p className="text-gray-400 mb-6">{offering.description}</p>
                <ul className="space-y-3">
                  {offering.features.map((feature, idx) => (
                    <motion.li
                      key={feature}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 + idx * 0.1 }}
                      className="flex items-center space-x-2"
                    >
                      <span style={{ color: service.color }}>→</span>
                      <span className="text-gray-300">{feature}</span>
                    </motion.li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Technologies */}
        <div className="max-w-4xl mx-auto mb-20">
          <GlitchText 
            text="Technologies We Use"
            variant="hover"
            className="text-3xl font-bold mb-8 text-center"
            style={{ color: service.color }}
          />
          <div className="flex flex-wrap justify-center gap-4">
            {service.technologies.map((tech, index) => (
              <motion.div
                key={tech}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.05 }}
                className="px-4 py-2 rounded-full bg-[#1a1a2e] text-gray-300"
              >
                {tech}
              </motion.div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-center max-w-3xl mx-auto"
        >
          <GlitchText 
            text="Ready to Get Started?"
            variant="hover"
            className="text-3xl font-bold mb-6"
            style={{ color: service.color }}
          />
          <p className="text-gray-400 mb-8">
            Let's discuss your project and see how we can help bring your vision to life.
          </p>
          <Link href="/contact">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-3 rounded-lg bg-gradient-to-r from-[#00ff9d] to-[#4d4dff] text-white font-bold"
            >
              <GlitchText 
                text="Contact Us"
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