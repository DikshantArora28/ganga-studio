export type PortfolioCategory = {
  id: string
  label: string
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
  { id: 'engagement', label: 'Engagement' },
  { id: 'mehendi', label: 'Mehendi' },
  { id: 'reception', label: 'Reception' },
  { id: 'haldi', label: 'Haldi' },
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

export const portfolioItems: PortfolioItem[] = [
  // Weddings
  { id: '15', category: 'wedding',     title: 'Royal Sikh Wedding',          image: '/photos/15.jpg',  width: 800, height: 1000, alt: 'Sikh bride and groom on grand staircase' },
  { id: '16', category: 'wedding',     title: 'Hindu Wedding Ceremony',      image: '/photos/16.jpg',  width: 800, height: 700,  alt: 'Hindu couple at floral mandap' },
  { id: '19', category: 'wedding',     title: 'Gurudwara Anand Karaj',       image: '/photos/19.jpg',  width: 800, height: 1100, alt: 'Sikh wedding ceremony at Gurudwara' },
  { id: '22', category: 'wedding',     title: 'Jaymala Ceremony',            image: '/photos/22.jpg',  width: 800, height: 700,  alt: 'Bride and groom exchanging garlands' },
  { id: '20', category: 'wedding',     title: 'Outdoor Wedding Portrait',    image: '/photos/20.jpg',  width: 800, height: 1100, alt: 'Couple under tree at wedding venue' },
  { id: '27', category: 'wedding',     title: 'Wedding Night Portrait',      image: '/photos/27.jpg',  width: 800, height: 900,  alt: 'Couple at outdoor night wedding' },

  // Pre-Wedding
  { id: '9',  category: 'pre-wedding', title: 'Smoke Bomb Shoot',            image: '/photos/9.jpg',   width: 800, height: 900,  alt: 'Couple with colorful smoke bombs' },
  { id: '1',  category: 'pre-wedding', title: 'Suspension Bridge Romance',   image: '/photos/1.jpg',   width: 800, height: 600,  alt: 'Couple walking on suspension bridge' },
  { id: '5',  category: 'pre-wedding', title: 'Heritage Location Shoot',     image: '/photos/5.jpg',   width: 800, height: 1000, alt: 'Couple at red Indian heritage structure' },
  { id: '6',  category: 'pre-wedding', title: 'Lakeside Pre-Wedding',        image: '/photos/6.jpg',   width: 800, height: 1100, alt: 'Sikh couple at lakeside' },
  { id: '2',  category: 'pre-wedding', title: 'Royal Enfield Shoot',         image: '/photos/2.jpg',   width: 800, height: 600,  alt: 'Couple on Royal Enfield motorcycle' },
  { id: '4',  category: 'pre-wedding', title: 'Groom in the Air',            image: '/photos/4.jpg',   width: 800, height: 900,  alt: 'Sikh groom jumping with bride' },
  { id: '8',  category: 'pre-wedding', title: 'Ancient Ruins Shoot',         image: '/photos/8.jpg',   width: 800, height: 700,  alt: 'Couple at ancient ruins' },
  { id: '10', category: 'pre-wedding', title: 'Mountain Adventure Shoot',    image: '/photos/10.jpg',  width: 800, height: 700,  alt: 'Couple in Jeep with prayer flags' },
  { id: '3',  category: 'pre-wedding', title: 'Creative Pre-Wedding',        image: '/photos/3.jpg',   width: 800, height: 900,  alt: 'Couple with red phone booth' },

  // Engagement
  { id: '7',  category: 'engagement',  title: 'Sky Lantern Proposal',        image: '/photos/7.jpg',   width: 800, height: 600,  alt: 'Romantic proposal with sky lanterns at night' },
  { id: '11', category: 'engagement',  title: 'Heritage Proposal',           image: '/photos/11.jpg',  width: 800, height: 1100, alt: 'Groom kneeling at heritage monument' },
  { id: '18', category: 'engagement',  title: 'Ring Ceremony',               image: '/photos/18.jpg',  width: 800, height: 700,  alt: 'Couple holding engagement rings' },

  // Mehendi
  { id: '12', category: 'mehendi',     title: 'Bridal Mehendi Details',      image: '/photos/12.jpg',  width: 800, height: 1000, alt: 'Bride close-up with mehendi and bridal lehenga' },
  { id: '14', category: 'mehendi',     title: 'Wedding Rings & Mehendi',     image: '/photos/14.jpg',  width: 800, height: 800,  alt: 'Couple hands with mehendi and wedding rings' },

  // Detail shots
  { id: '21', category: 'traditional', title: 'Groom\'s Gold Sword',         image: '/photos/21.jpg',  width: 800, height: 700,  alt: 'Groom holding ceremonial gold sword' },
  { id: '24', category: 'wedding',     title: 'Sikh Wedding Portrait',       image: '/photos/24.jpg',  width: 800, height: 1000, alt: 'Sikh bride and groom full portrait' },
  { id: '26', category: 'wedding',     title: 'Sikh Couple Close-Up',        image: '/photos/26.jpg',  width: 800, height: 1000, alt: 'Sikh couple romantic close-up portrait' },
  { id: '28', category: 'wedding',     title: 'Outdoor Wedding',             image: '/photos/28.jpg',  width: 800, height: 1000, alt: 'Couple at outdoor wedding ceremony' },
]
