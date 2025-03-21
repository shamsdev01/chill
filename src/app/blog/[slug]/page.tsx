'use client'
import { motion, AnimatePresence } from 'framer-motion'
import GlitchText from '@/components/common/GlitchText'
import { useEffect, useState } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { FaWhatsapp, FaFacebook, FaLink } from 'react-icons/fa'
import { FaXTwitter } from 'react-icons/fa6'

interface BlogPost {
  title: string
  date: string
  category: string
  readTime: string
  content: string
  author: {
    name: string
    avatar: string
  }
}

export default function BlogPost({ params }: { params: { slug: string } }) {
  const router = useRouter()
  const [post, setPost] = useState<BlogPost | null>(null)
  const [loading, setLoading] = useState(true)
  const [showShareMenu, setShowShareMenu] = useState(false)
  const [copySuccess, setCopySuccess] = useState(false)

  // Share options with proper icons
  const shareOptions = [
    { name: 'Copy Link', icon: <FaLink className="w-5 h-5" />, action: 'copy' },
    { name: 'WhatsApp', icon: <FaWhatsapp className="w-5 h-5" />, url: 'whatsapp://send?text=' },
    { name: 'Facebook', icon: <FaFacebook className="w-5 h-5" />, url: 'https://www.facebook.com/sharer/sharer.php?u=' },
    { name: 'X (Twitter)', icon: <FaXTwitter className="w-5 h-5" />, url: 'https://twitter.com/intent/tweet?url=' }
  ]

  useEffect(() => {
    const fetchPost = async () => {
      try {
        const res = await fetch(`/api/blog/${params.slug}`)
        if (!res.ok) throw new Error('Failed to fetch post')
        const data = await res.json()
        setPost(data)
      } catch (error) {
        console.error('Error fetching post:', error)
      } finally {
        setLoading(false)
      }
    }

    fetchPost()
  }, [params.slug])

  useEffect(() => {
    if (showShareMenu) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }

    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [showShareMenu])

  // Handle share actions
  const handleShare = async (option: typeof shareOptions[0]) => {
    const url = window.location.href
    
    if (option.action === 'copy') {
      try {
        await navigator.clipboard.writeText(url)
        setCopySuccess(true)
        setTimeout(() => setCopySuccess(false), 2000)
      } catch (err) {
        console.error('Failed to copy:', err)
      }
    } else if (option.url) {
      window.open(option.url + encodeURIComponent(url), '_blank', 'noopener,noreferrer')
    }
    
    setShowShareMenu(false)
  }

  // Add a back button component
  const BackButton = () => (
    <motion.button
      onClick={() => router.push('/blog')}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className="group flex items-center gap-2 px-4 py-2 rounded-lg bg-[#1a1a2e] hover:bg-[#2a2a4e] transition-colors relative overflow-hidden"
    >
      <span className="text-[#00ff9d] relative z-10 text-xl">←</span>
      <span className="text-[#00ff9d] relative z-10 font-medium">Back to Blog</span>
      <motion.div 
        className="absolute inset-0 bg-gradient-to-r from-[#00ff9d]/20 to-[#ff26b0]/20"
        initial={{ x: '-100%' }}
        whileHover={{ x: '0%' }}
        transition={{ type: 'spring', stiffness: 100 }}
      />
    </motion.button>
  )

  // Share button component with improved interaction
  const ShareButton = () => (
    <div className="relative z-[60]">
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={(e) => {
          e.stopPropagation()
          setShowShareMenu(prev => !prev)
        }}
        className="group px-6 py-3 rounded-lg bg-[#1a1a2e] hover:bg-[#2a2a4e] transition-colors relative overflow-hidden"
      >
        <span className="text-[#00ff9d] relative z-10 font-medium">Share Article</span>
        <motion.div 
          className="absolute inset-0 bg-gradient-to-r from-[#00ff9d]/20 to-[#ff26b0]/20"
          initial={{ opacity: 0 }}
          whileHover={{ opacity: 1 }}
        />
      </motion.button>

      {showShareMenu && (
        <div className="fixed inset-0 flex items-center justify-center z-[999]">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setShowShareMenu(false)}
            className="absolute inset-0 bg-black/50 backdrop-blur-sm"
          />

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            onClick={(e) => e.stopPropagation()}
            className="relative w-80 rounded-lg bg-[#1a1a2e] border border-[#2a2a4e] overflow-hidden shadow-xl"
          >
            {/* Header */}
            <div className="px-6 py-4 border-b border-[#2a2a4e] flex justify-between items-center">
              <h3 className="text-[#00ff9d] font-bold text-lg">Share Article</h3>
              <button 
                onClick={() => setShowShareMenu(false)}
                className="text-gray-400 hover:text-[#ff26b0] transition-colors"
              >
                ✕
              </button>
            </div>

            {/* Share Options */}
            <div className="p-2">
              {shareOptions.map((option) => (
                <motion.button
                  key={option.name}
                  onClick={(e) => {
                    e.stopPropagation()
                    handleShare(option)
                  }}
                  className="w-full px-4 py-3 flex items-center gap-3 rounded-lg hover:bg-[#2a2a4e] transition-colors relative group"
                  whileHover={{ backgroundColor: '#2a2a4e' }}
                >
                  <span className="text-[#00ff9d] text-xl">{option.icon}</span>
                  <span className="text-gray-300 group-hover:text-[#00ff9d] transition-colors">
                    {option.name}
                  </span>
                </motion.button>
              ))}
            </div>
          </motion.div>
        </div>
      )}

      {/* Success Message */}
      <AnimatePresence>
        {copySuccess && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            className="fixed bottom-8 left-1/2 -translate-x-1/2 px-6 py-3 bg-[#00ff9d] text-[#0a0a0f] rounded-lg font-medium z-[1000] shadow-xl"
          >
            Copied to clipboard! ✓
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )

  if (loading) {
    return (
      <div className="min-h-screen bg-[#0a0a0f] pt-32">
        <div className="container mx-auto px-4">
          <div className="animate-pulse">Loading...</div>
        </div>
      </div>
    )
  }

  if (!post) {
    return (
      <div className="min-h-screen bg-[#0a0a0f] pt-32">
        <div className="container mx-auto px-4">
          <div className="text-red-500">Post not found</div>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-[#0a0a0f] overflow-x-hidden">
      {/* Navbar Space */}
      <div className="h-20" /> {/* Add space for fixed navbar */}

      {/* Main Content */}
      <div className="container mx-auto px-4 relative z-10">
        <article className="max-w-4xl mx-auto">
          {/* Back Button at the top */}
          <div className="mb-8">
            <BackButton />
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            {/* Header */}
            <header className="mb-12">
              <div className="flex flex-wrap items-center gap-4 mb-6 text-sm text-gray-400">
                <span>{post.category}</span>
                <span>•</span>
                <span>{post.date}</span>
                <span>•</span>
                <span>{post.readTime}</span>
              </div>

              <GlitchText 
                text={post.title}
                className="text-3xl md:text-5xl font-bold mb-8 bg-gradient-to-r from-[#00ff9d] via-[#4d4dff] to-[#ff26b0] text-transparent bg-clip-text break-words"
              />
            </header>

            {/* Content */}
            <div 
              className={`prose prose-invert max-w-none 
                prose-h2:text-[#00ff9d] prose-h2:text-2xl md:prose-h2:text-3xl prose-h2:font-bold prose-h2:mt-12 prose-h2:mb-6 
                prose-h3:text-[#4d4dff] prose-h3:text-xl md:prose-h3:text-2xl prose-h3:font-semibold prose-h3:mt-8 prose-h3:mb-4 
                prose-p:text-gray-300 prose-p:text-base md:prose-p:text-lg prose-p:leading-relaxed prose-p:mb-6 
                prose-pre:bg-[#1a1a2e] prose-pre:border prose-pre:border-[#2a2a4e] prose-pre:p-4 md:prose-pre:p-6 prose-pre:rounded-lg prose-pre:my-8 
                prose-code:text-[#ff26b0] prose-code:font-mono prose-code:text-sm 
                [&>*]:relative [&>*]:z-10
                [&_pre]:overflow-x-auto [&_code]:whitespace-pre-wrap
              `.trim()}
              dangerouslySetInnerHTML={{ __html: post.content }}
            />

            {/* Share Menu - Updated for better reliability */}
            <div className="mt-12 pt-8 border-t border-[#2a2a4e]">
              <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
                <ShareButton />

                <div className="flex flex-wrap gap-4">
                  <span className="text-gray-400">Tags:</span>
                  <span className="text-[#00ff9d]">#Cyberpunk</span>
                  <span className="text-[#4d4dff]">#Tech</span>
                  <span className="text-[#ff26b0]">#Future</span>
                </div>
              </div>
            </div>
          </motion.div>
        </article>
      </div>

      {/* Fixed Author Bar */}
      <div className="fixed top-0 left-0 right-0 z-50 bg-[#0a0a0f]/80 backdrop-blur-lg border-b border-[#2a2a4e]">
        <div className="container mx-auto px-4 h-20 flex items-center justify-end">
          {post && (
            <div className="flex items-center gap-4 overflow-hidden">
              <img 
                src={post.author.avatar} 
                alt={post.author.name}
                className="w-10 h-10 rounded-full border-2 border-[#00ff9d] flex-shrink-0"
              />
              <div className="min-w-0">
                <div className="text-[#00ff9d] font-medium truncate">{post.author.name}</div>
                <div className="text-sm text-gray-400 truncate">Cyberpunk Chronicler</div>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Background Effects */}
      <div className="fixed inset-0 bg-[url('/grid.svg')] opacity-10 z-0" />
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-[#4d4dff] to-transparent animate-pulse" />
        <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-[#00ff9d] to-transparent animate-pulse" />
      </div>

      {/* Code Block Styling */}
      <style jsx global>{`
        pre {
          position: relative;
        }
        pre::before {
          content: '';
          position: absolute;
          inset: -1px;
          background: linear-gradient(45deg, #00ff9d, #4d4dff, #ff26b0);
          border-radius: 8px;
          opacity: 0.5;
          filter: blur(8px);
          z-index: 0;
        }
        pre code {
          display: block;
          position: relative;
          z-index: 1;
          background: #1a1a2e;
          border-radius: 7px;
          padding: 1em;
        }
      `}</style>
    </div>
  )
} 