const mongoose = require('mongoose');
require('dotenv').config({ path: __dirname + '/../.env' });

const Place = require('../models/Place');
const User = require('../models/User');

const places = [
  {
    title: 'Modern Apartment in Mumbai',
    address: 'Bandra West, Mumbai, Maharashtra, India',
    photos: [
      'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267',
      'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85'
    ],
    description:
      'A modern and comfortable apartment in Bandra West, close to restaurants, shopping and public transportation.',
    perks: ['Wifi', 'TV', 'Air conditioning'],
    extraInfo: 'No smoking. Suitable for families and business travelers.',
    maxGuests: 4,
    price: 4500
  },

  {
    title: 'Beach Villa in Goa',
    address: 'Calangute, North Goa, Goa, India',
    photos: [
      'https://images.unsplash.com/photo-1499793983690-e29da59ef1c2',
      'https://images.unsplash.com/photo-1507525428034-b723cf961d3e'
    ],
    description:
      'Relaxing beach villa near Calangute with easy access to beaches, restaurants and nightlife.',
    perks: ['Wifi', 'Pool', 'Kitchen', 'Air conditioning'],
    extraInfo: 'Perfect for families and groups. Beach is a short drive away.',
    maxGuests: 6,
    price: 6500
  },

  {
    title: 'Heritage Stay in Jaipur',
    address: 'C-Scheme, Jaipur, Rajasthan, India',
    photos: [
      'https://images.unsplash.com/photo-1599661046289-e31897846e41',
      'https://images.unsplash.com/photo-1600607687920-4e2a09cf159d'
    ],
    description:
      'Beautiful heritage-style accommodation in Jaipur, close to historical attractions and local markets.',
    perks: ['Wifi', 'Breakfast', 'TV', 'Air conditioning'],
    extraInfo: 'Please respect the property and local surroundings.',
    maxGuests: 4,
    price: 3500
  },

  {
    title: 'Peaceful Homestay in Manali',
    address: 'Old Manali, Himachal Pradesh, India',
    photos: [
      'https://images.unsplash.com/photo-1510798831971-661eb04b3739',
      'https://images.unsplash.com/photo-1449158743715-0a90ebb6d2d8'
    ],
    description:
      'A peaceful mountain homestay surrounded by nature with beautiful views of the Himalayas.',
    perks: ['Wifi', 'Kitchen', 'Fireplace', 'Parking'],
    extraInfo: 'Ideal for travelers looking for a quiet mountain getaway.',
    maxGuests: 5,
    price: 4000
  },

  {
    title: 'Luxury Apartment in Bengaluru',
    address: 'Indiranagar, Bengaluru, Karnataka, India',
    photos: [
      'https://images.unsplash.com/photo-1493809842364-78817add7ffb',
      'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c'
    ],
    description:
      'Contemporary apartment in Indiranagar, close to restaurants, cafes, shopping and technology parks.',
    perks: ['Wifi', 'TV', 'Air conditioning', 'Parking'],
    extraInfo: 'Great for both business trips and extended stays.',
    maxGuests: 4,
    price: 5000
  },

  {
    title: 'Cozy Studio in Delhi',
    address: 'Hauz Khas, New Delhi, India',
    photos: [
      'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85',
      'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267'
    ],
    description:
      'A cozy modern studio in Hauz Khas, surrounded by cafes, restaurants, shopping and cultural attractions.',
    perks: ['Wifi', 'TV', 'Air conditioning'],
    extraInfo: 'Ideal for couples, solo travelers and business trips.',
    maxGuests: 2,
    price: 3200
  },

  {
    title: 'Lake View Apartment in Udaipur',
    address: 'Lake Pichola, Udaipur, Rajasthan, India',
    photos: [
      'https://images.unsplash.com/photo-1548013146-72479768bada',
      'https://images.unsplash.com/photo-1599661046289-e31897846e41'
    ],
    description:
      'A beautiful apartment with a relaxing atmosphere near Lake Pichola and the historic areas of Udaipur.',
    perks: ['Wifi', 'Kitchen', 'Air conditioning', 'Parking'],
    extraInfo: 'Great choice for couples and families exploring Udaipur.',
    maxGuests: 4,
    price: 4800
  },

  {
    title: 'Mountain Retreat in Shimla',
    address: 'Mashobra, Shimla, Himachal Pradesh, India',
    photos: [
      'https://images.unsplash.com/photo-1510798831971-661eb04b3739',
      'https://images.unsplash.com/photo-1449158743715-0a90ebb6d2d8'
    ],
    description:
      'A peaceful mountain retreat surrounded by pine forests with beautiful views and fresh mountain air.',
    perks: ['Wifi', 'Fireplace', 'Parking', 'Kitchen'],
    extraInfo:
      'Perfect for families and travelers looking for a relaxing mountain stay.',
    maxGuests: 5,
    price: 4200
  },

  {
    title: 'Luxury Villa in Lonavala',
    address: 'Khandala Road, Lonavala, Maharashtra, India',
    photos: [
      'https://images.unsplash.com/photo-1564013799919-ab600027ffc6',
      'https://images.unsplash.com/photo-1600607687920-4e2a09cf159d'
    ],
    description:
      'Spacious luxury villa in Lonavala with modern interiors and plenty of space for families and groups.',
    perks: ['Wifi', 'Pool', 'Kitchen', 'Parking', 'TV'],
    extraInfo:
      'Suitable for families and groups. Please maintain quiet hours after 10 PM.',
    maxGuests: 8,
    price: 8500
  },

  {
    title: 'Modern Home in Hyderabad',
    address: 'Banjara Hills, Hyderabad, Telangana, India',
    photos: [
      'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c',
      'https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea'
    ],
    description:
      'A modern and comfortable home in Banjara Hills with easy access to restaurants, shopping and business districts.',
    perks: ['Wifi', 'TV', 'Air conditioning', 'Parking'],
    extraInfo: 'Suitable for business travelers and families.',
    maxGuests: 4,
    price: 5200
  },

  {
    title: 'Heritage House in Kolkata',
    address: 'Park Street, Kolkata, West Bengal, India',
    photos: [
      'https://images.unsplash.com/photo-1518005020951-eccb494ad742',
      'https://images.unsplash.com/photo-1600585154340-be6161a56a0c'
    ],
    description:
      'A charming heritage-inspired home in central Kolkata, close to restaurants, markets and historical attractions.',
    perks: ['Wifi', 'Kitchen', 'TV', 'Air conditioning'],
    extraInfo:
      'A comfortable option for families and visitors exploring Kolkata.',
    maxGuests: 4,
    price: 3800
  },

  {
    title: 'Backwater Villa in Alleppey',
    address: 'Alappuzha, Kerala, India',
    photos: [
      'https://images.unsplash.com/photo-1602002418082-a4443e081dd1',
      'https://images.unsplash.com/photo-1600607688969-a5bfcd646154'
    ],
    description:
      'A peaceful Kerala-style villa near the backwaters, surrounded by greenery and a relaxing natural environment.',
    perks: ['Wifi', 'Kitchen', 'Parking', 'Air conditioning'],
    extraInfo:
      'Ideal for families and travelers looking for a peaceful Kerala experience.',
    maxGuests: 6,
    price: 5500
  },

  {
    title: 'Beach Apartment in Pondicherry',
    address: 'White Town, Puducherry, India',
    photos: [
      'https://images.unsplash.com/photo-1507525428034-b723cf961d3e',
      'https://images.unsplash.com/photo-1499793983690-e29da59ef1c2'
    ],
    description:
      'A stylish apartment near the beach and cafes of White Town, perfect for a relaxing coastal getaway.',
    perks: ['Wifi', 'Kitchen', 'TV', 'Air conditioning'],
    extraInfo:
      'Beach and restaurants are within easy reach. Suitable for couples and small families.',
    maxGuests: 3,
    price: 4000
  }
];

async function seedPlaces() {
  try {
    await mongoose.connect(process.env.DB_URL);

    console.log('MongoDB connected');

    const user = await User.findOne();

    if (!user) {
      console.log('No user found. Please register/login first.');
      await mongoose.connection.close();
      process.exit(1);
    }

    console.log(`Using user: ${user.name} (${user.email})`);

    // Remove existing places so we don't create duplicates
    await Place.deleteMany({});

    console.log('Existing places removed');

    const placesWithOwner = places.map((place) => ({
      ...place,
      owner: user._id
    }));

    await Place.insertMany(placesWithOwner);

    console.log(`${placesWithOwner.length} Indian places inserted successfully`);

    await mongoose.connection.close();

    console.log('MongoDB connection closed');
    process.exit(0);
  } catch (error) {
    console.error('Seed error:', error);

    try {
      await mongoose.connection.close();
    } catch (closeError) {
      console.error('Error closing MongoDB connection:', closeError);
    }

    process.exit(1);
  }
}

seedPlaces();
