import { getVenues, getVenuesByCategory } from "@/server/venues";
import { VenueCard } from "@/components/venues/venue-card";

export default async function HomePage() {
  let featuredVenues;
  let recentVenues;

  try {
    [featuredVenues, recentVenues] = await Promise.all([
      getVenuesByCategory("restaurant", 4),
      getVenues({ limit: 6, category: undefined }),
    ]);
  } catch {
    return (
      <div className="px-4 py-8 text-center">
        <h1 className="text-2xl font-bold text-gray-900">Welcome to Conto</h1>
        <p className="mt-2 text-sm text-gray-500">
          Discover, reserve, order and enjoy — all in one place.
        </p>
        <div className="mt-8 rounded-lg border border-red-200 bg-red-50 p-4">
          <p className="text-sm text-red-800">
            Unable to load venues. Please make sure the database is running and seeded.
          </p>
        </div>
      </div>
    );
  }

  const venues = recentVenues.data;

  return (
    <div className="space-y-8 px-4 py-6">
      <div>
        <h1 className="text-2xl font-bold text-gray-900">Discover Conto</h1>
        <p className="mt-1 text-sm text-gray-500">Find your next favorite place to go out.</p>
      </div>

      <section>
        <h2 className="mb-3 text-lg font-semibold text-gray-900">Restaurants</h2>
        <div className="grid gap-4 sm:grid-cols-2">
          {featuredVenues.map((venue) => (
            <VenueCard
              key={venue.id}
              venue={{
                ...venue,
                tags: venue.tags,
              }}
            />
          ))}
        </div>
      </section>

      <section>
        <h2 className="mb-3 text-lg font-semibold text-gray-900">All Venues</h2>
        <div className="grid gap-4 sm:grid-cols-2">
          {venues.map((venue) => (
            <VenueCard
              key={venue.id}
              venue={{
                ...venue,
                tags: venue.tags,
              }}
            />
          ))}
        </div>
      </section>
    </div>
  );
}
