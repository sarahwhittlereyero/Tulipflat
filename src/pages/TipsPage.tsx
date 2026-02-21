import { Link } from 'react-router'
import Container from '@/components/ui/Container'
import SectionHeading from '@/components/ui/SectionHeading'
import Card from '@/components/ui/Card'
import { cities } from '@/data/cities'

export default function TipsPage() {
  return (
    <>
      {/* Hero */}
      <section className="py-20 bg-gradient-to-br from-sky-50 to-white">
        <Container>
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="font-display text-3xl md:text-5xl text-gray-900">
              Living in the Netherlands
            </h1>
            <p className="mt-6 text-lg text-gray-600">
              Essential tips and city guides for international students. Pick your city and explore neighborhoods, transport, shopping, and more.
            </p>
          </div>
        </Container>
      </section>

      {/* City cards */}
      <section className="py-20 bg-white">
        <Container>
          <SectionHeading
            title="Choose Your City"
            subtitle="We've prepared detailed guides for each city where we operate."
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 max-w-3xl mx-auto">
            {cities.map((city) => (
              <Link key={city.slug} to={`/tips/${city.slug}`}>
                <Card className="hover:shadow-lg transition-shadow h-full">
                  <h3 className="font-display text-2xl text-gray-900 mb-2">{city.name}</h3>
                  <p className="text-tulip-600 font-medium text-sm mb-3">{city.tagline}</p>
                  <p className="text-gray-600 text-sm">{city.welcomeText.slice(0, 120)}...</p>
                  <div className="mt-4 text-sm font-medium text-tulip-600">
                    Read guide &rarr;
                  </div>
                </Card>
              </Link>
            ))}
          </div>
        </Container>
      </section>
    </>
  )
}
