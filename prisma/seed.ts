import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  // Clean existing data
  await prisma.venueImage.deleteMany();
  await prisma.venueTagRelationship.deleteMany();
  await prisma.venue.deleteMany();
  await prisma.venueCategory.deleteMany();
  await prisma.venueTag.deleteMany();
  await prisma.business.deleteMany();

  // ─── Categories ──────────────────────────────────────────────────────────

  const restaurant = await prisma.venueCategory.create({
    data: {
      name: "Restaurant",
      slug: "restaurant",
      description: "Full-service dining experiences",
      icon: "🍽️",
    },
  });

  const bar = await prisma.venueCategory.create({
    data: {
      name: "Bar",
      slug: "bar",
      description: "Drinks, cocktails, and nightlife",
      icon: "🍸",
    },
  });

  const cafe = await prisma.venueCategory.create({
    data: {
      name: "Café",
      slug: "cafe",
      description: "Coffee, pastries, and light bites",
      icon: "☕",
    },
  });

  const brewery = await prisma.venueCategory.create({
    data: {
      name: "Brewery",
      slug: "brewery",
      description: "Craft beer and brewing experiences",
      icon: "🍺",
    },
  });

  // ─── Tags ────────────────────────────────────────────────────────────────

  const quiet = await prisma.venueTag.create({
    data: { name: "Quiet", slug: "quiet", type: "atmosphere" },
  });

  const lively = await prisma.venueTag.create({
    data: { name: "Lively", slug: "lively", type: "atmosphere" },
  });

  const romantic = await prisma.venueTag.create({
    data: { name: "Romantic", slug: "romantic", type: "atmosphere" },
  });

  const familyFriendly = await prisma.venueTag.create({
    data: { name: "Family-friendly", slug: "family-friendly", type: "atmosphere" },
  });

  const outdoor = await prisma.venueTag.create({
    data: { name: "Outdoor seating", slug: "outdoor", type: "feature" },
  });

  const liveMusic = await prisma.venueTag.create({
    data: { name: "Live music", slug: "live-music", type: "feature" },
  });

  const craftBeer = await prisma.venueTag.create({
    data: { name: "Craft beer", slug: "craft-beer", type: "feature" },
  });

  const goodForGroups = await prisma.venueTag.create({
    data: { name: "Good for groups", slug: "good-for-groups", type: "feature" },
  });

  // ─── Businesses ──────────────────────────────────────────────────────────

  const businessA = await prisma.business.create({
    data: {
      name: "Gastronomía del Sur",
      description: "A group of restaurants and bars in Buenos Aires",
      email: "info@gdsur.com",
      phone: "+54 11 4567-8900",
      status: "active",
    },
  });

  const businessB = await prisma.business.create({
    data: {
      name: "Cafés Porteños",
      description: "Artisan coffee shops across the city",
      email: "hola@cafesportenos.com",
      phone: "+54 11 5678-9012",
      status: "active",
    },
  });

  // ─── Venues ──────────────────────────────────────────────────────────────

  const laParolaccia = await prisma.venue.create({
    data: {
      businessId: businessA.id,
      name: "La Parolaccia",
      description:
        "Authentic Italian restaurant with handmade pasta and a curated wine list. Warm atmosphere perfect for dinner with friends or a romantic evening.",
      categoryId: restaurant.id,
      address: "Av. Corrientes 1234",
      city: "Buenos Aires",
      latitude: -34.6037,
      longitude: -58.3816,
      priceLevel: 3,
      openingHours: {
        monday: { open: "12:00", close: "23:00" },
        tuesday: { open: "12:00", close: "23:00" },
        wednesday: { open: "12:00", close: "23:00" },
        thursday: { open: "12:00", close: "00:00" },
        friday: { open: "12:00", close: "01:00" },
        saturday: { open: "12:00", close: "01:00" },
        sunday: { open: "12:00", close: "22:00" },
      },
      phone: "+54 11 4321-0001",
      status: "published",
    },
  });

  const elBodegon = await prisma.venue.create({
    data: {
      businessId: businessA.id,
      name: "El Bodegón de Palermo",
      description:
        "Traditional Argentine bodegón offering classic dishes in a rustic setting. Known for its parrilla and house wine.",
      categoryId: restaurant.id,
      address: "Costa Rica 5678",
      city: "Buenos Aires",
      latitude: -34.5755,
      longitude: -58.4206,
      priceLevel: 2,
      openingHours: {
        monday: { open: "11:30", close: "22:30" },
        tuesday: { open: "11:30", close: "22:30" },
        wednesday: { open: "11:30", close: "22:30" },
        thursday: { open: "11:30", close: "23:00" },
        friday: { open: "11:30", close: "23:30" },
        saturday: { open: "11:30", close: "23:30" },
        sunday: { open: "12:00", close: "22:00" },
      },
      phone: "+54 11 4789-0002",
      status: "published",
    },
  });

  const nickyHarrison = await prisma.venue.create({
    data: {
      businessId: businessA.id,
      name: "Nicky Harrison",
      description:
        "Cocktail bar with a speakeasy vibe. Handcrafted drinks, small plates, and live jazz on weekends.",
      categoryId: bar.id,
      address: "Av. de Mayo 910",
      city: "Buenos Aires",
      latitude: -34.6083,
      longitude: -58.3792,
      priceLevel: 3,
      openingHours: {
        tuesday: { open: "18:00", close: "02:00" },
        wednesday: { open: "18:00", close: "02:00" },
        thursday: { open: "18:00", close: "03:00" },
        friday: { open: "18:00", close: "04:00" },
        saturday: { open: "18:00", close: "04:00" },
      },
      phone: "+54 11 4000-0003",
      status: "published",
    },
  });

  const portoCafe = await prisma.venue.create({
    data: {
      businessId: businessB.id,
      name: "Porto Café",
      description:
        "Specialty third-wave coffee shop with single-origin beans and homemade pastries. Free Wi-Fi.",
      categoryId: cafe.id,
      address: "Defensa 345",
      city: "Buenos Aires",
      latitude: -34.6107,
      longitude: -58.3745,
      priceLevel: 1,
      openingHours: {
        monday: { open: "08:00", close: "19:00" },
        tuesday: { open: "08:00", close: "19:00" },
        wednesday: { open: "08:00", close: "19:00" },
        thursday: { open: "08:00", close: "19:00" },
        friday: { open: "08:00", close: "20:00" },
        saturday: { open: "09:00", close: "20:00" },
        sunday: { open: "09:00", close: "18:00" },
      },
      phone: "+54 11 4111-0004",
      status: "published",
    },
  });

  const cervezaDelBarrio = await prisma.venue.create({
    data: {
      businessId: businessA.id,
      name: "Cerveza del Barrio",
      description:
        "Neighborhood brewery serving house-made craft beers. Relaxed atmosphere with board games and a dog-friendly patio.",
      categoryId: brewery.id,
      address: "Honduras 5432",
      city: "Buenos Aires",
      latitude: -34.5603,
      longitude: -58.4275,
      priceLevel: 2,
      openingHours: {
        thursday: { open: "17:00", close: "00:00" },
        friday: { open: "17:00", close: "02:00" },
        saturday: { open: "14:00", close: "02:00" },
        sunday: { open: "14:00", close: "22:00" },
      },
      phone: "+54 11 4888-0005",
      status: "published",
    },
  });

  const miranda = await prisma.venue.create({
    data: {
      businessId: businessA.id,
      name: "Miranda",
      description:
        "Upscale cocktail bar with panoramic rooftop views. Signature cocktails and DJ sets on Friday nights.",
      categoryId: bar.id,
      address: "Av. Scalabrini Ortiz 1500",
      city: "Buenos Aires",
      latitude: -34.5527,
      longitude: -58.4341,
      priceLevel: 4,
      openingHours: {
        wednesday: { open: "19:00", close: "02:00" },
        thursday: { open: "19:00", close: "03:00" },
        friday: { open: "19:00", close: "05:00" },
        saturday: { open: "19:00", close: "05:00" },
      },
      phone: "+54 11 4999-0006",
      status: "published",
    },
  });

  const javaCafe = await prisma.venue.create({
    data: {
      businessId: businessB.id,
      name: "Java House",
      description:
        "Cozy café with a library corner. Known for its cold brew and avocado toast. Perfect for remote work.",
      categoryId: cafe.id,
      address: "Marcelo T. de Alvear 2100",
      city: "Buenos Aires",
      latitude: -34.5889,
      longitude: -58.4167,
      priceLevel: 2,
      openingHours: {
        monday: { open: "07:30", close: "20:00" },
        tuesday: { open: "07:30", close: "20:00" },
        wednesday: { open: "07:30", close: "20:00" },
        thursday: { open: "07:30", close: "20:00" },
        friday: { open: "07:30", close: "21:00" },
        saturday: { open: "08:00", close: "21:00" },
        sunday: { open: "08:00", close: "19:00" },
      },
      phone: "+54 11 4222-0007",
      status: "published",
    },
  });

  const laFonda = await prisma.venue.create({
    data: {
      businessId: businessA.id,
      name: "La Fonda del SOL",
      description:
        "Family-run restaurant serving traditional Argentine comfort food. Large portions and warm service.",
      categoryId: restaurant.id,
      address: "Sarmiento 876",
      city: "Buenos Aires",
      latitude: -34.6043,
      longitude: -58.3819,
      priceLevel: 1,
      openingHours: {
        monday: { open: "11:00", close: "21:00" },
        tuesday: { open: "11:00", close: "21:00" },
        wednesday: { open: "11:00", close: "21:00" },
        thursday: { open: "11:00", close: "21:00" },
        friday: { open: "11:00", close: "22:00" },
        saturday: { open: "11:00", close: "22:00" },
      },
      phone: "+54 11 4333-0008",
      status: "published",
    },
  });

  // ─── Venue-Tag Relationships ─────────────────────────────────────────────

  await prisma.venueTagRelationship.createMany({
    data: [
      { venueId: laParolaccia.id, tagId: romantic.id },
      { venueId: laParolaccia.id, tagId: quiet.id },
      { venueId: elBodegon.id, tagId: familyFriendly.id },
      { venueId: elBodegon.id, tagId: goodForGroups.id },
      { venueId: nickyHarrison.id, tagId: lively.id },
      { venueId: nickyHarrison.id, tagId: liveMusic.id },
      { venueId: portoCafe.id, tagId: quiet.id },
      { venueId: cervezaDelBarrio.id, tagId: craftBeer.id },
      { venueId: cervezaDelBarrio.id, tagId: outdoor.id },
      { venueId: cervezaDelBarrio.id, tagId: goodForGroups.id },
      { venueId: miranda.id, tagId: lively.id },
      { venueId: miranda.id, tagId: outdoor.id },
      { venueId: javaCafe.id, tagId: quiet.id },
      { venueId: laFonda.id, tagId: familyFriendly.id },
      { venueId: laFonda.id, tagId: goodForGroups.id },
    ],
  });

  // ─── Venue Images ───────────────────────────────────────────────────────

  await prisma.venueImage.createMany({
    data: [
      {
        venueId: laParolaccia.id,
        url: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=800",
        altText: "La Parolaccia interior",
        sortOrder: 0,
        isPrimary: true,
      },
      {
        venueId: elBodegon.id,
        url: "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=800",
        altText: "El Bodegón dining room",
        sortOrder: 0,
        isPrimary: true,
      },
      {
        venueId: nickyHarrison.id,
        url: "https://images.unsplash.com/photo-1470337458703-46ad1756a187?w=800",
        altText: "Nicky Harrison cocktail bar",
        sortOrder: 0,
        isPrimary: true,
      },
      {
        venueId: portoCafe.id,
        url: "https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?w=800",
        altText: "Porto Café storefront",
        sortOrder: 0,
        isPrimary: true,
      },
      {
        venueId: cervezaDelBarrio.id,
        url: "https://images.unsplash.com/photo-1436076863939-06870fe779c2?w=800",
        altText: "Cerveza del Barrio taps",
        sortOrder: 0,
        isPrimary: true,
      },
      {
        venueId: miranda.id,
        url: "https://images.unsplash.com/photo-1572116469696-31de0f17cc34?w=800",
        altText: "Miranda rooftop",
        sortOrder: 0,
        isPrimary: true,
      },
      {
        venueId: javaCafe.id,
        url: "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=800",
        altText: "Java House coffee",
        sortOrder: 0,
        isPrimary: true,
      },
      {
        venueId: laFonda.id,
        url: "https://images.unsplash.com/photo-1552566626-52f8b828add9?w=800",
        altText: "La Fonda del SOL",
        sortOrder: 0,
        isPrimary: true,
      },
    ],
  });

  console.log("Seed data created successfully.");
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
