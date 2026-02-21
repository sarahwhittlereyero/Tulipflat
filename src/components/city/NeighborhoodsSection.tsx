import Container from '@/components/ui/Container'
import SectionHeading from '@/components/ui/SectionHeading'
import Card from '@/components/ui/Card'
import type { Neighborhood } from '@/types/city'

const priceBadge: Record<Neighborhood['priceLevel'], { label: string; color: string }> = {
  budget: { label: 'Budget-friendly', color: 'bg-leaf-100 text-leaf-700' },
  mid: { label: 'Mid-range', color: 'bg-sky-100 text-sky-700' },
  high: { label: 'Higher-end', color: 'bg-tulip-100 text-tulip-700' },
}

interface NeighborhoodsSectionProps {
  neighborhoods: Neighborhood[]
}

export default function NeighborhoodsSection({ neighborhoods }: NeighborhoodsSectionProps) {
  return (
    <section className="py-20 bg-white">
      <Container>
        <SectionHeading title="Neighborhoods" subtitle="Find the area that suits your lifestyle and budget." />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {neighborhoods.map((n) => {
            const badge = priceBadge[n.priceLevel]
            return (
              <Card key={n.name}>
                <div className="flex items-start justify-between mb-3">
                  <h3 className="font-semibold text-lg text-gray-900">{n.name}</h3>
                  <span className={`text-xs font-medium px-2.5 py-1 rounded-full ${badge.color}`}>
                    {badge.label}
                  </span>
                </div>
                <p className="text-gray-600 mb-3">{n.description}</p>
                <div className="flex items-center gap-4 text-sm text-gray-500">
                  <span>Vibe: {n.vibe}</span>
                  <span>Safety: {n.safety}</span>
                </div>
              </Card>
            )
          })}
        </div>
      </Container>
    </section>
  )
}
