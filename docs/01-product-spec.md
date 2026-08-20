`01-product-spec.md`

# Conto — Product Specification

**Document status:** Draft
**Version:** 0.1
**Product:** Conto
**Document purpose:** Define the functional and product requirements for the Conto MVP.

---

## 1. Product Overview

Conto is a mobile-first platform for discovering, choosing, and experiencing bars, restaurants, cafés, breweries, and other places to go out.

The MVP focuses on making the process of deciding where to go simpler and more personalized.

Instead of requiring users to move between Google Maps, Instagram, menus, reviews, messaging apps, and reservation systems, Conto aims to bring the relevant experience into one place.

The core product loop is:

**Discover → Decide → Visit → Order → Enjoy → Return**

The MVP should validate whether users find enough value in Conto to use it when deciding where to go.

---

# 2. MVP Goals

The MVP must validate the following hypotheses:

1. Users want a simpler way to discover places.
2. Personalized recommendations are more useful than generic lists.
3. Users are willing to use Conto to decide where to go.
4. Users find value in seeing relevant information about a venue in one place.
5. Users are willing to reserve a table through Conto.
6. Users find QR-based ordering useful once they are physically at a venue.
7. A lightweight rewards system can encourage repeat usage.
8. Businesses can obtain meaningful value from being present on Conto.

The MVP should prioritize learning and usability over feature quantity.

---

# 3. Product Principles

Every product decision should follow these principles:

### 3.1 Simple before complex

The simplest solution that validates the hypothesis should be preferred.

### 3.2 Mobile first

The primary experience is designed for smartphones.

### 3.3 Explore before registration

Users should be able to explore Conto before being forced to create an account.

### 3.4 Personalization without pressure

Conto should personalize recommendations without making users feel categorized or restricted.

### 3.5 User control

Users should always be able to ignore recommendations and explore everything.

### 3.6 Human and friendly

The product should feel approachable, warm, simple, and human.

### 3.7 Short communication

Conto should generally use short, clear messages.

More detailed information can be progressively disclosed when necessary.

### 3.8 Accessibility and inclusion

The product should not assume that everyone enjoys the same type of nightlife.

Some users may prefer quiet cafés, some casual restaurants, some social environments, and others high-energy nightlife.

Conto should accommodate different rhythms and preferences.

---

# 4. User Roles

The MVP has two primary user roles.

## 4.1 Customer

A customer uses Conto to:

* Discover places.
* Explore recommendations.
* Filter places.
* View venue information.
* Save interesting places.
* Make reservations.
* View menus.
* Order through QR when supported.
* Potentially pre-order items.
* Earn ContoCoins.
* View rewards.
* Manage their preferences.

## 4.2 Business

A business uses Conto to:

* Create and manage its venue profile.
* Manage venue information.
* Manage menus.
* Manage availability.
* Manage reservations.
* Receive orders.
* Create promotions.
* View basic customer and business insights.
* Participate in the Conto rewards ecosystem.

Business functionality may initially be implemented as a lightweight dashboard.

---

# 5. Customer Experience

## 5.1 Entry / Landing Experience

Users should immediately understand what Conto does.

The first experience should communicate:

* Discover places.
* Find something that matches your mood.
* Explore nearby or relevant venues.
* Continue without creating an account.

Primary action:

**Explore**

Secondary action:

**Sign in / Create account**

Registration should not be the first barrier.

---

# 6. Optional Personalization Onboarding

Conto may offer a short, optional personalization experience.

The purpose is to improve recommendations, not to create a rigid personality test.

The onboarding should be:

* Short.
* Friendly.
* Optional.
* Skippable.
* Non-invasive.
* Easy to understand.

Target: approximately 3–4 questions.

Possible dimensions include:

### Energy

Examples:

* Calm
* Balanced
* Energetic

### Social preference

Examples:

* Quiet / intimate
* Small groups
* Social / lively

### Planning preference

Examples:

* I like to plan ahead.
* A little planning is good.
* I prefer to decide spontaneously.

### Exploration preference

Examples:

* I like familiar places.
* I enjoy discovering new places.
* Show me something unexpected.

