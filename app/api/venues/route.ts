import { NextRequest, NextResponse } from "next/server";
import { getVenues } from "@/server/venues";
import { venueListParamsSchema } from "@/lib/validators/venue";

export async function GET(request: NextRequest) {
  const { searchParams } = request.nextUrl;

  const rawParams = {
    category: searchParams.get("category") ?? undefined,
    search: searchParams.get("search") ?? undefined,
    priceLevel: searchParams.get("priceLevel") ?? undefined,
    tags: searchParams.get("tags") ?? undefined,
    limit: searchParams.get("limit") ?? undefined,
    cursor: searchParams.get("cursor") ?? undefined,
  };

  const parsed = venueListParamsSchema.safeParse(rawParams);

  if (!parsed.success) {
    return NextResponse.json(
      { error: { code: "VALIDATION_ERROR", message: "Invalid query parameters." } },
      { status: 400 },
    );
  }

  try {
    const result = await getVenues(parsed.data);
    return NextResponse.json(result);
  } catch {
    return NextResponse.json(
      { error: { code: "INTERNAL_ERROR", message: "An unexpected error occurred." } },
      { status: 500 },
    );
  }
}
