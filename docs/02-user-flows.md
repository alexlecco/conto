`02-user-flows.md`

# Conto — User Flows

**Document status:** Draft
**Version:** 0.1
**Product:** Conto
**Purpose:** Define the main user journeys and interaction flows for the Conto MVP.

---

# 1. Flow Principles

All Conto flows should follow these principles:

* Keep the number of steps as low as reasonably possible.
* Allow users to explore before requiring authentication.
* Make the next action obvious.
* Avoid unnecessary forms.
* Provide clear feedback after important actions.
* Never trap users inside a flow.
* Allow users to go back or cancel whenever appropriate.
* Preserve user progress when possible.
* Keep the experience mobile-first.
* Personalization should assist the user, never restrict them.

The primary product loop is:

**Discover → Decide → Visit → Enjoy → Return**

Where supported:

**Discover → Reserve → Visit → Order → Enjoy → Return**

---

# 2. High-Level Customer Journey

The ideal first-time customer journey is:

1. Open Conto.
2. Understand what Conto does.
3. Start exploring.
4. Optionally personalize recommendations.
5. Browse recommended places.
6. Open a venue.
7. Decide whether the venue is relevant.
8. Save, share, reserve, or simply continue exploring.
9. Visit the venue.
10. Use QR/menu/order functionality if available.
11. Earn rewards where applicable.
12. Return to Conto later for another discovery session.

The user should be able to exit the journey at almost any point and continue exploring.

---

# 3. First Visit Flow

## Goal

Allow a new user to understand and use Conto without immediately creating an account.

## Flow

**Landing → Explore → Discovery**

### Step 1 — Landing

User sees:

* Conto identity.
* Short explanation.
* Primary action: `Explore`.
* Secondary action: `Sign in`.

### Step 2 — Explore

User enters discovery.

No registration should be required.

### Step 3 — Personalization Prompt

Conto may offer:

> "Want us to make this more personal?"

Actions:

* `Let's do it`
* `Skip`

### Step 4 — Discovery

User begins browsing venues.

---

# 4. Optional Personalization Flow

## Goal

Collect lightweight preference signals to improve recommendations.

## Flow

**Prompt → Question 1 → Question 2 → Question 3 → Optional Question 4 → Results → Explore**

The flow should feel like a conversation rather than a formal personality test.

---

## Question Examples

### Question 1 — Energy

> "What kind of energy are you looking for?"

Options:

* Calm
* Balanced
* Lively
* Surprise me

### Question 2 — Social Style

> "What sounds good today?"

Options:

* Something quiet
* A place to chat
* Something social
* Something lively
* Surprise me

### Question 3 — Planning

> "How do you usually choose?"

Options:

* I like to plan
* I have a rough idea
* I decide on the spot

### Question 4 — Exploration

> "What sounds more like you?"

Options:

* My usual favorites
* A mix of familiar and new
* Show me something unexpected

The exact wording is subject to UX iteration.

---

# 5. Personalization Completion

After the questions, Conto should provide a lightweight result.

Example:

> "Got it. We'll keep an eye out for places that match your vibe."

The system should immediately show recommendations.

The user should have an obvious:

`Explore everything`

option.

The result must not imply a permanent personality classification.

---

# 6. Skip Personalization Flow

Users can skip personalization.

## Flow

**Personalization Prompt → Skip → Discovery**

The user should not be penalized.

The system can gradually personalize recommendations using subsequent behavior.

---

# 7. Discovery Flow

## Goal

Help the user find a relevant place quickly.

## Flow

**Home → Recommendation → Venue Card → Venue Detail**

A venue card may display:

* Name.
* Image.
* Category.
* Atmosphere.
* Price level.
* Distance.
* Relevant tags.
* Availability.
* Personalized explanation.

Example:

> "Quiet atmosphere and great coffee."

---

# 8. Explore Everything Flow

Users who do not want personalization should be able to browse the broader catalog.

## Flow

**Home → Explore Everything → Categories / Search / Filters → Venue**

