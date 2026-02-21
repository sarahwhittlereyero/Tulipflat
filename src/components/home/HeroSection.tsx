import Button from '@/components/ui/Button'
import Container from '@/components/ui/Container'
import { siteContent } from '@/data/siteContent'

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-tulip-50 via-white to-leaf-50 py-20 md:py-32">
      <Container>
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="font-display text-4xl md:text-5xl lg:text-6xl text-gray-900 leading-tight">
            {siteContent.tagline}
          </h1>
          <p className="mt-6 text-lg md:text-xl text-gray-600 max-w-2xl mx-auto">
            {siteContent.description}
          </p>
          <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
            <Button to="/contact" size="lg">Book a Viewing</Button>
            <Button to="/process" variant="outline" size="lg">How It Works</Button>
          </div>
        </div>
      </Container>

      {/* Decorative elements */}
      <div className="absolute top-10 left-10 w-20 h-20 rounded-full bg-tulip-100 opacity-60 blur-xl" />
      <div className="absolute bottom-10 right-10 w-32 h-32 rounded-full bg-leaf-100 opacity-60 blur-xl" />
    </section>
  )
}
