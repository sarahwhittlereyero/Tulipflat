import Container from '@/components/ui/Container'
import SectionHeading from '@/components/ui/SectionHeading'
import type { UniversityInfo } from '@/types/city'

interface UniversitySectionProps {
  university: UniversityInfo
}

export default function UniversitySection({ university }: UniversitySectionProps) {
  return (
    <section className="py-20 bg-gray-50">
      <Container>
        <SectionHeading title={university.name} />
        <div className="max-w-3xl mx-auto">
          <p className="text-gray-700 text-lg mb-8 text-center">{university.description}</p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="font-semibold text-gray-900 mb-3">Key Strengths</h3>
              <ul className="space-y-2">
                {university.strengths.map((s) => (
                  <li key={s} className="flex items-center gap-2 text-gray-600">
                    <svg className="w-4 h-4 text-leaf-500 shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    {s}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-gray-900 mb-3">Campus Highlights</h3>
              <ul className="space-y-2">
                {university.highlights.map((h) => (
                  <li key={h} className="flex items-center gap-2 text-gray-600">
                    <svg className="w-4 h-4 text-sky-500 shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    {h}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </Container>
    </section>
  )
}
