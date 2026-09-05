import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Privacy Policy — WAQTO LLC",
  description:
    "Privacy policy for WAQTO LLC, including SMS messaging, mobile numbers, and how we protect contact information.",
};

export default function PrivacyPage() {
  return (
    <main className="mx-auto w-full max-w-2xl flex-1 px-6 pb-20 pt-4 sm:px-10">
      <h1 className="text-3xl font-semibold tracking-tight text-white">
        Privacy Policy
      </h1>
      <p className="mt-2 text-sm text-zinc-500">Last updated: September 5, 2026</p>

      <div className="mt-10 space-y-8 text-sm leading-relaxed text-zinc-400">
        <section className="space-y-3">
          <h2 className="text-base font-medium text-zinc-200">Who we are</h2>
          <p>
            This website is operated by{" "}
            <strong className="text-zinc-200">WAQTO LLC</strong>, a Pennsylvania
            limited liability company. WAQTO LLC builds and operates{" "}
            <a
              href="https://duha.app"
              className="text-sky-400 underline-offset-2 hover:underline"
              rel="noopener noreferrer"
              target="_blank"
            >
              Duha
            </a>{" "}
            (masjid management),{" "}
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
            . WAQTO LLC also operates a community SMS program for people who opt
            in to receive texts from WAQTO LLC.
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
            Information we collect
          </h2>
          <p>
            If you email us or use our products, we may collect your name, email
            address, phone number, and information about your organization that
            you choose to provide. We use this information to respond to
            inquiries, operate our software, and provide support. When you enroll
            in SMS messaging from WAQTO LLC, we also process mobile numbers and
            opt-in / opt-out status as described below.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-base font-medium text-zinc-200">How we use it</h2>
          <p>
            We use collected information to communicate with you, deliver
            services you request, and improve our products. We do not sell
            personal information.
          </p>
        </section>

        <section id="sms" className="scroll-mt-8 space-y-3">
          <h2 className="text-base font-medium text-zinc-200">
            SMS and voice messaging
          </h2>
          <p>
            <strong className="text-zinc-200">WAQTO LLC</strong> sends SMS text
            messages (and, where enabled, automated voice calls) to people who
            have opted in to receive communications{" "}
            <strong className="text-zinc-200">from WAQTO LLC</strong> (for
            example prayer reminders, event announcements, program updates,
            volunteer and fundraising notices, and urgent schedule or safety
            notices). You may opt in on Duha (website or Community App) or other
            WAQTO consent surfaces. Messages are sent by WAQTO LLC using our
            messaging infrastructure (including carrier partners such as Twilio).
          </p>
          <p>
            <strong className="text-zinc-200">Message frequency.</strong> Message
            frequency varies by the programs you join. Recipients typically
            receive a low volume of messages (for example up to four SMS messages
            per month for routine updates), with higher frequency only for
            time-sensitive notices.
          </p>
          <p>
            <strong className="text-zinc-200">
              Message and data rates may apply.
            </strong>{" "}
            Standard message and data rates from your wireless carrier may apply
            to SMS and voice communications. WAQTO LLC does not charge you a
            separate fee for receiving these messages, but your carrier may.
          </p>
          <p>
            <strong className="text-zinc-200">
              Mobile information is not shared for third-party marketing.
            </strong>{" "}
            WAQTO LLC does{" "}
            <strong className="text-zinc-200">not</strong> sell, rent, or share
            mobile phone numbers or SMS/voice opt-in data with third parties or
            affiliates for their own marketing or promotional purposes. Mobile
            numbers are used only to deliver messages you consented to receive
            from WAQTO LLC, to operate and secure our services, to honor opt-out
            requests, and as otherwise described in this Privacy Policy
            (including sharing with messaging carriers and subprocessors solely
            to transmit those messages).
          </p>
          <p>
            <strong className="text-zinc-200">Opt out and help.</strong> You may
            opt out of WAQTO LLC SMS at any time by replying{" "}
            <strong className="text-zinc-200">STOP</strong> to a message. Reply{" "}
            <strong className="text-zinc-200">HELP</strong> for assistance. You
            may also contact WAQTO LLC at{" "}
            <a
              href="mailto:admin@waqto.com"
              className="text-sky-400 underline-offset-2 hover:underline"
            >
              admin@waqto.com
            </a>
            . Program overview:{" "}
            <Link
              href="/messaging/"
              className="text-sky-400 underline-offset-2 hover:underline"
            >
              Messaging program
            </Link>
            . Related terms:{" "}
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
          <h2 className="text-base font-medium text-zinc-200">Contact</h2>
          <p>
            Questions about this policy can be sent to{" "}
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
