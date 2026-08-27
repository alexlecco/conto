import { VenueCard } from "./venue-card";
import { Skeleton } from "@/components/ui/skeleton";

interface VenueListProps {
  venues: Array<{
    id: string;
    name: string;
    description: string;
    address: string;
    city: string;
    priceLevel: number;
    category: { name: string; slug: string };
    images: { id: string; url: string; altText: string | null }[];
    tags: { tag: { name: string; slug: string } }[];
  }>;
  emptyMessage?: string;
}

export function VenueList({ venues, emptyMessage = "No venues found." }: VenueListProps) {
  if (venues.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center py-16 text-center">
        <svg
          className="mb-4 h-12 w-12 text-gray-300"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1}
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
          />
        </svg>
        <p className="text-sm text-gray-500">{emptyMessage}</p>
      </div>
    );
  }

  return (
    <div className="grid gap-4 sm:grid-cols-2">
      {venues.map((venue) => (
        <VenueCard key={venue.id} venue={venue} />
      ))}
    </div>
  );
}

export function VenueListSkeleton() {
  return (
    <div className="grid gap-4 sm:grid-cols-2">
      {Array.from({ length: 6 }).map((_, i) => (
        <div key={i} className="overflow-hidden rounded-xl border border-gray-200">
          <Skeleton className="aspect-[16/10] w-full" />
          <div className="space-y-2 p-3">
            <Skeleton className="h-4 w-3/4" />
            <Skeleton className="h-3 w-1/2" />
            <Skeleton className="h-3 w-full" />
            <Skeleton className="h-3 w-2/3" />
          </div>
        </div>
      ))}
    </div>
  );
}
