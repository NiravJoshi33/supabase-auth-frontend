import Link from "next/link";

export default function Navigation() {
  return (
    <nav className="bg-gray-900 border-b border-green-500/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Link href="/" className="text-green-500 font-semibold text-xl">
              YourApp
            </Link>

            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-4">
                <Link
                  href="/dashboard"
                  className="text-gray-300 hover:text-green-500 px-3 py-2 rounded-md text-sm font-medium transition-colors"
                >
                  Dashboard
                </Link>
                <Link
                  href="/profile"
                  className="text-gray-300 hover:text-green-500 px-3 py-2 rounded-md text-sm font-medium transition-colors"
                >
                  Profile
                </Link>
              </div>
            </div>
          </div>

          <div className="flex items-center">
            <button className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-md text-sm font-medium transition-colors">
              Sign Out
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}
