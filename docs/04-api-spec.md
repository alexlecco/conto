`04-api-spec.md`

Este va a definir **cómo se comunican el frontend, el backend y los distintos servicios de Conto**. Es importante antes de meternos de lleno con el stack, porque nos permite separar claramente qué necesita hacer el sistema de cómo lo vamos a implementar.

# Conto — API Specification

**Document status:** Draft
**Version:** 0.1
**Product:** Conto
**Purpose:** Define the initial API contract and backend capabilities required by the Conto MVP.

---

# 1. API Principles

The Conto API should be:

* Simple.
* Predictable.
* Secure.
* Modular.
* Easy to consume from the frontend.
* Easy to evolve.
* Explicit about permissions.
* Consistent in error handling.
* Designed around product capabilities rather than database tables.

The API should not expose internal implementation details unnecessarily.

---

# 2. API Architecture

The initial architecture should separate:

```text
Client Application
       ↓
API / Backend
       ↓
Business Logic
       ↓
Data Layer
       ↓
Database / External Services
```

The frontend should not directly implement business-critical logic.

Operations involving:

* Reservations.
* Orders.
* ContoCoins.
* Rewards.
* Permissions.
* Business administration.

must be validated by the backend.

---

# 3. Authentication

The API should support authenticated and unauthenticated requests.

## Public operations

Examples:

* Discover venues.
* Search venues.
* View venue details.
* View menus.
* View public promotions.

## Authenticated operations

Examples:

* Save venue.
* Manage preferences.
* Create reservation.
* View reservations.
* View orders.
* View rewards.
* Manage ContoCoins.

## Business-authenticated operations

Examples:

* Manage venue.
* Manage menu.
* Manage reservations.
* Manage orders.
* Create promotions.
* View analytics.

---

# 4. Authorization

Authentication determines:

> Who are you?

Authorization determines:

> What are you allowed to do?

Every protected API operation must verify authorization server-side.

A customer must never be able to access another customer's private data.

A business must never be able to modify another business's venue.

---

# 5. API Response Convention

Successful responses should follow a consistent structure.

Conceptually:

```json
{
  "data": {},
  "meta": {}
}
```

For collections:

```json
{
  "data": [],
  "meta": {
    "page": 1,
    "pageSize": 20,
    "hasMore": true
  }
}
```

The exact implementation can vary according to the selected backend technology.

---

# 6. Error Convention

Errors should follow a predictable structure.

Example:

```json
{
  "error": {
    "code": "RESERVATION_UNAVAILABLE",
    "message": "The selected time is no longer available."
  }
}
```

Errors should include:

* Stable machine-readable code.
* Human-readable message.
* Optional metadata when useful.

The frontend should not need to parse arbitrary backend messages.

---

# 7. Error Categories

Potential error codes include:

* `UNAUTHORIZED`
* `FORBIDDEN`
* `NOT_FOUND`
* `VALIDATION_ERROR`
* `CONFLICT`
* `RATE_LIMITED`
* `RESERVATION_UNAVAILABLE`
* `ORDER_UNAVAILABLE`
* `ITEM_UNAVAILABLE`
* `INVALID_QR`
* `REWARD_UNAVAILABLE`
* `INTERNAL_ERROR`

---

# 8. Venue Discovery API

## Get Venues

Conceptual endpoint:

`GET /venues`

Possible query parameters:

* `category`
* `search`
* `latitude`
* `longitude`
* `radius`
* `priceLevel`
* `tags`
* `openNow`
* `available`
* `limit`
* `cursor`

The endpoint should support pagination.

---

# 9. Venue Search

Conceptual endpoint:

`GET /venues/search`

Possible parameters:

* `query`
* `category`
* `location`
* `filters`
* `limit`
* `cursor`

Search behavior should prioritize useful results over exact text matching alone.

---

# 10. Venue Detail

Conceptual endpoint:

`GET /venues/{venueId}`

Response may include:

* Basic venue information.
* Images.
* Category.
* Tags.
* Opening hours.
* Location.
* Menu availability.
* Reservation availability.
* Relevant promotions.

