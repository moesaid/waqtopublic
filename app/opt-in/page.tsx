import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "SMS Opt-In — WAQTO LLC",
  description:
    "Public SMS opt-in evidence for WAQTO LLC: separate informational and optional marketing consent checkboxes with required disclosures.",
};

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
        <strong className="font-medium text-zinc-200">WAQTO LLC</strong>.
        Informational and promotional/marketing texts use{" "}
        <strong className="font-medium text-zinc-200">
          separate, optional checkboxes
        </strong>{" "}
        (neither is pre-selected). Program overview:{" "}
        <Link
          href="/messaging/"
          className="text-sky-400 underline-offset-2 hover:underline"
        >
          Messaging program
        </Link>
        .
      </p>

      <section
        id="web-form"
        className="mt-10 rounded-2xl border border-white/15 bg-white/[0.04] p-6"
      >
        <h2 className="text-lg font-semibold text-white">
          WAQTO LLC text alert subscription form
        </h2>
        <p className="mt-1 text-xs text-zinc-500">
          Web / mobile form — two separate consent boxes (not pre-selected)
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
            <strong className="text-zinc-100">
              Informational community alerts (optional):
            </strong>{" "}
            Yes, I would like to receive automated informational text messages
            from WAQTO LLC about prayer and Jumu&apos;ah reminders, event and
            program announcements, schedule changes, and urgent schedule/safety
            notices. I understand I will receive up to 4 informational messages
            per month (more only for time-sensitive notices).
          </span>
        </label>

        <label className="mt-4 flex cursor-default items-start gap-3">
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
              Promotional / marketing texts (optional):
            </strong>{" "}
            Yes, I would like to receive separate promotional text messages from
            WAQTO LLC about fundraising for community programs, volunteer
            recruitment offers, and other promotional community updates. I
            understand promotional message frequency varies (typically up to 4
            messages per month). This is optional and independent of
            informational alerts.
          </span>
        </label>

        <div className="mt-4 space-y-2 text-sm leading-relaxed text-zinc-400">
          <p>
            <strong className="font-medium text-zinc-300">
              Message frequency:
            </strong>{" "}
            Up to 4 informational messages per month if you opt in above; up to
            4 promotional messages per month if you separately opt in to
            marketing. More only for time-sensitive informational notices.
          </p>
          <p>
            Message and data rates may apply depending on your mobile phone
            service plan.
          </p>
          <p>
            Reply HELP for help or STOP to cancel any time. By providing your
            phone number and checking a box above, you agree to receive those
            text messages from WAQTO LLC for that category only. Consent is not
            required to use Duha or complete community signup.
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

      <section
        id="paper-form"
        className="mt-8 rounded-2xl border border-white/15 bg-white/[0.04] p-6"
      >
        <h2 className="text-lg font-semibold text-white">
          Paper / printed registration form (example)
        </h2>
        <p className="mt-1 text-xs text-zinc-500">
          Two optional SMS checkboxes — neither required to finish signup
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
              Optional — informational texts from WAQTO LLC:
            </strong>{" "}
            I agree to receive automated informational text messages from WAQTO
            LLC (prayer reminders, events, program updates, schedule changes,
            urgent schedule/safety notices). Up to 4 msgs/month. Message and
            data rates may apply. Reply HELP for help or STOP to cancel.{" "}
            <Link
              href="/terms/#sms"
              className="text-sky-400 underline underline-offset-2"
            >
              Terms
            </Link>
            {" · "}
            <Link
              href="/privacy/#sms"
              className="text-sky-400 underline underline-offset-2"
            >
              Privacy
            </Link>
            . Not required to register.
          </span>
        </label>

        <label className="mt-4 flex cursor-default items-start gap-3">
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
              Optional — promotional / marketing texts from WAQTO LLC:
            </strong>{" "}
            I agree to receive separate promotional text messages from WAQTO LLC
            (fundraising for community programs, volunteer recruitment offers,
            promotional community updates). Up to 4 msgs/month. Message and data
            rates may apply. Reply HELP for help or STOP to cancel. Independent
            of informational alerts. Not required to register.
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
