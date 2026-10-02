import { useEffect, useState } from 'react'
import './App.css'

const photos = [
  { src: '/listing/hero-1.jpeg', alt: 'Apartment courtyard' },
  { src: '/listing/hero-2.jpeg', alt: 'Living room' },
  { src: '/listing/hero-3.jpeg', alt: 'Living room seating' },
  { src: '/listing/hero-4.jpeg', alt: 'Apartment interior' },
  { src: '/listing/hero-5.jpeg', alt: 'Outdoor pool' },
  { src: '/listing/living.jpeg', alt: 'Living room' },
  { src: '/listing/bedroom.jpeg', alt: 'Bedroom' },
  { src: '/listing/pool.jpeg', alt: 'Pool' },
]

function Icon({ name, size = 20, className = '' }) {
  const shared = { width: size, height: size, viewBox: '0 0 24 24', fill: 'none', stroke: 'currentColor', strokeWidth: 1.8, strokeLinecap: 'round', strokeLinejoin: 'round', className, 'aria-hidden': true }
  const paths = {
    search: <><circle cx="11" cy="11" r="6.5" /><path d="m16 16 4 4" /></>,
    globe: <><circle cx="12" cy="12" r="9" /><path d="M3 12h18M12 3c2.3 2.4 3.5 5.4 3.5 9S14.3 18.6 12 21c-2.3-2.4-3.5-5.4-3.5-9S9.7 5.4 12 3Z" /></>,
    menu: <><path d="M4 7h16M4 12h16M4 17h16" /></>,
    share: <><path d="M12 16V3m0 0L7.5 7.5M12 3l4.5 4.5M5 13v6a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2v-6" /></>,
    heart: <path d="M20.8 8.6c0 5.3-8.8 10.4-8.8 10.4S3.2 13.9 3.2 8.6A4.6 4.6 0 0 1 12 6.8a4.6 4.6 0 0 1 8.8 1.8Z" />,
    grid: <><rect x="4" y="4" width="6" height="6" /><rect x="14" y="4" width="6" height="6" /><rect x="4" y="14" width="6" height="6" /><rect x="14" y="14" width="6" height="6" /></>,
    outdoor: <><path d="M4 20h16M7 20v-6m10 6v-6M5 14h14l-2-5H7l-2 5Zm7-5V3" /></>,
    snow: <><path d="m12 2 1.1 3.2L16 4l-1.8 2.9L17 8l-3.2.7L14 12l-2-2-2 2 .2-3.3L7 8l2.8-1.1L8 4l2.9 1.2L12 2ZM4 17l2 2m12-2-2 2M4 19l2-2m12 2-2-2" /></>,
    key: <><circle cx="8" cy="15" r="3" /><path d="m10.3 12.7 7-7 2 2-1.5 1.5 1.2 1.2-1.5 1.5-1.2-1.2-4 4" /></>,
    bed: <><path d="M3 19v-7h18v7M3 16h18M6 12V8h5a3 3 0 0 1 3 3v1M3 19v2m18-2v2" /></>,
    sofa: <><path d="M4 18v-5a3 3 0 0 1 3-3h10a3 3 0 0 1 3 3v5M3 18h18M6 10V7h3v3m6 0V7h3v3M5 18v3m14-3v3" /></>,
    kitchen: <><path d="M5 3v18M5 11h14M9 3v8m10 0V5a2 2 0 0 0-4 0v6m-8 4h5m5 0h2" /></>,
    wifi: <><path d="M3.5 9.5a12 12 0 0 1 17 0M6.8 13a7.3 7.3 0 0 1 10.4 0M10.1 16.4a2.7 2.7 0 0 1 3.8 0M12 20h.01" /></>,
    desk: <><path d="M4 7h16v9H4zM8 20v-4m8 4v-4M2 20h20" /></>,
    car: <><path d="m5 16 1.5-5h11l1.5 5M4 16h16v3H4zM7 19h.01M17 19h.01M8 11l1-3h6l1 3" /></>,
    pool: <><path d="M3 16c2 1.5 4 1.5 6 0s4-1.5 6 0 4 1.5 6 0M3 20c2 1.5 4 1.5 6 0s4-1.5 6 0 4 1.5 6 0M7 12V7h10v5M10 7V4m4 3V4" /></>,
    tub: <><path d="M4 12h16v4a4 4 0 0 1-4 4H8a4 4 0 0 1-4-4v-4ZM7 8V6a2 2 0 0 1 4 0v2M5 20v1m14-1v1" /></>,
    paw: <><circle cx="7" cy="9" r="1.5" /><circle cx="12" cy="6" r="1.5" /><circle cx="17" cy="9" r="1.5" /><path d="M8.2 17.8c0-2.4 1.7-4.3 3.8-4.3s3.8 1.9 3.8 4.3c0 1.5-1.4 2.2-3.8 2.2s-3.8-.7-3.8-2.2Z" /></>,
    camera: <><path d="M4 7h4l1.5-2h5L16 7h4v12H4z" /><circle cx="12" cy="13" r="3.2" /></>,
    chevron: <path d="m7 10 5 5 5-5" />,
    flag: <path d="M5 21V4m0 1h11l-1 4 1 4H5" />,
    star: <path fill="currentColor" stroke="none" d="m12 2.8 2.8 5.7 6.3.9-4.5 4.4 1.1 6.2-5.7-3-5.7 3 1.1-6.2L2.9 9.4l6.3-.9L12 2.8Z" />,
    pin: <><path d="M20 10c0 5-8 11-8 11S4 15 4 10a8 8 0 1 1 16 0Z" /><circle cx="12" cy="10" r="2.5" /></>,
    close: <path d="m5 5 14 14M19 5 5 19" />,
    left: <path d="m15 18-6-6 6-6" />,
    right: <path d="m9 18 6-6-6-6" />,
  }
  return <svg {...shared}>{paths[name] || paths.star}</svg>
}

