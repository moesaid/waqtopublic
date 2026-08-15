export default function Home() {
  return (
    <main className="flex flex-1 flex-col items-center justify-center px-6 pb-20 pt-8 text-center sm:px-10">
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
        WAQTO LLC is a software and engineering company focused on reliable
        products, thoughtful architecture, and tools that scale with your
        ambitions.
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
  );
}
