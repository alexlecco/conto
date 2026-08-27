import { describe, it, expect } from "vitest";
import { venueListParamsSchema, venueDetailParamsSchema } from "@/lib/validators/venue";

describe("venueListParamsSchema", () => {
  it("accepts empty params", () => {
    const result = venueListParamsSchema.safeParse({});
    expect(result.success).toBe(true);
    if (result.success) {
      expect(result.data.limit).toBe(20);
      expect(result.data.cursor).toBeUndefined();
      expect(result.data.category).toBeUndefined();
      expect(result.data.search).toBeUndefined();
      expect(result.data.priceLevel).toBeUndefined();
      expect(result.data.tags).toBeUndefined();
    }
  });

  it("parses category", () => {
    const result = venueListParamsSchema.safeParse({ category: "restaurant" });
    expect(result.success).toBe(true);
    if (result.success) {
      expect(result.data.category).toBe("restaurant");
    }
  });

  it("parses search", () => {
    const result = venueListParamsSchema.safeParse({ search: "pizza" });
    expect(result.success).toBe(true);
    if (result.success) {
      expect(result.data.search).toBe("pizza");
    }
  });

  it("parses priceLevel as number", () => {
    const result = venueListParamsSchema.safeParse({ priceLevel: "3" });
    expect(result.success).toBe(true);
    if (result.success) {
      expect(result.data.priceLevel).toBe(3);
    }
  });

  it("rejects priceLevel out of range", () => {
    const result = venueListParamsSchema.safeParse({ priceLevel: "5" });
    expect(result.success).toBe(false);
  });

  it("rejects negative priceLevel", () => {
    const result = venueListParamsSchema.safeParse({ priceLevel: "0" });
    expect(result.success).toBe(false);
  });

  it("parses tags as array", () => {
    const result = venueListParamsSchema.safeParse({ tags: "quiet,lively" });
    expect(result.success).toBe(true);
    if (result.success) {
      expect(result.data.tags).toEqual(["quiet", "lively"]);
    }
  });

  it("trims whitespace in tags", () => {
    const result = venueListParamsSchema.safeParse({ tags: " quiet , lively " });
    expect(result.success).toBe(true);
    if (result.success) {
      expect(result.data.tags).toEqual(["quiet", "lively"]);
    }
  });

  it("caps limit at 50", () => {
    const result = venueListParamsSchema.safeParse({ limit: "100" });
    expect(result.success).toBe(true);
    if (result.success) {
      expect(result.data.limit).toBe(50);
    }
  });

  it("defaults limit to 20", () => {
    const result = venueListParamsSchema.safeParse({ limit: "10" });
    expect(result.success).toBe(true);
    if (result.success) {
      expect(result.data.limit).toBe(10);
    }
  });

  it("parses cursor", () => {
    const result = venueListParamsSchema.safeParse({ cursor: "abc123" });
    expect(result.success).toBe(true);
    if (result.success) {
      expect(result.data.cursor).toBe("abc123");
    }
  });
});

describe("venueDetailParamsSchema", () => {
  it("accepts valid venueId", () => {
    const result = venueDetailParamsSchema.safeParse({ venueId: "abc123" });
    expect(result.success).toBe(true);
  });

  it("rejects empty venueId", () => {
    const result = venueDetailParamsSchema.safeParse({ venueId: "" });
    expect(result.success).toBe(false);
  });
});
