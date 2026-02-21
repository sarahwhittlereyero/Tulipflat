interface StepCardProps {
  number: number
  title: string
  description: string
}

export default function StepCard({ number, title, description }: StepCardProps) {
  return (
    <div className="flex gap-6 items-start">
      <div className="shrink-0 w-14 h-14 rounded-full bg-tulip-600 text-white flex items-center justify-center">
        <span className="font-display text-xl">{number}</span>
      </div>
      <div>
        <h3 className="font-semibold text-xl text-gray-900 mb-2">{title}</h3>
        <p className="text-gray-600 leading-relaxed">{description}</p>
      </div>
    </div>
  )
}
