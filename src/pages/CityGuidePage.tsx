import { useParams } from 'react-router'
import { getCityBySlug } from '@/data/cities'
import CityHero from '@/components/city/CityHero'
import NeighborhoodsSection from '@/components/city/NeighborhoodsSection'
import UniversitySection from '@/components/city/UniversitySection'
import ShoppingSection from '@/components/city/ShoppingSection'
import TransportSection from '@/components/city/TransportSection'
import TipsSection from '@/components/city/TipsSection'
import Container from '@/components/ui/Container'
import Button from '@/components/ui/Button'

export default function CityGuidePage() {
  const { slug } = useParams<{ slug: string }>()
  const city = getCityBySlug(slug ?? '')

  if (!city) {
    return (
      <section className="py-20">
        <Container>
          <div className="text-center">
            <h1 className="font-display text-3xl text-gray-900 mb-4">City Not Found</h1>
            <p className="text-gray-600 mb-8">We don't have a guide for this city yet.</p>
            <Button to="/tips">Back to Tips</Button>
          </div>
        </Container>
      </section>
    )
  }

  return (
    <>
      <CityHero name={city.name} tagline={city.tagline} welcomeText={city.welcomeText} />
      <NeighborhoodsSection neighborhoods={city.neighborhoods} />
      <UniversitySection university={city.university} />
      <ShoppingSection shopping={city.shopping} />
      <TransportSection transport={city.transport} />
      <TipsSection tips={city.tips} />

      {/* CTA */}
      <section className="py-20 bg-tulip-50">
        <Container>
          <div className="text-center">
            <h2 className="font-display text-3xl text-gray-900 mb-4">
              Found a place in {city.name}?
            </h2>
            <p className="text-gray-600 mb-8">Let us visit it for you and send you an honest report.</p>
            <Button to="/contact" size="lg">Book a Viewing</Button>
          </div>
        </Container>
      </section>
    </>
  )
}
