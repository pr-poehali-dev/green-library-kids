import { useState, useEffect } from "react";
import Icon from "@/components/ui/icon";

const HERO_IMAGE = "https://cdn.poehali.dev/projects/03625968-f690-4427-b803-87b350efb6e6/files/11546cf6-0ab2-4cdc-9fab-ae5cc05e7cc7.jpg";

const NAV_LINKS = [
  { id: "about", label: "О библиотеке" },
  { id: "schedule", label: "Расписание" },
  { id: "events", label: "Мероприятия" },
  { id: "books", label: "Книги" },
  { id: "kids", label: "Детям" },
  { id: "rating", label: "Оценка" },
  { id: "contacts", label: "Контакты" },
];

const BOOKS = [
  { title: "Тихий лес", author: "Анна Берёзова", tag: "Природа", emoji: "🌲" },
  { title: "Жизнь почвы", author: "Игорь Земнов", tag: "Экология", emoji: "🌱" },
  { title: "Птицы России", author: "М. Соколова", tag: "Фауна", emoji: "🦅" },
  { title: "Водные миры", author: "Д. Морской", tag: "Вода", emoji: "🌊" },
  { title: "Зелёный город", author: "О. Садова", tag: "Урбан", emoji: "🏙️" },
  { title: "Дети природы", author: "Л. Полевая", tag: "Детям", emoji: "🌼" },
];

const EVENTS = [
  { date: "15 мая", title: "Посадка деревьев", desc: "Субботник с детьми и родителями", icon: "Sprout", color: "hsl(125, 40%, 32%)" },
  { date: "22 мая", title: "Эко-квест для школьников", desc: "Командная игра-исследование природы", icon: "Map", color: "hsl(38, 80%, 45%)" },
  { date: "1 июня", title: "День защиты детей", desc: "Праздник с книгами, играми и мастер-классами", icon: "Star", color: "hsl(300, 30%, 45%)" },
  { date: "8 июня", title: "Лекция «Климат и мы»", desc: "Открытый разговор об экологии будущего", icon: "Globe", color: "hsl(200, 50%, 40%)" },
];

const SCHEDULE = [
  { day: "Пн–Пт", time: "9:00 – 20:00", note: "Читальный зал + выдача книг", emoji: "🌅" },
  { day: "Суббота", time: "10:00 – 18:00", note: "Детские программы 12:00–16:00", emoji: "🌞" },
  { day: "Воскресенье", time: "11:00 – 17:00", note: "Тихий день, мероприятия", emoji: "🌿" },
];

const QUIZ_QUESTIONS = [
  {
    q: "Какое дерево называют «лёгкими планеты»?",
    opts: ["Берёза", "Амазонские джунгли", "Сосна", "Дуб"],
    correct: 1,
    fact: "Амазонские тропические леса производят около 20% кислорода Земли!"
  },
  {
    q: "Сколько лет живёт черепаха?",
    opts: ["10–20 лет", "30–50 лет", "100–150 лет", "Только 5 лет"],
    correct: 2,
    fact: "Некоторые черепахи живут более 150 лет — настоящие долгожители!"
  },
  {
    q: "Что такое фотосинтез?",
    opts: ["Фотография растений", "Превращение света в питание", "Цвет листьев", "Полив цветов"],
    correct: 1,
    fact: "Фотосинтез — это магия! Растения создают еду из солнечного света и воздуха."
  },
  {
    q: "Как называется дом для пчёл?",
    opts: ["Нора", "Улей", "Берлога", "Гнездо"],
    correct: 1,
    fact: "Один улей может содержать до 80 000 пчёл — целый пчелиный город!"
  },
];

