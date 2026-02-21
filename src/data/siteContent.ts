export const siteContent = {
  name: 'TulipFlat',
  tagline: 'Find Student Housing in the Netherlands Easily',
  description: 'We visit rental apartments on your behalf, so you don\'t have to be in the Netherlands to find your perfect student housing.',
  mission: 'Helping internationals find housing in the Netherlands; no need to be here in person.',
  values: 'We stand for transparency, trust, simplicity, and accessibility, making the housing search clear and stress-free.',

  contact: {
    address: 'Hofdijk 239, Rotterdam',
    phone: '+34644718505',
    email: 'sarah.whittle.reyero@gmail.com',
    instagram: '@tulipflat',
    instagramUrl: 'https://www.instagram.com/tulipflat',
  },

  hours: {
    weekdays: '07:00 – 18:00',
    weekends: 'Closed',
  },

  nav: [
    { label: 'How we work', href: '/process' },
    { label: 'Our tips', href: '/tips' },
    { label: 'About us', href: '/about' },
    { label: 'Contact us', href: '/contact' },
  ],

  process: {
    headline: 'Search online, we\'ll visit the place for you, book safely, and move in with confidence.',
    subheadline: 'Skip the stress of hunting for housing without knowing the city, the neighborhood, the apartment, or your future roommates.',
    steps: [
      {
        number: 1,
        title: 'Find your property',
        description: 'Discover the best areas to live based on your university and preferences. Check out our tips for the housing search!',
      },
      {
        number: 2,
        title: 'Book your viewing. And get your report!',
        description: 'Select the listings you like, and we\'ll attend the viewings and send you a report.',
      },
      {
        number: 3,
        title: 'Make your decision!',
        description: 'Review our detailed viewing report and decide with confidence. If everything feels right, you can proceed with the contract, if not, you walk away. No pressure.',
      },
    ],
    viewingIncludes: [
      {
        title: 'Detailed Report',
        description: 'A comprehensive written report covering the property condition, neighborhood, and our honest assessment.',
      },
      {
        title: 'Video Call',
        description: 'Walk through the property with us live via video call so you can see everything in real time.',
      },
      {
        title: 'Custom Requirements',
        description: 'Need something specific checked? Let us know about your requirements and we\'ll cover them.',
      },
    ],
  },

  about: {
    headline: 'We\'re Sarah & Nathan, two students who (more than) once struggled with finding housing in the Netherlands.',
    story: [
      'Sarah combines Canadian and Spanish heritage, while Nathan has Italian-American roots. We met four years ago at the University of Groningen.',
      'Sarah currently pursues a Master\'s degree in Rotterdam after living in the Netherlands for years. Nathan studies at Tilburg University after spending considerable time in The Hague.',
      'We navigated housing searches across multiple Dutch cities, gaining deep knowledge of the market\'s challenges. This experience motivated us to address the housing crisis facing international students.',
    ],
    problem: 'Trying to secure housing in the Netherlands from abroad is stressful. Photos don\'t always match reality, viewings fill up quickly, and scams target international students who can\'t be there in person.',
    solution: 'TulipFlat goes to the viewing for you. We check that the listing is real, assess the property honestly, and report back clearly.',
  },
} as const
