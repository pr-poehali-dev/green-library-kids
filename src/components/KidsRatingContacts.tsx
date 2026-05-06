import { useState } from "react";
import Icon from "@/components/ui/icon";

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

interface KidsRatingContactsProps {
  quizTab: 'quiz' | 'rhyme';
  setQuizTab: (tab: 'quiz' | 'rhyme') => void;
  activeRhyme: number;
  setActiveRhyme: (i: number) => void;
}

export default function KidsRatingContacts({ quizTab, setQuizTab, activeRhyme, setActiveRhyme }: KidsRatingContactsProps) {
  return (
    <>
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

          {/* Баннер "Ваше мнение очень важно" */}
          <div className="flex justify-center mb-8">
            <img
              src="https://cdn.poehali.dev/projects/03625968-f690-4427-b803-87b350efb6e6/bucket/8132b616-1ee5-4944-bec2-a7f5386996dc.png"
              alt="Ваше мнение очень важно"
              className="max-w-xs w-full object-contain"
            />
          </div>

          {/* QR-коды независимой оценки */}
          <div className="grid sm:grid-cols-2 gap-6 mb-12">
            <div className="eco-card rounded-2xl p-6 flex flex-col items-center text-center gap-4">
              <img
                src="https://cdn.poehali.dev/projects/03625968-f690-4427-b803-87b350efb6e6/bucket/3b482716-b329-4aca-a36e-f0c9b868bf3a.png"
                alt="QR-код независимой оценки удовлетворённости"
                className="w-48 h-48 object-contain"
              />
              <p className="font-sans text-sm text-muted-foreground leading-snug">
                Независимая оценка удовлетворённости граждан работой государственных и муниципальных организаций культуры, искусства и народного творчества
              </p>
            </div>
            <div className="eco-card rounded-2xl p-6 flex flex-col items-center text-center gap-4">
              <img
                src="https://cdn.poehali.dev/projects/03625968-f690-4427-b803-87b350efb6e6/bucket/39e4e711-e254-4fba-9af1-1027869698a7.png"
                alt="QR-код независимой оценки качества"
                className="w-48 h-48 object-contain"
              />
              <p className="font-sans text-sm text-muted-foreground leading-snug">
                Независимая оценка качества условий оказания услуг
              </p>
            </div>
          </div>

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
                { icon: "MapPin", label: "Адрес", value: "г. Александров, ул. Свердлова, 37", color: "hsl(125,40%,32%)", href: "" },
                { icon: "Phone", label: "Телефон", value: "8(49244) 9-37-28", color: "hsl(200,50%,40%)", href: "tel:84924493728" },
                { icon: "Mail", label: "Email", value: "eco_lib@mail.ru", color: "hsl(38,80%,45%)", href: "mailto:eco_lib@mail.ru" },
                { icon: "Users", label: "ВКонтакте", value: "vk.com/eco_lib", color: "hsl(220,60%,45%)", href: "https://vk.com/eco_lib" },
              ].map((c, i) => (
                <a
                  key={i}
                  href={c.href || undefined}
                  target={c.href?.startsWith('http') ? '_blank' : undefined}
                  rel={c.href?.startsWith('http') ? 'noopener noreferrer' : undefined}
                  className="eco-card rounded-2xl p-5 flex items-center gap-4 block transition-all hover:shadow-md"
                  style={{ textDecoration: 'none' }}
                >
                  <div className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0"
                    style={{ background: `${c.color.replace(')', ', 0.12)').replace('hsl(', 'hsla(')}` }}>
                    <Icon name={c.icon} size={22} style={{ color: c.color }} />
                  </div>
                  <div>
                    <div className="font-sans text-xs text-muted-foreground uppercase tracking-wider">{c.label}</div>
                    <div className="font-sans font-medium text-foreground">{c.value}</div>
                  </div>
                </a>
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
    </>
  );
}