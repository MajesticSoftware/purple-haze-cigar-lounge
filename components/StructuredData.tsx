export default function StructuredData() {
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://purplehazecigars.com'
  
  const localBusinessSchema = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    '@id': siteUrl,
    name: 'Purple Haze Mobile Cigar Lounge',
    description: 'Purple Haze Mobile Cigar Lounge delivers a first-class mobile cigar experience that blends luxury, relaxation, and community. Premium cigars, luxury lounge setup for corporate events, weddings, private parties, golf tournaments and more.',
    url: siteUrl,
    telephone: '+1-443-406-6816',
    email: 'phazecigars2024@protonmail.com',
    image: `${siteUrl}/PurpleHazeLogo.jpeg`,
    logo: `${siteUrl}/PurpleHazeLogo.jpeg`,
    priceRange: '$$$',
    areaServed: [
      {
        '@type': 'State',
        name: 'Maryland',
      },
      {
        '@type': 'State',
        name: 'Virginia',
      },
      {
        '@type': 'Place',
        name: 'Washington, D.C.',
      },
    ],
    serviceType: [
      'Mobile Cigar Lounge',
      'Event Cigar Catering',
      'Wedding Cigar Bar',
      'Corporate Event Cigar Service',
      'Private Party Cigar Service',
      'Golf Tournament Cigar Bar',
    ],
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '5',
      ratingCount: '500',
      bestRating: '5',
      worstRating: '1',
    },
    sameAs: [],
  }

  const serviceSchema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: 'Mobile Cigar Lounge Service',
    provider: {
      '@type': 'LocalBusiness',
      name: 'Purple Haze Mobile Cigar Lounge',
    },
    description: 'Premium mobile cigar lounge experience featuring hand-picked cigars, luxury lounge seating, and professional service for corporate events, weddings, private parties, golf tournaments, and more.',
    areaServed: ['Maryland', 'Virginia', 'Washington D.C.'],
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'Event Services',
      itemListElement: [
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Corporate Events',
            description: 'Elevate your networking mixers, team celebrations, and executive gatherings with our premium mobile lounge experience.',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Weddings & Celebrations',
            description: 'Make your special day unforgettable with a sophisticated cigar lounge for your wedding, bachelor party, or anniversary.',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Private Parties',
            description: 'Birthday celebrations, milestone events, and exclusive gatherings deserve the distinguished touch of Purple Haze.',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Golf Tournaments',
            description: 'Add luxury to your golf event with our mobile lounge, perfect for the 19th hole or course-side relaxation.',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Festivals & Pop-ups',
            description: 'Stand out at festivals and branded activations with our eye-catching mobile lounge setup.',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Charity Events',
            description: 'Support your cause with style. Our mobile lounge adds prestige to charity galas and fundraising events.',
          },
        },
      ],
    },
  }

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'What is a mobile cigar lounge?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'A mobile cigar lounge is a premium cigar experience that comes directly to your event. Purple Haze Mobile Cigar Lounge brings luxury seating, premium hand-selected cigars, and professional service to corporate events, weddings, private parties, and more.',
        },
      },
      {
        '@type': 'Question',
        name: 'What areas does Purple Haze Mobile Cigar Lounge serve?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Purple Haze Mobile Cigar Lounge serves Maryland, Virginia, and the Washington D.C. metropolitan area. We bring our premium mobile cigar experience directly to your event location.',
        },
      },
      {
        '@type': 'Question',
        name: 'What types of events can Purple Haze cater?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'We cater corporate events, weddings, bachelor parties, private parties, golf tournaments, festivals, charity galas, and any special occasion where you want to add a touch of luxury and sophistication.',
        },
      },
      {
        '@type': 'Question',
        name: 'How do I book Purple Haze Mobile Cigar Lounge?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'You can book Purple Haze Mobile Cigar Lounge by calling (443) 406-6816 or emailing phazecigars2024@protonmail.com. We offer customizable packages for any event size.',
        },
      },
    ],
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(localBusinessSchema).replace(/</g, '\\u003c'),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(serviceSchema).replace(/</g, '\\u003c'),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(faqSchema).replace(/</g, '\\u003c'),
        }}
      />
    </>
  )
}
