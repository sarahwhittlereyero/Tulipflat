interface SectionHeadingProps {
  title: string
  subtitle?: string
  centered?: boolean
  className?: string
}

export default function SectionHeading({ title, subtitle, centered = true, className = '' }: SectionHeadingProps) {
  return (
    <div className={`mb-12 ${centered ? 'text-center' : ''} ${className}`}>
      <h2 className="font-display text-3xl md:text-4xl text-gray-900">{title}</h2>
      {subtitle && <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">{subtitle}</p>}
    </div>
  )
}
