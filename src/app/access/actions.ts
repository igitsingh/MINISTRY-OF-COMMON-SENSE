"use server";

import { PrismaClient } from "@prisma/client";
import { cookies } from "next/headers";

const prisma = new PrismaClient();

export async function verifyAccessKey(formData: FormData) {
  const key = formData.get("access_key") as string;

  if (!key) {
    return { error: "Access key is required." };
  }

  try {
    const member = await prisma.member.findUnique({
      where: { access_key: key }
    });

    if (!member) {
      return { error: "ACCESS DENIED. INVALID KEY." };
    }

    // Set secure cookie
    const cookieStore = await cookies();
    cookieStore.set("mocs_auth_token", member.access_key as string, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      maxAge: 60 * 60 * 24 * 7, // 1 week
      path: "/",
    });

    return { success: true };
  } catch (error) {
    console.error("Error verifying access key:", error);
    return { error: "SYSTEM ERROR." };
  }
}
