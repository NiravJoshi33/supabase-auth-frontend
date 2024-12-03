import { BACKEND_URL } from "@/utils/env-vars";
import { redirect } from "next/navigation";
import { NextRequest, NextResponse } from "next/server";

export const GET = async (req: NextRequest) => {
  const url = new URL(req.url);
  const token_hash = url.searchParams.get("token_hash");
  const type = url.searchParams.get("type");
  const next = url.searchParams.get("next");

  redirect(
    `${BACKEND_URL}/auth/confirm?token_hash=${token_hash}&type=${type}&next=${next}`
  );
};