The exact questions can evolve during UX validation.

The result should influence recommendations without locking the user into a category.

Users must always have a clear:

**Explore everything**

option.

---

# 7. Home / Discovery

The home screen is the main discovery surface.

It should prioritize relevant places instead of displaying an overwhelming directory.

Potential sections:

* Recommended for you.
* Near you.
* Popular now.
* New places.
* Quiet places.
* Good for groups.
* Date-friendly.
* Food-focused.
* Coffee / café.
* Drinks / nightlife.
* Explore everything.

The exact sections should be dynamically configurable.

The product should avoid excessive scrolling and unnecessary visual complexity.

---

# 8. Discovery Cards

A venue card should communicate the most important information quickly.

Possible information:

* Venue name.
* Main image.
* Category.
* Approximate location.
* Price level.
* Rating or quality indicator where available.
* Relevant tags.
* Current availability where available.
* Distance.
* Personalized reason.

Examples of personalized reasons:

> "Looks like your kind of place."

> "Quiet atmosphere and great coffee."

> "Popular with groups tonight."

The recommendation explanation should be concise.

---

# 9. Search

Users should be able to search for places.

Search may support:

* Venue name.
* Category.
* Food type.
* Drink type.
* Tags.
* Neighborhood.
* General intent.

Examples:

* "pizza"
* "coffee"
* "craft beer"
* "quiet"
* "date"
* "live music"

Search should return useful results without requiring highly specific queries.

---

# 10. Filters

Users should be able to refine discovery.

Initial filters may include:

* Category.
* Price.
* Distance.
* Atmosphere.
* Food/drink type.
* Availability.
* Open now.
* Suitable for groups.
* Quiet / lively.
* Indoor / outdoor where available.

Filters should remain lightweight.

The MVP should avoid building a complex filtering system before user behavior justifies it.

---

# 11. Venue Detail Page

The venue page is one of the most important screens in Conto.

It should consolidate the information needed to make a decision.

Possible sections:

### Header

* Venue name.
* Main image.
* Category.
* Location.
* Basic rating / quality information.

### Atmosphere

Examples:

* Quiet.
* Casual.
* Social.
* Lively.
* Romantic.
* Family-friendly.

### Menu

Users should be able to view the current menu when provided by the business.

### Information

* Address.
* Opening hours.
* Contact information.
* Available services.
* Amenities.

### Actions

Primary actions may include:

* Reserve.
* Get directions.
* View menu.
* Order when available.
* Save.
* Share.

The most important action should be visually prominent.

---

# 12. Reservations

Conto should support table reservations for participating businesses.

A basic reservation flow:

1. User selects a venue.
2. User selects date.
3. User selects approximate time.
4. User selects party size.
5. Conto displays available options.
6. User confirms.
7. Reservation is created.
8. User receives confirmation.

The system should clearly distinguish:

* Available.
* Unavailable.
* Pending.
* Confirmed.
* Cancelled.

The business should be able to manage reservations from its dashboard.

---

# 13. QR Experience

Participating businesses may use QR codes to connect the physical experience with Conto.

A QR code can represent:

* Venue.
* Table.
* Menu.
* Ordering session.

A customer scans the QR code and enters the relevant venue experience.

The QR experience should minimize friction.

If the user is not authenticated, Conto should avoid unnecessarily blocking the experience.

---

# 14. Digital Menu

Businesses should be able to create and maintain digital menus.

Menu structure should support:

* Categories.
* Items.
* Name.
* Description.
* Price.
* Image.
* Availability.
* Optional modifiers.

Example categories:

* Starters.
* Main dishes.
* Desserts.
* Drinks.
* Cocktails.
* Coffee.

Businesses should be able to mark an item as temporarily unavailable.

---

# 15. Ordering

Where supported, users can order directly through Conto.

Basic flow:

1. Scan QR.
2. Open venue menu.
3. Select items.
4. Customize items where supported.
5. Review cart.
6. Submit order.
7. Receive order status.

Possible statuses:

