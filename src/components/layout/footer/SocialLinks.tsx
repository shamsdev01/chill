import Link from 'next/link'

export default function SocialLinks() {
  const socialLinks = [
    { name: "Twitter", href: "https://twitter.com/chilldevs" },
    { name: "Discord", href: "https://discord.gg/chilldevs" },
    { name: "GitHub", href: "https://github.com/chilldevs" }
  ]

  return (
    <div>
      <h3 className="text-[#00ff9d] font-bold mb-4">Social</h3>
      <ul className="space-y-2">
        {socialLinks.map((link) => (
          <li key={link.name}>
            <Link 
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-[#ff26b0] transition-colors"
            >
              {link.name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  )
} 