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

```
End users opt in before receiving SMS from WAQTO LLC. On Duha (https://duha.app) website or Community App forms, or on other WAQTO consent surfaces, the user enters their mobile number and checks an SMS consent checkbox that is not pre-checked. Consent language states they agree to receive community text messages from WAQTO LLC (prayer reminders, events, program updates, volunteer and fundraising notices, and urgent schedule/safety notices), that frequency varies (typically up to 4 msgs/month; more only for time-sensitive notices), that message and data rates may apply, and that they may reply STOP to opt out or HELP for help. Program details and a sample consent UI are at https://waqto.com/messaging/. Privacy Policy: https://waqto.com/privacy/. Terms: https://waqto.com/terms/. Additional opt-in may occur via paper forms or keyword where offered; all paths use the same disclosures and identify WAQTO LLC as the sender.
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