function AirbnbLogo() {
  return <a href="#top" className="airbnb-logo" aria-label="Airbnb home"><svg width="32" height="32" viewBox="0 0 32 32" fill="none" aria-hidden="true"><path d="M16 3.2C12 9.5 5.3 17.4 5.3 22.6a3.9 3.9 0 0 0 7.8 0C13.1 18.5 14 11 16 3.2Z" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" /><path d="M16 3.2c4 6.3 10.7 14.2 10.7 19.4a3.9 3.9 0 0 1-7.8 0C18.9 18.5 18 11 16 3.2Z" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" /></svg><span>airbnb</span></a>
}

function Header() {
  return <header className="listing-header" id="top"><div className="listing-container header-inner"><AirbnbLogo /><div className="header-search" role="search" aria-label="Search stays"><span className="search-home">⌂</span><button type="button">Anywhere</button><i /><button type="button">Any week</button><i /><button type="button" className="search-muted">Add guests</button><button type="button" className="search-circle" aria-label="Search"><Icon name="search" size={15} /></button></div><div className="header-controls"><button type="button" className="host-button">Become a host</button><button type="button" className="round-icon" aria-label="Choose language"><Icon name="globe" size={18} /></button><button type="button" className="account-button" aria-label="Open account menu"><Icon name="menu" size={16} /><span className="account-user">●</span></button></div></div></header>
}

function Hero({ openGallery }) {
  return <section className="listing-hero" aria-labelledby="listing-title"><div className="title-row"><h1 id="listing-title">Romantic Jacuzzi 1 BHK Candolim | Mirashhya UG10</h1><div className="title-actions"><button type="button"><Icon name="share" size={17} /> <span>Share</span></button><button type="button"><Icon name="heart" size={17} /> <span>Save</span></button></div></div><div className="photo-mosaic">{photos.slice(0, 5).map((photo, index) => <button className={`mosaic-tile tile-${index + 1}`} type="button" onClick={() => openGallery(index)} key={photo.src} aria-label={`View photo ${index + 1}`}><img src={photo.src} alt={photo.alt} /></button>)}<button type="button" className="show-photos" onClick={() => openGallery(0)}><Icon name="grid" size={15} />Show all photos</button></div></section>
}

function GuestFavourite() {
  return <div className="guest-favourite"><div className="favourite-label"><img src="/listing/laurel-left.png" alt="" /><b>Guest<br />favourite</b><img src="/listing/laurel-right.png" alt="" /></div><p>One of the most loved homes on Airbnb, according to guests</p><div className="favourite-score"><div><strong>4.95</strong><small>Rating</small></div><i /><div><strong>19</strong><small>Reviews</small></div></div></div>
}

const highlights = [['outdoor', 'Outdoor entertainment', 'The pool and alfresco dining are great for summer trips.'], ['snow', 'Designed for staying cool', 'Beat the heat with the A/C and ceiling fan.'], ['key', 'Self check-in', 'You can check in with the building staff.']]
const amenities = [['kitchen', 'Kitchen'], ['wifi', 'Wifi'], ['desk', 'Dedicated workspace'], ['car', 'Free parking on premises'], ['pool', 'Pool'], ['tub', 'Hot tub'], ['paw', 'Pets allowed'], ['camera', 'Exterior security cameras on property'], ['outdoor', 'Carbon monoxide alarm', true], ['outdoor', 'Smoke alarm', true]]