The API should avoid returning unnecessary internal information.

---

# 11. Venue Recommendations

Conceptual endpoint:

`GET /recommendations`

Possible parameters:

* `location`
* `limit`
* `context`

Possible context values:

* `home`
* `nearby`
* `night`
* `food`
* `coffee`
* `drinks`

The recommendation engine may initially be rules-based.

---

# 12. Recommendation Feedback

Conceptual endpoint:

`POST /recommendations/feedback`

Possible payload:

```json
{
  "venueId": "venue_123",
  "feedback": "more_like_this"
}
```

Possible feedback:

* `more_like_this`
* `less_like_this`
* `not_interested`

This endpoint may be implemented after the core MVP.

---

# 13. User Profile API

## Get Current User

`GET /me`

## Update Current User

`PATCH /me`

Possible fields:

* `displayName`
* `avatarUrl`
* `phoneNumber`

---

# 14. User Preferences API

## Get Preferences

`GET /me/preferences`

## Update Preferences

`PATCH /me/preferences`

Possible fields:

* `energyPreference`
* `socialPreference`
* `planningPreference`
* `explorationPreference`
* `preferredCategories`
* `preferredAtmospheres`
* `preferredPriceLevels`

---

# 15. Saved Venues API

## Get Saved Venues

`GET /me/saved-venues`

## Save Venue

`POST /me/saved-venues`

Example:

```json
{
  "venueId": "venue_123"
}
```

## Remove Venue

`DELETE /me/saved-venues/{venueId}`

The API should enforce uniqueness.

A venue should not be saved twice by the same user.

---

# 16. Reservation API

## Get Availability

`GET /venues/{venueId}/availability`

Possible parameters:

* `date`
* `partySize`

Response:

* Available times.
* Availability status.
* Optional capacity information.

---

# 17. Create Reservation

`POST /reservations`

Example:

```json
{
  "venueId": "venue_123",
  "date": "2026-08-20",
  "startTime": "20:30",
  "partySize": 4
}
```

The backend must revalidate availability before confirming.

The frontend must never assume that a displayed slot remains available.

---

# 18. Get User Reservations

`GET /me/reservations`

Possible filters:

* `upcoming`
* `past`
* `cancelled`

---

# 19. Get Reservation

`GET /reservations/{reservationId}`

The response should include:

* Venue.
* Date.
* Time.
* Party size.
* Status.
* Relevant instructions.

---

# 20. Cancel Reservation

`POST /reservations/{reservationId}/cancel`

The backend should verify:

* Reservation ownership.
* Current status.
* Cancellation rules.

---

# 21. Business Reservation API

Business users may access:

`GET /business/reservations`

Possible filters:

* Date.
* Status.
* Venue.

---

# 22. Business Reservation Actions

Potential operations:

`POST /business/reservations/{reservationId}/confirm`

`POST /business/reservations/{reservationId}/decline`

`POST /business/reservations/{reservationId}/complete`

The API must verify that the reservation belongs to a venue managed by the authenticated business.

---

# 23. Menu API

## Get Venue Menu

`GET /venues/{venueId}/menu`

Response should include:

* Menus.
* Categories.
* Items.
* Modifiers.
* Availability.

---

# 24. Business Menu Management

Business users may need:

`POST /business/menus`

`PATCH /business/menus/{menuId}`

`POST /business/menus/{menuId}/categories`

`PATCH /business/menu-categories/{categoryId}`

`POST /business/menu-items`

`PATCH /business/menu-items/{itemId}`

`DELETE /business/menu-items/{itemId}`

The exact endpoint structure may change based on the selected backend framework.

---

# 25. QR API

## Resolve QR

Conceptual endpoint:

`GET /qr/{token}`

The API should return the context associated with the QR code.

Possible result:

```json
{
  "type": "table",
  "venueId": "venue_123",
  "tableId": "table_4"
}
```

Invalid or disabled QR codes must return a controlled error.

---

# 26. Order API

## Create Order

`POST /orders`

Example:

