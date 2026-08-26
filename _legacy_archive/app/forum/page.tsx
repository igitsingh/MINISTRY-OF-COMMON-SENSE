import Header from '@/components/Header';
import { ShieldAlert } from 'lucide-react';
import prisma from '@/lib/prisma';
import ForumLayout from '@/components/forum/ForumLayout';

export default async function ForumPage() {
  const cases = await prisma.case.findMany({
    orderBy: { createdAt: 'desc' },
    include: {
      authority: true
    }
  });

  return (
    <div className="bg-[var(--ivory)] min-h-screen text-[var(--charcoal)] font-sans">
      <Header />

      <div className="bg-[var(--ministry-red)] text-white font-mono text-sm py-2 overflow-hidden border-b-4 border-black relative">
        <div className="max-w-6xl mx-auto px-4 flex items-center justify-center">
          <div className="flex items-center gap-2 font-black uppercase tracking-widest text-[var(--gold)]">
            <ShieldAlert size={16} />
            INDIA'S LARGEST DATABASE OF CIVIC COMMON SENSE FAILURES
            <ShieldAlert size={16} />
          </div>
        </div>
      </div>

      <ForumLayout initialCases={cases} />
    </div>
  );
}
