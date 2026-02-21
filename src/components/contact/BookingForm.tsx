import { useState } from 'react'
import type { FormEvent } from 'react'
import Button from '@/components/ui/Button'

export default function BookingForm() {
  const [submitted, setSubmitted] = useState(false)

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setSubmitted(true)
  }

  if (submitted) {
    return (
      <div className="text-center py-12">
        <div className="w-16 h-16 rounded-full bg-leaf-100 text-leaf-600 flex items-center justify-center mx-auto mb-6">
          <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h3 className="font-display text-2xl text-gray-900 mb-3">Thank you!</h3>
        <p className="text-gray-600">We will contact you as soon as possible.</p>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div>
        <label htmlFor="location" className="block text-sm font-medium text-gray-700 mb-2">
          Where is the viewing? (City, address and post code)
        </label>
        <input
          id="location"
          type="text"
          required
          className="w-full rounded-lg border border-gray-300 px-4 py-3 text-gray-900 placeholder-gray-400 focus:border-tulip-500 focus:ring-2 focus:ring-tulip-200 focus:outline-none transition-colors"
          placeholder="e.g. Rotterdam, Hofdijk 239, 3032 BB"
        />
      </div>

      <div>
        <label htmlFor="date" className="block text-sm font-medium text-gray-700 mb-2">
          When is the viewing? (DD-MM-YYYY)
        </label>
        <input
          id="date"
          type="text"
          required
          className="w-full rounded-lg border border-gray-300 px-4 py-3 text-gray-900 placeholder-gray-400 focus:border-tulip-500 focus:ring-2 focus:ring-tulip-200 focus:outline-none transition-colors"
          placeholder="e.g. 15-03-2026"
        />
      </div>

      <div>
        <label htmlFor="notes" className="block text-sm font-medium text-gray-700 mb-2">
          Anything else you would want us to know?
        </label>
        <textarea
          id="notes"
          rows={4}
          className="w-full rounded-lg border border-gray-300 px-4 py-3 text-gray-900 placeholder-gray-400 focus:border-tulip-500 focus:ring-2 focus:ring-tulip-200 focus:outline-none transition-colors resize-y"
          placeholder="Any specific things you'd like us to check..."
        />
      </div>

      <div>
        <label htmlFor="link" className="block text-sm font-medium text-gray-700 mb-2">
          Link to the property
        </label>
        <input
          id="link"
          type="url"
          required
          className="w-full rounded-lg border border-gray-300 px-4 py-3 text-gray-900 placeholder-gray-400 focus:border-tulip-500 focus:ring-2 focus:ring-tulip-200 focus:outline-none transition-colors"
          placeholder="https://..."
        />
      </div>

      <Button type="submit" size="lg" className="w-full">
        Send
      </Button>
    </form>
  )
}