The system should not require users to answer questions before accessing the full catalog.

---

# 9. Search Flow

## Flow

**Search → Enter Query → Results → Venue Detail**

Example:

User searches:

> "pizza"

Conto returns relevant venues.

User may then:

* Open venue.
* Save venue.
* Reserve.
* Continue searching.
* Apply filters.

---

# 10. Filter Flow

## Flow

**Discovery → Filters → Select Filters → Apply → Updated Results**

Filters may include:

* Category.
* Price.
* Distance.
* Atmosphere.
* Open now.
* Availability.
* Food/drink type.
* Quiet / lively.
* Suitable for groups.

Filters should be removable individually.

There should be a clear:

`Clear filters`

action.

---

# 11. Venue Detail Flow

## Goal

Give the user enough information to make a decision.

## Flow

**Venue Card → Venue Detail**

The venue page should provide:

* Photos.
* Description.
* Atmosphere.
* Menu.
* Location.
* Hours.
* Relevant tags.
* Availability.
* Actions.

Primary actions may include:

* `Reserve`
* `View menu`
* `Order`
* `Save`
* `Get directions`

The exact primary action depends on the venue context.

---

# 12. Save Venue Flow

## Flow

**Venue Detail → Save → Saved**

The user taps `Save`.

The venue is added to their saved places.

If authentication is required, Conto should explain why.

Example:

> "Create an account to keep your saved places."

The user should then be able to return to the venue later.

---

# 13. Remove Saved Venue Flow

## Flow

**Saved → Venue → Remove**

The user removes the venue.

The action should be immediate.

An unnecessary confirmation dialog should generally be avoided.

---

# 14. Reservation Flow

## Goal

Allow a user to reserve a table with minimal friction.

## Flow

**Venue Detail → Reserve → Date → Time → Party Size → Confirmation → Success**

### Step 1 — Reserve

User taps:

`Reserve`

### Step 2 — Date

User selects a date.

### Step 3 — Time

Conto displays available times.

### Step 4 — Party Size

User selects number of people.

### Step 5 — Review

User sees:

* Venue.
* Date.
* Time.
* Party size.
* Relevant reservation conditions.

### Step 6 — Confirm

User taps:

`Confirm reservation`

### Step 7 — Success

Conto displays:

> "You're booked."

The reservation is added to the user's activity.

---

# 15. Reservation Authentication Flow

If the user is not authenticated:

**Reserve → Authentication → Return to Reservation → Confirm**

The system should preserve the reservation information during authentication.

The user should not have to start over.

---

# 16. Reservation Cancellation Flow

## Flow

**Activity → Reservation → Cancel → Confirmation → Cancelled**

The cancellation screen should clearly explain any applicable cancellation rules.

After cancellation:

> "Your reservation has been cancelled."

---

# 17. Reservation Reminder Flow

Where notifications are enabled:

**Upcoming Reservation → Reminder → Venue**

A reminder may contain:

* Venue.
* Date.
* Time.
* Party size.
* Address.
* Directions.

Notifications should remain concise.

---

# 18. QR Flow

## Goal

Connect the physical venue with the digital Conto experience.

## Flow

**Venue → QR Code → Scan → Venue Experience**

The QR may identify:

* Venue.
* Table.
* Menu.
* Ordering session.

After scanning, Conto should immediately display the relevant venue experience.

---

# 19. QR Without Authentication

Users should ideally be able to access the digital menu without creating an account.

## Flow

**Scan QR → Menu → Browse**

Authentication should only be requested when necessary.

This is particularly important for reducing friction inside venues.

---

# 20. Digital Menu Flow

## Flow

**QR → Menu → Category → Item → Item Details**

The user can:

* Browse categories.
* Open items.
* View descriptions.
* View prices.
* View images.
* Select modifiers where supported.

---

# 21. Add to Cart Flow

## Flow

**Menu → Item → Customize → Add → Cart**

The user selects:

* Quantity.
* Modifiers.
* Optional notes where supported.