```json
{
  "venueId": "venue_123",
  "tableId": "table_4",
  "items": [
    {
      "menuItemId": "item_1",
      "quantity": 2
    }
  ]
}
```

The backend must:

1. Validate the venue.
2. Validate the menu items.
3. Validate item availability.
4. Validate prices.
5. Calculate totals server-side.
6. Create the order.
7. Return the resulting order.

The client must never be trusted to calculate the final order total.

---

# 27. Get Order

`GET /orders/{orderId}`

The response should include:

* Items.
* Quantities.
* Status.
* Total.
* Venue.
* Table context where applicable.
* Timestamps.

---

# 28. Get User Orders

`GET /me/orders`

Possible filters:

* `active`
* `past`
* `cancelled`

---

# 29. Business Order API

Business users may access:

`GET /business/orders`

Possible filters:

* Venue.
* Status.
* Date.

---

# 30. Business Order Actions

Potential endpoints:

`POST /business/orders/{orderId}/accept`

`POST /business/orders/{orderId}/start`

`POST /business/orders/{orderId}/ready`

`POST /business/orders/{orderId}/complete`

`POST /business/orders/{orderId}/cancel`

Every action must verify business ownership.

---

# 31. ContoCoins API

## Get Balance

`GET /me/contocoins`

Response:

```json
{
  "balance": 1250
}
```

The balance should be derived from authoritative transaction data or a securely maintained cached value.

---

# 32. ContoCoin Transactions

`GET /me/contocoins/transactions`

Possible filters:

* `earned`
* `spent`
* `bonus`
* `adjustment`

---

# 33. Award ContoCoins

ContoCoins should generally be awarded by backend-controlled events.

Example internal operation:

`POST /internal/contocoins/award`

This endpoint must not be exposed as an unrestricted public client endpoint.

The system should prevent users from arbitrarily awarding themselves coins.

---

# 34. Rewards API

## Get Available Rewards

`GET /rewards`

Possible filters:

* Venue.
* Category.
* Cost.
* Availability.

## Get User Rewards

`GET /me/rewards`

---

# 35. Redeem Reward

`POST /rewards/{rewardId}/redeem`

The backend must validate:

* User authentication.
* Reward availability.
* Coin balance.
* Expiration.
* Usage limits.

The redemption and coin deduction should be handled atomically where possible.

---

# 36. Promotion API

## Get Promotions

`GET /promotions`

Possible filters:

* Venue.
* Category.
* Active status.

Business users may create promotions through:

`POST /business/promotions`

Update:

`PATCH /business/promotions/{promotionId}`

Deactivate:

`POST /business/promotions/{promotionId}/deactivate`

---

# 37. Business Profile API

## Get Business

`GET /business`

## Update Business

`PATCH /business`

The authenticated business identity determines which business is accessible.

---

# 38. Business Venue API

## Get Business Venues

`GET /business/venues`

## Create Venue

`POST /business/venues`

## Update Venue

`PATCH /business/venues/{venueId}`

## Publish Venue

`POST /business/venues/{venueId}/publish`

The API must verify business ownership.

---

# 39. Analytics API

Business analytics may eventually expose:

`GET /business/analytics`

Possible parameters:

* `startDate`
* `endDate`
* `venueId`

Possible metrics:

* Views.
* Saves.
* Reservations.
* Orders.
* QR scans.
* Repeat customers.
* Promotion usage.

Analytics should not expose unnecessary personal information.

---

# 40. Notification API

## Get Notifications

`GET /me/notifications`

## Mark Notification Read

`POST /me/notifications/{notificationId}/read`

Notification delivery itself may be handled by a dedicated service.

---

# 41. API Pagination

Collection endpoints should use pagination.

Cursor-based pagination is preferred for large or frequently changing collections.

Example:

`GET /venues?limit=20&cursor=abc123`

Response:

```json
{
  "data": [],
  "meta": {
    "nextCursor": "xyz789",
    "hasMore": true
  }
}
```

---

# 42. API Filtering

Filters should use predictable query parameters.

Avoid creating a separate endpoint for every possible combination of filters.

The backend should validate allowed filters.

---

