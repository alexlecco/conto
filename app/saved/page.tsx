export default function SavedPage() {
  return (
    <div className="px-4 py-8 text-center">
      <h1 className="text-2xl font-bold text-gray-900">Saved Venues</h1>
      <p className="mt-2 text-sm text-gray-500">Save your favorite venues to find them later.</p>
      <div className="mt-8 rounded-lg border border-gray-200 bg-gray-50 p-8">
        <svg
          className="mx-auto h-12 w-12 text-gray-300"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1}
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M17.593 3.322c1.1.128 1.907 1.077 1.907 2.185V21L12 17.25 4.5 21V5.507c0-1.108.806-2.057 1.907-2.185a48.507 48.507 0 0 1 11.186 0Z"
          />
        </svg>
        <p className="mt-4 text-sm text-gray-500">
          No saved venues yet. Explore and tap the bookmark icon to save venues here.
        </p>
      </div>
    </div>
  );
}
