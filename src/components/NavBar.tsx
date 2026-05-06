import Icon from "@/components/ui/icon";

const NAV_LINKS = [
  { id: "about", label: "О библиотеке" },
  { id: "schedule", label: "Расписание" },
  { id: "events", label: "Мероприятия" },
  { id: "books", label: "Книги" },
  { id: "kids", label: "Детям" },
  { id: "rating", label: "Оценка" },
  { id: "contacts", label: "Контакты" },
];

interface NavBarProps {
  activeSection: string;
  menuOpen: boolean;
  setMenuOpen: (v: boolean | ((prev: boolean) => boolean)) => void;
  scrollTo: (id: string) => void;
}

export default function NavBar({ activeSection, menuOpen, setMenuOpen, scrollTo }: NavBarProps) {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 leaf-bg backdrop-blur-md border-b border-border/50">
      <div className="max-w-6xl mx-auto px-4 md:px-8 flex items-center justify-between h-16">
        <button onClick={() => scrollTo("home")} className="flex items-center gap-2">
          <span className="text-2xl">🌿</span>
          <span className="font-serif text-xl font-semibold" style={{ color: 'hsl(var(--forest))' }}>ЭкоБиблиотека</span>
        </button>
        <div className="hidden md:flex items-center gap-1">
          {NAV_LINKS.map(link => (
            <button
              key={link.id}
              onClick={() => scrollTo(link.id)}
              className={`px-3 py-1.5 rounded-full font-sans text-sm transition-all duration-200
                ${activeSection === link.id ? 'text-primary-foreground font-medium' : 'text-foreground/70 hover:text-foreground hover:bg-muted'}`}
              style={activeSection === link.id ? { background: 'hsl(var(--primary))' } : {}}
            >
              {link.label}
            </button>
          ))}
        </div>
        <button className="md:hidden p-2 rounded-lg hover:bg-muted" onClick={() => setMenuOpen(o => !o)}>
          <Icon name={menuOpen ? "X" : "Menu"} size={22} />
        </button>
      </div>
      {menuOpen && (
        <div className="md:hidden px-4 pb-4 pt-2 space-y-1 bg-background/95 border-t border-border animate-fade-up">
          {NAV_LINKS.map(link => (
            <button
              key={link.id}
              onClick={() => scrollTo(link.id)}
              className="w-full text-left px-4 py-2.5 rounded-xl font-sans hover:bg-muted text-foreground"
            >
              {link.label}
            </button>
          ))}
        </div>
      )}
    </nav>
  );
}

export function Footer({ scrollTo }: { scrollTo: (id: string) => void }) {
  return (
    <footer className="py-8 px-6 border-t border-border" style={{ background: 'hsl(var(--forest))' }}>
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
        <div className="flex items-center gap-2">
          <span className="text-2xl">🌿</span>
          <span className="font-serif text-xl text-white">ЭкоБиблиотека</span>
        </div>
        <p className="font-sans text-sm" style={{ color: 'hsla(42,50%,90%,0.6)' }}>© 2024 · Живём в гармонии с природой</p>
        <div className="flex gap-4 flex-wrap justify-center">
          {NAV_LINKS.slice(0, 4).map(l => (
            <button key={l.id} onClick={() => scrollTo(l.id)}
              className="font-sans text-sm transition-opacity"
              style={{ color: 'hsla(42,50%,90%,0.6)' }}
              onMouseEnter={e => (e.target as HTMLElement).style.opacity = '1'}
              onMouseLeave={e => (e.target as HTMLElement).style.opacity = '0.6'}
            >
              {l.label}
            </button>
          ))}
        </div>
      </div>
    </footer>
  );
}
