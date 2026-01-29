import Navigation from "@/components/Navigation";
import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Learn from "@/components/sections/Learn";
import Experience from "@/components/sections/Experience";
import Vision from "@/components/sections/Vision";
import Team from "@/components/sections/Team";
import Outcomes from "@/components/sections/Outcomes";
import CTA from "@/components/sections/CTA";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-white dark:bg-gray-900">
      <Navigation />
      <Hero />
      <About />
      <Learn />
      <Experience />
      <Vision />
      <Team />
      <Outcomes />
      <CTA />
      <Footer />
    </main>
  );
}
