import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "SMS Messaging Program — WAQTO LLC",
  description:
    "WAQTO LLC community SMS: separate informational and optional marketing opt-in, frequency, STOP/HELP, privacy, and terms.",
};

export default function MessagingPage() {
  return (
    <main className="mx-auto w-full max-w-2xl flex-1 px-6 pb-20 pt-4 sm:px-10">
      <p className="font-mono text-xs uppercase tracking-[0.25em] text-sky-400/80">
        WAQTO LLC
      </p>
      <h1 className="mt-3 text-3xl font-semibold tracking-tight text-white">
        Community SMS messaging program
      </h1>
      <p className="mt-3 text-sm leading-relaxed text-zinc-400">
        <strong className="font-medium text-zinc-200">WAQTO LLC</strong> sends
        community text messages to people who have agreed to receive SMS{" "}
        <strong className="font-medium text-zinc-200">from WAQTO LLC</strong>.
        Informational alerts and promotional/marketing texts use{" "}
        <strong className="font-medium text-zinc-200">
          separate, optional checkboxes
        </strong>{" "}
        (neither is pre-selected). People often join our community through{" "}
        <a
          href="https://duha.app"
          className="text-sky-400 underline-offset-2 hover:underline"
          rel="noopener noreferrer"
          target="_blank"
        >
          Duha
        </a>
        , our masjid management product — Duha is where you may manage your
        profile and opt in; the SMS sender is always WAQTO LLC. Public evidence:{" "}
        <Link
          href="/opt-in/"
          className="text-sky-400 underline-offset-2 hover:underline"
        >
          waqto.com/opt-in
        </Link>
        .
      </p>

      <div className="mt-10 space-y-8 text-sm leading-relaxed text-zinc-400">
        <section className="space-y-3">
          <h2 className="text-base font-medium text-zinc-200">
            Who receives messages
          </h2>
          <p>
            Messages go only to community members and contacts who opted in to
            the relevant category from WAQTO LLC. We do not send unsolicited
            texts.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-base font-medium text-zinc-200">
            What messages include
          </h2>
          <p className="font-medium text-zinc-300">Informational (optional opt-in)</p>
          <ul className="list-disc space-y-1.5 pl-5">
            <li>Prayer and Jumu&apos;ah reminders</li>
            <li>Event and program announcements</li>
            <li>Schedule changes and program updates</li>
            <li>Urgent schedule or safety notices when needed</li>
          </ul>
          <p className="font-medium text-zinc-300">
            Promotional / marketing (separate optional opt-in)
          </p>
          <ul className="list-disc space-y-1.5 pl-5">
            <li>Fundraising updates for community programs</li>
            <li>Volunteer recruitment offers</li>
            <li>Other promotional community updates</li>
          </ul>
        </section>

        <section className="space-y-3">
          <h2 className="text-base font-medium text-zinc-200">
            Frequency and rates
          </h2>
          <p>
            Up to 4 informational messages per month if you opt in to
            informational alerts; up to 4 promotional messages per month if you
            separately opt in to marketing. Higher frequency only for
            time-sensitive informational notices.{" "}
            <strong className="font-medium text-zinc-200">
              Message and data rates may apply
            </strong>{" "}
            from your wireless carrier. WAQTO LLC does not charge a separate fee
            for receiving these messages.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-base font-medium text-zinc-200">
            How to opt in
          </h2>
          <p>
            SMS is always optional. Completing a community or membership signup
            does <strong className="font-medium text-zinc-200">not</strong>{" "}
            require agreeing to texts. Consent uses{" "}
            <strong className="font-medium text-zinc-200">
              two separate SMS checkboxes
            </strong>{" "}
            that are{" "}
            <strong className="font-medium text-zinc-200">not pre-checked</strong>
            —one for informational community alerts, and one for
            promotional/marketing texts—so consumers can agree to each
            independently.
          </p>
          <p>
            <strong className="font-medium text-zinc-200">Web / app:</strong> On
            Duha (https://duha.app) and on our public subscription example at{" "}
            <Link
              href="/opt-in/#web-form"
              className="text-sky-400 underline-offset-2 hover:underline"
            >
              waqto.com/opt-in
            </Link>
            , the user enters a mobile number and may check either or both
            optional boxes (not pre-selected), with frequency, Msg &amp; data
            rates, STOP/HELP, and Terms/Privacy links.
          </p>
          <p>
            <strong className="font-medium text-zinc-200">Paper / printed:</strong>{" "}
            See the paper sample on{" "}
            <Link
              href="/opt-in/#paper-form"
              className="text-sky-400 underline-offset-2 hover:underline"
            >
              waqto.com/opt-in#paper-form
            </Link>
            . Signup fields are separate from two optional, unchecked SMS
            boxes. Signing alone does not enroll in SMS.
          </p>
          <p>
            <strong className="font-medium text-zinc-200">Keyword:</strong> Where
            offered, texting an opt-in keyword receives a confirmation reply with
            category, frequency, Msg &amp; data rates, HELP, and STOP. Samples
            below are illustrative (not a live signup).
          </p>
        </section>

        <section
          aria-label="Sample web SMS consent"
          className="rounded-2xl border border-white/10 bg-white/[0.03] p-5 sm:p-6"
        >
          <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-zinc-500">
            Sample web / app SMS opt-in (illustrative)
          </p>
          <label className="mt-4 block text-xs text-zinc-500">
            Mobile number (optional unless opting into SMS)
            <input
              type="tel"
              readOnly
              tabIndex={-1}
              value="+1 (555) 000-0000"
              className="mt-1.5 w-full cursor-default rounded-lg border border-white/10 bg-[#070b12] px-3 py-2 text-sm text-zinc-300 outline-none"
              aria-hidden
            />
          </label>
          <label className="mt-4 flex cursor-default items-start gap-3">
            <input
              type="checkbox"
              defaultChecked={false}
              disabled
              tabIndex={-1}
              className="mt-1 h-4 w-4 shrink-0 rounded border-white/20 bg-[#070b12]"
              aria-hidden
            />
            <span className="text-sm leading-relaxed text-zinc-300">
              <strong className="font-medium text-zinc-100">
                Informational community alerts (optional):
              </strong>{" "}
              Yes, I would like to receive automated informational text messages
              from WAQTO LLC about prayer and Jumu&apos;ah reminders, event and
              program announcements, schedule changes, and urgent
              schedule/safety notices. Up to 4 informational msgs/month (more
              only for time-sensitive notices). Msg &amp; data rates may apply.
              Reply STOP to opt out or HELP for help.{" "}
              <Link
                href="/privacy/#sms"
                className="text-sky-400 underline-offset-2 hover:underline"
              >
                Privacy
              </Link>{" "}
              ·{" "}
              <Link
                href="/terms/#sms"
                className="text-sky-400 underline-offset-2 hover:underline"
              >
                Terms
              </Link>
              . Not required to complete signup.
            </span>
          </label>
          <label className="mt-4 flex cursor-default items-start gap-3">
            <input
              type="checkbox"
              defaultChecked={false}
              disabled
              tabIndex={-1}
              className="mt-1 h-4 w-4 shrink-0 rounded border-white/20 bg-[#070b12]"
              aria-hidden
            />
            <span className="text-sm leading-relaxed text-zinc-300">
              <strong className="font-medium text-zinc-100">
                Promotional / marketing texts (optional):
              </strong>{" "}
              Yes, I would like to receive separate promotional text messages
              from WAQTO LLC about fundraising for community programs, volunteer
              recruitment offers, and other promotional community updates.
              Typically up to 4 promotional msgs/month. Msg &amp; data rates may
              apply. Reply STOP to opt out or HELP for help. This is optional and
              independent of informational alerts. Not required to complete
              signup.
            </span>
          </label>
        </section>

        <section
          aria-label="Sample paper SMS consent"
          className="rounded-2xl border border-white/10 bg-white/[0.03] p-5 sm:p-6"
        >
          <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-zinc-500">
            Sample paper / printed form (illustrative)
          </p>
          <div className="mt-4 space-y-2 text-sm text-zinc-400">
            <p>Name: _______________________________</p>
            <p>Email: _______________________________</p>
            <p>Phone (optional): ____________________</p>
          </div>
          <p className="mt-4 text-xs text-zinc-500">
            Membership / community signup above does not enroll you in SMS.
          </p>
          <label className="mt-4 flex cursor-default items-start gap-3">
            <input
              type="checkbox"
              defaultChecked={false}
              disabled
              tabIndex={-1}
              className="mt-1 h-4 w-4 shrink-0 rounded border-white/20 bg-[#070b12]"
              aria-hidden
            />
            <span className="text-sm leading-relaxed text-zinc-300">
              <strong className="font-medium text-zinc-100">
                Optional — informational texts from WAQTO LLC:
              </strong>{" "}
              I agree to receive automated informational text messages from
              WAQTO LLC (prayer reminders, events, program updates, schedule
              changes, urgent schedule/safety notices). Up to 4 msgs/month. Msg
              &amp; data rates may apply. Reply STOP to opt out or HELP for help.
              Privacy:{" "}
              <Link
                href="/privacy/#sms"
                className="text-sky-400 underline-offset-2 hover:underline"
              >
                waqto.com/privacy
              </Link>
              . Terms:{" "}
              <Link
                href="/terms/#sms"
                className="text-sky-400 underline-offset-2 hover:underline"
              >
                waqto.com/terms
              </Link>
              . Leaving this box unchecked still allows me to complete this form.
            </span>
          </label>
          <label className="mt-4 flex cursor-default items-start gap-3">
            <input
              type="checkbox"
              defaultChecked={false}
              disabled
              tabIndex={-1}
              className="mt-1 h-4 w-4 shrink-0 rounded border-white/20 bg-[#070b12]"
              aria-hidden
            />
            <span className="text-sm leading-relaxed text-zinc-300">
              <strong className="font-medium text-zinc-100">
                Optional — promotional / marketing texts from WAQTO LLC:
              </strong>{" "}
              I agree to receive separate promotional text messages from WAQTO
              LLC (fundraising for community programs, volunteer recruitment
              offers, promotional community updates). Up to 4 msgs/month. Msg
              &amp; data rates may apply. Reply STOP to opt out or HELP for help.
              Independent of informational alerts. Leaving this box unchecked
              still allows me to complete this form.
            </span>
          </label>
        </section>

        <section className="space-y-3">
          <h2 className="text-base font-medium text-zinc-200">
            Opt out and help
          </h2>
          <p>
            Reply <strong className="font-medium text-zinc-200">STOP</strong> to
            any message to unsubscribe from WAQTO LLC texts. Reply{" "}
            <strong className="font-medium text-zinc-200">HELP</strong> for
            assistance. You may also email{" "}
            <a
              href="mailto:admin@waqto.com"
              className="text-sky-400 underline-offset-2 hover:underline"
            >
              admin@waqto.com
            </a>
            .
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-base font-medium text-zinc-200">
            Privacy and terms
          </h2>
          <p>
            Mobile phone numbers and SMS opt-in data are not sold, rented, or
            shared with third parties or affiliates for their own marketing or
            promotional purposes. Full details:{" "}
            <Link
              href="/privacy/#sms"
              className="text-sky-400 underline-offset-2 hover:underline"
            >
              Privacy Policy (SMS)
            </Link>{" "}
            and{" "}
            <Link
              href="/terms/#sms"
              className="text-sky-400 underline-offset-2 hover:underline"
            >
              Terms of Use (SMS)
            </Link>
            .
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-base font-medium text-zinc-200">Company</h2>
          <p>
            WAQTO LLC
            <br />
            301 Midland Ave, Carnegie, PA 15106
            <br />
            EIN 86-2401948
            <br />
            <a
              href="mailto:admin@waqto.com"
              className="text-sky-400 underline-offset-2 hover:underline"
            >
              admin@waqto.com
            </a>
          </p>
          <p>
            Product (opt-in surface):{" "}
            <a
              href="https://duha.app"
              className="text-sky-400 underline-offset-2 hover:underline"
              rel="noopener noreferrer"
              target="_blank"
            >
              https://duha.app
            </a>
          </p>
        </section>
      </div>
    </main>
  );
}