The item is added to the cart.

The user can continue browsing.

---

# 22. Order Flow

## Flow

**Cart → Review → Submit Order → Confirmation → Status**

The user reviews:

* Items.
* Quantities.
* Modifiers.
* Total.

Then:

`Place order`

After submission:

> "Order received."

The user can see the current order status.

---

# 23. Order Status Flow

Possible states:

**Received → Accepted → Preparing → Ready → Served / Completed**

If an order is cancelled:

**Received / Accepted → Cancelled**

The UI should clearly communicate the current state.

---

# 24. Pre-Order Flow

Where enabled:

**Reservation → Pre-order → Menu → Select Items → Review → Confirm**

Pre-order should remain optional.

If the venue does not support pre-ordering, the option should not appear.

---

# 25. ContoCoins Earning Flow

## Flow

**Eligible Action → Event Recorded → ContoCoins Awarded → Balance Updated**

Example:

User completes an eligible action.

Conto displays:

> "+50 ContoCoins"

The updated balance is visible in the user's rewards area.

The system should clearly explain why coins were awarded.

---

# 26. Rewards Flow

## Flow

**Profile → Rewards → Available Reward → Details → Redeem**

A reward should clearly show:

* Benefit.
* Venue.
* Requirements.
* Expiration.
* Redemption instructions.

---

# 27. Reward Redemption Flow

## Flow

**Reward → Redeem → Confirmation → Redemption State**

The user should receive clear confirmation.

Example:

> "Reward ready to use."

The exact redemption mechanism may evolve depending on the business integration.

---

# 28. Account Creation Flow

Authentication should happen only when necessary.

## Flow

**Action Requiring Account → Sign Up → Verification → Return to Original Flow**

Potential authentication methods:

* Email.
* Passwordless.
* OAuth.

The user should return to the exact action they were attempting whenever possible.

---

# 29. Login Flow

## Flow

**Sign In → Authentication → Home / Previous Context**

After successful authentication, Conto should restore the user's previous context when appropriate.

---

# 30. User Profile Flow

## Flow

**Profile → Account**

Possible sections:

* Personal information.
* Preferences.
* Saved places.
* Reservations.
* Orders.
* ContoCoins.
* Rewards.
* Settings.

---

# 31. Preference Editing Flow

## Flow

**Profile → Preferences → Edit → Save**

Users should be able to change their preferences at any time.

Changes should influence future recommendations.

---

# 32. Recommendation Feedback Flow

Conto may eventually allow users to provide lightweight feedback.

Examples:

* "More like this."
* "Less like this."
* "Not interested."

The system can use this feedback to improve recommendations.

This functionality should remain optional for the MVP.

---

# 33. Business Onboarding Flow

## Goal

Allow a business to become part of Conto.

## Flow

**Business Sign Up → Business Information → Venue Profile → Verification → Dashboard**

Initial information may include:

* Business name.
* Category.
* Address.
* Contact information.
* Opening hours.
* Description.
* Images.

Verification requirements may evolve depending on the business model.

---

# 34. Business Dashboard Flow

## Flow

**Login → Dashboard → Select Operational Area**

Main areas:

* Overview.
* Venue.
* Menu.
* Reservations.
* Orders.
* Promotions.
* Analytics.

The dashboard should prioritize operational tasks.

---

# 35. Business Venue Management Flow

## Flow

**Dashboard → Venue → Edit → Save → Published Profile**

Businesses can update:

* Description.
* Images.
* Hours.
* Categories.
* Atmosphere.
* Services.

Changes should be validated before publishing.

---

# 36. Business Menu Management Flow

## Flow

**Dashboard → Menu → Category → Item → Edit → Publish**

Business users can:

* Create categories.
* Add items.
* Edit items.
* Change prices.
* Upload images.
* Mark items unavailable.
* Reorder items.

---

# 37. Business Reservation Management Flow

## Flow

**Dashboard → Reservations → Reservation → Action**

Possible actions:

* Confirm.
* Decline.
* Cancel.
* Mark completed.

