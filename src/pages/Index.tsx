import Hero from "@/components/Hero";
import RetentionSection from "@/components/RetentionSection";
import ReviewsSection from "@/components/ReviewsSection";

export default function Index() {
  return (
    <main className="bg-background text-foreground">
      <Hero />
      <RetentionSection />
      <ReviewsSection />
    </main>
  );
}
