import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Terms of Use — WAQTO LLC",
  description:
    "Terms of Use for WAQTO LLC websites and the WAQTO LLC community SMS messaging program.",
};

export default function TermsPage() {
  return (
    <main className="mx-auto w-full max-w-2xl flex-1 px-6 pb-20 pt-4 sm:px-10">
      <h1 className="text-3xl font-semibold tracking-tight text-white">
        Terms of Use
      </h1>
      <p className="mt-2 text-sm text-zinc-500">Last updated: September 5, 2026</p>

      <div className="mt-10 space-y-8 text-sm leading-relaxed text-zinc-400">
        <section className="space-y-3">
          <h2 className="text-base font-medium text-zinc-200">Agreement</h2>
          <p>
            These Terms of Use govern your access to websites and information
            published by{" "}
            <strong className="text-zinc-200">WAQTO LLC</strong> (&ldquo;WAQTO,&rdquo;
            &ldquo;we,&rdquo; &ldquo;us&rdquo;), including{" "}
            <a
              href="https://waqto.com"
              className="text-sky-400 underline-offset-2 hover:underline"
            >
              waqto.com
            </a>
            . WAQTO LLC operates products including{" "}
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
            . Product-specific terms (for example Duha accounts, or in-app terms
            for consumer apps) may also apply when you use those Services.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-base font-medium text-zinc-200">
            Who we are
          </h2>
          <p>
            WAQTO LLC is a Pennsylvania limited liability company.
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
              href="mailto:admin@waqto.com"
              className="text-sky-400 hover:text-sky-300"
            >
              admin@waqto.com
            </a>
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-base font-medium text-zinc-200">
            Acceptable use
          </h2>
          <p>
            You may use this website for lawful purposes only. Do not attempt to
            disrupt the site, scrape content in a way that harms our systems, or
            misrepresent your affiliation with WAQTO LLC or Duha.
          </p>
        </section>

        <section id="sms" className="scroll-mt-8 space-y-3">
          <h2 className="text-base font-medium text-zinc-200">
            SMS and voice messaging program
          </h2>
          <p>
            WAQTO LLC operates a community SMS (and, where enabled, voice)
            messaging program. WAQTO LLC sends text messages to people who have
            opted in to receive communications{" "}
            <strong className="text-zinc-200">from WAQTO LLC</strong> (for
            example prayer reminders, event announcements, program updates,
            volunteer and fundraising notices, and urgent schedule or safety
            notices).
          </p>
          <p>
            <strong className="text-zinc-200">Opt-in.</strong> Recipients must
            opt in before receiving non-exempt informational SMS—for example by
            checking an SMS consent checkbox (not pre-checked) on a Duha website
            or Community App form, by completing a paper form, or by texting an
            opt-in keyword where offered. Consent language states that you agree
            to receive community texts from WAQTO LLC, describes message types,
            approximate frequency, that message and data rates may apply, and how
            to opt out. Program details and a sample consent UI are at{" "}
            <Link
              href="/messaging/"
              className="text-sky-400 underline-offset-2 hover:underline"
            >
              waqto.com/messaging
            </Link>
            .
          </p>
          <p>
            <strong className="text-zinc-200">Frequency.</strong> Message
            frequency varies. Recipients typically receive a low volume of
            messages (for example up to four SMS messages per month for routine
            updates), with higher frequency only for time-sensitive notices.
          </p>
          <p>
            <strong className="text-zinc-200">HELP and STOP.</strong> Reply{" "}
            <strong className="text-zinc-200">STOP</strong> to cancel SMS from
            WAQTO LLC. Reply{" "}
            <strong className="text-zinc-200">HELP</strong> for assistance.
            Support:{" "}
            <a
              href="mailto:admin@waqto.com"
              className="text-sky-400 underline-offset-2 hover:underline"
            >
              admin@waqto.com
            </a>
            . Message and data rates may apply. See our{" "}
            <Link
              href="/privacy/#sms"
              className="text-sky-400 underline-offset-2 hover:underline"
            >
              Privacy Policy
            </Link>{" "}
            for how mobile numbers and opt-in data are handled.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-base font-medium text-zinc-200">
            Disclaimer
          </h2>
          <p>
            This website is provided for informational purposes. Software
            products such as Duha are provided under their own agreements.
            Content on this site may change without notice.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-base font-medium text-zinc-200">Contact</h2>
          <p>
            Questions about these terms:{" "}
            <a
              href="mailto:admin@waqto.com"
              className="text-sky-400 hover:text-sky-300"
            >
              admin@waqto.com
            </a>
            .
          </p>
        </section>
      </div>
    </main>
  );
}
