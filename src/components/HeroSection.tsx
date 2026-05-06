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
          <p className="font-sans text-lg md:text-xl text-white/80 mb-8 max-w-2xl mx-auto animate-fade-up delay-200">
            Место, где книги встречаются с лесом, а дети открывают тайны живой природы через игры, викторины и увлекательные события
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center animate-fade-up delay-300">
            <button
              onClick={() => scrollTo("books")}
              className="px-8 py-3.5 rounded-full font-sans font-medium text-base transition-all hover:scale-105"
              style={{ background: 'hsl(var(--accent))', color: 'hsl(var(--accent-foreground))' }}
            >
              Выбрать книгу 📚
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

      {/* ABOUT */}
      <section id="about" className="py-24 px-6 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 rounded-full opacity-10 -translate-y-1/2 translate-x-1/2"
          style={{ background: 'radial-gradient(circle, hsl(125,50%,40%), transparent)' }} />
        <div className="max-w-6xl mx-auto">
          <SectionTitle sub="Почему мы особенные">О библиотеке</SectionTitle>
          <div className="grid md:grid-cols-2 gap-10 items-center">
            <div className="space-y-5">
              <p className="font-sans text-lg leading-relaxed text-foreground/80">
                Мы — первая экологическая библиотека в городе, где каждый уголок создан с любовью к природе.
                Живые растения, деревянные стеллажи из переработанного дерева и огромная коллекция книг о флоре, фауне и устойчивом развитии.
              </p>
              <p className="font-sans text-lg leading-relaxed text-foreground/80">
                Для детей мы создали особую зону с интерактивными играми об экологии —
                где учиться беречь природу весело и интересно.
              </p>
              <div className="grid grid-cols-3 gap-4 pt-2">
                {[
                  { num: "2400+", label: "книг", emoji: "📚" },
                  { num: "15 лет", label: "работаем", emoji: "🌳" },
                  { num: "500+", label: "читателей", emoji: "👨‍👩‍👧" },
                ].map((s, i) => (
                  <div key={i} className="eco-card rounded-2xl p-4 text-center">
                    <div className="text-2xl mb-1">{s.emoji}</div>
                    <div className="font-serif text-2xl font-semibold" style={{ color: 'hsl(var(--primary))' }}>{s.num}</div>
                    <div className="font-sans text-xs text-muted-foreground">{s.label}</div>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative">
              <div className="eco-card rounded-3xl overflow-hidden" style={{ boxShadow: '0 20px 60px hsla(125,40%,15%,0.2)' }}>
                <img
                  src="https://cdn.poehali.dev/files/0a404bbf-54d7-4f64-b2e7-6f285376ffaf.jpg"
                  alt="Библиотека"
                  className="w-full h-80 object-cover"
                />
              </div>
              <div className="absolute -bottom-4 -left-4 eco-card rounded-2xl p-4 flex items-center gap-3"
                style={{ boxShadow: '0 8px 30px hsla(125,40%,15%,0.15)' }}>
                <span className="text-3xl">🌿</span>
                <div>
                  <div className="font-serif font-semibold" style={{ color: 'hsl(var(--forest))' }}>Эко-пространство</div>
                  <div className="font-sans text-xs text-muted-foreground">Живые растения повсюду</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SCHEDULE */}
      <section id="schedule" className="py-24 px-6"
        style={{ background: 'linear-gradient(180deg, hsl(42,30%,96%) 0%, hsl(100,25%,92%) 100%)' }}>
        <div className="max-w-3xl mx-auto">
          <SectionTitle sub="Когда мы открыты">Расписание</SectionTitle>
          <div className="space-y-3">
            {SCHEDULE.map((s, i) => (
              <div key={i} className={`eco-card rounded-2xl p-5 flex items-center justify-between
                ${s.time === 'Выходной' ? 'opacity-60' : ''}`}>
                <div className="flex items-center gap-4 flex-1">
                  <div className="w-12 h-12 rounded-2xl flex items-center justify-center text-xl flex-shrink-0"
                    style={{ background: 'hsla(125,40%,32%,0.1)' }}>
                    {s.emoji}
                  </div>
                  <div>
                    <div className="font-sans font-semibold text-foreground">{s.day}</div>
                    <div className="text-sm text-muted-foreground font-sans">{s.note}</div>
                  </div>
                </div>
                <div className="font-serif text-2xl font-semibold" style={{ color: 'hsl(var(--primary))' }}>{s.time}</div>
              </div>
            ))}
          </div>
          <div className="mt-6 p-4 rounded-2xl text-center font-sans text-sm"
            style={{ background: 'hsla(38,80%,52%,0.1)', border: '1px solid hsla(38,80%,52%,0.3)', color: 'hsl(25,40%,30%)' }}>
            🧹 Последняя пятница каждого месяца — санитарный день
          </div>
        </div>
      </section>
    </>
  );
}
