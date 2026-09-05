import Link from "next/link";

export default function Home() {
  return (
    <main className="flex flex-1 flex-col items-center justify-center px-6 pb-20 pt-8 text-center sm:px-10">
      <p className="mb-6 font-mono text-xs uppercase tracking-[0.3em] text-sky-400/80">
        Software &amp; Engineering · Pennsylvania
      </p>

      <h1 className="max-w-3xl text-4xl font-semibold leading-tight tracking-tight text-white sm:text-5xl md:text-6xl">
        WAQTO LLC builds software
        <span className="block bg-gradient-to-r from-sky-300 via-cyan-200 to-white bg-clip-text text-transparent">
          that serves communities.
        </span>
      </h1>

      <p className="mt-6 max-w-xl text-base leading-relaxed text-zinc-400 sm:text-lg">
        We are a Pennsylvania limited liability company focused on reliable
        products and scalable systems. Our flagship product is{" "}
        <a
          href="https://duha.app"
          className="text-sky-400 underline-offset-2 hover:underline"
          rel="noopener noreferrer"
          target="_blank"
        >
          Duha
        </a>
        — masjid management software for membership, giving, schools, prayer
        times, and community messaging.
      </p>

      <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
        <a
          href="mailto:hello@waqto.com"
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

      <section className="mt-16 w-full max-w-lg rounded-2xl border border-white/10 bg-white/[0.03] px-6 py-6 text-left">
        <h2 className="text-sm font-medium tracking-wide text-zinc-200">
          Product: Duha
        </h2>
        <p className="mt-2 text-sm leading-relaxed text-zinc-400">
          Duha helps Islamic centers run membership, donations, events, and
          day-to-day operations. WAQTO LLC is the registered business and
          messaging brand for Duha SMS communications. Learn more at{" "}
          <a
            href="https://duha.app"
            className="text-sky-400 underline-offset-2 hover:underline"
            rel="noopener noreferrer"
            target="_blank"
          >
            duha.app
          </a>
          .
        </p>
      </section>

      <p className="mt-10 max-w-md text-xs leading-relaxed text-zinc-600">
        WAQTO LLC · 301 Midland Ave, Carnegie, PA 15106 · EIN 86-2401948 ·{" "}
        <a
          href="mailto:hello@waqto.com"
          className="text-zinc-500 underline-offset-2 hover:underline"
        >
          hello@waqto.com
        </a>
      </p>
    </main>
  );
}
