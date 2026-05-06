import { useState, useEffect } from "react";
import NavBar, { Footer } from "@/components/NavBar";
import HeroSection from "@/components/HeroSection";
import EventsAndBooks from "@/components/EventsAndBooks";
import KidsRatingContacts from "@/components/KidsRatingContacts";

export default function Index() {
  const [activeSection, setActiveSection] = useState("home");
  const [menuOpen, setMenuOpen] = useState(false);
  const [quizTab, setQuizTab] = useState<'quiz' | 'rhyme'>('quiz');
  const [activeRhyme, setActiveRhyme] = useState(0);

  function scrollTo(id: string) {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setMenuOpen(false);
  }

  useEffect(() => {
    const handler = () => {
      const sections = ["home", "about", "schedule", "events", "books", "kids", "rating", "contacts"];
      for (const id of sections) {
        const el = document.getElementById(id);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 120 && rect.bottom > 120) {
            setActiveSection(id);
            break;
          }
        }
      }
    };
    window.addEventListener("scroll", handler);
    return () => window.removeEventListener("scroll", handler);
  }, []);

  return (
    <div className="min-h-screen bg-background overflow-x-hidden">
      <NavBar
        activeSection={activeSection}
        menuOpen={menuOpen}
        setMenuOpen={setMenuOpen}
        scrollTo={scrollTo}
      />
      <HeroSection scrollTo={scrollTo} />
      <EventsAndBooks />
      <KidsRatingContacts
        quizTab={quizTab}
        setQuizTab={setQuizTab}
        activeRhyme={activeRhyme}
        setActiveRhyme={setActiveRhyme}
      />
      <Footer scrollTo={scrollTo} />
    </div>
  );
}
