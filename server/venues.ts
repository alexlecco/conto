import { prisma } from "@/lib/prisma";
import type { VenueListParams } from "@/lib/validators/venue";

export interface VenueListItem {
  id: string;
  name: string;
  description: string;
  address: string;
  city: string;
  latitude: number;
  longitude: number;
  priceLevel: number;
  status: string;
  category: {
    id: string;
    name: string;
    slug: string;
  };
  images: {
    id: string;
    url: string;
    altText: string | null;
    isPrimary: boolean;
  }[];
  tags: {
    tag: {
      id: string;
      name: string;
      slug: string;
    };
  }[];
  createdAt: Date;
}

export interface VenueDetail extends VenueListItem {
  phone: string | null;
  openingHours: unknown;
  business: {
    id: string;
    name: string;
  };
}

export interface VenueListResult {
  data: VenueListItem[];
  meta: {
    nextCursor: string | null;
    hasMore: boolean;
  };
}

export async function getVenues(params: VenueListParams): Promise<VenueListResult> {
  const { category, search, priceLevel, tags, limit, cursor } = params;

  const where: Record<string, unknown> = {
    status: "published",
  };

  if (category) {
    where.category = { slug: category };
  }

  if (search) {
    where.OR = [
      { name: { contains: search, mode: "insensitive" } },
      { description: { contains: search, mode: "insensitive" } },
    ];
  }

  if (priceLevel) {
    where.priceLevel = priceLevel;
  }

  if (tags && tags.length > 0) {
    where.tags = {
      some: {
        tag: { slug: { in: tags } },
      },
    };
  }

  const take = limit + 1; // Fetch one extra to determine if there are more results

  const venues = await prisma.venue.findMany({
    where,
    include: {
      category: {
        select: { id: true, name: true, slug: true },
      },
      images: {
        where: { isPrimary: true },
        take: 1,
        select: { id: true, url: true, altText: true, isPrimary: true },
      },
      tags: {
        include: {
          tag: {
            select: { id: true, name: true, slug: true },
          },
        },
      },
    },
    orderBy: { createdAt: "desc" },
    take,
    ...(cursor
      ? {
          skip: 1,
          cursor: { id: cursor },
        }
      : {}),
  });

  const hasMore = venues.length > limit;
  const data = hasMore ? venues.slice(0, limit) : venues;
  const nextCursor = hasMore ? (data[data.length - 1]?.id ?? null) : null;

  return {
    data,
    meta: {
      nextCursor,
      hasMore,
    },
  };
}

export async function getVenueById(venueId: string): Promise<VenueDetail | null> {
  const venue = await prisma.venue.findUnique({
    where: { id: venueId },
    include: {
      category: {
        select: { id: true, name: true, slug: true },
      },
      images: {
        orderBy: { sortOrder: "asc" },
        select: { id: true, url: true, altText: true, isPrimary: true },
      },
      tags: {
        include: {
          tag: {
            select: { id: true, name: true, slug: true },
          },
        },
      },
      business: {
        select: { id: true, name: true },
      },
    },
  });

  return venue;
}

export async function getVenuesByCategory(
  categorySlug: string,
  limit: number = 10,
): Promise<VenueListItem[]> {
  return prisma.venue.findMany({
    where: {
      status: "published",
      category: { slug: categorySlug },
    },
    include: {
      category: {
        select: { id: true, name: true, slug: true },
      },
      images: {
        where: { isPrimary: true },
        take: 1,
        select: { id: true, url: true, altText: true, isPrimary: true },
      },
      tags: {
        include: {
          tag: {
            select: { id: true, name: true, slug: true },
          },
        },
      },
    },
    orderBy: { createdAt: "desc" },
    take: limit,
  });
}
