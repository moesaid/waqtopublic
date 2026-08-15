import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy — WAQTO LLC",
  description:
    "Privacy policy for WAQTO LLC, including how we collect, use, and protect business and contact information.",
};

export default function PrivacyPage() {
  return (
    <main className="mx-auto w-full max-w-2xl flex-1 px-6 pb-20 pt-4 sm:px-10">
      <h1 className="text-3xl font-semibold tracking-tight text-white">
        Privacy Policy
      </h1>
      <p className="mt-2 text-sm text-zinc-500">Last updated: August 15, 2026</p>

      <div className="mt-10 space-y-8 text-sm leading-relaxed text-zinc-400">
        <section className="space-y-3">
          <h2 className="text-base font-medium text-zinc-200">Who we are</h2>
          <p>
            This website is operated by <strong className="text-zinc-200">WAQTO LLC</strong>,
            a Pennsylvania limited liability company.
          </p>
          <p>
            301 Midland Ave
            <br />
            Carnegie, PA 15106
            <br />
            United States
            <br />
            EIN 86-2401948
          </p>
          <p>
            Contact:{" "}
            <a
              href="mailto:hello@waqto.com"
              className="text-sky-400 hover:text-sky-300"
            >
              hello@waqto.com
            </a>
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-base font-medium text-zinc-200">
            Information we collect
          </h2>
          <p>
            If you email us or use our products, we may collect your name, email
            address, phone number, and information about your organization that
            you choose to provide. We use this information to respond to
            inquiries, operate our software, and provide support.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-base font-medium text-zinc-200">How we use it</h2>
          <p>
            We use collected information to communicate with you, deliver
            services you request, and improve our products. We do not sell
            personal information.
          </p>
          <p>
            Mobile information will not be shared with third parties or
            affiliates for marketing or promotional purposes.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-base font-medium text-zinc-200">Contact</h2>
          <p>
            Questions about this policy can be sent to{" "}
            <a
              href="mailto:hello@waqto.com"
              className="text-sky-400 hover:text-sky-300"
            >
              hello@waqto.com
            </a>
            .
          </p>
        </section>
      </div>
    </main>
  );
}