function Overview() {
  const [expanded, setExpanded] = useState(false)
  return <section className="overview section-divider"><h2>Entire serviced apartment in Candolim, India</h2><p className="listing-stats">3 guests · 1 bedroom · 1 bed · 1 bathroom</p><GuestFavourite /><ul className="highlight-list">{highlights.map(([icon, title, body]) => <li key={title}><Icon name={icon} size={24} /><div><b>{title}</b><p>{body}</p></div></li>)}</ul><div className="host-preview"><img src="/listing/host.jpeg" alt="Mirashhya Homes" /><div><b>Hosted by Mirashhya Homes</b><span>2 years hosting</span></div></div><div className="description"><p className="translation">Some info has been automatically translated. <button type="button">Show original</button></p><p className={expanded ? '' : 'description-clamp'}>🌴 Plan Your Relaxing Holiday at Amor De Goa by Mirashhya Homes! ✨ Stay in this cozy 1BHK in the heart of Candolim, featuring a private jacuzzi 🛁 for the perfect unwind. Enjoy high-speed WiFi 💻, Smart TV 📺, pet-friendly comfort 🐾, and stylish interiors. Just minutes from Candolim Beach 🏖️, popular cafés, restaurants, and nightlife 🌆, it’s ideal for couples seeking romance, relaxation, and a touch of luxury in North Goa. ❤️🌴</p><button type="button" className="text-link" onClick={() => setExpanded((value) => !value)}>{expanded ? 'Show less' : 'Show more'} <span>›</span></button></div></section>
}

function SleepSection() {
  return <section className="content-section section-divider"><h2>Where you’ll sleep</h2><div className="sleep-cards"><article><Icon name="bed" size={25} /><b>Bedroom</b><span>1 double bed</span></article><article><Icon name="sofa" size={25} /><b>Living room</b><span>1 sofa</span></article></div></section>
}

function Amenities({ openModal }) {
  return <section className="content-section section-divider"><h2>What this place offers</h2><ul className="amenity-list">{amenities.map(([icon, label, unavailable]) => <li key={label} className={unavailable ? 'unavailable' : ''}><Icon name={icon} size={24} /><span>{label}</span></li>)}</ul><button type="button" className="outline-button" onClick={openModal}>Show all 50 amenities</button></section>
}

function monthDays(year, month) {
  const start = new Date(year, month, 1).getDay()
  const total = new Date(year, month + 1, 0).getDate()
  return Array.from({ length: Math.ceil((start + total) / 7) * 7 }, (_, index) => index - start + 1)
}

function CalendarMonth({ title, month, selected = false }) {
  const names = ['S', 'M', 'T', 'W', 'T', 'F', 'S']
  const disabled = month === 10 ? [18, 19, 20, 21, 22, 23, 24] : []
  return <div className="month"><h3>{title}</h3><div className="week-names">{names.map((name, index) => <span key={`${name}-${index}`}>{name}</span>)}</div><div className="date-grid">{monthDays(2026, month).map((day, index) => day < 1 || day > 31 ? <span key={index} /> : <button type="button" key={index} className={`${selected && day >= 18 && day <= 23 ? 'selected-range ' : ''}${selected && (day === 18 || day === 23) ? 'range-end ' : ''}${disabled.includes(day) ? 'date-disabled' : ''}`}>{day}</button>)}</div></div>
}

function Calendar() {
  return <section className="calendar-section section-divider"><h2>5 nights in Candolim</h2><p>18 Oct 2026 – 23 Oct 2026</p><div className="calendar-grid"><button className="calendar-arrow left-arrow" type="button" aria-label="Previous month"><Icon name="left" size={15} /></button><CalendarMonth title="October 2026" month={9} selected /><CalendarMonth title="November 2026" month={10} /><button className="calendar-arrow right-arrow" type="button" aria-label="Next month"><Icon name="right" size={15} /></button></div><button type="button" className="clear-dates">Clear dates</button></section>
}

function BookingCard() {
  return <aside className="booking-rail"><div className="promo-card"><span className="promo-symbol">%</span><div><b>Get 10% off your next stays.</b><button type="button">Terms apply</button></div><button type="button" className="claim-button">Claim</button></div><div className="booking-card"><p className="booking-price"><u>₹28,499</u> <span>for 5 nights</span></p><div className="booking-fields"><button type="button"><b>CHECK-IN</b><span>10/18/2026</span></button><button type="button"><b>CHECKOUT</b><span>10/23/2026</span></button><button type="button" className="guests-field"><span><b>GUESTS</b><em>2 guests</em></span><Icon name="chevron" size={14} /></button></div><p className="cancellation">Free cancellation before <b>17 October</b></p><button type="button" className="reserve-button">Reserve</button><p className="charge-note">You won’t be charged yet</p></div><button type="button" className="report-link"><Icon name="flag" size={15} /> Report this listing</button></aside>
}

