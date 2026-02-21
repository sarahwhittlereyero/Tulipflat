import { Link } from 'react-router'
import Container from '@/components/ui/Container'
import SectionHeading from '@/components/ui/SectionHeading'
import Card from '@/components/ui/Card'
import { cities } from '@/data/cities'

const cityEmojis: Record<string, string> = {
  rotterdam: '\u{1F3D7}',
  eindhoven: '\u{1F4A1}',
  nijmegen: '\u{1F3DB}',
  tilburg: '\u{1F393}',
}

export default function CitiesSection() {
  return (
    <section className="py-20 bg-gray-50">
      <Container>
        <SectionHeading
          title="Where We Operate"
          subtitle="Need somewhere else? Contact us and let's try to make it work!"
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {cities.map((city) => (
            <Link key={city.slug} to={`/tips/${city.slug}`}>
              <Card className="hover:shadow-lg transition-shadow h-full">
                <div className="text-4xl mb-4">{cityEmojis[city.slug]}</div>
                <h3 className="font-display text-xl text-gray-900 mb-2">{city.name}</h3>
                <p className="text-sm text-gray-600">{city.tagline}</p>
              </Card>
            </Link>
          ))}
        </div>
      </Container>
    </section>
  )
}
