'use client'
import { motion } from 'framer-motion'
import GlitchText from '@/components/common/GlitchText'

export default function Services() {
  const services = [
    {
      title: 'Full Stack Development',
      description: 'End-to-end web solutions with modern technologies',
      icon: '🌐',
      color: '#00ff9d'
    },
    {
      title: 'Web3 Development',
      description: 'Blockchain and decentralized applications',
      icon: '⛓️',
      color: '#ff26b0'
    },
    {
      title: 'Custom Bots',
      description: 'Automated solutions for your business needs',
      icon: '🤖',
      color: '#4d4dff'
    },
    {
      title: 'Custom Applications',
      description: 'Tailored software solutions',
      icon: '💻',
      color: '#b026ff'
    }
  ]

  return (
    <section id="services" className="py-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <GlitchText 
            text="Our Services" 
            variant="hover"
            className="text-4xl font-bold mb-4 bg-gradient-to-r from-[#00ff9d] via-[#4d4dff] to-[#ff26b0] text-transparent bg-clip-text"
          />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="p-6 rounded-lg bg-[#1a1a2e] hover:bg-[#2a2a4e] transition-colors"
            >
              <div className="text-4xl mb-4">{service.icon}</div>
              <GlitchText 
                text={service.title}
                variant="hover"
                className="text-xl font-bold mb-2"
                style={{ color: service.color }}
              />
              <p className="text-gray-400">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
} 