"use client";

import { useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

const categories = [
  { label: "All", value: "" },
  { label: "Restaurant", value: "restaurant" },
  { label: "Bar", value: "bar" },
  { label: "Café", value: "cafe" },
  { label: "Brewery", value: "brewery" },
];

const priceLevels = [
  { label: "Any", value: "" },
  { label: "$", value: "1" },
  { label: "$$", value: "2" },
  { label: "$$$", value: "3" },
  { label: "$$$$", value: "4" },
];

interface VenueFiltersProps {
  initialSearch?: string;
}

export function VenueFilters({ initialSearch = "" }: VenueFiltersProps) {
  const router = useRouter();
  const searchParams = useSearchParams();

  const [search, setSearch] = useState(initialSearch);

  function updateFilter(key: string, value: string) {
    const params = new URLSearchParams(searchParams.toString());
    if (value) {
      params.set(key, value);
    } else {
      params.delete(key);
    }
    params.delete("cursor"); // Reset pagination on filter change
    router.push(`/explore?${params.toString()}`);
  }

  function handleSearchSubmit(e: React.FormEvent) {
    e.preventDefault();
    updateFilter("search", search);
  }

  return (
    <div className="space-y-3">
      <form onSubmit={handleSearchSubmit}>
        <Input
          type="search"
          placeholder="Search venues..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full"
        />
      </form>

      <div className="flex gap-2 overflow-x-auto pb-1">
        {categories.map((cat) => (
          <Button
            key={cat.value}
            variant={
              searchParams.get("category") === cat.value ||
              (!searchParams.get("category") && !cat.value)
                ? "default"
                : "outline"
            }
            size="sm"
            className="shrink-0"
            onClick={() => updateFilter("category", cat.value)}
          >
            {cat.label}
          </Button>
        ))}
      </div>

      <div className="flex gap-2 overflow-x-auto pb-1">
        {priceLevels.map((pl) => (
          <Button
            key={pl.value}
            variant={
              searchParams.get("priceLevel") === pl.value ||
              (!searchParams.get("priceLevel") && !pl.value)
                ? "default"
                : "outline"
            }
            size="sm"
            className="shrink-0"
            onClick={() => updateFilter("priceLevel", pl.value)}
          >
            {pl.label}
          </Button>
        ))}
      </div>
    </div>
  );
}