const COUNTING_RHYMES = [
  {
    text: "Раз — цветок, два — листок,\nТри — зелёный стебелёк,\nЧетыре — дождь пошёл,\nПять — росток нашёл,\nШесть — корешок,\nСемь — ещё цветок!\nВыходи из круга вон —\nЗолотистый тихий сон.",
    emoji: "🌸"
  },
  {
    text: "На лугу жил муравей,\nСчитал он всех зверей:\nОдин — мышонок, два — енот,\nТри — ёжик у ворот,\nЧетыре — лягушонок,\nПять — зайчишка-бочонок.\nКого считалка назовёт —\nТот водить идёт!",
    emoji: "🐜"
  },
];

const RATINGS_LIST = [
  { name: "Мария К.", text: "Удивительная атмосфера! Дети не хотят уходить.", stars: 5 },
  { name: "Алексей Т.", text: "Отличный выбор книг по экологии. Нашли всё что нужно.", stars: 5 },
  { name: "Света Н.", text: "Квест для детей — восторг! Будем приходить каждую неделю.", stars: 5 },
];

function FloatingLeaf({ style }: { style: React.CSSProperties }) {
  return (
    <div className="absolute pointer-events-none select-none animate-float opacity-20 text-2xl" style={style}>
      🍃
    </div>
  );
}

