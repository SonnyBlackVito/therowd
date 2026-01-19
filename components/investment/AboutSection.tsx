interface SectionProps {
  title: string;
  titleText?: string;
  paragraphs: string[];
}

function Section({ title, titleText, paragraphs }: SectionProps) {
  return (
    <div className="space-y-4">
      <div className="flex items-center gap-4">
        <p 
          className="text-[20px] tracking-[0.3em] whitespace-nowrap"
          style={{
            background: 'linear-gradient(90deg, #60A5E0 0%, #36E8CA 100%)',
            backgroundClip: 'text',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
          }}
        >
          {title}
        </p>
        <div 
          className="flex-1 h-[1px]"
          style={{
            background: 'linear-gradient(90deg, #60A5E0 0%, #36E8CA 100%)',
            maskImage: 'repeating-linear-gradient(90deg, transparent, transparent 8px, black 8px, black 12px)',
            WebkitMaskImage: 'repeating-linear-gradient(90deg, transparent, transparent 8px, black 8px, black 12px)',
          }}
        ></div>
      </div>
      {titleText && (
        <h3 className="text-[24px] font-semibold text-white">
          {titleText}
        </h3>
      )}
      <div className="space-y-4 text-[18px] text-white">
        {paragraphs.map((paragraph, idx) => (
          <p key={idx}>{paragraph}</p>
        ))}
      </div>
    </div>
  );
}

export default function AboutSection({
  about,
  shortDescription,
  problem,
  solution,
}: {
  about: string[];
  shortDescription?: string;
  problem?: string[];
  solution?: string[];
}) {
  return (
    <div className="space-y-8">
      <Section 
        title="ABOUT PROJECT" 
        titleText={shortDescription}
        paragraphs={about}
      />
      
      <Section 
        title="PROBLEM" 
        paragraphs={problem || about}
      />
      
      <Section 
        title="SOLUTION" 
        paragraphs={solution || about}
      />
    </div>
  );
}