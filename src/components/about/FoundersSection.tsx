import Container from '@/components/ui/Container'
import { siteContent } from '@/data/siteContent'

export default function FoundersSection() {
  const { about } = siteContent

  return (
    <>
      {/* Hero */}
      <section className="py-20 bg-gradient-to-br from-leaf-50 to-white">
        <Container>
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="font-display text-3xl md:text-4xl text-gray-900 leading-tight">
              {about.headline}
            </h1>
          </div>
        </Container>
      </section>

      {/* Story */}
      <section className="py-20 bg-white">
        <Container>
          <div className="max-w-3xl mx-auto">
            <div className="space-y-6 text-gray-700 leading-relaxed text-lg">
              {about.story.map((paragraph, i) => (
                <p key={i}>{paragraph}</p>
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* Problem & Solution */}
      <section className="py-20 bg-gray-50">
        <Container>
          <div className="max-w-3xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <div className="w-12 h-12 rounded-full bg-red-100 text-red-600 flex items-center justify-center mb-4">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L4.082 16.5c-.77.833.192 2.5 1.732 2.5z" />
                </svg>
              </div>
              <h3 className="font-display text-xl text-gray-900 mb-3">The Problem</h3>
              <p className="text-gray-600 leading-relaxed">{about.problem}</p>
            </div>
            <div>
              <div className="w-12 h-12 rounded-full bg-leaf-100 text-leaf-600 flex items-center justify-center mb-4">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h3 className="font-display text-xl text-gray-900 mb-3">Our Solution</h3>
              <p className="text-gray-600 leading-relaxed">{about.solution}</p>
            </div>
          </div>
        </Container>
      </section>

      {/* Mission & Values */}
      <section className="py-20 bg-white">
        <Container>
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="font-display text-3xl text-gray-900 mb-6">Our Mission</h2>
            <p className="text-xl text-gray-700 mb-12">{siteContent.mission}</p>
            <p className="text-gray-600 leading-relaxed">{siteContent.values}</p>
          </div>
        </Container>
      </section>
    </>
  )
}
