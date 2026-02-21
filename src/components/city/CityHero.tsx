import Container from '@/components/ui/Container'

interface CityHeroProps {
  name: string
  tagline: string
  welcomeText: string
}

export default function CityHero({ name, tagline, welcomeText }: CityHeroProps) {
  return (
    <section className="py-20 bg-gradient-to-br from-sky-50 to-white">
      <Container>
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="font-display text-3xl md:text-5xl text-gray-900">
            Welcome to {name}
          </h1>
          <p className="mt-3 text-xl text-tulip-600 font-medium">{tagline}</p>
          <p className="mt-6 text-lg text-gray-600">{welcomeText}</p>
        </div>
      </Container>
    </section>
  )
}
