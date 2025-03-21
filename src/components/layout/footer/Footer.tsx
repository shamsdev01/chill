'use client'
import { motion } from 'framer-motion'
import Link from 'next/link'
import GlitchText from '@/components/common/GlitchText'

const teamQuotes = [
  {
    quote: "I don't always test my code, but when I do, I do it in production",
    author: "TheChillestDev"
  },
  {
    quote: "My code doesn't crash, it just enters an alternative runtime state",
    author: "ChillPixelDev"
  },
  {
    quote: "CSS is my cardio - I flex things all day",
    author: "ChillWavesDev"
  },
  {
    quote: "My bot became so smart it started reviewing my pull requests",
    author: "ChillFlowDev"
  },
  {
    quote: "I don't write bugs, I write future features",
    author: "ChillBytesDev"
  },
  {
    quote: "My database is so secure, even I need to solve a CAPTCHA",
    author: "ChillZenDev"
  }
];

const socialLinks = [
  { name: "Discord", icon: "fa-discord", href: "https://discord.gg/chilldevs" },
  { name: "GitHub", icon: "fa-github", href: "https://github.com/chilldevs" },
  { name: "X (Twitter)", icon: "fa-x-twitter", href: "https://x.com/chilldevs" },
  { name: "Telegram", icon: "fa-telegram", href: "https://t.me/chilldevs" },
  { name: "Instagram", icon: "fa-instagram", href: "https://instagram.com/chilldevs" },
  { name: "TikTok", icon: "fa-tiktok", href: "https://tiktok.com/@chilldevs" }
];

export default function Footer() {
  return (
    <footer className="bg-[#0a0a0f] relative z-10">
      {/* Team Quotes Marquee */}
      <div className="relative overflow-hidden py-8 bg-[#1a1a2e] border-t border-b border-[#2a2a4e]">
        <div className="flex animate-marquee whitespace-nowrap">
          {[...teamQuotes, ...teamQuotes, ...teamQuotes].map((quote, index) => (
            <div 
              key={index} 
              className="mx-12 flex items-center space-x-4 text-lg"
            >
              <span className="text-[#00ff9d] text-xl">&lt;/&gt;</span>
              <p className="text-gray-400 italic">"{quote.quote}"</p>
              <span className="text-[#ff26b0]">- {quote.author}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div>
            <GlitchText
              text="ChillDevs"
              variant="hover"
              className="text-2xl font-bold bg-gradient-to-r from-[#00ff9d] to-[#4d4dff] bg-clip-text text-transparent mb-2"
            />
            <p className="text-gray-400 text-sm">
              Coding since the first quantum bit flipped.
            </p>
          </div>

          {/* Find Us */}
          <div>
            <GlitchText
              text="Find Us"
              variant="hover"
              className="text-[#00ff9d] font-bold mb-2"
            />
            <div className="text-gray-400 text-sm">
              <p>Somewhere in the Chillverse</p>
              <p>Earth-42069, Quantum District</p>
              <div className="text-[#ff26b0] text-xs mt-1 font-mono">
                {`// Coordinates: ${Math.random().toString(16).substring(2, 8)}.verse`}
              </div>
            </div>
          </div>

          {/* Social Links */}
          <div>
            <GlitchText
              text="Connect"
              variant="hover"
              className="text-[#00ff9d] font-bold mb-4"
            />
            <div className="grid grid-cols-3 gap-4">
              {socialLinks.map((link) => (
                <motion.a
                  key={link.name}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-[#ff26b0] transition-colors group"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  title={link.name}
                >
                  <div className="relative">
                    <i className={`fa-brands ${link.icon} text-2xl relative z-10`}></i>
                    <motion.div
                      className="absolute inset-0 bg-[#ff26b0] opacity-0 group-hover:opacity-10 rounded-full"
                      animate={{
                        scale: [1, 1.2, 1],
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                      }}
                    />
                  </div>
                </motion.a>
              ))}
            </div>
          </div>

          {/* Newsletter */}
          <div>
            <GlitchText
              text="Stay Updated"
              variant="hover"
              className="text-[#00ff9d] font-bold mb-2"
            />
            <div className="flex">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 bg-[#1a1a2e] border border-[#2a2a4e] rounded-l-lg px-3 py-1 text-sm text-white focus:border-[#00ff9d] focus:outline-none"
              />
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-gradient-to-r from-[#00ff9d] to-[#4d4dff] text-black font-bold px-4 py-1 text-sm rounded-r-lg"
              >
                Join
              </motion.button>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-8 pt-8 border-t border-[#2a2a4e] text-center text-sm text-gray-400">
          <p>© ∞ - 2025 ChillDevs. All bugs are features.</p>
          <p className="mt-1">Made with 🧊 by the ChillDevs team | Powered by quantum coffee & interdimensional memes</p>
        </div>
      </div>
    </footer>
  )
} 