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
              { url: "https://cdn.poehali.dev/files/769137dd-871d-43c9-bda4-59d35ea4b5da.jpg", alt: "Посиделки «В гостях у чая»" },
              { url: "https://cdn.poehali.dev/files/111f5e85-88f3-4fb3-ba53-507b90a04028.jpg", alt: "Экспериментальная лаборатория «Путешествие капельки»" },
              { url: "https://cdn.poehali.dev/files/f2210e4f-a277-46da-ab56-553999416f11.jpg", alt: "Турнир «Игротека в библиотеке»" },
              { url: "https://cdn.poehali.dev/files/368f4756-6a44-44e4-97dd-210492e5b92e.jpg", alt: "Вечер открытых телескопов «Шаги к звёздам»" },
              { url: "https://cdn.poehali.dev/files/52a6ed46-9f09-4e9c-b46a-57f61c199d2e.jpg", alt: "Всероссийская акция «Библиосумерки» на тему «Свои герои»" },
              { url: "https://cdn.poehali.dev/files/ced50da2-2e1e-4ea6-bc59-21f8dd2cb970.jpg", alt: "Игровая программа «Тяжело в учении — легко в бою!»" },
              { url: "https://cdn.poehali.dev/files/23bca794-62d0-4f8d-826b-4e083683e07e.jpg", alt: "Мастер-класс «Где добро — там тепло»" },
              { url: "https://cdn.poehali.dev/files/858f571e-df6c-46e4-9611-014c06c3f2e6.jpg", alt: "Мастер-класс «Рукотворные чудеса» по ПК" },
              { url: "https://cdn.poehali.dev/files/f507e3c1-1135-4538-aada-588bcb37a026.jpg", alt: "Мастер-класс «Я дарю тебе ромашку вместе с ней любовь свою!»" },
              { url: "https://cdn.poehali.dev/files/af519166-440d-4f9c-80dd-605bd137c12c.jpg", alt: "Час полезных советов «Веселее жить, если со спортом дружить»" },
              { url: "https://cdn.poehali.dev/files/0ddd4a99-bd77-414d-9f61-588fd08174bf.jpg", alt: "Выставка беседа «Королева детективного жанра Агата Кристи»" },
              { url: "https://cdn.poehali.dev/files/e2e11e23-1ac8-48dc-9439-423f4d54e972.jpg", alt: "Книжная выставка-просмотр «Ступеньки в мир природы»" },
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
          <SectionTitle>Книги</SectionTitle>
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
              </div>
            ))}
          </div>
          <div className="text-center mt-8">
            <a
              href="http://library.vladimir.ru/rguest_aleksandrov.htm"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-8 py-3 rounded-full font-sans font-medium border-2 transition-all hover:scale-105"
              style={{ borderColor: 'hsl(var(--primary))', color: 'hsl(var(--primary))' }}
            >
              Смотреть каталог
            </a>
          </div>
        </div>
      </section>
    </>
  );
}