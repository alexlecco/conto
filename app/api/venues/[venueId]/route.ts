import { NextRequest, NextResponse } from "next/server";
import { getVenueById } from "@/server/venues";
import { venueDetailParamsSchema } from "@/lib/validators/venue";

export async function GET(
  _request: NextRequest,
  { params }: { params: Promise<{ venueId: string }> },
) {
  const { venueId } = await params;

  const parsed = venueDetailParamsSchema.safeParse({ venueId });

  if (!parsed.success) {
    return NextResponse.json(
      { error: { code: "VALIDATION_ERROR", message: "Invalid venue ID." } },
      { status: 400 },
    );
  }

  try {
    const venue = await getVenueById(parsed.data.venueId);

    if (!venue) {
      return NextResponse.json(
        { error: { code: "NOT_FOUND", message: "Venue not found." } },
        { status: 404 },
      );
    }

    return NextResponse.json({ data: venue });
  } catch {
    return NextResponse.json(
      { error: { code: "INTERNAL_ERROR", message: "An unexpected error occurred." } },
      { status: 500 },
    );
  }
}
