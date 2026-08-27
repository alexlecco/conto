import { describe, it, expect, vi, beforeEach } from "vitest";

// Use vi.hoisted to create mock functions that are available when vi.mock is hoisted
const { mockFindMany, mockFindUnique } = vi.hoisted(() => ({
  mockFindMany: vi.fn(),
  mockFindUnique: vi.fn(),
}));

// Mock the prisma module
vi.mock("@/lib/prisma", () => ({
  prisma: {
    venue: {
      findMany: mockFindMany,
      findUnique: mockFindUnique,
    },
  },
}));

import { getVenues, getVenueById } from "@/server/venues";

describe("getVenues", () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  it("returns venues with published status", async () => {
    const mockVenues = [
      {
        id: "1",
        name: "Test Venue",
        description: "A test venue",
        address: "123 Main St",
        city: "Test City",
        latitude: -34.6,
        longitude: -58.4,
        priceLevel: 2,
        status: "published",
        createdAt: new Date(),
        category: { id: "c1", name: "Restaurant", slug: "restaurant" },
        images: [{ id: "i1", url: "http://example.com/img.jpg", altText: "Test", isPrimary: true }],
        tags: [{ tag: { id: "t1", name: "Quiet", slug: "quiet" } }],
      },
    ];

    mockFindMany.mockResolvedValue(mockVenues);

    const result = await getVenues({ limit: 20 });

    expect(result.data).toHaveLength(1);
    expect(result.meta.hasMore).toBe(false);
    expect(result.meta.nextCursor).toBeNull();
    expect(mockFindMany).toHaveBeenCalledWith(
      expect.objectContaining({
        where: expect.objectContaining({ status: "published" }),
      }),
    );
  });

  it("applies category filter", async () => {
    mockFindMany.mockResolvedValue([]);

    await getVenues({ limit: 20, category: "bar" });

    expect(mockFindMany).toHaveBeenCalledWith(
      expect.objectContaining({
        where: expect.objectContaining({
          category: { slug: "bar" },
        }),
      }),
    );
  });

  it("applies search filter", async () => {
    mockFindMany.mockResolvedValue([]);

    await getVenues({ limit: 20, search: "pizza" });

    expect(mockFindMany).toHaveBeenCalledWith(
      expect.objectContaining({
        where: expect.objectContaining({
          OR: [
            { name: { contains: "pizza", mode: "insensitive" } },
            { description: { contains: "pizza", mode: "insensitive" } },
          ],
        }),
      }),
    );
  });

  it("applies priceLevel filter", async () => {
    mockFindMany.mockResolvedValue([]);

    await getVenues({ limit: 20, priceLevel: 3 });

    expect(mockFindMany).toHaveBeenCalledWith(
      expect.objectContaining({
        where: expect.objectContaining({ priceLevel: 3 }),
      }),
    );
  });

  it("applies tags filter", async () => {
    mockFindMany.mockResolvedValue([]);

    await getVenues({ limit: 20, tags: ["quiet", "lively"] });

    expect(mockFindMany).toHaveBeenCalledWith(
      expect.objectContaining({
        where: expect.objectContaining({
          tags: {
            some: {
              tag: { slug: { in: ["quiet", "lively"] } },
            },
          },
        }),
      }),
    );
  });

  it("applies cursor pagination", async () => {
    mockFindMany.mockResolvedValue([]);

    await getVenues({ limit: 20, cursor: "abc123" });

    expect(mockFindMany).toHaveBeenCalledWith(
      expect.objectContaining({
        skip: 1,
        cursor: { id: "abc123" },
      }),
    );
  });

  it("detects hasMore when fetching extra record", async () => {
    const mockVenues = Array.from({ length: 21 }, (_, i) => ({
      id: `${i}`,
      name: `Venue ${i}`,
      description: "Test",
      address: "123 Main St",
      city: "Test",
      latitude: 0,
      longitude: 0,
      priceLevel: 2,
      status: "published",
      createdAt: new Date(),
      category: { id: "c1", name: "Restaurant", slug: "restaurant" },
      images: [],
      tags: [],
    }));

    mockFindMany.mockResolvedValue(mockVenues);

    const result = await getVenues({ limit: 20 });

    expect(result.data).toHaveLength(20);
    expect(result.meta.hasMore).toBe(true);
    expect(result.meta.nextCursor).toBe("19");
  });
});

describe("getVenueById", () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  it("returns venue with all relations", async () => {
    const mockVenue = {
      id: "1",
      name: "Test Venue",
      description: "A test venue",
      address: "123 Main St",
      city: "Test City",
      latitude: -34.6,
      longitude: -58.4,
      priceLevel: 2,
      status: "published",
      phone: "+54 11 1234-5678",
      openingHours: null,
      createdAt: new Date(),
      category: { id: "c1", name: "Restaurant", slug: "restaurant" },
      images: [{ id: "i1", url: "http://example.com/img.jpg", altText: "Test", isPrimary: true }],
      tags: [{ tag: { id: "t1", name: "Quiet", slug: "quiet" } }],
      business: { id: "b1", name: "Test Business" },
    };

    mockFindUnique.mockResolvedValue(mockVenue);

    const result = await getVenueById("1");

    expect(result).not.toBeNull();
    expect(result?.business.name).toBe("Test Business");
    expect(mockFindUnique).toHaveBeenCalledWith(
      expect.objectContaining({
        where: { id: "1" },
      }),
    );
  });

  it("returns null for non-existent venue", async () => {
    mockFindUnique.mockResolvedValue(null);

    const result = await getVenueById("nonexistent");

    expect(result).toBeNull();
  });
});
