import express from 'express';
import cors from 'cors';

const app = express();
const PORT = 5000;

app.use(cors());
app.use(express.json());

const properties = [
  {
    id: 1,
    title: 'Seaside Glass House',
    location: 'Malibu, California',
    country: 'United States',
    type: 'Beachfront',
    price: 240,
    rating: 4.9,
    reviews: 124,
    guests: 6,
    beds: 3,
    baths: 2,
    host: 'Evelyn',
    image: 'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=1200&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1494526585095-c41746248156?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?auto=format&fit=crop&w=1200&q=80'
    ],
    description: 'Wake up to ocean views and a private deck with sunrise coffee, then spend the day lounging in this bright glass-front sanctuary.',
    amenities: ['Ocean view', 'Private deck', 'Fast Wi-Fi', 'Air conditioning', 'Kitchen', 'Free parking'],
    featured: true,
    superhost: true,
    tag: 'Superhost'
  },
  {
    id: 2,
    title: 'Forest Canopy Cabin',
    location: 'Bend, Oregon',
    country: 'United States',
    type: 'Cabin',
    price: 185,
    rating: 4.8,
    reviews: 92,
    guests: 4,
    beds: 2,
    baths: 2,
    host: 'Noah',
    image: 'https://images.unsplash.com/photo-1445019980597-93fa8acb246c?auto=format&fit=crop&w=1200&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1445019980597-93fa8acb246c?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1473448912268-2022ce9509d8?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?auto=format&fit=crop&w=1200&q=80'
    ],
    description: 'A cozy cedar cabin tucked beneath tall pines with a wood stove, reading nook, and quick access to mountain trails.',
    amenities: ['Hiking access', 'Wood stove', 'Fireplace', 'Hot tub', 'Washer', 'Dedicated workspace'],
    featured: true,
    superhost: false,
    tag: 'Popular'
  },
  {
    id: 3,
    title: 'City Loft Escape',
    location: 'New York, New York',
    country: 'United States',
    type: 'Apartment',
    price: 220,
    rating: 4.7,
    reviews: 201,
    guests: 5,
    beds: 2,
    baths: 2,
    host: 'Mila',
    image: 'https://images.unsplash.com/photo-1494526585095-c41746248156?auto=format&fit=crop&w=1200&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1494526585095-c41746248156?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1484154218962-a197022b5858?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=1200&q=80'
    ],
    description: 'Stylish downtown loft with skyline views, designer finishes, and a walkable location near cafes and subway access.',
    amenities: ['Skyline view', 'Gym access', 'Chef kitchen', 'Washer', 'Fast Wi-Fi', 'Central location'],
    featured: true,
    superhost: true,
    tag: 'Trending'
  },
  {
    id: 4,
    title: 'Sunset Courtyard Villa',
    location: 'Barcelona, Spain',
    country: 'Spain',
    type: 'Villa',
    price: 310,
    rating: 5.0,
    reviews: 72,
    guests: 8,
    beds: 4,
    baths: 3,
    host: 'Lucia',
    image: 'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?auto=format&fit=crop&w=1200&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1494526585095-c41746248156?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=1200&q=80'
    ],
    description: 'Chic Mediterranean villa with open-air dining, a courtyard plunge pool, and sunset views over the city skyline.',
    amenities: ['Pool', 'Courtyard', 'BBQ grill', 'Air conditioning', 'Kitchen', 'City views'],
    featured: false,
    superhost: true,
    tag: 'Luxury'
  },
  {
    id: 5,
    title: 'Lakeside Modern Retreat',
    location: 'Lake Tahoe, Nevada',
    country: 'United States',
    type: 'Lakeside',
    price: 260,
    rating: 4.9,
    reviews: 138,
    guests: 7,
    beds: 3,
    baths: 3,
    host: 'Avery',
    image: 'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=1200&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1445019980597-93fa8acb246c?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1473448912268-2022ce9509d8?auto=format&fit=crop&w=1200&q=80'
    ],
    description: 'A modern lakeside escape with panoramic windows, a private dock, and cozy outdoor spaces for stargazing.',
    amenities: ['Lake access', 'Private dock', 'Fire pit', 'Sauna', 'Kitchen', 'Parking'],
    featured: false,
    superhost: false,
    tag: 'New'
  },
  {
    id: 6,
    title: 'Coastal Studio House',
    location: 'Santorini, Greece',
    country: 'Greece',
    type: 'Studio',
    price: 198,
    rating: 4.8,
    reviews: 88,
    guests: 3,
    beds: 1,
    baths: 1,
    host: 'Nico',
    image: 'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?auto=format&fit=crop&w=1200&q=80',
    gallery: [
      'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1494526585095-c41746248156?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=1200&q=80'
    ],
    description: 'A bright whitewashed studio overlooking the coast, designed for slow mornings, sunset dinners, and beach walks.',
    amenities: ['Sea view', 'Sun terrace', 'Breakfast included', 'Fast Wi-Fi', 'Beach access', 'Air conditioning'],
    featured: false,
    superhost: true,
    tag: 'Beachfront'
  }
];

function getFilteredProperties({ location = '', type = 'Any type', guests = 0, price = 400 }) {
  let filtered = [...properties];

  if (location) {
    const query = location.toLowerCase();
    filtered = filtered.filter((property) =>
      property.location.toLowerCase().includes(query) ||
      property.country.toLowerCase().includes(query) ||
      property.title.toLowerCase().includes(query)
    );
  }

  if (type && type !== 'Any type') {
    filtered = filtered.filter((property) => property.type === type);
  }

  if (Number(guests) > 0) {
    filtered = filtered.filter((property) => property.guests >= Number(guests));
  }

  if (Number(price) > 0) {
    filtered = filtered.filter((property) => property.price <= Number(price));
  }

  return filtered;
}

app.get('/api/properties', (req, res) => {
  const result = getFilteredProperties({
    location: req.query.location || '',
    type: req.query.type || 'Any type',
    guests: req.query.guests || 0,
    price: req.query.price || 400
  });

  res.json(result);
});

app.get('/api/properties/:id', (req, res) => {
  const match = properties.find((property) => property.id === Number(req.params.id));

  if (!match) {
    return res.status(404).json({ message: 'Property not found' });
  }

  return res.json(match);
});

app.post('/api/bookings', (req, res) => {
  const { propertyId, checkin, checkout, guests } = req.body;

  const property = properties.find((item) => item.id === Number(propertyId));

  if (!property || !checkin || !checkout || new Date(checkout) <= new Date(checkin)) {
    return res.status(400).json({ message: 'Please provide valid booking details.' });
  }

  const nights = Math.max(1, Math.round((new Date(checkout) - new Date(checkin)) / 86400000));
  const subtotal = property.price * nights;
  const total = subtotal + 54;

  return res.json({
    success: true,
    property,
    checkin,
    checkout,
    guests,
    nights,
    subtotal,
    serviceFee: 54,
    total
  });
});

app.get('/api/health', (_req, res) => {
  res.json({ status: 'ok' });
});

app.listen(PORT, () => {
  console.log(`Airbnb API listening at http://localhost:${PORT}`);
});