* Received.
* Accepted.
* Preparing.
* Ready.
* Delivered / served.
* Cancelled.

The MVP should keep ordering architecture modular because payment integration may be introduced at a later stage.

---

# 16. Pre-Order

Conto may support pre-ordering before arriving at a venue.

Example:

A user reserves a table and selects items they would like prepared in advance.

The MVP should treat pre-order as an optional capability rather than a mandatory part of every reservation.

If implementation complexity becomes too high, pre-order can be postponed until after the core discovery and reservation loop is validated.

---

# 17. ContoCoins

ContoCoins are a lightweight rewards mechanism.

Users can earn ContoCoins through eligible activities.

Potential earning activities:

* Visiting participating venues.
* Completing eligible orders.
* Participating in promotions.
* Returning to participating venues.
* Completing selected Conto activities.

Coins should have a transparent value and clear rules.

The MVP should avoid creating a complicated financial system.

ContoCoins are primarily intended to encourage engagement and repeat usage.

---

# 18. Rewards

Users should be able to see available rewards.

A reward may include:

* Discount.
* Free item.
* Promotional offer.
* Venue-specific benefit.
* Conto-wide benefit.

Each reward should clearly show:

* What it provides.
* Where it can be used.
* Requirements.
* Expiration date, if applicable.

---

# 19. Personalization Engine

Recommendations should eventually use signals such as:

* User-selected preferences.
* Previous interactions.
* Saved venues.
* Viewed venues.
* Searches.
* Categories explored.
* Visits.
* Orders.
* Time of day.
* Location.
* Venue characteristics.

For the MVP, personalization should remain simple.

A rules-based recommendation system is acceptable initially.

The architecture should allow a more sophisticated recommendation model to be introduced later.

---

# 20. Business Dashboard

Businesses need a simple management interface.

Initial dashboard sections:

* Overview.
* Venue profile.
* Menu.
* Reservations.
* Orders.
* Promotions.
* Basic analytics.

The dashboard should prioritize operational tasks over complex analytics.

---

# 21. Business Profile Management

Businesses should be able to manage:

* Name.
* Description.
* Images.
* Address.
* Opening hours.
* Categories.
* Atmosphere tags.
* Contact information.
* Services.
* Menu.

Changes should be reflected in the customer experience without requiring developer intervention.

---

# 22. Promotions

Businesses should eventually be able to create promotions.

A promotion may include:

* Title.
* Description.
* Valid dates.
* Valid hours.
* Eligible users.
* Reward.
* Usage limitations.

Promotions should integrate with discovery and rewards.

---

# 23. Analytics

The MVP should provide businesses with basic metrics.

Potential metrics:

* Venue views.
* Saves.
* Reservation requests.
* Confirmed reservations.
* QR scans.
* Orders.
* Repeat customers.
* Promotion usage.

Analytics should be simple and actionable.

---

# 24. User Account

Account functionality should include:

* Name.
* Profile information.
* Preferences.
* Saved venues.
* Reservations.
* Orders.
* Rewards.
* ContoCoins.
* Basic settings.

Users should be able to modify their preferences.

---

# 25. Saved Places

Users should be able to save venues.

Saved places provide a lightweight mechanism for users to remember places they want to visit.

The saved list should be easy to access.

---

# 26. Notifications

Notifications may eventually include:

* Reservation confirmation.
* Reservation reminders.
* Order updates.
* Reward availability.
* Promotion notifications.
* Relevant recommendations.

The MVP should avoid excessive notifications.

Users should have control over notification preferences.

---

# 27. Navigation

The customer application should use a simple navigation structure.

A possible MVP structure:

* Home
* Explore
* Saved
* Reservations / Activity
* Profile

The exact navigation may change during UX implementation.

---

# 28. Authentication

Authentication should support a low-friction experience.

Potential methods:

* Email.
* Passwordless authentication.
* Google or other OAuth provider, if appropriate.

Authentication should not be required for basic discovery.

Actions that require persistence or identity, such as reservations or rewards, may require authentication.

---

# 29. Error Handling

Errors should be understandable and actionable.

Avoid technical messages such as:

