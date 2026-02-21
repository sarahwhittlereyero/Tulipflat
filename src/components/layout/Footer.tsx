import { Link } from 'react-router'
import Container from '@/components/ui/Container'
import { siteContent } from '@/data/siteContent'

export default function Footer() {
  const { contact, nav } = siteContent

  return (
    <footer className="bg-gray-900 text-gray-300 mt-auto">
      <Container className="py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand */}
          <div>
            <Link to="/" className="flex items-center gap-2 mb-4">
              <img src="/tulip.svg" alt="" className="h-8 w-8" />
              <span className="font-display text-xl text-white">TulipFlat</span>
            </Link>
            <p className="text-sm text-gray-400">{siteContent.mission}</p>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="font-semibold text-white mb-4">Pages</h3>
            <ul className="space-y-2">
              {nav.map((item) => (
                <li key={item.href}>
                  <Link to={item.href} className="text-sm hover:text-tulip-400 transition-colors">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-semibold text-white mb-4">Contact</h3>
            <ul className="space-y-2 text-sm">
              <li>{contact.address}</li>
              <li>
                <a href={`tel:${contact.phone}`} className="hover:text-tulip-400 transition-colors">
                  {contact.phone}
                </a>
              </li>
              <li>
                <a href={`mailto:${contact.email}`} className="hover:text-tulip-400 transition-colors">
                  {contact.email}
                </a>
              </li>
              <li>
                <a
                  href={contact.instagramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-tulip-400 transition-colors"
                >
                  Instagram {contact.instagram}
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-gray-800 text-center text-sm text-gray-500">
          &copy; {new Date().getFullYear()} TulipFlat. All rights reserved.
        </div>
      </Container>
    </footer>
  )
}
