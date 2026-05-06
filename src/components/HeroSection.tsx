import Icon from "@/components/ui/icon";

const HERO_IMAGE = "https://cdn.poehali.dev/projects/03625968-f690-4427-b803-87b350efb6e6/files/11546cf6-0ab2-4cdc-9fab-ae5cc05e7cc7.jpg";

const SCHEDULE = [
  { day: "Понедельник", time: "Выходной", note: "", emoji: "😴" },
  { day: "Вт – Пт", time: "10:00 – 19:00", note: "", emoji: "🌅" },
  { day: "Суббота", time: "10:00 – 17:00", note: "", emoji: "🌞" },
  { day: "Воскресенье", time: "10:00 – 17:00", note: "", emoji: "🌿" },
];

function FloatingLeaf({ style }: { style: React.CSSProperties }) {
  return (
    <div className="absolute pointer-events-none select-none animate-float opacity-20 text-2xl" style={style}>
      🍃
    </div>
  );
}

function SectionTitle({ children, sub }: { children: React.ReactNode; sub?: string }) {
  return (
    <div className="text-center mb-12">
      <div className="vine-divider inline-block px-8 mb-3">
        <span className="text-3xl">🌿</span>
      </div>
      <h2 className="font-serif text-4xl md:text-5xl font-semibold leading-tight" style={{ color: 'hsl(var(--forest))' }}>
        {children}
      </h2>
      {sub && <p className="mt-3 text-muted-foreground font-sans text-lg">{sub}</p>}
    </div>
  );
}

interface HeroSectionProps {
  scrollTo: (id: string) => void;
}

export default function HeroSection({ scrollTo }: HeroSectionProps) {
  return (
    <>
      {/* HERO */}
      <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
        <div className="absolute inset-0">
          <img src={HERO_IMAGE} alt="Экологическая библиотека" className="w-full h-full object-cover" />
          <div className="absolute inset-0" style={{ background: 'linear-gradient(135deg, hsla(125,45%,15%,0.72) 0%, hsla(30,40%,10%,0.5) 100%)' }} />
        </div>
        <FloatingLeaf style={{ top: '15%', left: '8%', animationDelay: '0s', fontSize: '2rem' }} />
        <FloatingLeaf style={{ top: '25%', right: '12%', animationDelay: '1.5s', fontSize: '1.5rem' }} />
        <FloatingLeaf style={{ bottom: '30%', left: '15%', animationDelay: '0.8s', fontSize: '2.5rem' }} />
        <FloatingLeaf style={{ bottom: '20%', right: '8%', animationDelay: '2s', fontSize: '1.8rem' }} />
        <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
          <h1 className="font-serif text-5xl md:text-7xl font-semibold text-white leading-tight mb-6 animate-fade-up delay-100">
            Детская экологическая<br />
            <em className="text-amber-300">библиотека №1</em>
          </h1>
          <div className="flex flex-col sm:flex-row gap-3 justify-center animate-fade-up delay-300">
            <button
              onClick={() => scrollTo("books")}
              className="px-8 py-3.5 rounded-full font-sans font-medium text-base transition-all hover:scale-105"
              style={{ background: 'hsl(var(--accent))', color: 'hsl(var(--accent-foreground))' }}
            >
              Книги 📚
            </button>
            <button
              onClick={() => scrollTo("kids")}
              className="px-8 py-3.5 rounded-full font-sans font-medium text-base border-2 text-white hover:bg-white/10 transition-all"
              style={{ borderColor: 'hsla(255,100%,100%,0.5)' }}
            >
              Детям 🎮
            </button>
          </div>
        </div>
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-sway">
          <Icon name="ChevronDown" size={28} className="text-white/60" />
        </div>
      </section>

      {/* SCHEDULE */}
      <section id="schedule" className="py-24 px-6"
        style={{ background: 'linear-gradient(180deg, hsl(42,30%,96%) 0%, hsl(100,25%,92%) 100%)' }}>
        <div className="max-w-3xl mx-auto">
          <SectionTitle>Расписание</SectionTitle>
          <div className="space-y-4">
            {SCHEDULE.map((s, i) => (
              <div
                key={i}
                className={`rounded-3xl flex items-center justify-between px-8 py-6 transition-all
                  ${s.time === 'Выходной'
                    ? 'opacity-50'
                    : 'shadow-lg hover:shadow-xl hover:-translate-y-0.5'}`}
                style={{
                  background: s.time === 'Выходной'
                    ? 'hsla(0,0%,60%,0.08)'
                    : 'linear-gradient(120deg, hsla(125,40%,32%,0.10) 0%, hsla(42,60%,70%,0.18) 100%)',
                  border: s.time === 'Выходной'
                    ? '2px solid hsla(0,0%,60%,0.15)'
                    : '2px solid hsla(125,40%,32%,0.18)',
                }}
              >
                <div className="flex items-center gap-5">
                  <span className="text-4xl">{s.emoji}</span>
                  <span className="font-serif text-2xl md:text-3xl font-semibold" style={{ color: 'hsl(var(--forest))' }}>
                    {s.day}
                  </span>
                </div>
                <span
                  className="font-serif text-2xl md:text-4xl font-bold tracking-tight"
                  style={{ color: s.time === 'Выходной' ? 'hsl(0,0%,50%)' : 'hsl(var(--primary))' }}
                >
                  {s.time}
                </span>
              </div>
            ))}
          </div>
          <div className="mt-8 p-5 rounded-2xl text-center"
            style={{ background: 'hsla(38,80%,52%,0.1)', border: '1px solid hsla(38,80%,52%,0.3)', color: 'hsl(25,40%,30%)' }}>
            <p className="font-sans text-lg font-bold mb-1">🧹 Последняя пятница каждого месяца — санитарный день</p>
            <p className="font-sans text-sm font-normal" style={{ color: 'hsl(25,35%,45%)' }}>
              🌼 В праздничные дни уточняйте расписание по телефону или в наших соцсетях
            </p>
          </div>
        </div>
      </section>
    </>
  );
}