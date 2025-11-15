import Hero from "@/components/Hero";
import RetentionSection from "@/components/RetentionSection";
import ReviewsSection from "@/components/ReviewsSection";
import VideoSection from "@/components/VideoSection";

export default function Index() {
  return (
    <main className="bg-background text-foreground">
      <Hero />
      <RetentionSection />
      <ReviewsSection />
      <VideoSection />
    </main>
  );
}
