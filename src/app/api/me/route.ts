import { authOptions } from "@/pages/api/auth/[...nextauth]";
import { getServerSession } from "next-auth";
import { NextResponse } from "next/server";
import { getUserByUsername } from "@/service/user";
import { withSessionUser } from "@/util/session";

export async function GET() {
  return withSessionUser(async (user) => {
    return getUserByUsername(user.username).then((data) =>
      NextResponse.json(data)
    );
  });
}
