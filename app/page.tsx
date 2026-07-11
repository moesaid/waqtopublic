export default function Home() {
  return (
    <div className="relative flex min-h-full flex-1 flex-col overflow-hidden bg-[#070b12] text-zinc-100">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_-20%,rgba(56,189,248,0.18),transparent)]"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_at_center,black_20%,transparent_75%)]"
      />

      <header className="relative z-10 flex items-center justify-between px-6 py-6 sm:px-10">
        <span className="font-mono text-sm font-medium tracking-[0.35em] text-sky-400">
          WAQTO
        </span>
        <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1 font-mono text-[11px] uppercase tracking-widest text-zinc-400">
          Coming soon
        </span>
      </header>

      <main className="relative z-10 flex flex-1 flex-col items-center justify-center px-6 pb-20 pt-8 text-center sm:px-10">
        <p className="mb-6 font-mono text-xs uppercase tracking-[0.3em] text-sky-400/80">
          Software &amp; Engineering
        </p>

        <h1 className="max-w-3xl text-4xl font-semibold leading-tight tracking-tight text-white sm:text-5xl md:text-6xl">
          Building what&apos;s next,
          <span className="block bg-gradient-to-r from-sky-300 via-cyan-200 to-white bg-clip-text text-transparent">
            one system at a time.
          </span>
        </h1>

        <p className="mt-6 max-w-xl text-base leading-relaxed text-zinc-400 sm:text-lg">
          Waqto is a software and engineering company focused on reliable products,
          thoughtful architecture, and tools that scale with your ambitions.
        </p>

        <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
          {["Software", "Engineering", "Cloud", "Product"].map((tag) => (
            <span
              key={tag}
              className="rounded-full border border-white/10 bg-white/[0.03] px-4 py-1.5 text-sm text-zinc-300"
            >
              {tag}
            </span>
          ))}
        </div>

        <div className="mt-14 flex flex-col items-center gap-4 sm:flex-row">
          <a
            href="mailto:hello@waqto.com"
            className="inline-flex h-12 min-w-[200px] items-center justify-center rounded-full bg-sky-500 px-8 text-sm font-medium text-[#041018] transition hover:bg-sky-400"
          >
            Get in touch
          </a>
          <p className="text-sm text-zinc-500">
            Launching soon at{" "}
            <span className="font-mono text-zinc-400">waqto.com</span>
          </p>
        </div>
      </main>

      <footer className="relative z-10 border-t border-white/5 px-6 py-6 text-center sm:px-10">
        <p className="text-xs text-zinc-600">
          &copy; {new Date().getFullYear()} Waqto. All rights reserved.
        </p>
      </footer>
    </div>
  );
}
