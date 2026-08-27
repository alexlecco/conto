import Link from "next/link";
import Image from "next/image";
import { Badge } from "@/components/ui/badge";

interface VenueCardProps {
  id: string;
  name: string;
  description: string;
  address: string;
  city: string;
  priceLevel: number;
  category: {
    name: string;
    slug: string;
  };
  images: {
    id: string;
    url: string;
    altText: string | null;
  }[];
  tags: {
    tag: {
      name: string;
      slug: string;
    };
  }[];
}

function PriceLevel({ level }: { level: number }) {
  return <span className="text-sm text-gray-500">{"$".repeat(level)}</span>;
}

export function VenueCard({ venue }: { venue: VenueCardProps }) {
  const primaryImage = venue.images[0];

  return (
    <Link href={`/venues/${venue.id}`} className="block">
      <div className="group overflow-hidden rounded-xl border border-gray-200 bg-white shadow-sm transition-shadow hover:shadow-md">
        <div className="relative aspect-[16/10] w-full overflow-hidden bg-gray-100">
          {primaryImage ? (
            <Image
              src={primaryImage.url}
              alt={primaryImage.altText ?? venue.name}
              fill
              className="object-cover transition-transform group-hover:scale-105"
              sizes="(max-width: 640px) 100vw, 512px"
            />
          ) : (
            <div className="flex h-full items-center justify-center text-gray-400">
              <svg
                className="h-12 w-12"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1}
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="m2.25 15.75 5.159-5.159a2.25 2.25 0 0 1 3.182 0l5.159 5.159m-1.5-1.5 1.409-1.409a2.25 2.25 0 0 1 3.182 0l2.909 2.909M3.75 21h16.5A2.25 2.25 0 0 0 22.5 18.75V5.25A2.25 2.25 0 0 0 20.25 3H3.75A2.25 2.25 0 0 0 1.5 5.25v13.5A2.25 2.25 0 0 0 3.75 21Z"
                />
              </svg>
            </div>
          )}
        </div>

        <div className="p-3">
          <div className="flex items-start justify-between gap-2">
            <div className="min-w-0 flex-1">
              <h3 className="truncate text-sm font-semibold text-gray-900">{venue.name}</h3>
              <p className="mt-0.5 text-xs text-gray-500">
                {venue.category.name} · <PriceLevel level={venue.priceLevel} />
              </p>
            </div>
          </div>

          <p className="mt-1 line-clamp-2 text-xs text-gray-600">{venue.description}</p>

          {venue.tags.length > 0 && (
            <div className="mt-2 flex flex-wrap gap-1">
              {venue.tags.slice(0, 3).map(({ tag }) => (
                <Badge key={tag.slug} variant="secondary" className="text-[10px]">
                  {tag.name}
                </Badge>
              ))}
            </div>
          )}

          <p className="mt-2 text-[10px] text-gray-400">
            {venue.address}, {venue.city}
          </p>
        </div>
      </div>
    </Link>
  );
}