function Reviews() {
  const reviews = [['A', 'Amit', '2 months on Airbnb', '1 week ago', 'Very helpful and responsive team. Safe and peaceful stay. Loved everything about the property.'], ['A', 'Aheesh', '3 years on Airbnb', '2 weeks ago', 'We had a wonderful stay. The apartment was clean, comfortable, and exactly as shown in the photos. The host was very responsive and helpful throughout our stay.'], ['S', 'Samiksha', '8 months on Airbnb', 'May 2026', 'the host nitish was really great n help'], ['V', 'Vedant', '4 years on Airbnb', 'May 2026', 'We had an amazing stay at this property in Goa! The entire home was spotless and exceptionally well-maintained, making us feel comfortable from the moment we arrived.']]
  return <section className="reviews-section section-divider"><div className="review-hero"><div><img src="/listing/laurel-left.png" alt="" /><strong>4.95</strong><img src="/listing/laurel-right.png" alt="" /></div><h2>Guest favourite</h2><p>One of the most loved homes on Airbnb, according to guests</p></div><div className="rating-breakdown"><div className="rating-overall"><b>Overall rating</b>{[5,4,3,2,1].map((star, index) => <span key={star}>{star}<i><em style={{ width: index === 0 ? '95%' : index === 1 ? '5%' : '0%' }} /></i></span>)}</div>{[['Cleanliness','5.0'],['Accuracy','5.0'],['Check-in','5.0'],['Communication','5.0'],['Location','4.8'],['Value','4.8']].map(([label,value]) => <div className="rating-item" key={label}><span>{label}</span><b>{value}</b><Icon name={label === 'Location' ? 'pin' : label === 'Check-in' ? 'key' : 'star'} size={22} /></div>)}</div><div className="topic-chips">{['Comfort 6','Accuracy 5','Hot tub 5','Condition 4','Hospitality 8','Cleanliness 4','Amenities 2','Decor 2','Indoor spaces 2','Location 2'].map((topic) => <span key={topic}>{topic}</span>)}</div><div className="review-grid">{reviews.map(([initial, name, tenure, when, body]) => <article key={name}><div className="review-author"><span>{initial}</span><div><b>{name}</b><small>{tenure}</small></div></div><p className="review-time">★★★★★ <i>·</i> {when}</p><p>{body}</p></article>)}</div><button type="button" className="outline-button">Show all 19 reviews</button></section>
}

function Location() {
  return <section className="location-section section-divider"><h2>Where you’ll be</h2><div className="map-placeholder"><div><Icon name="pin" size={42} /><span>Candolim</span></div></div><b>Candolim, Goa, India</b><p className="map-note">Exact location will be provided after booking.</p><h3>Neighbourhood highlights</h3><p>Located in the heart of Candolim, Amor de Goa offers a peaceful stay with easy access to beaches, cafés, and popular attractions.</p><button type="button" className="text-link">Show more <span>›</span></button></section>
}

function HostSection() {
  const cohosts = ['Sharadeth', 'Aman Dev Pahwa', 'Maria Karen Priyanka', 'Simran']
  return <section className="host-section section-divider"><h2>Meet your host</h2><div className="host-layout"><article className="host-card"><img src="/listing/host.jpeg" alt="Mirashhya Homes" /><h3>Mirashhya Homes</h3><p>Host</p><div><span><b>1,463</b>Reviews</span><span><b>4.68 ★</b>Rating</span><span><b>2</b>Years hosting</span></div></article><div className="host-details"><p>Born in the 80s</p><p>Where I went to school: NICMAR GOA</p><h3>Co-Hosts</h3><div className="cohosts">{cohosts.map((name) => <span key={name}><i>{name[0]}</i>{name}</span>)}</div><h3>Host details</h3><p>Response rate: 100%</p><p>Responds within an hour</p><button type="button" className="dark-button">Message host</button><small>To help protect your payment, always use Airbnb to send money and communicate with hosts.</small></div></div></section>
}

