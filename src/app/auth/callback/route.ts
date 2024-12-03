import { BACKEND_URL } from "@/utils/env-vars";
import { redirect } from "next/navigation";
import { NextRequest } from "next/server";

export const GET = async (req: NextRequest) => {
  const url = new URL(req.url);
  const code = url.searchParams.get("code");

  redirect(`${BACKEND_URL}/auth/callback?code=${code}`);
};
