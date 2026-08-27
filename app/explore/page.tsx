import { Suspense } from "react";
import { getVenues } from "@/server/venues";
import { VenueList, VenueListSkeleton } from "@/components/venues/venue-list";
import { VenueFilters } from "@/components/venues/venue-filters";

interface ExplorePageProps {
  searchParams: Promise<{
    category?: string;
    search?: string;
    priceLevel?: string;
    tags?: string;
    cursor?: string;
  }>;
}

async function VenueResults({
  category,
  search,
  priceLevel,
  tags,
  cursor,
}: {
  category?: string;
  search?: string;
  priceLevel?: string;
  tags?: string;
  cursor?: string;
}) {
  try {
    const result = await getVenues({
      category,
      search,
      priceLevel: priceLevel ? Number(priceLevel) : undefined,
      tags: tags ? tags.split(",").map((t) => t.trim()) : undefined,
      limit: 20,
      cursor,
    });

    return (
      <div className="space-y-4">
        <VenueList venues={result.data} emptyMessage="No venues match your filters." />

        {result.meta.hasMore && result.meta.nextCursor && (
          <div className="flex justify-center">
            <a
              href={`/explore?${new URLSearchParams({
                ...(category ? { category } : {}),
                ...(search ? { search } : {}),
                ...(priceLevel ? { priceLevel } : {}),
                ...(tags ? { tags } : {}),
                cursor: result.meta.nextCursor,
              }).toString()}`}
              className="rounded-lg bg-gray-100 px-6 py-2 text-sm font-medium text-gray-700 hover:bg-gray-200"
            >
              Load more
            </a>
          </div>
        )}
      </div>
    );
  } catch {
    return (
      <div className="rounded-lg border border-red-200 bg-red-50 p-4 text-center">
        <p className="text-sm text-red-800">Unable to load venues. Please try again later.</p>
      </div>
    );
  }
}

export default async function ExplorePage({ searchParams }: ExplorePageProps) {
  const params = await searchParams;

  return (
    <div className="space-y-4 px-4 py-6">
      <div>
        <h1 className="text-2xl font-bold text-gray-900">Explore</h1>
        <p className="mt-1 text-sm text-gray-500">Find the perfect place for any occasion.</p>
      </div>

      <Suspense fallback={<VenueListSkeleton />}>
        <VenueFilters initialSearch={params.search} />
      </Suspense>

      <Suspense fallback={<VenueListSkeleton />}>
        <VenueResults
          category={params.category}
          search={params.search}
          priceLevel={params.priceLevel}
          tags={params.tags}
          cursor={params.cursor}
        />
      </Suspense>
    </div>
  );
}
