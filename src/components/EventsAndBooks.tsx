const BOOKS = [
  { title: "Тихий лес", author: "Анна Берёзова", tag: "Природа", emoji: "🌲" },
  { title: "Жизнь почвы", author: "Игорь Земнов", tag: "Экология", emoji: "🌱" },
  { title: "Птицы России", author: "М. Соколова", tag: "Фауна", emoji: "🦅" },
  { title: "Водные миры", author: "Д. Морской", tag: "Вода", emoji: "🌊" },
  { title: "Зелёный город", author: "О. Садова", tag: "Урбан", emoji: "🏙️" },
  { title: "Дети природы", author: "Л. Полевая", tag: "Детям", emoji: "🌼" },
];

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

export default function EventsAndBooks() {
  return (
    <>
      {/* EVENTS */}
      <section id="events" className="py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <SectionTitle>Мероприятия</SectionTitle>

          {/* Masonry-style photo gallery */}
          <div className="columns-1 sm:columns-2 md:columns-3 gap-4 space-y-4">
            {[
              { url: "https://cdn.poehali.dev/files/769137dd-871d-43c9-bda4-59d35ea4b5da.jpg", alt: "Чаепитие с самоваром" },
              { url: "https://cdn.poehali.dev/files/111f5e85-88f3-4fb3-ba53-507b90a04028.jpg", alt: "Настольные игры" },
              { url: "https://cdn.poehali.dev/files/082868ee-d117-49f3-8862-7a7231cd993e.jpg", alt: "Библионочь 2025" },
              { url: "https://cdn.poehali.dev/files/f2210e4f-a277-46da-ab56-553999416f11.jpg", alt: "Мастер-класс по поделкам" },
              { url: "https://cdn.poehali.dev/files/8e316c7f-3dc8-48bc-8b58-12cbe634523a.jpg", alt: "Научные опыты" },
              { url: "https://cdn.poehali.dev/files/368f4756-6a44-44e4-97dd-210492e5b92e.jpg", alt: "Изучение природы" },
              { url: "https://cdn.poehali.dev/files/52a6ed46-9f09-4e9c-b46a-57f61c199d2e.jpg", alt: "Патриотическое мероприятие" },
              { url: "https://cdn.poehali.dev/files/ced50da2-2e1e-4ea6-bc59-21f8dd2cb970.jpg", alt: "Знакомство с игрушками" },
              { url: "https://cdn.poehali.dev/files/23bca794-62d0-4f8d-826b-4e083683e07e.jpg", alt: "Выставка книг о космосе" },
              { url: "https://cdn.poehali.dev/files/858f571e-df6c-46e4-9611-014c06c3f2e6.jpg", alt: "Творческий кружок" },
            ].map((photo, i) => (
              <div
                key={i}
                className="break-inside-avoid rounded-2xl overflow-hidden group relative cursor-pointer"
                style={{ boxShadow: '0 4px 20px hsla(125,40%,15%,0.12)' }}
              >
                <img
                  src={photo.url}
                  alt={photo.alt}
                  className="w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end"
                  style={{ background: 'linear-gradient(to top, hsla(125,45%,15%,0.7) 0%, transparent 60%)' }}>
                  <p className="text-white font-sans text-sm font-medium p-4">{photo.alt}</p>
                </div>
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
    </>
  );
}
