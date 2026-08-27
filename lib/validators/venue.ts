import { z } from "zod";

export const venueListParamsSchema = z.object({
  category: z.string().optional(),
  search: z.string().optional(),
  priceLevel: z
    .string()
    .optional()
    .transform((val) => (val ? Number(val) : undefined))
    .pipe(z.number().int().min(1).max(4).optional()),
  tags: z
    .string()
    .optional()
    .transform((val) => (val ? val.split(",").map((t) => t.trim()) : undefined)),
  limit: z
    .string()
    .optional()
    .transform((val) => (val ? Math.min(Number(val), 50) : 20))
    .pipe(z.number().int().min(1).max(50)),
  cursor: z.string().optional(),
});

export type VenueListParams = z.infer<typeof venueListParamsSchema>;

export const venueDetailParamsSchema = z.object({
  venueId: z.string().min(1),
});

export type VenueDetailParams = z.infer<typeof venueDetailParamsSchema>;
