import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "SMS Messaging Program — WAQTO LLC",
  description:
    "WAQTO LLC Duha community SMS program: message types, opt-in consent, frequency, STOP/HELP, privacy, and terms.",
};

export default function MessagingPage() {
  return (
    <main className="mx-auto w-full max-w-2xl flex-1 px-6 pb-20 pt-4 sm:px-10">
      <p className="font-mono text-xs uppercase tracking-[0.25em] text-sky-400/80">
        WAQTO LLC · Duha
      </p>
      <h1 className="mt-3 text-3xl font-semibold tracking-tight text-white">
        Community SMS messaging program
      </h1>
      <p className="mt-3 text-sm leading-relaxed text-zinc-400">
        <strong className="font-medium text-zinc-200">WAQTO LLC</strong> is the
        registered business and messaging brand for SMS sent through{" "}
        <a
          href="https://duha.app"
          className="text-sky-400 underline-offset-2 hover:underline"
          rel="noopener noreferrer"
          target="_blank"
        >
          Duha
        </a>
        , our masjid management platform. Participating Islamic centers and
        organizations use Duha to send community texts to people who have opted
        in.
      </p>

      <div className="mt-10 space-y-8 text-sm leading-relaxed text-zinc-400">
        <section className="space-y-3">
          <h2 className="text-base font-medium text-zinc-200">
            Who receives messages
          </h2>
          <p>
            Messages are sent only to congregation members and community contacts
            who consented to receive SMS from their Organization via WAQTO LLC /
            Duha. We do not send unsolicited texts.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-base font-medium text-zinc-200">
            What messages include
          </h2>
          <ul className="list-disc space-y-1.5 pl-5">
            <li>Prayer and Jumu&apos;ah reminders</li>
            <li>Event and program announcements</li>
            <li>Schedule changes and program updates</li>
            <li>Volunteer opportunities</li>
            <li>Fundraising updates for community programs</li>
            <li>Urgent schedule or safety notices when needed</li>
          </ul>
        </section>

        <section className="space-y-3">
          <h2 className="text-base font-medium text-zinc-200">
            Frequency and rates
          </h2>
          <p>
            Message frequency varies by Organization and the programs you join.
            Recipients typically receive a low volume of messages (for example up
            to four SMS messages per month for routine updates), with higher
            frequency only for time-sensitive notices.{" "}
            <strong className="font-medium text-zinc-200">
              Message and data rates may apply
            </strong>{" "}
            from your wireless carrier. WAQTO LLC and the Organization do not
            charge a separate fee for receiving these messages.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-base font-medium text-zinc-200">
            How to opt in
          </h2>
          <p>
            End users opt in on the Organization&apos;s website, Community App, or
            member/profile forms powered by Duha by providing a mobile number and
            checking an SMS consent checkbox that is{" "}
            <strong className="font-medium text-zinc-200">not pre-checked</strong>
            . Additional opt-in may occur via paper forms or keyword where an
            Organization offers them; all paths use the same disclosures.
          </p>
          <p>
            A sample of the consent language and checkbox appears below (for
            review; this page is not a live signup form).
          </p>
        </section>

        <section
          aria-label="Sample SMS consent form"
          className="rounded-2xl border border-white/10 bg-white/[0.03] p-5 sm:p-6"
        >
          <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-zinc-500">
            Sample opt-in (illustrative)
          </p>
          <label className="mt-4 block text-xs text-zinc-500">
            Mobile number
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
              I agree to receive community text messages from{" "}
              <strong className="font-medium text-zinc-100">WAQTO LLC</strong> on
              behalf of my Organization through Duha (prayer reminders, events,
              program updates, volunteer and fundraising notices, and urgent
              schedule/safety notices). Message frequency varies (typically up
              to 4 msgs/month; more only for time-sensitive notices). Message and
              data rates may apply. Reply STOP to opt out or HELP for help. See
              our{" "}
              <Link
                href="/privacy/#sms"
                className="text-sky-400 underline-offset-2 hover:underline"
              >
                Privacy Policy
              </Link>{" "}
              and{" "}
              <Link
                href="/terms/#sms"
                className="text-sky-400 underline-offset-2 hover:underline"
              >
                Terms of Use
              </Link>
              .
            </span>
          </label>
        </section>

        <section className="space-y-3">
          <h2 className="text-base font-medium text-zinc-200">
            Opt out and help
          </h2>
          <p>
            Reply <strong className="font-medium text-zinc-200">STOP</strong> to
            any message to unsubscribe. Reply{" "}
            <strong className="font-medium text-zinc-200">HELP</strong> for
            assistance. You may also email{" "}
            <a
              href="mailto:hello@waqto.com"
              className="text-sky-400 underline-offset-2 hover:underline"
            >
              hello@waqto.com
            </a>{" "}
            or{" "}
            <a
              href="mailto:contact@duha.app"
              className="text-sky-400 underline-offset-2 hover:underline"
            >
              contact@duha.app
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
              href="mailto:hello@waqto.com"
              className="text-sky-400 underline-offset-2 hover:underline"
            >
              hello@waqto.com
            </a>
          </p>
          <p>
            Product site:{" "}
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
