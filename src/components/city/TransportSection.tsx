import Container from '@/components/ui/Container'
import SectionHeading from '@/components/ui/SectionHeading'
import type { CityGuide } from '@/types/city'

interface TransportSectionProps {
  transport: CityGuide['transport']
}

const transportIcons = {
  biking: (
    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 14l-2-2m0 0l2-2m-2 2h6m-6 0H6m12 5a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
  ),
  publicTransit: (
    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 7h8m-8 4h8m-4 4v3m-4 0h8M5 3h14a1 1 0 011 1v12a3 3 0 01-3 3H7a3 3 0 01-3-3V4a1 1 0 011-1z" />
    </svg>
  ),
  walking: (
    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
    </svg>
  ),
  connections: (
    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
  ),
}

const transportLabels: Record<string, string> = {
  biking: 'Biking',
  publicTransit: 'Public Transit',
  walking: 'Walking',
  connections: 'Connections',
}

export default function TransportSection({ transport }: TransportSectionProps) {
  return (
    <section className="py-20 bg-gray-50">
      <Container>
        <SectionHeading title="Getting Around" />
        <div className="max-w-3xl mx-auto grid grid-cols-1 sm:grid-cols-2 gap-6">
          {(Object.keys(transport) as Array<keyof typeof transport>).map((key) => (
            <div key={key} className="flex gap-4 items-start">
              <div className="shrink-0 w-10 h-10 rounded-lg bg-sky-100 text-sky-600 flex items-center justify-center">
                {transportIcons[key]}
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-1">{transportLabels[key]}</h3>
                <p className="text-gray-600 text-sm">{transport[key]}</p>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  )
}
