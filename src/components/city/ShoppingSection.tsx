import Container from '@/components/ui/Container'
import SectionHeading from '@/components/ui/SectionHeading'
import type { CityGuide } from '@/types/city'

interface ShoppingSectionProps {
  shopping: CityGuide['shopping']
}

export default function ShoppingSection({ shopping }: ShoppingSectionProps) {
  return (
    <section className="py-20 bg-white">
      <Container>
        <SectionHeading title="Shopping" />
        <div className="max-w-3xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h3 className="font-semibold text-gray-900 mb-3">Groceries</h3>
            <div className="flex flex-wrap gap-2">
              {shopping.groceries.map((store) => (
                <span key={store} className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm">
                  {store}
                </span>
              ))}
            </div>
          </div>
          <div>
            <h3 className="font-semibold text-gray-900 mb-3">Clothing & Essentials</h3>
            <div className="flex flex-wrap gap-2">
              {shopping.clothing.map((store) => (
                <span key={store} className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm">
                  {store}
                </span>
              ))}
            </div>
          </div>
          <div className="md:col-span-2">
            <h3 className="font-semibold text-gray-900 mb-3">Markets</h3>
            <p className="text-gray-600">{shopping.markets}</p>
          </div>
          <div className="md:col-span-2">
            <p className="text-sm text-tulip-600 font-medium">{shopping.tip}</p>
          </div>
        </div>
      </Container>
    </section>
  )
}
