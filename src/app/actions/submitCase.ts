"use server";

import prisma from '@/lib/prisma';
import { redirect } from 'next/navigation';

export async function submitCase(formData: FormData) {
  const imageUrl = formData.get('imageUrl') as string;
  const description = formData.get('description') as string;
  const lat = parseFloat(formData.get('lat') as string);
  const lng = parseFloat(formData.get('lng') as string);
  
  if (!imageUrl || !description) {
    throw new Error('Image and description are required.');
  }

  // We are storing the description in 'title' for now, or we can use it as a base to generate the AI report later.
  // We'll create a pending case. The AI analysis will happen next.
  
  const newCase = await prisma.case.create({
    data: {
      title: "Pending AI Analysis...",
      satiricalReport: "Awaiting Central Bureau processing...",
      score: 0,
      suggestedFix: "Pending...",
      imageUrl: imageUrl,
      locationLat: lat,
      locationLng: lng,
      type: "CIVIC_INCIDENT",
      status: "PENDING_AI",
    }
  });

  // Redirect to the newly created case page, or we could redirect to a processing page
  redirect(`/case/${newCase.id}`);
}
