import Link from "next/link";

const products = [
  {
    name: "Duha",
    blurb:
      "Masjid management platform for membership, giving, schools, prayer times, and community life. On Duha you can opt in to receive community SMS from WAQTO LLC.",
    href: "https://duha.app",
    cta: "duha.app",
  },
  {
    name: "Sleep Key",
    blurb:
      "iOS sleep tracker with smart alarm, snore and sound analysis, and on-device privacy.",
    href: "https://apps.apple.com/cy/app/sleep-key-tracker-sound/id6756638306",
    cta: "App Store",
  },
  {
    name: "HoopsGo",
    blurb:
      "Swipe puzzle basketball game — plan your path, sink the shot, and climb the leaderboard.",
    href: "https://apps.apple.com/cy/app/hoopsgo/id6760942689",
    cta: "App Store",
  },
] as const;

export default function Home() {
  return (
    <main className="flex flex-1 flex-col items-center justify-center px-6 pb-20 pt-8 text-center sm:px-10">
      <p className="mb-6 font-mono text-xs uppercase tracking-[0.3em] text-sky-400/80">
        Software &amp; Engineering · Pennsylvania
      </p>

      <h1 className="max-w-3xl text-4xl font-semibold leading-tight tracking-tight text-white sm:text-5xl md:text-6xl">
        WAQTO LLC builds software
        <span className="block bg-gradient-to-r from-sky-300 via-cyan-200 to-white bg-clip-text text-transparent">
          for communities and everyday life.
        </span>
      </h1>

      <p className="mt-6 max-w-xl text-base leading-relaxed text-zinc-400 sm:text-lg">
        We are a Pennsylvania limited liability company. Our products include{" "}
        <a
          href="https://duha.app"
          className="text-sky-400 underline-offset-2 hover:underline"
          rel="noopener noreferrer"
          target="_blank"
        >
          Duha
        </a>
        ,{" "}
        <a
          href="https://apps.apple.com/cy/app/sleep-key-tracker-sound/id6756638306"
          className="text-sky-400 underline-offset-2 hover:underline"
          rel="noopener noreferrer"
          target="_blank"
        >
          Sleep Key
        </a>
        , and{" "}
        <a
          href="https://apps.apple.com/cy/app/hoopsgo/id6760942689"
          className="text-sky-400 underline-offset-2 hover:underline"
          rel="noopener noreferrer"
          target="_blank"
        >
          HoopsGo
        </a>
        . We also run a{" "}
        <Link
          href="/messaging/"
          className="text-sky-400 underline-offset-2 hover:underline"
        >
          community SMS program
        </Link>{" "}
        for people who opt in to receive texts from WAQTO LLC.
      </p>

      <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
        <a
          href="mailto:admin@waqto.com"
          className="inline-flex h-12 min-w-[180px] items-center justify-center rounded-full bg-sky-500 px-8 text-sm font-medium text-[#041018] transition hover:bg-sky-400"
        >
          Contact us
        </a>
        <Link
          href="/messaging/"
          className="inline-flex h-12 min-w-[180px] items-center justify-center rounded-full border border-white/15 bg-white/[0.03] px-8 text-sm font-medium text-zinc-200 transition hover:border-white/25 hover:bg-white/[0.06]"
        >
          Messaging program
        </Link>
      </div>

      <section className="mt-16 w-full max-w-2xl text-left">
        <h2 className="text-center text-sm font-medium tracking-wide text-zinc-200">
          Our products
        </h2>
        <ul className="mt-4 grid gap-3 sm:grid-cols-1">
          {products.map((product) => (
            <li
              key={product.name}
              className="rounded-2xl border border-white/10 bg-white/[0.03] px-6 py-5"
            >
              <div className="flex flex-wrap items-baseline justify-between gap-2">
                <h3 className="text-base font-medium text-zinc-100">
                  {product.name}
                </h3>
                <a
                  href={product.href}
                  className="font-mono text-xs text-sky-400 underline-offset-2 hover:underline"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  {product.cta}
                </a>
              </div>
              <p className="mt-2 text-sm leading-relaxed text-zinc-400">
                {product.blurb}
              </p>
            </li>
          ))}
        </ul>
      </section>

      <p className="mt-10 max-w-md text-xs leading-relaxed text-zinc-600">
        WAQTO LLC · 301 Midland Ave, Carnegie, PA 15106 · EIN 86-2401948 ·{" "}
        <a
          href="mailto:admin@waqto.com"
          className="text-zinc-500 underline-offset-2 hover:underline"
        >
          admin@waqto.com
        </a>
      </p>
    </main>
  );
}
