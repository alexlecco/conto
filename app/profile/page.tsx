export default function ProfilePage() {
  return (
    <div className="px-4 py-8 text-center">
      <h1 className="text-2xl font-bold text-gray-900">Profile</h1>
      <p className="mt-2 text-sm text-gray-500">Manage your account and preferences.</p>
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
            d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z"
          />
        </svg>
        <p className="mt-4 text-sm text-gray-500">
          Sign in to manage your profile and preferences.
        </p>
      </div>
    </div>
  );
}
