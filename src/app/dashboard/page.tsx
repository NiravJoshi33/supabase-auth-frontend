"use client";

import { useUser } from "@/hooks/useUser";
import { useEffect } from "react";

export default function Dashboard() {
  const { user, error, loading, fetchUser } = useUser();

  useEffect(() => {
    fetchUser();
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-900">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-green-500"></div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-900">
        <div className="bg-gray-800 p-6 rounded-lg shadow-lg border border-gray-700">
          <h2 className="text-red-400 text-xl font-semibold">
            Error Loading Dashboard
          </h2>
          <p className="text-red-300 mt-2">{error.message}</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-900 p-8">
      <div className="max-w-4xl mx-auto">
        <div className="bg-gray-800 rounded-xl shadow-lg p-8 border border-gray-700">
          <h1 className="text-3xl font-bold mb-8 text-gray-100">Dashboard</h1>

          {user ? (
            <div className="space-y-6">
              <div className="bg-gray-700 p-6 rounded-lg border border-gray-600">
                <h2 className="text-xl font-semibold mb-4 text-gray-100">
                  User Profile
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="text-sm text-gray-400">Email</label>
                    <p className="font-medium text-gray-200">{user.email}</p>
                  </div>
                  <div>
                    <label className="text-sm text-gray-400">User ID</label>
                    <p className="font-medium text-gray-200">{user.id}</p>
                  </div>
                </div>
              </div>

              <div className="bg-gray-700 p-6 rounded-lg border border-gray-600">
                <h2 className="text-xl font-semibold mb-4 text-gray-100">
                  Account Status
                </h2>
                <div className="flex items-center">
                  <div className="h-3 w-3 bg-green-500 rounded-full mr-2"></div>
                  <span className="text-green-400 font-medium">Active</span>
                </div>
              </div>

              <div className="bg-gray-700 p-6 rounded-lg border border-gray-600">
                <h2 className="text-xl font-semibold mb-4 text-gray-100">
                  Quick Actions
                </h2>
                <div className="flex gap-4">
                  <button className="px-4 py-2 bg-green-500 hover:bg-green-600 text-white rounded-lg transition-colors">
                    Edit Profile
                  </button>
                  <button className="px-4 py-2 bg-gray-600 hover:bg-gray-500 text-white rounded-lg transition-colors">
                    Settings
                  </button>
                </div>
              </div>
            </div>
          ) : (
            <div className="text-center py-8">
              <p className="text-gray-400">No user data available</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
