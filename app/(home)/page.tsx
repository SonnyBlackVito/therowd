import AchievementSection from "./components/AchievementSection";
import BenefitSection from "./components/BenefitSection";
import HeroSection from "./components/HeroSection";
import HowToStartInvestSection from "./components/HowToStartInvestSection";
import InvestSection from "./components/InvestSection";
import PartnerSection from "./components/PartnerSection";
import QuestionSection from "./components/QuestionSection";
import WhyChooseUsSection from "./components/WhyChooseUsSection";

export default function Home() {
  return (
    <>
      <HeroSection />
      <PartnerSection />
      <BenefitSection />
      <WhyChooseUsSection />
      <AchievementSection />
      <InvestSection />
      <HowToStartInvestSection />
      <QuestionSection />
    </>
  );
}
