export interface Neighborhood {
  name: string
  description: string
  vibe: string
  priceLevel: 'budget' | 'mid' | 'high'
  safety: string
}

export interface UniversityInfo {
  name: string
  description: string
  strengths: string[]
  highlights: string[]
}

export interface CityGuide {
  slug: string
  name: string
  tagline: string
  welcomeText: string
  neighborhoods: Neighborhood[]
  university: UniversityInfo
  shopping: {
    groceries: string[]
    clothing: string[]
    markets: string
    tip: string
  }
  transport: {
    biking: string
    publicTransit: string
    walking: string
    connections: string
  }
  tips: string[]
}
