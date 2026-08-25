'use server';

import prisma from '@/lib/prisma';
import { revalidatePath } from 'next/cache';

export async function supportCase(caseId: string) {
  try {
    await prisma.case.update({
      where: { id: caseId },
      data: {
        supportersCount: { increment: 1 }
      }
    });
    revalidatePath('/forum');
    revalidatePath(`/case/${caseId}`);
    return { success: true };
  } catch (error) {
    console.error("Failed to support case:", error);
    return { success: false };
  }
}

export async function logEmailSent(caseId: string) {
  try {
    await prisma.case.update({
      where: { id: caseId },
      data: {
        emailsSentCount: { increment: 1 }
      }
    });
    revalidatePath(`/case/${caseId}`);
    return { success: true };
  } catch (error) {
    console.error("Failed to log email:", error);
    return { success: false };
  }
}
