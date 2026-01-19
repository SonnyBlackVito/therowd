import Image from 'next/image';

export default function HeroMedia({ cover }: { cover: string }) {
  return (
    <div className="rounded-2xl border border-white/10 bg-[#060F1F] p-4 space-y-4">
      <div className="relative h-56 sm:h-72 rounded-xl overflow-hidden border border-white/10">
        <Image src={cover} alt="Project cover" fill className="object-cover" />
      </div>
    </div>
  );
}