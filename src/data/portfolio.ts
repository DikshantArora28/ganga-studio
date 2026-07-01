export type PortfolioCategory = {
  id: string
  label: string
  color?: string
}

export type PortfolioItem = {
  id: string
  category: string
  title: string
  image: string
  width: number
  height: number
  alt: string
}

export const portfolioCategories: PortfolioCategory[] = [
  { id: 'all', label: 'All' },
  { id: 'wedding', label: 'Wedding' },
  { id: 'pre-wedding', label: 'Pre-Wedding' },
  { id: 'haldi', label: 'Haldi' },
  { id: 'mehendi', label: 'Mehendi' },
  { id: 'reception', label: 'Reception' },
  { id: 'engagement', label: 'Engagement' },
  { id: 'baby', label: 'Baby' },
  { id: 'birthday', label: 'Birthday' },
  { id: 'maternity', label: 'Maternity' },
  { id: 'traditional', label: 'Traditional' },
  { id: 'studio', label: 'Studio' },
  { id: 'family', label: 'Family' },
  { id: 'passport', label: 'Passport' },
  { id: 'corporate', label: 'Corporate' },
  { id: 'products', label: 'Products' },
  { id: 'events', label: 'Events' },
]

// Unsplash placeholder images - replace with actual photos later
export const portfolioItems: PortfolioItem[] = [
  { id: '1', category: 'wedding', title: 'Wedding Ceremony', image: 'https://images.unsplash.com/photo-1519741497674-611481863552?w=800&q=80', width: 800, height: 1200, alt: 'Wedding ceremony photography' },
  { id: '2', category: 'wedding', title: 'Bridal Portrait', image: 'https://images.unsplash.com/photo-1606216794074-735e91aa2c92?w=800&q=80', width: 800, height: 600, alt: 'Bridal portrait photography' },
  { id: '3', category: 'pre-wedding', title: 'Romantic Shoot', image: 'https://images.unsplash.com/photo-1529543544282-ea669407fca3?w=800&q=80', width: 800, height: 1000, alt: 'Pre-wedding romantic shoot' },
  { id: '4', category: 'baby', title: 'Newborn Session', image: 'https://images.unsplash.com/photo-1519689373023-dd07c7988603?w=800&q=80', width: 800, height: 800, alt: 'Newborn baby photography' },
  { id: '5', category: 'maternity', title: 'Maternity Glow', image: 'https://images.unsplash.com/photo-1620916566398-39f1143ab7be?w=800&q=80', width: 800, height: 1100, alt: 'Maternity photography' },
  { id: '6', category: 'engagement', title: 'Engagement Story', image: 'https://images.unsplash.com/photo-1522673607200-164d1b6ce486?w=800&q=80', width: 800, height: 900, alt: 'Engagement photography' },
  { id: '7', category: 'wedding', title: 'Candid Moment', image: 'https://images.unsplash.com/photo-1511285560929-80b456fea0bc?w=800&q=80', width: 800, height: 700, alt: 'Candid wedding photography' },
  { id: '8', category: 'studio', title: 'Studio Portrait', image: 'https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?w=800&q=80', width: 800, height: 1000, alt: 'Studio portrait photography' },
  { id: '9', category: 'family', title: 'Family Portrait', image: 'https://images.unsplash.com/photo-1581952976147-5a2d15560349?w=800&q=80', width: 800, height: 600, alt: 'Family portrait photography' },
  { id: '10', category: 'birthday', title: 'Birthday Celebration', image: 'https://images.unsplash.com/photo-1530103862676-de8c9debad1d?w=800&q=80', width: 800, height: 800, alt: 'Birthday celebration photography' },
  { id: '11', category: 'haldi', title: 'Haldi Ceremony', image: 'https://images.unsplash.com/photo-1583939003579-730e3918a45a?w=800&q=80', width: 800, height: 1100, alt: 'Haldi ceremony photography' },
  { id: '12', category: 'reception', title: 'Reception Night', image: 'https://images.unsplash.com/photo-1478146896981-b80fe463b330?w=800&q=80', width: 800, height: 900, alt: 'Reception photography' },
  { id: '13', category: 'traditional', title: 'Traditional Attire', image: 'https://images.unsplash.com/photo-1583391733956-3750e0ff4e8b?w=800&q=80', width: 800, height: 1200, alt: 'Traditional photography' },
  { id: '14', category: 'corporate', title: 'Corporate Portrait', image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?w=800&q=80', width: 800, height: 700, alt: 'Corporate photography' },
  { id: '15', category: 'events', title: 'Event Coverage', image: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800&q=80', width: 800, height: 600, alt: 'Event photography' },
  { id: '16', category: 'mehendi', title: 'Mehendi Art', image: 'https://images.unsplash.com/photo-1591604021695-0c69b7c05981?w=800&q=80', width: 800, height: 1000, alt: 'Mehendi photography' },
  { id: '17', category: 'pre-wedding', title: 'Golden Hour', image: 'https://images.unsplash.com/photo-1516589178581-6cd7833ae3b2?w=800&q=80', width: 800, height: 800, alt: 'Pre-wedding golden hour' },
  { id: '18', category: 'baby', title: 'First Birthday', image: 'https://images.unsplash.com/photo-1566004100631-35d015d6a491?w=800&q=80', width: 800, height: 900, alt: 'First birthday photography' },
]
