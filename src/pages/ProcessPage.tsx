import Container from '@/components/ui/Container'
import SectionHeading from '@/components/ui/SectionHeading'
import Button from '@/components/ui/Button'
import StepCard from '@/components/process/StepCard'
import ViewingIncludes from '@/components/process/ViewingIncludes'
import { siteContent } from '@/data/siteContent'

export default function ProcessPage() {
  return (
    <>
      {/* Hero */}
      <section className="py-20 bg-gradient-to-br from-tulip-50 to-white">
        <Container>
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="font-display text-3xl md:text-5xl text-gray-900 leading-tight">
              {siteContent.process.headline}
            </h1>
            <p className="mt-6 text-lg text-gray-600">
              {siteContent.process.subheadline}
            </p>
          </div>
        </Container>
      </section>

      {/* Steps */}
      <section className="py-20 bg-white">
        <Container>
          <SectionHeading title="Three Simple Steps" />
          <div className="max-w-2xl mx-auto space-y-12">
            {siteContent.process.steps.map((step) => (
              <StepCard key={step.number} {...step} />
            ))}
          </div>
        </Container>
      </section>

      {/* What's included */}
      <section className="py-20 bg-gray-50">
        <Container>
          <SectionHeading
            title="What Does the Viewing Include?"
          />
          <ViewingIncludes />
        </Container>
      </section>

      {/* CTA */}
      <section className="py-20 bg-white">
        <Container>
          <div className="text-center">
            <h2 className="font-display text-3xl text-gray-900 mb-6">Ready to Get Started?</h2>
            <Button to="/contact" size="lg">Book Your Viewing</Button>
          </div>
        </Container>
      </section>
    </>
  )
}
