import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { Hero } from "@/components/hero";
import { SocialProof } from "@/components/social-proof";

export default function Home() {
  return (
    <main className="bg-neutral-100 bg-[radial-gradient(circle_at_top,rgba(221,214,254,0.3)_0%,rgba(221,214,254,0)_40%)] min-h-screen text-foreground">
      <Header />
      <Hero />
      <SocialProof />
      <Footer />
    </main>
  );
}