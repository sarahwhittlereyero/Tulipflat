import Container from '@/components/ui/Container'
import SectionHeading from '@/components/ui/SectionHeading'
import Button from '@/components/ui/Button'
import { siteContent } from '@/data/siteContent'

const stepIcons = ['1', '2', '3']

export default function HowItWorksPreview() {
  return (
    <section className="py-20 bg-white">
      <Container>
        <SectionHeading
          title="How It Works"
          subtitle={siteContent.process.subheadline}
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {siteContent.process.steps.map((step, i) => (
            <div key={step.number} className="text-center">
              <div className="w-16 h-16 rounded-full bg-tulip-100 text-tulip-700 flex items-center justify-center mx-auto mb-6">
                <span className="font-display text-2xl">{stepIcons[i]}</span>
              </div>
              <h3 className="font-semibold text-lg text-gray-900 mb-3">{step.title}</h3>
              <p className="text-gray-600">{step.description}</p>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button to="/process" variant="outline">Learn More</Button>
        </div>
      </Container>
    </section>
  )
}
