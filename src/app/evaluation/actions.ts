"use server";

import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function submitEvaluation(formData: FormData) {
  const q1 = formData.get("q1") as string;
  const q2 = formData.get("q2") as string;
  const q3 = formData.get("q3") as string;
  const email = formData.get("email") as string;
  const name = formData.get("name") as string;

  if (!q1 || !q2 || !q3 || !email || !name) {
    return { error: "All fields are required to complete the evaluation." };
  }

  try {
    const existing = await prisma.applicant.findUnique({
      where: { email }
    });

    if (existing) {
      return { error: "An evaluation associated with this email already exists." };
    }

    // Generate dynamic candidate ID (e.g., MOCS-2026-01482)
    const year = new Date().getFullYear();
    const randomNum = Math.floor(10000 + Math.random() * 90000); // 5 digits
    const candidate_number = `MOCS-${year}-${randomNum}`;

    const answersJson = JSON.stringify({ q1, q2, q3 });

    const applicant = await prisma.applicant.create({
      data: {
        candidate_number,
        name,
        email,
        answers: answersJson,
        status: "PENDING"
      }
    });

    return { success: true, candidate_number: applicant.candidate_number };
  } catch (error) {
    console.error("Error submitting evaluation:", error);
    return { error: "An error occurred while logging your evaluation." };
  }
}
