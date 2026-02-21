import Container from '@/components/ui/Container'
import SectionHeading from '@/components/ui/SectionHeading'

interface TipsSectionProps {
  tips: string[]
}

export default function TipsSection({ tips }: TipsSectionProps) {
  return (
    <section className="py-20 bg-white">
      <Container>
        <SectionHeading title="Extra Tips" />
        <div className="max-w-2xl mx-auto">
          <ul className="space-y-4">
            {tips.map((tip) => (
              <li key={tip} className="flex gap-3 items-start">
                <svg className="w-5 h-5 text-tulip-500 shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span className="text-gray-700">{tip}</span>
              </li>
            ))}
          </ul>
        </div>
      </Container>
    </section>
  )
}
