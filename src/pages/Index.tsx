import Hero from "@/components/Hero";
import RetentionSection from "@/components/RetentionSection";
import ReviewsSection from "@/components/ReviewsSection";
import VideoSection from "@/components/VideoSection";
import PricingSection from "@/components/PricingSection";
import FAQSection from "@/components/FAQSection";
import Footer from "@/components/Footer";

export default function Index() {
  return (
    <main className="bg-background text-foreground w-full overflow-x-hidden">
      <Hero />
      <RetentionSection />
      <ReviewsSection />
      <VideoSection />
      <PricingSection />
      <FAQSection />
      <Footer />
    </main>
  );
}
