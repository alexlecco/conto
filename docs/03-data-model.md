`03-data-model.md`

# Conto — Data Model Specification

**Document status:** Draft
**Version:** 0.1
**Product:** Conto
**Purpose:** Define the core entities, relationships, and data structures required by the Conto MVP.

---

# 1. Data Model Principles

The Conto data model should be:

* Simple.
* Modular.
* Extensible.
* Secure.
* Easy to query.
* Suitable for a mobile-first product.
* Compatible with the initial MVP architecture.
* Flexible enough to support future personalization and AI.

The MVP should avoid unnecessary normalization or complexity.

The data model should support the core product loop:

**Discover → Decide → Reserve → Visit → Order → Reward → Return**

---

# 2. Core Entities

The initial Conto data model consists of the following primary entities:

1. User
2. UserPreference
3. Venue
4. Business
5. VenueCategory
6. VenueTag
7. VenueImage
8. Menu
9. MenuCategory
10. MenuItem
11. MenuModifier
12. Table
13. Reservation
14. Order
15. OrderItem
16. QRCode
17. SavedVenue
18. ContoCoinTransaction
19. Reward
20. UserReward
21. Promotion
22. Recommendation
23. Notification

Some entities may be combined or simplified during implementation if doing so does not compromise the product requirements.

---

# 3. User

Represents a Conto customer.

## Fields

* `id`
* `email`
* `displayName`
* `avatarUrl`
* `phoneNumber` — optional
* `createdAt`
* `updatedAt`
* `lastActiveAt`
* `status`

## Status

Possible values:

* `active`
* `suspended`
* `deleted`

---

# 4. UserPreference

Stores lightweight personalization information.

## Fields

* `id`
* `userId`
* `energyPreference`
* `socialPreference`
* `planningPreference`
* `explorationPreference`
* `preferredCategories`
* `preferredAtmospheres`
* `preferredPriceLevels`
* `updatedAt`

All preference fields should be optional.

A user who skips onboarding should still have a valid account.

---

# 5. Business

Represents the business entity that owns or manages one or more venues.

## Fields

* `id`
* `name`
* `legalName` — optional
* `description`
* `email`
* `phone`
* `website` — optional
* `status`
* `createdAt`
* `updatedAt`

## Status

Possible values:

* `pending`
* `active`
* `suspended`
* `inactive`

A business may manage multiple venues.

---

# 6. Venue

Represents a physical place users can discover.

Examples:

* Bar
* Restaurant
* Café
* Brewery
* Food truck

## Fields

* `id`
* `businessId`
* `name`
* `description`
* `categoryId`
* `address`
* `city`
* `latitude`
* `longitude`
* `priceLevel`
* `openingHours`
* `phone`
* `status`
* `createdAt`
* `updatedAt`

## Status

Possible values:

* `draft`
* `pending`
* `published`
* `temporarilyClosed`
* `closed`

---

# 7. VenueCategory

Represents the primary category of a venue.

Examples:

* Restaurant
* Bar
* Café
* Brewery
* Food truck
* Bakery

## Fields

* `id`
* `name`
* `slug`
* `description`
* `icon`
* `active`

---

# 8. VenueTag

Represents characteristics used for discovery and recommendations.

Examples:

* Quiet
* Lively
* Romantic
* Family-friendly
* Outdoor
* Good for groups
* Live music
* Coffee
* Craft beer

## Fields

* `id`
* `name`
* `slug`
* `type`

Tags should be reusable across venues.

---

# 9. VenueTagRelationship

Represents the relationship between a venue and a tag.

## Fields

* `venueId`
* `tagId`

A venue may have multiple tags.

A tag may belong to multiple venues.

---

# 10. VenueImage

Stores images associated with a venue.

## Fields

* `id`
* `venueId`
* `url`
* `altText`
* `sortOrder`
* `isPrimary`
* `createdAt`

Images should be stored using an appropriate external object-storage solution.

---

# 11. Menu

Represents a venue's menu.

## Fields

* `id`
* `venueId`
* `name`
* `description`
* `active`
* `createdAt`
* `updatedAt`

A venue may have more than one menu.

Examples:

