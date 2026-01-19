'use client';

import Image from 'next/image';

interface EventCardProps {
  image: string;
  date: string;
  title: string;
  description: string;
  buttonText: string;
}

export default function EventCard({
  image,
  date,
  title,
  description,
  buttonText,
}: EventCardProps) {
  const hasReadMore = description.includes('Read more') || description.includes('Read');
  const descriptionText = description.replace(/\s*(Read more|Read)$/i, '');
  const readMoreText = description.match(/(Read more|Read)$/i)?.[0] || '';

  return (
    <div className="flex flex-col overflow-hidden rounded-lg border border-white/10 bg-[#1E1E1E]">
      <div className="relative h-48 w-full">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, 400px"
        />
        <div className="absolute bottom-4 left-4 z-10">
          <span
            className="rounded-full px-4 py-1.5 text-sm font-medium text-[#000000]"
            style={{
              background: 'linear-gradient(90deg, #D5E0F5 0%, #CEEDF2 100%)',
            }}
          >
            {date}
          </span>
        </div>
      </div>

      <div className="flex flex-1 flex-col p-5 bg-[#1E1E1E]">
        <h3 className="mb-3 text-xl font-bold text-white">{title}</h3>
        <p className="mb-4 flex-1 text-sm leading-relaxed text-white">
          {descriptionText}
          {hasReadMore && (
            <span className="ml-1 cursor-pointer text-[#60A5E0] hover:underline">
              {readMoreText}
            </span>
          )}
        </p>
        <button
          type="button"
          className="w-full rounded-md bg-gray-300 px-4 py-2.5 text-sm font-medium text-gray-800 transition-colors hover:bg-gray-200"
        >
          {buttonText}
        </button>
      </div>
    </div>
  );
}

