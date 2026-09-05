import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "SMS Opt-In — WAQTO LLC",
  description:
    "Public SMS opt-in evidence for WAQTO LLC community text alerts: web form and paper form samples with required disclosures.",
};

const consentBody =
  "Yes, I would like to receive automated community text messages from WAQTO LLC about prayer reminders, events, program updates, volunteer opportunities, fundraising for community programs, and urgent schedule/safety notices. I understand I will receive up to 4 messages per month (more only for time-sensitive notices).";

export default function OptInPage() {
  return (
    <main className="mx-auto w-full max-w-xl flex-1 px-6 pb-20 pt-4 sm:px-10">
      <p className="font-mono text-xs uppercase tracking-[0.25em] text-sky-400/80">
        WAQTO LLC · Public opt-in evidence
      </p>
      <h1 className="mt-3 text-3xl font-semibold tracking-tight text-white">
        Community text alert subscription
      </h1>
      <p className="mt-3 text-sm leading-relaxed text-zinc-400">
        This public page shows how people consent to receive SMS from{" "}
        <strong className="font-medium text-zinc-200">WAQTO LLC</strong>. The
        same disclosures appear on Duha web/app forms and on printed community
        registration forms. Program overview:{" "}
        <Link
          href="/messaging/"
          className="text-sky-400 underline-offset-2 hover:underline"
        >
          Messaging program
        </Link>
        .
      </p>

      {/* Web form — mirrors Twilio/Acme example structure */}
      <section
        id="web-form"
        className="mt-10 rounded-2xl border border-white/15 bg-white/[0.04] p-6"
      >
        <h2 className="text-lg font-semibold text-white">
          WAQTO LLC text alert subscription form
        </h2>
        <p className="mt-1 text-xs text-zinc-500">
          Web / mobile form example (checkbox is not pre-selected)
        </p>

        <label className="mt-6 block text-sm font-medium text-zinc-200">
          Mobile Phone Number*
          <input
            type="tel"
            readOnly
            tabIndex={-1}
            defaultValue="(555) 123-4567"
            className="mt-2 w-full cursor-default rounded-lg border border-white/15 bg-[#070b12] px-3 py-2.5 text-sm text-zinc-200 outline-none"
            aria-hidden
          />
        </label>

        <label className="mt-5 flex cursor-default items-start gap-3">
          <input
            type="checkbox"
            defaultChecked={false}
            disabled
            tabIndex={-1}
            className="mt-1 h-4 w-4 shrink-0 rounded border-white/30 bg-[#070b12]"
            aria-hidden
          />
          <span className="text-sm leading-relaxed text-zinc-200">
            {consentBody}
          </span>
        </label>

        <div className="mt-4 space-y-2 text-sm leading-relaxed text-zinc-400">
          <p>
            <strong className="font-medium text-zinc-300">
              Message frequency:
            </strong>{" "}
            You will receive up to 4 messages per month (more only for
            time-sensitive notices).
          </p>
          <p>
            Message and data rates may apply depending on your mobile phone
            service plan.
          </p>
          <p>
            Reply HELP for help or STOP to cancel any time. By providing your
            phone number and checking the box above, you agree to receive text
            messages from WAQTO LLC. Consent is not required to use Duha or
            complete community signup.
          </p>
          <p>
            <Link
              href="/terms/#sms"
              className="text-sky-400 underline underline-offset-2 hover:text-sky-300"
            >
              Terms of Service
            </Link>
            {" · "}
            <Link
              href="/privacy/#sms"
              className="text-sky-400 underline underline-offset-2 hover:text-sky-300"
            >
              Privacy Policy
            </Link>
          </p>
        </div>

        <div
          className="mt-6 inline-flex h-11 items-center justify-center rounded-full bg-sky-500 px-6 text-sm font-semibold text-[#041018]"
          role="presentation"
        >
          Yes, sign me up!
        </div>
      </section>

      {/* Paper form */}
      <section
        id="paper-form"
        className="mt-8 rounded-2xl border border-white/15 bg-white/[0.04] p-6"
      >
        <h2 className="text-lg font-semibold text-white">
          Paper / printed registration form (example)
        </h2>
        <p className="mt-1 text-xs text-zinc-500">
          SMS is a separate optional checkbox — not required to finish signup
        </p>

        <div className="mt-5 space-y-2 font-mono text-sm text-zinc-400">
          <p>Name: ________________________________</p>
          <p>Email: ________________________________</p>
          <p>Phone (optional): ____________________</p>
        </div>

        <p className="mt-4 text-sm text-zinc-500">
          Completing the fields above does{" "}
          <strong className="text-zinc-300">not</strong> enroll you in SMS.
        </p>

        <label className="mt-5 flex cursor-default items-start gap-3 border-t border-white/10 pt-5">
          <input
            type="checkbox"
            defaultChecked={false}
            disabled
            tabIndex={-1}
            className="mt-1 h-4 w-4 shrink-0 rounded border-white/30 bg-[#070b12]"
            aria-hidden
          />
          <span className="text-sm leading-relaxed text-zinc-200">
            <strong className="text-zinc-100">
              Optional — text messages from WAQTO LLC:
            </strong>{" "}
            I agree to receive automated community text messages from WAQTO LLC
            (prayer reminders, events, program updates, volunteer opportunities,
            fundraising for community programs, and urgent schedule/safety
            notices). Message frequency: up to 4 messages per month (more only
            for time-sensitive notices). Message and data rates may apply. Reply
            HELP for help or STOP to cancel any time.{" "}
            <Link
              href="/terms/#sms"
              className="text-sky-400 underline underline-offset-2"
            >
              Terms of Service
            </Link>
            {" · "}
            <Link
              href="/privacy/#sms"
              className="text-sky-400 underline underline-offset-2"
            >
              Privacy Policy
            </Link>
            . Leaving this box unchecked still allows me to complete this form.
            Consent to SMS is not required to register.
          </span>
        </label>
      </section>

      <p className="mt-8 text-xs leading-relaxed text-zinc-600">
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
