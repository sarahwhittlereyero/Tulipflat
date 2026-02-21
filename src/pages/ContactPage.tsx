import Container from '@/components/ui/Container'
import Card from '@/components/ui/Card'
import BookingForm from '@/components/contact/BookingForm'
import { siteContent } from '@/data/siteContent'

export default function ContactPage() {
  const { contact } = siteContent

  return (
    <>
      {/* Hero */}
      <section className="py-16 bg-gradient-to-br from-tulip-50 to-white">
        <Container>
          <div className="max-w-2xl mx-auto text-center">
            <h1 className="font-display text-3xl md:text-5xl text-gray-900">Book Your Viewing</h1>
            <p className="mt-4 text-lg text-gray-600">
              Tell us about the property and we'll take care of the rest.
            </p>
          </div>
        </Container>
      </section>

      {/* Form + Contact Info */}
      <section className="py-20 bg-white">
        <Container>
          <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-5 gap-12">
            {/* Form */}
            <div className="md:col-span-3">
              <Card>
                <BookingForm />
              </Card>
            </div>

            {/* Contact info sidebar */}
            <div className="md:col-span-2 space-y-8">
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">Phone</h3>
                <a href={`tel:${contact.phone}`} className="text-tulip-600 hover:text-tulip-700 transition-colors">
                  {contact.phone}
                </a>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">Email</h3>
                <a href={`mailto:${contact.email}`} className="text-tulip-600 hover:text-tulip-700 transition-colors">
                  {contact.email}
                </a>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">Instagram</h3>
                <a
                  href={contact.instagramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-tulip-600 hover:text-tulip-700 transition-colors"
                >
                  {contact.instagram}
                </a>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">Address</h3>
                <p className="text-gray-600">{contact.address}</p>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">Hours</h3>
                <p className="text-gray-600">Mon–Fri: {siteContent.hours.weekdays}</p>
                <p className="text-gray-600">Sat–Sun: {siteContent.hours.weekends}</p>
              </div>
            </div>
          </div>
        </Container>
      </section>
    </>
  )
}