* Main menu
* Drinks
* Cocktails
* Lunch
* Dinner

---

# 12. MenuCategory

Represents a category within a menu.

Examples:

* Starters
* Main dishes
* Desserts
* Cocktails
* Beer
* Coffee

## Fields

* `id`
* `menuId`
* `name`
* `description`
* `sortOrder`
* `active`

---

# 13. MenuItem

Represents an item that can appear on a menu.

## Fields

* `id`
* `menuCategoryId`
* `name`
* `description`
* `price`
* `currency`
* `imageUrl`
* `available`
* `sortOrder`
* `createdAt`
* `updatedAt`

The `available` field allows businesses to temporarily disable an item without deleting it.

---

# 14. MenuModifier

Represents optional customizations for a menu item.

Examples:

* Extra cheese
* No onions
* Large size
* Add sauce

## Fields

* `id`
* `menuItemId`
* `name`
* `description`
* `priceAdjustment`
* `available`

Modifiers should be optional.

---

# 15. Table

Represents a physical table or seating location.

## Fields

* `id`
* `venueId`
* `name`
* `capacity`
* `locationDescription`
* `active`

Examples:

* Table 1
* Table 2
* Patio 4
* Bar Seat 8

A table may be associated with a QR code.

---

# 16. Reservation

Represents a customer reservation.

## Fields

* `id`
* `userId`
* `venueId`
* `tableId` — optional
* `date`
* `startTime`
* `endTime` — optional
* `partySize`
* `status`
* `notes` — optional
* `createdAt`
* `updatedAt`

## Status

Possible values:

* `pending`
* `confirmed`
* `cancelled`
* `completed`
* `noShow`
* `declined`

The reservation system should prevent invalid overlapping reservations.

---

# 17. Order

Represents a customer order.

## Fields

* `id`
* `userId` — optional for guest ordering
* `venueId`
* `tableId` — optional
* `reservationId` — optional
* `status`
* `subtotal`
* `discount`
* `total`
* `currency`
* `notes`
* `createdAt`
* `updatedAt`

## Status

Possible values:

* `received`
* `accepted`
* `preparing`
* `ready`
* `served`
* `completed`
* `cancelled`

---

# 18. OrderItem

Represents an individual item within an order.

## Fields

* `id`
* `orderId`
* `menuItemId`
* `nameSnapshot`
* `priceSnapshot`
* `quantity`
* `notes`
* `subtotal`

The order should store snapshots of item name and price.

This prevents historical orders from changing when a menu item is later modified.

---

# 19. QRCode

Represents a QR code associated with a venue or table.

## Fields

* `id`
* `venueId`
* `tableId` — optional
* `type`
* `token`
* `active`
* `createdAt`

## Types

Possible values:

* `venue`
* `table`
* `menu`
* `ordering`

QR tokens should not expose sensitive internal identifiers unnecessarily.

---

# 20. SavedVenue

Represents a venue saved by a customer.

## Fields

* `id`
* `userId`
* `venueId`
* `createdAt`

A user should not be able to save the same venue multiple times.

Recommended uniqueness constraint:

`userId + venueId`

---

# 21. ContoCoinTransaction

Represents a change in a user's ContoCoin balance.

A transaction-based system is preferred over storing only a mutable balance.

## Fields

* `id`
* `userId`
* `amount`
* `type`
* `referenceType`
* `referenceId`
* `description`
* `createdAt`

## Types

Examples:

* `earned`
* `spent`
* `bonus`
* `adjustment`
* `expired`

The current balance can be calculated from transactions or maintained as a cached value.

---

# 22. Reward

Represents a reward available through Conto.

## Fields

* `id`
* `venueId` — optional
* `businessId` — optional
* `name`
* `description`
* `costInContoCoins`
* `validFrom`
* `validUntil`
* `active`
* `usageLimit`
* `createdAt`
* `updatedAt`

---

# 23. UserReward

Represents a reward acquired by a customer.

## Fields

* `id`
* `userId`
* `rewardId`
* `status`
* `redeemedAt`
* `expiresAt`
* `createdAt`

## Status

Possible values:

* `available`
* `redeemed`
* `expired`
* `cancelled`