# 43. API Sorting

Where useful, collections may support:

* Relevance.
* Distance.
* Popularity.
* Newest.
* Price.
* Availability.

Recommendation results should normally default to relevance.

---

# 44. Rate Limiting

Public and authenticated endpoints should have appropriate rate limits.

Higher-risk endpoints should receive stricter controls.

Examples:

* Authentication.
* Reservation creation.
* Order creation.
* Reward redemption.
* Coin operations.

---

# 45. Idempotency

Critical mutation endpoints should support idempotency where appropriate.

Especially:

* Reservation creation.
* Order creation.
* Reward redemption.
* Payment operations when introduced.

This helps prevent duplicate operations caused by network retries.

---

# 46. Server-Side Validation

The backend must validate all important business rules.

Examples:

* Reservation availability.
* Party size.
* Venue status.
* Menu item availability.
* Prices.
* Reward eligibility.
* Coin balance.
* Business permissions.

Client-side validation is for UX only.

---

# 47. Transactions

Operations that change multiple pieces of critical data should be atomic when possible.

Example reward redemption:

```text
Validate reward
      ↓
Validate user balance
      ↓
Deduct ContoCoins
      ↓
Create UserReward
      ↓
Commit
```

If one step fails, the operation should not leave inconsistent state.

---

# 48. Events

The backend should eventually support internal events.

Examples:

* `reservation.created`
* `reservation.confirmed`
* `reservation.completed`
* `order.created`
* `order.completed`
* `venue.viewed`
* `venue.saved`
* `reward.redeemed`
* `contocoin.earned`

Events can later feed:

* Analytics.
* Notifications.
* Recommendations.
* Loyalty.
* AI systems.

The MVP may implement only the events that are immediately useful.

---

# 49. API Versioning

The API should have a strategy for versioning.

A simple initial approach may be:

`/api/v1/...`

Breaking changes should result in a new API version rather than silently changing existing behavior.

---

# 50. Security Requirements

The API must:

* Authenticate protected requests.
* Authorize every protected resource.
* Validate all inputs.
* Avoid trusting client-provided prices.
* Avoid exposing private business data.
* Avoid exposing private user data.
* Protect secrets.
* Rate-limit sensitive operations.
* Log security-relevant events.
* Prevent unauthorized mutation of reservations and orders.

---

# 51. Observability

Important API operations should produce structured logs.

Logs should help answer:

* What happened?
* When did it happen?
* Which operation failed?
* Which service failed?
* Was the request authenticated?
* What was the request correlation ID?

Logs must avoid exposing sensitive personal information unnecessarily.

---

# 52. API Documentation

The final implementation should generate or maintain machine-readable API documentation where practical.

OpenAPI may be used if compatible with the selected stack.

The API documentation should remain synchronized with the implementation.

---

# 53. MVP API Priority

### Priority 1

* Authentication.
* Venues.
* Search.
* Recommendations.
* Venue details.
* User preferences.
* Saved venues.

### Priority 2

* Reservation availability.
* Reservations.
* Business reservations.

### Priority 3

* Menus.
* QR.
* Orders.
* Business menu management.
* Business order management.

### Priority 4

* ContoCoins.
* Rewards.
* Promotions.
* Notifications.

### Priority 5

* Advanced analytics.
* Recommendation feedback.
* Advanced personalization.

---

# 54. API Design Rule

The API should expose product capabilities, not database internals.

For example:

Prefer:

`POST /reservations`

over exposing a generic database operation such as:

`POST /reservation-records`

The API should express what Conto does.

---

# 55. Implementation Boundary

This document defines **what the API needs to provide**.

It intentionally does not make the final decisions about:

* Framework.
* Database.
* Hosting.
* Authentication provider.
* AI model.
* Cloud provider.
* Programming language.

Those decisions belong in:

`08-tech-stack.md`

---

# 56. Final API Principle

The API should make Conto's core experience reliable:

**Discover → Decide → Reserve → Visit → Order → Reward → Return**

Every critical action should be validated by the backend, produce a predictable result, and leave the system in a consistent state.
