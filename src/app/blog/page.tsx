'use client'
import { motion } from 'framer-motion'
import GlitchText from '@/components/common/GlitchText'
import { useEffect, useState } from 'react'
import Link from 'next/link'

interface BlogPost {
  id: string
  title: string
  excerpt: string
  date: string
  category: string
  readTime: string
  image: string
}

export default function BlogPage() {
  const [posts, setPosts] = useState<BlogPost[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetchPosts()
  }, [])

  const fetchPosts = async () => {
    try {
      const res = await fetch('/api/blog')
      const data = await res.json()
      setPosts(data)
    } catch (error) {
      console.error('Error fetching posts:', error)
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="min-h-screen bg-[#0a0a0f] pt-32">
      {/* Cyberpunk Background */}
      <div className="fixed inset-0 bg-[url('/grid.svg')] opacity-10 z-0" />
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <GlitchText 
            text="Neural Network Nexus" 
            className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-[#00ff9d] via-[#4d4dff] to-[#ff26b0] text-transparent bg-clip-text"
          />
          <p className="text-gray-400 max-w-2xl mx-auto">
            Dive into the digital consciousness. Explore our cyberpunk chronicles.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map((post) => (
            <motion.article
              key={post.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="group relative"
            >
              <Link href={`/blog/${post.id}`}>
                <div className="relative overflow-hidden rounded-lg">
                  {/* Glowing Border */}
                  <div className="absolute -inset-0.5 bg-gradient-to-r from-[#00ff9d] to-[#ff26b0] rounded-lg blur opacity-25 group-hover:opacity-75 transition duration-1000 group-hover:duration-200" />
                  
                  <div className="relative bg-[#1a1a2e] p-6">
                    <div className="flex items-center gap-4 mb-4 text-sm text-gray-400">
                      <span>{post.category}</span>
                      <span>•</span>
                      <span>{post.readTime}</span>
                    </div>
                    
                    <h2 className="text-xl font-bold mb-3 text-[#00ff9d] group-hover:text-[#4d4dff] transition-colors">
                      {post.title}
                    </h2>
                    
                    <p className="text-gray-400 mb-4">
                      {post.excerpt}
                    </p>
                    
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-gray-500">{post.date}</span>
                      <motion.span
                        className="text-[#00ff9d]"
                        animate={{ x: [0, 5, 0] }}
                        transition={{ 
                          repeat: Infinity, 
                          duration: 1.5,
                          ease: "easeInOut" 
                        }}
                      >
                        →
                      </motion.span>
                    </div>
                  </div>
                </div>
              </Link>
            </motion.article>
          ))}
        </div>
      </div>
    </div>
  )
} 