The business should see relevant reservation information without unnecessary complexity.

---

# 38. Business Order Management Flow

## Flow

**Dashboard → Orders → Order → Update Status**

The business can update order status.

Example:

**Received → Accepted → Preparing → Ready → Completed**

The customer should receive the corresponding status update.

---

# 39. Business Promotion Flow

## Flow

**Dashboard → Promotions → Create → Configure → Publish**

Promotion fields may include:

* Name.
* Description.
* Reward.
* Valid period.
* Conditions.
* Usage limits.

Published promotions can appear in relevant discovery surfaces.

---

# 40. Business Analytics Flow

## Flow

**Dashboard → Analytics → Select Period → View Metrics**

Initial metrics:

* Views.
* Saves.
* Reservations.
* Orders.
* QR scans.
* Repeat customers.
* Promotion usage.

Analytics should emphasize actionable information.

---

# 41. Error Flow

When an operation fails:

**Action → Error → Explanation → Recovery Action**

Example:

> "We couldn't complete the reservation."

Actions:

`Try again`

or:

`Choose another time`

The system should avoid leaving users uncertain about whether an action succeeded.

---

# 42. Offline / Connectivity Flow

If connectivity is temporarily unavailable:

Conto should:

1. Detect the problem.
2. Inform the user.
3. Preserve local progress where possible.
4. Provide a retry action.

Example:

> "Looks like you're offline. We'll try again when you're connected."

Critical operations such as reservations and orders must always receive server confirmation before being presented as successful.

---

# 43. Global Navigation Flow

Customer navigation should provide access to:

**Home → Explore → Saved → Activity → Profile**

The user should be able to move between primary areas without losing important state.

---

# 44. Core MVP Journey

The most important flow to validate first is:

**Open Conto**

↓

**Explore**

↓

**See relevant places**

↓

**Open venue**

↓

**Decide**

↓

**Reserve or save**

↓

**Visit**

This is the minimum product loop.

---

# 45. Secondary MVP Journey

Where QR functionality is enabled:

**Visit venue**

↓

**Scan QR**

↓

**Open menu**

↓

**Select items**

↓

**Place order**

↓

**Track order**

↓

**Complete visit**

↓

**Earn ContoCoins**

↓

**Return to Conto**

---

# 46. Personalization Loop

Over time:

**User behavior**

↓

**Preference signals**

↓

**Recommendation improvement**

↓

**Better discovery**

↓

**More interaction**

↓

**More useful signals**

This creates a continuous personalization loop.

---

# 47. Design Rule for Flows

Every important flow should answer three questions:

1. **Where am I?**
2. **What can I do next?**
3. **What happens if I do it?**

If a flow cannot answer these questions clearly, it should be simplified.

---

# 48. Flow Priority

Implementation priority should be:

### Priority 1 — Core Discovery

* Landing.
* Explore.
* Search.
* Filters.
* Venue detail.
* Save.

### Priority 2 — Reservations

* Availability.
* Reservation creation.
* Reservation management.
* Confirmation.

### Priority 3 — Business Foundation

* Business onboarding.
* Venue management.
* Menu management.
* Reservation management.

### Priority 4 — Physical Venue Experience

* QR.
* Digital menu.
* Ordering.

### Priority 5 — Engagement

* ContoCoins.
* Rewards.
* Promotions.
* Basic personalization based on behavior.

---

# 49. Future Flow Extensions

The architecture should eventually support:

* Advanced recommendations.
* AI-assisted discovery.
* Social discovery.
* Events.
* Group planning.
* Shared reservations.
* Payments.
* Advanced loyalty.
* Personalized offers.
* Multi-venue experiences.

These are intentionally outside the core MVP flow.

---

# 50. Final Flow Principle

Conto should feel less like navigating a complicated application and more like having a helpful friend answer:

> "Where should we go?"

The product should guide users toward good choices while always preserving freedom to explore.

The core experience should remain:

**Simple. Personal. Useful. Human.**
