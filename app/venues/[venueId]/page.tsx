import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { getVenueById } from "@/server/venues";
import { Badge } from "@/components/ui/badge";

function PriceLevel({ level }: { level: number }) {
  return <span className="text-sm text-gray-500">{"$".repeat(level)}</span>;
}

function formatOpeningHours(hours: Record<string, { open: string; close: string }> | null) {
  if (!hours) return null;

  const days = [
    "monday",
    "tuesday",
    "wednesday",
    "thursday",
    "friday",
    "saturday",
    "sunday",
  ] as const;

  return days
    .map((day) => {
      const schedule = hours[day];
      if (!schedule) return null;
      return `${day.charAt(0).toUpperCase() + day.slice(1)}: ${schedule.open} - ${schedule.close}`;
    })
    .filter(Boolean);
}

interface VenueDetailPageProps {
  params: Promise<{ venueId: string }>;
}

export default async function VenueDetailPage({ params }: VenueDetailPageProps) {
  const { venueId } = await params;
  const venue = await getVenueById(venueId);

  if (!venue) {
    notFound();
  }

  const openingHoursList = formatOpeningHours(
    venue.openingHours as Record<string, { open: string; close: string }> | null,
  );

  return (
    <div className="px-4 py-6">
      <Link
        href="/explore"
        className="mb-4 inline-flex items-center gap-1 text-sm text-primary-600 hover:text-primary-700"
      >
        <svg
          className="h-4 w-4"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={2}
          stroke="currentColor"
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5" />
        </svg>
        Back to Explore
      </Link>

      {/* Image Gallery */}
      <div className="mb-4 overflow-hidden rounded-xl">
        {venue.images.length > 0 ? (
          <div className="relative aspect-[16/9] w-full">
            <Image
              src={venue.images[0].url}
              alt={venue.images[0].altText ?? venue.name}
              fill
              className="object-cover"
              sizes="(max-width: 640px) 100vw, 512px"
              priority
            />
          </div>
        ) : (
          <div className="flex aspect-[16/9] w-full items-center justify-center bg-gray-100">
            <svg
              className="h-16 w-16 text-gray-300"
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

      {/* Additional images */}
      {venue.images.length > 1 && (
        <div className="mb-4 flex gap-2 overflow-x-auto">
          {venue.images.slice(1).map((image) => (
            <div key={image.id} className="relative h-20 w-20 shrink-0 overflow-hidden rounded-lg">
              <Image
                src={image.url}
                alt={image.altText ?? venue.name}
                fill
                className="object-cover"
                sizes="80px"
              />
            </div>
          ))}
        </div>
      )}

      {/* Header */}
      <div className="mb-4">
        <div className="flex items-start justify-between gap-2">
          <h1 className="text-2xl font-bold text-gray-900">{venue.name}</h1>
          <PriceLevel level={venue.priceLevel} />
        </div>
        <p className="mt-1 text-sm text-gray-500">{venue.category.name}</p>
      </div>

      {/* Tags */}
      {venue.tags.length > 0 && (
        <div className="mb-4 flex flex-wrap gap-2">
          {venue.tags.map(({ tag }) => (
            <Badge key={tag.slug} variant="secondary">
              {tag.name}
            </Badge>
          ))}
        </div>
      )}

      {/* Description */}
      <div className="mb-6">
        <h2 className="mb-2 text-sm font-semibold text-gray-900">About</h2>
        <p className="text-sm text-gray-600 leading-relaxed">{venue.description}</p>
      </div>

      {/* Details */}
      <div className="mb-6 space-y-4">
        <div>
          <h2 className="mb-1 text-sm font-semibold text-gray-900">Location</h2>
          <p className="text-sm text-gray-600">
            {venue.address}, {venue.city}
          </p>
        </div>

        {venue.phone && (
          <div>
            <h2 className="mb-1 text-sm font-semibold text-gray-900">Phone</h2>
            <a
              href={`tel:${venue.phone}`}
              className="text-sm text-primary-600 hover:text-primary-700"
            >
              {venue.phone}
            </a>
          </div>
        )}

        <div>
          <h2 className="mb-1 text-sm font-semibold text-gray-900">Business</h2>
          <p className="text-sm text-gray-600">{venue.business.name}</p>
        </div>
      </div>

      {/* Opening Hours */}
      {openingHoursList && openingHoursList.length > 0 && (
        <div className="mb-6">
          <h2 className="mb-2 text-sm font-semibold text-gray-900">Opening Hours</h2>
          <div className="rounded-lg border border-gray-200 bg-gray-50 p-3">
            {openingHoursList.map((line) => (
              <div key={line} className="py-1 text-sm text-gray-600">
                {line}
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
