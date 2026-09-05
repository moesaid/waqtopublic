# A2P 10DLC campaign submission — WAQTO LLC

Paste these fields into Twilio Console when creating a new USA2P / LOW_VOLUME campaign.

**Deploy waqto.com with the first-party site copy before submitting**, so reviewers see matching language.

## Quick settings

| Field | Value |
|--------|--------|
| Website / business URL | `https://waqto.com` |
| Program detail page | `https://waqto.com/messaging/` |
| Privacy | `https://waqto.com/privacy/` |
| Terms | `https://waqto.com/terms/` |
| Use case | `LOW_VOLUME` |
| Has embedded links | Yes |
| Has embedded phone numbers | No |
| Age-gated | No |
| Direct lending | No |
| Support email | `admin@waqto.com` |

---

## Campaign description

```
WAQTO LLC operates a low-volume community SMS program for people who opt in to receive text messages from WAQTO LLC. Recipients are community members who consented via Duha (our product at https://duha.app) web or app forms, paper forms, or keyword where offered. Messages include prayer and Jumu'ah reminders, event and program announcements, schedule changes, volunteer opportunities, fundraising updates for community programs, and urgent schedule or safety notices. Typical volume is up to 4 messages per month, with higher frequency only for time-sensitive notices. Recipients may reply STOP to opt out and HELP for help. Message and data rates may apply. Program details: https://waqto.com/messaging/
```

---

## Message flow (Call to Action / opt-in)

Paste this into **How do end-users consent to receive messages?** (addresses paper-form explicit consent + optional SMS):

```
End users opt in before receiving SMS from WAQTO LLC. SMS consent is always optional and separate from membership or community signup—completing a form does not require agreeing to texts.

Web/app: On Duha (https://duha.app) website or Community App forms, the user may enter a mobile number and check a separate SMS consent checkbox that is not pre-checked.

Paper/printed forms: Registration or community paper forms include standard signup fields (name, email, phone). SMS enrollment uses a separate, optional checkbox that is not pre-checked and is not required to complete the form. The printed checkbox wording states: "Optional — I agree to receive community text messages from WAQTO LLC (prayer reminders, events, program updates, volunteer and fundraising notices, and urgent schedule/safety notices). Message frequency varies (typically up to 4 msgs/month). Msg & data rates may apply. Reply STOP to opt out or HELP for help. Privacy: https://waqto.com/privacy/ Terms: https://waqto.com/terms/ Leaving this box unchecked still allows me to complete this form." Signing the form alone does not enroll the person in SMS.

Keyword (where offered): User texts an opt-in keyword and receives a confirmation reply with brand name, frequency, Msg & data rates may apply, HELP, and STOP.

All paths identify WAQTO LLC as the sender. Program details and sample web + paper consent UIs: https://waqto.com/messaging/ Privacy: https://waqto.com/privacy/ Terms: https://waqto.com/terms/
```

---

## Sample messages (5)

1.

```
WAQTO LLC: Jumu'ah prayer today at 1:15 PM. Khutbah begins at 1:00 PM. Details: https://duha.app Reply STOP to opt out.
```

2.

```
WAQTO LLC: Community Iftar this Saturday at 6:30 PM in the main hall. RSVP: https://duha.app Reply STOP to unsubscribe.
```

3.

```
WAQTO LLC: Weekend School resumes Sunday. Drop-off at 9:00 AM. Questions? Visit https://duha.app/contact or reply HELP. Reply STOP to opt out.
```

4.

```
WAQTO LLC: Volunteers needed for Food Pantry on Saturday. Sign up: https://duha.app Reply STOP to opt out.
```

5.

```
WAQTO LLC: Maghrib prayer time updated to 7:42 PM this week. Schedule: https://duha.app Reply STOP to opt out.
```

---

## HELP message

```
WAQTO LLC: For help email admin@waqto.com. Reply STOP to cancel. Msg&Data rates may apply.
```

## Opt-out message

```
You have been unsubscribed from WAQTO LLC messages. You will not receive any more messages from this number. Reply START to resubscribe.
```

## Suggested keywords (if managing yourself)

| Type | Keywords |
|------|----------|
| Help | `HELP`, `INFO` |
| Opt-out | `STOP`, `STOPALL`, `UNSUBSCRIBE`, `CANCEL`, `END`, `QUIT` |

---

## Pre-submit checklist

- [ ] https://waqto.com loads and shows WAQTO LLC identity (address, EIN, admin@waqto.com)
- [ ] https://waqto.com/messaging/ shows first-party opt-in sample (unchecked checkbox), STOP/HELP, privacy/terms links
- [ ] Privacy `#sms` states mobile numbers are not shared for third-party marketing
- [ ] Campaign description and message_flow match the live site (sender = WAQTO LLC, not “on behalf of”)
- [ ] Samples include brand name + STOP; no disaster-only emergency framing
