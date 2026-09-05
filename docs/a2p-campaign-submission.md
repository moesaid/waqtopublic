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
WAQTO LLC operates a low-volume community SMS program for people who opt in to receive text messages from WAQTO LLC. Recipients consent via Duha (https://duha.app) or https://waqto.com/opt-in/ using TWO separate optional checkboxes (not pre-selected): (1) informational alerts—prayer and Jumu'ah reminders, event and program announcements, schedule changes, urgent schedule/safety notices; (2) promotional/marketing—fundraising for community programs, volunteer recruitment offers, other promotional updates. Consumers may agree to each independently. Typical volume is up to 4 informational and/or up to 4 promotional messages per month depending on opt-in. Recipients may reply STOP to opt out and HELP for help. Message and data rates may apply. Program details: https://waqto.com/messaging/
```

---

## Message flow (Call to Action / opt-in)

**Primary opt-in evidence URL:** `https://waqto.com/opt-in/`

Paste into **How do end-users consent to receive messages?**:

```
End users opt in to SMS from WAQTO LLC at https://waqto.com/opt-in/ (also used on Duha web/app). Informational and promotional/marketing consent are captured with TWO separate, optional checkboxes that are NOT pre-selected. Completing signup does not require either SMS box.

Web/app (https://waqto.com/opt-in/#web-form): User enters Mobile Phone Number. Checkbox 1 (informational, optional): "Yes, I would like to receive automated informational text messages from WAQTO LLC about prayer and Jumu'ah reminders, event and program announcements, schedule changes, and urgent schedule/safety notices. I understand I will receive up to 4 informational messages per month (more only for time-sensitive notices)." Checkbox 2 (promotional/marketing, optional, separate): "Yes, I would like to receive separate promotional text messages from WAQTO LLC about fundraising for community programs, volunteer recruitment offers, and other promotional community updates. I understand promotional message frequency varies (typically up to 4 messages per month). This is optional and independent of informational alerts." Form also shows: Message and data rates may apply; Reply HELP for help or STOP to cancel; Consent is not required to use Duha or complete signup; Terms https://waqto.com/terms/ Privacy https://waqto.com/privacy/; submit "Yes, sign me up!".

Paper (https://waqto.com/opt-in/#paper-form): Name/Email/Phone signup fields do NOT enroll SMS. Two SEPARATE optional unchecked boxes—one informational, one promotional/marketing—with the same disclosures. Leaving both unchecked still allows completing the form.

Keyword (where offered): confirmation lists category, frequency, Msg & data rates, HELP, STOP.
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
- [ ] https://waqto.com/opt-in/ and https://waqto.com/messaging/ show TWO separate unchecked SMS checkboxes (informational vs promotional/marketing)
- [ ] Privacy `#sms` and Terms `#sms` describe separate consents (no single bundled fundraising+alerts statement)
- [ ] Campaign description and message_flow match the live site (sender = WAQTO LLC, not “on behalf of”)
- [ ] Samples include brand name + STOP; no disaster-only emergency framing
