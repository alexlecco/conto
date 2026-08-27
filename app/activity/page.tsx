export default function ActivityPage() {
  return (
    <div className="px-4 py-8 text-center">
      <h1 className="text-2xl font-bold text-gray-900">Activity</h1>
      <p className="mt-2 text-sm text-gray-500">Your reservations, orders, and recent activity.</p>
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
            d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
          />
        </svg>
        <p className="mt-4 text-sm text-gray-500">
          No activity yet. Your reservations and orders will appear here.
        </p>
      </div>
    </div>
  );
}