> "Internal server error 500."

Prefer:

> "Something went wrong. Please try again."

Whenever possible, explain what the user can do next.

---

# 30. Loading States

Every asynchronous experience should have an appropriate loading state.

Examples:

* Venue discovery.
* Search.
* Reservation availability.
* Menu loading.
* Orders.
* Rewards.

Avoid blank screens.

---

# 31. Empty States

Empty states should guide the user.

Example:

> "You haven't saved any places yet."

Followed by:

**Explore places**

Empty states should provide a useful next action.

---

# 32. Non-Functional Requirements

The MVP should be:

* Mobile-first.
* Responsive.
* Fast.
* Accessible.
* Secure.
* Maintainable.
* Modular.
* Easy to iterate.
* Suitable for low-cost deployment.

The architecture should avoid unnecessary infrastructure complexity.

---

# 33. Performance

Initial priorities:

* Fast initial load.
* Optimized images.
* Minimal JavaScript where possible.
* Efficient API requests.
* Reasonable caching.
* Responsive interactions.

The product should feel fast on average mobile connections.

---

# 34. Security

The application must:

* Protect authenticated user data.
* Validate server-side operations.
* Avoid exposing secrets in client code.
* Validate business permissions.
* Prevent users from accessing another business's private data.
* Protect reservation and order operations against unauthorized modification.

Security requirements should be expanded before production deployment.

---

# 35. Privacy

Conto should collect only information necessary for the product.

Personalization should be transparent.

Users should be able to understand why recommendations are being shown.

Location access should be optional where possible.

The product should not require unnecessary personal information.

---

# 36. MVP Scope

### Must Have

* Customer discovery.
* Venue profiles.
* Search.
* Basic filters.
* Optional personalization onboarding.
* Recommendations.
* User accounts.
* Saved venues.
* Reservations.
* Digital menus.
* Basic QR experience.
* Basic business dashboard.
* Basic ContoCoins/rewards foundation.

### Should Have

* QR ordering.
* Promotions.
* Basic analytics.
* Reservation reminders.
* Basic personalization based on behavior.

### Could Have

* Pre-ordering.
* Advanced recommendation engine.
* Advanced analytics.
* Social features.
* Advanced loyalty mechanics.
* Payments.

### Not Required for Initial MVP

* Complex social network.
* Advanced AI recommendation system.
* Full payment infrastructure.
* Highly complex gamification.
* Native iOS and Android applications if a PWA can validate the concept first.

---

# 37. MVP Success Criteria

The MVP should be considered successful if it demonstrates meaningful engagement in the core loop:

**Discover → Decide → Visit**

and, where supported:

**Discover → Reserve → Visit → Order → Return**

Important metrics to evaluate include:

* Discovery sessions.
* Venue detail views.
* Saved venues.
* Reservation conversion.
* Reservation completion.
* Repeat usage.
* QR scans.
* Orders.
* Reward engagement.
* Business adoption.
* User retention.

Exact numerical targets should be defined after the initial product assumptions are validated.

---

# 38. Product Evolution

The MVP architecture should allow Conto to evolve toward:

* Advanced personalization.
* AI-assisted discovery.
* Smarter recommendations.
* Payments.
* Advanced loyalty.
* Social discovery.
* Event discovery.
* Personalized experiences for businesses.
* Deeper business analytics.
* Multi-city expansion.

However, these capabilities should not complicate the initial MVP unnecessarily.

---

# 39. Guiding Product Rule

When deciding whether to build a feature, ask:

> **Does this help the user discover, choose, visit, enjoy, or return to a place?**

If the answer is no, the feature should probably not be part of the MVP.

The goal is not to build the largest possible product.

The goal is to build the smallest version of Conto that can prove the core idea works.

---

# 40. Document Status

This document is a living specification.

New decisions should be incorporated into the appropriate specification or Architecture Decision Record (ADR).

The Product Specification should remain focused on **what Conto does and why**.

Technical implementation details should be documented separately in the technology stack specification and ADRs.

The Master Prompt for Open Code will instruct the coding agent to treat these documents as the project's source of truth.