---

# 24. Promotion

Represents a promotional campaign created by a business.

## Fields

* `id`
* `businessId`
* `venueId` — optional
* `title`
* `description`
* `rewardType`
* `rewardValue`
* `validFrom`
* `validUntil`
* `usageLimit`
* `active`
* `createdAt`
* `updatedAt`

---

# 25. Recommendation

Represents a recommendation generated for a user.

For the MVP, recommendations may be generated dynamically instead of permanently stored.

If stored, the entity may contain:

* `id`
* `userId`
* `venueId`
* `reason`
* `score`
* `source`
* `createdAt`
* `expiresAt`

## Possible sources

* `preferences`
* `behavior`
* `location`
* `popular`
* `promotion`
* `business`
* `algorithm`

---

# 26. Notification

Represents a notification sent to a user.

## Fields

* `id`
* `userId`
* `type`
* `title`
* `body`
* `referenceType`
* `referenceId`
* `readAt`
* `createdAt`

Possible notification types:

* Reservation confirmation.
* Reservation reminder.
* Reservation cancellation.
* Order update.
* Reward available.
* Promotion.
* Recommendation.

---

# 27. Relationships

The main relationships are:

```text
User
 ├── UserPreference
 ├── SavedVenue
 ├── Reservation
 ├── Order
 ├── ContoCoinTransaction
 ├── UserReward
 ├── Recommendation
 └── Notification

Business
 └── Venue
      ├── VenueCategory
      ├── VenueTag
      ├── VenueImage
      ├── Menu
      │    └── MenuCategory
      │         └── MenuItem
      │              └── MenuModifier
      ├── Table
      ├── Reservation
      ├── Order
      ├── QRCode
      ├── Promotion
      └── Reward
```

---

# 28. User-to-Venue Relationship

Users interact with venues through:

* Views.
* Searches.
* Saves.
* Reservations.
* Visits.
* Orders.
* Rewards.
* Feedback.

These interactions may later become recommendation signals.

The MVP does not need to store every interaction unless it is useful for analytics or personalization.

---

# 29. Business-to-Venue Relationship

A business can manage one or more venues.

Example:

```text
Business
 ├── Venue A
 ├── Venue B
 └── Venue C
```

This allows Conto to support businesses with multiple locations.

---

# 30. Reservation Relationships

A reservation connects:

```text
User
  ↓
Reservation
  ↓
Venue
  ↓
Business
```

Optionally:

```text
Reservation
  ↓
Table
```

A reservation may optionally lead to:

```text
Reservation
  ↓
Order
```

This relationship will allow Conto to connect booking behavior with the physical visit.

---

# 31. Order Relationships

An order connects:

```text
User
  ↓
Order
  ↓
Venue
  ↓
OrderItems
  ↓
MenuItems
```

An order may also be associated with:

* Table.
* Reservation.
* QR session.

---

# 32. Reward Relationships

The reward system connects:

```text
User
  ↓
ContoCoinTransaction
  ↓
Balance

User
  ↓
UserReward
  ↓
Reward
  ↓
Venue / Business
```

This allows Conto to separate the concept of earning coins from redeeming rewards.

---

# 33. Personalization Data

Personalization should use multiple signals.

Initial signals:

* Explicit preferences.
* Saved venues.
* Viewed venues.
* Search queries.
* Categories explored.
* Reservation history.
* Order history.
* Reward interactions.

Not every signal needs to be stored permanently in the MVP.

The architecture should allow additional behavioral signals later.

---

# 34. Location Data

Venue location should contain:

* Address.
* City.
* Latitude.
* Longitude.

User location should be treated separately from venue location.

Conto should avoid storing precise user location permanently unless there is a clear product requirement and appropriate user consent.

Location may instead be used transiently to calculate nearby recommendations.

---

# 35. Auditability

Important business operations should be traceable.

Examples:

* Reservation creation.
* Reservation cancellation.
* Order status changes.
* Reward redemption.
* ContoCoin adjustments.
* Business profile changes.

The implementation may use an audit log or structured event system.

---

# 36. Ownership and Permissions

Every protected resource must have an explicit ownership or authorization rule.

