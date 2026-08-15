/*
 * BLUEPRINT OBSIDIAN — Página única do portfólio.
 * Narrativa: Quem sou → O que sei → Como penso → O que construí → Contato.
 */
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Experience from "@/components/Experience";
import TechStack from "@/components/TechStack";
import Projects from "@/components/Projects";
import Architecture from "@/components/Architecture";
import AppsPublished from "@/components/AppsPublished";
import GithubSection from "@/components/GithubSection";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import BackToTop from "@/components/BackToTop";
import CustomCursor from "@/components/CustomCursor";
import { useSoundGate } from "@/components/SoundGate";
import { LocaleProvider } from "@/contexts/LocaleContext";

export default function Home() {
  useSoundGate();
  return (
    <LocaleProvider>
    <div className="min-h-screen flex flex-col">
      <CustomCursor />
      <Navbar />
      <main className="flex-1">
        <Hero />
        <About />
        <Experience />
        <TechStack />
        <Projects />
        <Architecture />
        <AppsPublished />
        <GithubSection />
        <Contact />
      </main>
      <Footer />
      <BackToTop />
    </div>
    </LocaleProvider>
  );
}