function Stars({ count }: { count: number }) {
  return (
    <div className="flex gap-0.5">
      {Array.from({ length: 5 }).map((_, i) => (
        <span key={i} className={i < count ? "text-amber-400" : "text-gray-300"}>★</span>
      ))}
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

function EcoQuiz() {
  const [current, setCurrent] = useState(0);
  const [selected, setSelected] = useState<number | null>(null);
  const [score, setScore] = useState(0);
  const [finished, setFinished] = useState(false);
  const [showFact, setShowFact] = useState(false);

  const q = QUIZ_QUESTIONS[current];

  function handleOption(idx: number) {
    if (selected !== null) return;
    setSelected(idx);
    setShowFact(true);
    if (idx === q.correct) setScore(s => s + 1);
  }

  function next() {
    if (current + 1 >= QUIZ_QUESTIONS.length) {
      setFinished(true);
    } else {
      setCurrent(c => c + 1);
      setSelected(null);
      setShowFact(false);
    }
  }

  function restart() {
    setCurrent(0);
    setSelected(null);
    setScore(0);
    setFinished(false);
    setShowFact(false);
  }

  if (finished) {
    const pct = Math.round((score / QUIZ_QUESTIONS.length) * 100);
    return (
      <div className="text-center py-8 animate-fade-up">
        <div className="text-6xl mb-4">{pct >= 75 ? "🏆" : pct >= 50 ? "🌱" : "📚"}</div>
        <h3 className="font-serif text-3xl mb-2" style={{ color: 'hsl(var(--forest))' }}>
          {pct >= 75 ? "Эко-эксперт!" : pct >= 50 ? "Юный натуралист!" : "Продолжай учиться!"}
        </h3>
        <p className="text-muted-foreground mb-2 font-sans">
          Правильных ответов: <strong>{score}</strong> из <strong>{QUIZ_QUESTIONS.length}</strong>
        </p>
        <button
          onClick={restart}
          className="mt-4 px-6 py-2.5 rounded-full font-sans font-medium text-primary-foreground"
          style={{ background: 'hsl(var(--primary))' }}
        >
          Пройти ещё раз
        </button>
      </div>
    );
  }

  return (
    <div>
      <div className="flex justify-between items-center mb-4">
        <span className="font-hand text-lg" style={{ color: 'hsl(var(--moss))' }}>
          Вопрос {current + 1} / {QUIZ_QUESTIONS.length}
        </span>
        <span className="text-sm font-sans text-muted-foreground">🌟 {score} очков</span>
      </div>
      <div className="w-full bg-muted rounded-full h-2 mb-6">
        <div
          className="h-2 rounded-full transition-all duration-500"
          style={{ width: `${(current / QUIZ_QUESTIONS.length) * 100}%`, background: 'hsl(var(--primary))' }}
        />
      </div>
      <h3 className="font-serif text-2xl mb-5" style={{ color: 'hsl(var(--forest))' }}>{q.q}</h3>
      <div className="grid gap-2.5">
        {q.opts.map((opt, i) => (
          <button
            key={i}
            onClick={() => handleOption(i)}
            className={`quiz-option w-full text-left px-5 py-3 rounded-xl border-2 font-sans
              ${selected === null ? 'border-border bg-white/60' : ''}
              ${selected !== null && i === q.correct ? 'correct' : ''}
              ${selected !== null && selected === i && i !== q.correct ? 'wrong' : ''}
              ${selected !== null && selected !== i && i !== q.correct ? 'opacity-50 border-border bg-white/30' : ''}
            `}
          >
            <span className="font-hand text-base mr-2">{['А', 'Б', 'В', 'Г'][i]}.</span> {opt}
          </button>
        ))}
      </div>
      {showFact && (
        <div className="mt-4 p-4 rounded-xl animate-fade-up"
          style={{ background: 'hsla(125,40%,32%,0.07)', borderLeft: '3px solid hsl(125,40%,40%)' }}>
          <p className="font-sans text-sm" style={{ color: 'hsl(var(--forest))' }}>
            🌿 <strong>Интересный факт:</strong> {q.fact}
          </p>
        </div>
      )}
      {selected !== null && (
        <button
          onClick={next}
          className="mt-5 w-full py-3 rounded-full font-sans font-medium text-primary-foreground animate-fade-up"
          style={{ background: 'hsl(var(--primary))' }}
        >
          {current + 1 < QUIZ_QUESTIONS.length ? "Следующий вопрос →" : "Узнать результат 🌟"}
        </button>
      )}
    </div>
  );
}

function RatingForm() {
  const [hovered, setHovered] = useState(0);
  const [selected, setSelected] = useState(0);
  const [submitted, setSubmitted] = useState(false);
  const [comment, setComment] = useState("");

  if (submitted) {
    return (
      <div className="text-center py-8 animate-fade-up">
        <div className="text-5xl mb-3">🌸</div>
        <h3 className="font-serif text-2xl mb-2" style={{ color: 'hsl(var(--forest))' }}>Спасибо за оценку!</h3>
        <p className="text-muted-foreground font-sans">Ваше мнение помогает нам стать лучше</p>
      </div>
    );
  }

  return (
    <div className="space-y-5">
      <div className="flex justify-center gap-2">
        {[1,2,3,4,5].map(n => (
          <button
            key={n}
            onMouseEnter={() => setHovered(n)}
            onMouseLeave={() => setHovered(0)}
            onClick={() => setSelected(n)}
            className="text-4xl transition-transform hover:scale-110"
          >
            <span className={(hovered >= n || selected >= n) ? "text-amber-400" : "text-gray-300"}>★</span>
          </button>
        ))}
      </div>
      {selected > 0 && (
        <div className="animate-fade-up">
          <p className="text-center font-hand text-xl mb-3" style={{ color: 'hsl(var(--moss))' }}>
            {selected === 5 ? "Отлично! 🌟" : selected >= 3 ? "Хорошо! 🌱" : "Расскажите, что улучшить 🙏"}
          </p>
          <textarea
            value={comment}
            onChange={e => setComment(e.target.value)}
            placeholder="Ваш комментарий (необязательно)..."
            className="w-full p-3 rounded-xl border-2 border-border bg-white/60 font-sans text-sm resize-none focus:outline-none focus:border-primary"
            rows={3}
          />
          <button
            onClick={() => setSubmitted(true)}
            className="mt-3 w-full py-3 rounded-full font-sans font-medium text-primary-foreground"
            style={{ background: 'hsl(var(--primary))' }}
          >
            Отправить оценку
          </button>
        </div>
      )}
    </div>
  );
}

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

      {/* NAV */}
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
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-6 font-sans text-sm font-medium animate-fade-up"
            style={{ background: 'hsla(42,80%,70%,0.2)', border: '1px solid hsla(42,80%,70%,0.4)', color: 'hsl(42,80%,88%)' }}>
            🌱 Живая книжная экосистема
          </div>
          <h1 className="font-serif text-5xl md:text-7xl font-semibold text-white leading-tight mb-6 animate-fade-up delay-100">
            Библиотека,<br />
            <em className="text-amber-300">дышащая</em> природой
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
                  { num: "2 400+", label: "книг о природе", emoji: "📗" },
                  { num: "150+", label: "юных читателей", emoji: "👧" },
                  { num: "40+", label: "мероприятий в год", emoji: "🎪" },
                ].map(stat => (
                  <div key={stat.label} className="eco-card rounded-2xl p-4 text-center">
                    <div className="text-2xl mb-1">{stat.emoji}</div>
                    <div className="font-serif text-2xl font-semibold" style={{ color: 'hsl(var(--primary))' }}>{stat.num}</div>
                    <div className="font-sans text-xs text-muted-foreground mt-0.5">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative">
              <div className="organic-blob overflow-hidden" style={{ aspectRatio: '1/1' }}>
                <img src={HERO_IMAGE} alt="Библиотека" className="w-full h-full object-cover" />
              </div>
              <div className="absolute -bottom-4 -left-4 eco-card rounded-2xl p-4 shadow-lg">
                <div className="font-hand text-xl" style={{ color: 'hsl(var(--moss))' }}>Открыты каждый день 🌿</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SCHEDULE */}
      <section id="schedule" className="py-24 px-6"
        style={{ background: 'linear-gradient(180deg, hsl(42,30%,96%) 0%, hsl(100,25%,92%) 100%)' }}>
        <div className="max-w-3xl mx-auto">
          <SectionTitle sub="Когда мы работаем">Расписание</SectionTitle>
          <div className="space-y-4">
            {SCHEDULE.map((s, i) => (
              <div key={i} className="eco-card rounded-2xl p-6 flex flex-col sm:flex-row sm:items-center gap-4">
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
            🌼 В праздничные дни уточняйте расписание по телефону или в наших соцсетях
          </div>
        </div>
      </section>

      {/* EVENTS */}
      <section id="events" className="py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <SectionTitle sub="Ближайшие события">Мероприятия</SectionTitle>
          <div className="grid md:grid-cols-2 gap-5">
            {EVENTS.map((ev, i) => (
              <div key={i} className="eco-card rounded-2xl p-6 flex gap-5 items-start">
                <div className="flex-shrink-0 w-14 h-14 rounded-2xl flex items-center justify-center"
                  style={{ background: `hsla(125,40%,32%,0.1)` }}>
                  <Icon name={ev.icon} size={26} style={{ color: ev.color }} />
                </div>
                <div className="flex-1">
                  <div className="font-hand text-base mb-1" style={{ color: 'hsl(var(--moss))' }}>{ev.date}</div>
                  <h3 className="font-serif text-xl font-semibold mb-1" style={{ color: 'hsl(var(--forest))' }}>{ev.title}</h3>
                  <p className="font-sans text-sm text-muted-foreground">{ev.desc}</p>
                </div>
                <button className="flex-shrink-0 px-4 py-2 rounded-full font-sans text-sm font-medium transition-all hover:scale-105 text-primary-foreground"
                  style={{ background: 'hsl(var(--primary))' }}>
                  Записаться
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* BOOKS */}
      <section id="books" className="py-24 px-6"
        style={{ background: 'linear-gradient(180deg, hsl(100,25%,92%) 0%, hsl(42,30%,96%) 100%)' }}>
        <div className="max-w-6xl mx-auto">
          <SectionTitle sub="Лучшие из наших полок">Книги</SectionTitle>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-5">
            {BOOKS.map((book, i) => (
              <div key={i} className="eco-card rounded-2xl p-6 cursor-pointer group">
                <div className="text-4xl mb-4 inline-block transition-transform group-hover:scale-110 duration-300">
                  {book.emoji}
                </div>
                <div className="inline-block px-2.5 py-0.5 rounded-full text-xs font-sans font-medium mb-2"
                  style={{ background: 'hsla(125,40%,32%,0.1)', color: 'hsl(var(--primary))' }}>
                  {book.tag}
                </div>
                <h3 className="font-serif text-xl font-semibold" style={{ color: 'hsl(var(--forest))' }}>{book.title}</h3>
                <p className="font-sans text-sm text-muted-foreground mt-1">{book.author}</p>
                <button className="mt-4 w-full py-2 rounded-xl border-2 font-sans text-sm font-medium transition-all hover:text-primary-foreground"
                  style={{ borderColor: 'hsl(var(--border))', color: 'hsl(var(--foreground))' }}
                  onMouseEnter={e => { (e.target as HTMLElement).style.background = 'hsl(var(--primary))'; (e.target as HTMLElement).style.borderColor = 'hsl(var(--primary))'; (e.target as HTMLElement).style.color = 'hsl(var(--primary-foreground))'; }}
                  onMouseLeave={e => { (e.target as HTMLElement).style.background = ''; (e.target as HTMLElement).style.borderColor = 'hsl(var(--border))'; (e.target as HTMLElement).style.color = 'hsl(var(--foreground))'; }}
                >
                  Взять почитать
                </button>
              </div>
            ))}
          </div>
          <div className="text-center mt-8">
            <button className="px-8 py-3 rounded-full font-sans font-medium border-2 transition-all hover:scale-105"
              style={{ borderColor: 'hsl(var(--primary))', color: 'hsl(var(--primary))' }}>
              Смотреть весь каталог — 2400+ книг
            </button>
          </div>
        </div>
      </section>

      {/* KIDS */}
      <section id="kids" className="py-24 px-6 relative overflow-hidden"
        style={{ background: 'linear-gradient(135deg, hsl(85,35%,88%) 0%, hsl(42,50%,92%) 100%)' }}>
        <FloatingLeaf style={{ top: '10%', right: '5%', fontSize: '3rem', opacity: 0.15 }} />
        <FloatingLeaf style={{ bottom: '15%', left: '3%', fontSize: '2rem', opacity: 0.1, animationDelay: '1s' }} />
        <div className="max-w-4xl mx-auto relative z-10">
          <SectionTitle sub="Учимся беречь природу вместе">Детский уголок</SectionTitle>
          <div className="flex justify-center gap-2 mb-8">
            {(['quiz', 'rhyme'] as const).map(tab => (
              <button
                key={tab}
                onClick={() => setQuizTab(tab)}
                className="px-6 py-2.5 rounded-full font-sans font-medium transition-all"
                style={quizTab === tab
                  ? { background: 'hsl(var(--primary))', color: 'hsl(var(--primary-foreground))' }
                  : { background: 'rgba(255,255,255,0.5)', color: 'hsl(var(--foreground))' }}
              >
                {tab === 'quiz' ? '🌍 Эко-викторина' : '🎵 Считалочки'}
              </button>
            ))}
          </div>
          <div className="eco-card rounded-3xl p-8">
            {quizTab === 'quiz' ? (
              <EcoQuiz />
            ) : (
              <div>
                <div className="flex gap-2 mb-6 justify-center">
                  {COUNTING_RHYMES.map((r, i) => (
                    <button
                      key={i}
                      onClick={() => setActiveRhyme(i)}
                      className="w-12 h-12 rounded-full font-hand text-xl transition-all hover:scale-110"
                      style={activeRhyme === i
                        ? { background: 'hsl(var(--primary))', color: 'hsl(var(--primary-foreground))' }
                        : { background: 'hsl(var(--muted))' }}
                    >
                      {r.emoji}
                    </button>
                  ))}
                </div>
                <div className="text-center">
                  <div className="text-5xl mb-5 animate-float">{COUNTING_RHYMES[activeRhyme].emoji}</div>
                  <p className="font-hand text-2xl leading-relaxed whitespace-pre-line"
                    style={{ color: 'hsl(var(--forest))' }}>
                    {COUNTING_RHYMES[activeRhyme].text}
                  </p>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* RATING */}
      <section id="rating" className="py-24 px-6">
        <div className="max-w-5xl mx-auto">
          <SectionTitle sub="Что говорят наши читатели">Оценка качества</SectionTitle>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-4">
              <h3 className="font-serif text-2xl mb-5" style={{ color: 'hsl(var(--forest))' }}>Отзывы читателей</h3>
              {RATINGS_LIST.map((r, i) => (
                <div key={i} className="eco-card rounded-2xl p-5">
                  <div className="flex items-center justify-between mb-2">
                    <span className="font-sans font-semibold text-foreground">{r.name}</span>
                    <Stars count={r.stars} />
                  </div>
                  <p className="font-sans text-sm text-muted-foreground">{r.text}</p>
                </div>
              ))}
            </div>
            <div className="eco-card rounded-2xl p-8">
              <h3 className="font-serif text-2xl mb-6 text-center" style={{ color: 'hsl(var(--forest))' }}>Оцените нашу работу</h3>
              <RatingForm />
            </div>
          </div>
        </div>
      </section>

      {/* CONTACTS */}
      <section id="contacts" className="py-24 px-6"
        style={{ background: 'linear-gradient(180deg, hsl(42,30%,96%) 0%, hsl(100,30%,88%) 100%)' }}>
        <div className="max-w-5xl mx-auto">
          <SectionTitle sub="Приходите в гости">Контакты</SectionTitle>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-4">
              {[
                { icon: "MapPin", label: "Адрес", value: "ул. Зелёная, 42, корп. 1", color: "hsl(125,40%,32%)" },
                { icon: "Phone", label: "Телефон", value: "+7 (999) 123-45-67", color: "hsl(200,50%,40%)" },
                { icon: "Mail", label: "Email", value: "hello@ecolib.ru", color: "hsl(38,80%,45%)" },
                { icon: "Instagram", label: "Соцсети", value: "@ecolibrary", color: "hsl(300,35%,45%)" },
              ].map((c, i) => (
                <div key={i} className="eco-card rounded-2xl p-5 flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0"
                    style={{ background: `${c.color.replace(')', ', 0.12)').replace('hsl(', 'hsla(')}` }}>
                    <Icon name={c.icon} size={22} style={{ color: c.color }} />
                  </div>
                  <div>
                    <div className="font-sans text-xs text-muted-foreground uppercase tracking-wider">{c.label}</div>
                    <div className="font-sans font-medium text-foreground">{c.value}</div>
                  </div>
                </div>
              ))}
            </div>
            <div className="eco-card rounded-2xl p-8">
              <h3 className="font-serif text-2xl mb-5" style={{ color: 'hsl(var(--forest))' }}>Напишите нам</h3>
              <div className="space-y-3">
                <input type="text" placeholder="Ваше имя"
                  className="w-full px-4 py-3 rounded-xl border-2 border-border bg-white/60 font-sans text-sm focus:outline-none focus:border-primary" />
                <input type="email" placeholder="Email"
                  className="w-full px-4 py-3 rounded-xl border-2 border-border bg-white/60 font-sans text-sm focus:outline-none focus:border-primary" />
                <textarea placeholder="Ваше сообщение..."
                  className="w-full px-4 py-3 rounded-xl border-2 border-border bg-white/60 font-sans text-sm resize-none focus:outline-none focus:border-primary"
                  rows={4} />
                <button className="w-full py-3 rounded-full font-sans font-medium transition-all hover:scale-[1.02] text-primary-foreground"
                  style={{ background: 'hsl(var(--primary))' }}>
                  Отправить сообщение 🌿
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
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
    </div>
  );
}