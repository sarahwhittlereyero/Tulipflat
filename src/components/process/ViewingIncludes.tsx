import Card from '@/components/ui/Card'
import { siteContent } from '@/data/siteContent'

const icons = [
  <svg key="report" className="w-8 h-8 text-tulip-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" /></svg>,
  <svg key="video" className="w-8 h-8 text-tulip-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" /></svg>,
  <svg key="custom" className="w-8 h-8 text-tulip-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" /></svg>,
]

export default function ViewingIncludes() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {siteContent.process.viewingIncludes.map((item, i) => (
        <Card key={item.title} className="text-center">
          <div className="flex justify-center mb-4">{icons[i]}</div>
          <h3 className="font-semibold text-lg text-gray-900 mb-2">{item.title}</h3>
          <p className="text-gray-600 text-sm">{item.description}</p>
        </Card>
      ))}
    </div>
  )
}
