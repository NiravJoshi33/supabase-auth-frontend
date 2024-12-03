"use client";

import { BACKEND_URL } from "@/utils/env-vars";
import { useEffect, useState } from "react";
import { toast } from "sonner";

interface BackendData {
  port: number;
  message: string;
}

export default function ProtectedPage() {
  const [data, setData] = useState<BackendData | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    const fetchProtectedData = async () => {
      try {
        const response = await fetch(`${BACKEND_URL}/protected`, {
          credentials: "include",
        });

        if (!response.ok) {
          throw new Error("Failed to fetch protected data");
        }

        const data = await response.json();
        setData(data);
        toast.success("Protected data loaded successfully");
      } catch (err) {
        setError(err as Error);
        toast.error("Failed to load protected data");
      } finally {
        setLoading(false);
      }
    };

    fetchProtectedData();
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
            Error Loading Protected Data
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
          <h1 className="text-3xl font-bold mb-8 text-gray-100">
            Protected Data
          </h1>

          {data ? (
            <div className="space-y-6">
              <div className="bg-gray-700 p-6 rounded-lg border border-gray-600">
                <h2 className="text-xl font-semibold mb-4 text-gray-100">
                  Backend Information
                </h2>
                <div className="grid grid-cols-1 gap-4">
                  <div>
                    <label className="text-sm text-gray-400">Port</label>
                    <p className="font-medium text-gray-200">{data.port}</p>
                  </div>
                  <div>
                    <label className="text-sm text-gray-400">Message</label>
                    <p className="font-medium text-gray-200">{data.message}</p>
                  </div>
                </div>
              </div>

              <div className="bg-gray-700 p-6 rounded-lg border border-gray-600">
                <h2 className="text-xl font-semibold mb-4 text-gray-100">
                  Connection Status
                </h2>
                <div className="flex items-center">
                  <div className="h-3 w-3 bg-green-500 rounded-full mr-2"></div>
                  <span className="text-green-400 font-medium">Connected</span>
                </div>
              </div>
            </div>
          ) : (
            <div className="text-center py-8">
              <p className="text-gray-400">No protected data available</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
