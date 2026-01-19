'use client';

import { useState, useRef, useEffect } from 'react';

interface FAQItem {
  question: string;
  answer: string;
}

export default function QuestionSection() {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(3); // Default to question 4 expanded
  const contentRefs = useRef<(HTMLDivElement | null)[]>([]);

  const faqs: FAQItem[] = [
    {
      question: 'Question 1?',
      answer: 'Answer Answer Answer Answer Answer Answer Answer Answer Answer Answer Answer Answer Answer Answer Answer Answer Answer Answer Answer Answer Answer Answer Answer Answer Answer Answer Answer Answer Answer Answer Answer Answer',
    },
    {
      question: 'Question 2?',
      answer: 'Answer Answer Answer Answer Answer Answer Answer Answer Answer Answer Answer Answer Answer Answer Answer Answer Answer Answer Answer Answer Answer Answer Answer Answer Answer Answer Answer Answer Answer Answer Answer Answer',
    },
    {
      question: 'Question 3?',
      answer: 'Answer Answer Answer Answer Answer Answer Answer Answer Answer Answer Answer Answer Answer Answer Answer Answer Answer Answer Answer Answer Answer Answer Answer Answer Answer Answer Answer Answer Answer Answer Answer Answer',
    },
    {
      question: 'Question 4?',
      answer: 'Answer Answer Answer Answer Answer Answer Answer Answer Answer Answer Answer Answer Answer Answer Answer Answer Answer Answer Answer Answer Answer Answer Answer Answer Answer Answer Answer Answer Answer Answer Answer Answer',
    },
    {
      question: 'Question 5?',
      answer: 'Answer Answer Answer Answer Answer Answer Answer Answer Answer Answer Answer Answer Answer Answer Answer Answer Answer Answer Answer Answer Answer Answer Answer Answer Answer Answer Answer Answer Answer Answer Answer Answer',
    },
    {
      question: 'Question 6?',
      answer: 'Answer Answer Answer Answer Answer Answer Answer Answer Answer Answer Answer Answer Answer Answer Answer Answer Answer Answer Answer Answer Answer Answer Answer Answer Answer Answer Answer Answer Answer Answer Answer Answer',
    },
  ];

  const toggleQuestion = (index: number) => {
    if (expandedIndex === index) {
      // Đóng câu hỏi hiện tại
      setExpandedIndex(null);
    } else {
      // Mở câu hỏi mới
      setExpandedIndex(index);
    }
  };

  // Cập nhật height khi expandedIndex thay đổi
  useEffect(() => {
    contentRefs.current.forEach((ref, index) => {
      if (ref) {
        if (expandedIndex === index) {
          ref.style.height = `${ref.scrollHeight}px`;
          ref.style.opacity = '1';
        } else {
          ref.style.height = '0px';
          ref.style.opacity = '0';
        }
      }
    });
  }, [expandedIndex]);

  return (
    <section className="relative w-full py-12 sm:py-16 lg:py-20 bg-[#1e1e1e]">
      <div className="relative z-10 w-full max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 
          className="text-center text-3xl sm:text-4xl lg:text-5xl font-bold mb-8 sm:mb-12 lg:mb-16"
          style={{
            background: 'linear-gradient(90deg, #60A5E0 0%, #36E8CA 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
          }}
        >
          Frequent Questions From Our Users
        </h2>

        <div className="space-y-0">
          {faqs.map((faq, index) => {
            const isExpanded = expandedIndex === index;

            return (
              <div key={index}>
                <button
                  onClick={() => toggleQuestion(index)}
                  className="w-full flex items-center justify-between py-4 sm:py-5 lg:py-6 text-left hover:opacity-80 transition-opacity duration-200 group cursor-pointer"
                  aria-expanded={isExpanded}
                  aria-controls={`faq-answer-${index}`}
                  type="button"
                >
                  <span className="text-base sm:text-lg lg:text-xl font-medium text-white pr-4">
                    {faq.question}
                  </span>

                  <div className="flex-shrink-0 w-6 h-6 sm:w-7 sm:h-7 lg:w-8 lg:h-8 flex items-center justify-center text-white transition-transform duration-300">
                    {isExpanded ? (
                      <svg
                        className="w-5 h-5 sm:w-6 sm:h-6 transition-transform duration-300"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M20 12H4"
                        />
                      </svg>
                    ) : (
                      <svg
                        className="w-5 h-5 sm:w-6 sm:h-6 transition-transform duration-300"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M12 4v16m8-8H4"
                        />
                      </svg>
                    )}
                  </div>
                </button>

                <div
                  ref={(el) => {
                    contentRefs.current[index] = el;
                  }}
                  id={`faq-answer-${index}`}
                  className="overflow-hidden transition-all duration-300 ease-in-out"
                  style={{
                    height: expandedIndex === index ? 'auto' : '0px',
                    opacity: expandedIndex === index ? 1 : 0,
                  }}
                >
                  <div className="pb-4 sm:pb-5 lg:pb-6 pr-12 sm:pr-14 lg:pr-16">
                    <p className="text-sm sm:text-base lg:text-lg text-white/80 leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                </div>

                {index < faqs.length - 1 && (
                  <div className="h-px bg-white/20 w-full" />
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
