import Link from 'next/link'

export default function FooterLinks() {
  const links = [
    {
      title: "Quick Links",
      items: [
        { name: "Home", href: "/" },
        { name: "About", href: "/about" },
        { name: "Projects", href: "/projects" },
        { name: "Contact", href: "/contact" }
      ]
    },
    {
      title: "Legal",
      items: [
        { name: "Privacy Policy", href: "/privacy" },
        { name: "Terms of Service", href: "/terms" }
      ]
    }
  ]

  return (
    <>
      {links.map((section) => (
        <div key={section.title}>
          <h3 className="text-[#00ff9d] font-bold mb-4">{section.title}</h3>
          <ul className="space-y-2">
            {section.items.map((item) => (
              <li key={item.name}>
                <Link 
                  href={item.href}
                  className="text-gray-400 hover:text-[#ff26b0] transition-colors"
                >
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </>
  )
} 