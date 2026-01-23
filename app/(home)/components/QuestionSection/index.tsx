"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaPlus, FaMinus } from "react-icons/fa";

interface FAQItem {
  question: string;
  answer: string;
}

export default function QuestionSection() {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  const faqs: FAQItem[] = [
    {
      question: "What are startup investments?",
      answer:
        "Startup investments involve providing capital to early-stage or growing companies in return for equity or ownership interest. This funding plays a vital role in helping startups scale their business, develop products, and support day-to-day operations. In exchange, investors aim to generate returns when the startup grows successfully and reaches a liquidity event such as an acquisition or IPO.",
    },
    {
      question: "Are startups worth investing in?",
      answer:
        "Startup investing has the potential to generate significantly higher long-term returns compared to traditional public markets. However, it also carries substantial risk and uncertainty. Whether startup investments are suitable for you depends on factors such as your risk appetite, financial goals, expected returns, and the fundamentals of the specific startup you are considering.",
    },
    {
      question: "How do people invest in startups?",
      answer:
        "Investors can access startups through several channels, including direct equity purchases, convertible notes or SAFEs, equity crowdfunding platforms, or venture capital funds. Typically, startups do not accept small investments (under $100,000) from individuals without a direct relationship with the founders. Regulatory bodies such as the SEC restrict direct startup investments to accredited investors.\nSPECFIN opens the door to startup investing by offering access through individual startup deals, diversified funds, or pre-funded investment accounts.",
    },
    {
      question: "How do I find quality startups to invest in?",
      answer:
        "Identifying promising startups requires extensive research and careful due diligence. At SPECFIN, we handle this process for you. By visiting our Opportunities page, you can explore startups currently raising capital. Each listing includes comprehensive investor information and our exclusive “Our Take” analysis, enabling you to evaluate opportunities efficiently. Please note that investing through SPECFIN is available only to accredited investors.",
    },
    {
      question: "How do I begin investing in startups?",
      answer:
        "Create a free SPECFIN account to unlock platform features (for accredited investors).Review available investment opportunities using our detailed insights and analyses.Select a startup and click the green Invest button on its page to proceed.Our Investor Relations team will assist you throughout the process and keep you informed with regular updates to help you track and manage your portfolio.",
    },
  ];

  const toggleQuestion = (index: number) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  return (
    <section className="relative w-full py-12 sm:py-16 lg:py-20 bg-[#1E1E1E]">
      <div className="w-full max-w-360 mx-auto px-5 sm:px-6 lg:px-8">
        <div className="text-center mb-12 sm:mb-16 lg:mb-20">
          <h2
            className="text-[26px] sm:text-[29px] md:text-[32px] lg:text-[35px] font-bold"
            style={{
              background:
                "var(--gradient, linear-gradient(90deg, #60A5E0 0%, #36E8CA 100%))",
              backgroundClip: "text",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}>
            Frequent Questions From Our Users
          </h2>
        </div>

        <div className="mx-auto">
          {faqs.map((faq, index) => {
            const isExpanded = expandedIndex === index;

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}>
                <button
                  onClick={() => toggleQuestion(index)}
                  className="w-full flex items-center justify-between py-4 sm:py-5 lg:py-6 text-left hover:opacity-80 transition-opacity duration-200"
                  aria-expanded={isExpanded}
                  aria-controls={`faq-answer-${index}`}>
                  <span className="text-[14px] sm:text-[16px] lg:text-[18px] font-bold text-white pr-4">
                    {faq.question}
                  </span>

                  <div className="shrink-0 w-6 h-6 sm:w-7 sm:h-7 lg:w-8 lg:h-8 flex items-center justify-center">
                    <motion.div
                      initial={false}
                      animate={{ rotate: isExpanded ? 0 : 0 }}
                      transition={{ duration: 0.2 }}
                      className="text-white">
                      {isExpanded ? (
                        <FaMinus className="w-3 h-3 sm:w-5 sm:h-5 lg:w-6 lg:h-6" />
                      ) : (
                        <FaPlus className="w-3 h-3 sm:w-5 sm:h-5 lg:w-6 lg:h-6" />
                      )}
                    </motion.div>
                  </div>
                </button>

                <AnimatePresence initial={false}>
                  {isExpanded && (
                    <motion.div
                      id={`faq-answer-${index}`}
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                      className="overflow-hidden">
                      <div className="pb-4 sm:pb-5 lg:pb-6 pr-12 sm:pr-14 lg:pr-16">
                        <p className="text-base sm:text-lg lg:text-xl text-white/80 leading-relaxed">
                          {faq.answer}
                        </p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>

                {index < faqs.length - 1 && (
                  <div className="h-px bg-white/20 w-full" />
                )}
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