Examples:

* A customer can access their own reservations.
* A customer can access their own rewards.
* A business can manage only its own venues.
* A business can manage only its own menus.
* A business can access only its own orders and reservations.

Authorization must be enforced server-side.

---

# 37. Guest Data

Some functionality should support anonymous users.

Potential guest functionality:

* Browse venues.
* Search.
* View venue profiles.
* View menus.
* Scan QR codes.
* Browse menu items.

Authentication may be required for:

* Saving.
* Reservations.
* Rewards.
* ContoCoins.
* Personalized history.

Ordering should support guest access if the business and payment architecture allow it.

---

# 38. Data Lifecycle

Entities should generally support:

* Creation.
* Update.
* Deactivation.
* Archiving where appropriate.

Important historical records should not be physically deleted when doing so would destroy operational or financial integrity.

For example, completed orders should remain historically valid even if a menu item is later removed.

---

# 39. Soft Deletion

Where appropriate, use a status field instead of permanently deleting records.

Examples:

* Venue → `inactive`
* Menu item → `available: false`
* Business → `suspended`
* Reward → `active: false`

Permanent deletion should be reserved for cases where it is genuinely required.

---

# 40. Timestamps

Important entities should include:

* `createdAt`
* `updatedAt`

Time-sensitive entities may additionally include:

* `startedAt`
* `completedAt`
* `cancelledAt`
* `expiresAt`
* `redeemedAt`

All timestamps should be stored consistently in UTC at the backend level.

The UI should display them using the relevant local timezone.

---

# 41. Currency

Prices should never be stored as ambiguous formatted strings.

Use a structured numeric representation.

Recommended concept:

```text
amount
currency
```

Example:

```text
amount: 12500
currency: "ARS"
```

The exact storage strategy should be finalized in the technical stack specification.

---

# 42. Enumerations

Status and type fields should use controlled values.

Avoid arbitrary strings where the value represents a finite state machine.

Examples:

* Reservation status.
* Order status.
* Business status.
* Venue status.
* Reward status.

This reduces inconsistent data.

---

# 43. Data Validation

Validation should happen at multiple levels:

1. Client-side validation for user experience.
2. Server-side validation for security and integrity.
3. Database-level constraints where supported.

Client validation must never be considered sufficient for security.

---

# 44. Indexing

Indexes should be created for common queries.

Likely initial indexes include:

* Venue by location.
* Venue by category.
* Venue by status.
* Reservation by venue and date.
* Reservation by user.
* Order by venue and status.
* Order by user.
* Saved venues by user.
* Rewards by user.
* ContoCoin transactions by user.
* Menu items by menu category.

Indexes should be added based on the actual database technology selected.

---

# 45. Scalability Considerations

The data model should allow Conto to grow from:

**One city → Multiple cities → Multiple countries**

Venue location should therefore not assume a single city.

Business ownership should support multiple locations.

Currency should not be hard-coded to one currency.

Language should eventually be localizable.

---

# 46. Future Entities

Potential future entities include:

* Event.
* UserGroup.
* SharedPlan.
* SocialConnection.
* Review.
* CheckIn.
* Payment.
* Subscription.
* LoyaltyTier.
* AIRecommendation.
* Conversation.
* Experience.
* ReservationWaitlist.

These should not be implemented unless required by the MVP.

---

# 47. Data Model Rule

The data model should support the product without becoming the product.

Do not create entities simply because they might be useful someday.

Every MVP entity should have a clear relationship to an actual product requirement.

---

# 48. Implementation Note

The exact database technology, schema syntax, indexes, security rules, migrations, and backend implementation must be defined in:

`08-tech-stack.md`

The Product Specification defines **what the system needs**.

This document defines **what information the system needs to represent**.

The Technical Stack Specification will define **how that information is physically stored and accessed**.

---

# 49. Final Data Model Principle

Conto's data architecture should make it easy to answer four questions:

1. **Who is the user?**
2. **What places exist and what do they offer?**
3. **What happened between the user and the venue?**
4. **What information can help Conto make the next experience better?**

If the data model can answer those questions reliably, it provides a strong foundation for the MVP and future personalization.