function ThingsToKnow() {
  return <section className="things-section section-divider"><h2>Things to know</h2><div className="things-grid"><article><h3>Cancellation policy</h3><p>Free cancellation before 17 October. Cancel before check-in on 18 October for a partial refund.</p><button type="button" className="text-link">Learn more <span>›</span></button></article><article><h3>House rules</h3><p>Check-in after 2:00 pm</p><p>Checkout before 11:00 am</p><p>3 guests maximum</p><button type="button" className="text-link">Learn more <span>›</span></button></article><article><h3>Safety & property</h3><p>Carbon monoxide alarm not reported</p><p>Smoke alarm not reported</p><p>Exterior security cameras on property</p><button type="button" className="text-link">Learn more <span>›</span></button></article></div></section>
}

function NearbyStays() {
  const titles = ['Beautiful Studio with a view to die for', 'NAQAAB - 1bhk with private pool', 'Greentique Luxury Flat with plunge pool', 'The Tropical Studio | 5 mins to Beach']
  const prices = [23600, 42218, 44506, 22824]
  const ratings = [4.91, 4.95, 4.94, 4.96]
  return <section className="nearby-section section-divider"><div className="nearby-head"><h2>More stays nearby</h2><div><span>1 / 2</span><button type="button" aria-label="Previous"><Icon name="left" size={14} /></button><button type="button" aria-label="Next"><Icon name="right" size={14} /></button></div></div><div className="nearby-grid">{photos.slice(1,5).map((photo,index) => <article key={photo.src}><img src={photo.src} alt="Nearby stay" /><b>{titles[index]}</b><p>₹{prices[index].toLocaleString('en-IN')} for 5 nights <span>★ {ratings[index]}</span></p></article>)}</div></section>
}

function Footer() {
  return <footer className="listing-footer"><div className="listing-container"><span>© 2026 Airbnb, Inc.</span><span>· Privacy · Terms · Sitemap · Company details</span><span>🌐 English (IN) &nbsp; ₹ INR</span></div></footer>
}

function PhotoModal({ index, onClose, onChange }) {
  useEffect(() => {
    const handleKey = (event) => { if (event.key === 'Escape') onClose(); if (event.key === 'ArrowLeft') onChange((index - 1 + photos.length) % photos.length); if (event.key === 'ArrowRight') onChange((index + 1) % photos.length) }
    window.addEventListener('keydown', handleKey)
    return () => window.removeEventListener('keydown', handleKey)
  }, [index, onClose, onChange])
  return <div className="photo-modal" role="dialog" aria-modal="true" aria-label="Photo gallery"><button type="button" className="modal-close" onClick={onClose} aria-label="Close gallery"><Icon name="close" /></button><p>{index + 1} / {photos.length}</p><button type="button" className="modal-arrow modal-previous" onClick={() => onChange((index - 1 + photos.length) % photos.length)} aria-label="Previous photo"><Icon name="left" /></button><img src={photos[index].src} alt={photos[index].alt} /><button type="button" className="modal-arrow modal-next" onClick={() => onChange((index + 1) % photos.length)} aria-label="Next photo"><Icon name="right" /></button></div>
}

function AmenitiesModal({ onClose }) {
  return <div className="amenities-modal" role="dialog" aria-modal="true" aria-label="All amenities"><div><button type="button" className="modal-close" onClick={onClose} aria-label="Close amenities"><Icon name="close" /></button><h2>What this place offers</h2>{['Bedroom and laundry','Entertainment','Heating and cooling','Home safety','Internet and office','Kitchen and dining','Parking and facilities','Services'].map((group) => <section key={group}><h3>{group}</h3><p>✓ {group === 'Kitchen and dining' ? 'Kitchen · Fridge · Microwave · Cooking basics · Kettle' : group === 'Internet and office' ? 'Wifi · Dedicated workspace' : group === 'Parking and facilities' ? 'Free parking on premises · Pool · Hot tub · Gym' : 'Available at this home'}</p></section>)}</div></div>
}

function App() {
  const [photoIndex, setPhotoIndex] = useState(null)
  const [amenitiesOpen, setAmenitiesOpen] = useState(false)
  useEffect(() => { document.body.classList.toggle('modal-open', photoIndex !== null || amenitiesOpen); return () => document.body.classList.remove('modal-open') }, [photoIndex, amenitiesOpen])
  return <><Header /><main className="listing-main"><div className="listing-container"><Hero openGallery={setPhotoIndex} /><div className="listing-body"><div className="main-column"><Overview /><SleepSection /><Amenities openModal={() => setAmenitiesOpen(true)} /><Calendar /></div><BookingCard /></div><Reviews /><Location /><HostSection /><ThingsToKnow /><NearbyStays /></div></main><Footer />{photoIndex !== null && <PhotoModal index={photoIndex} onChange={setPhotoIndex} onClose={() => setPhotoIndex(null)} />}{amenitiesOpen && <AmenitiesModal onClose={() => setAmenitiesOpen(false)} />}</>
}

export default App
