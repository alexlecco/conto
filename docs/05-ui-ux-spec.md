`05-ui-ux-spec.md`

Copiá todo esto dentro del archivo:

```md
# Conto — UI/UX Specification

**Document status:** Draft  
**Version:** 0.1  
**Product:** Conto  
**Purpose:** Define the visual, interaction, navigation, accessibility, and responsive experience requirements for the Conto MVP.

---

# 1. UX Vision

Conto should feel:

- Simple.
- Personal.
- Modern.
- Friendly.
- Fast.
- Visual.
- Trustworthy.
- Human.

The interface should help users answer:

> "What should I do or where should I go?"

without making them feel like they are navigating a complicated system.

The product should prioritize discovery and decision-making over excessive information.

---

# 2. Core UX Principles

## 2.1 Clarity

Every screen should have one obvious primary purpose.

Users should immediately understand:

- Where they are.
- What they are seeing.
- What they can do next.

---

## 2.2 Low Friction

Avoid unnecessary:

- Forms.
- Confirmations.
- Screens.
- Authentication requirements.
- Repeated information.

If a user can complete an action in fewer steps without compromising clarity or security, prefer the shorter flow.

---

## 2.3 Progressive Disclosure

Do not expose every piece of information at once.

Show the most useful information first.

Allow users to discover additional details when needed.

---

## 2.4 Visual Discovery

Conto is fundamentally a discovery product.

Venue imagery, atmosphere, categories, tags, and contextual recommendations should be visually prominent.

The interface should not feel like a spreadsheet or directory.

---

## 2.5 Personalization Without Complexity

Personalization should feel helpful rather than technical.

Avoid exposing recommendation algorithms, scores, or machine-learning terminology to normal users.

Instead of:

> "Recommendation score: 87%"

prefer:

> "This feels like your kind of place."

---

# 3. Mobile-First

The primary customer experience should be designed mobile-first.

The interface must work well on:

- Mobile phones.
- Tablets.
- Desktop browsers.

Mobile should not be treated as a reduced desktop layout.

Interactions should be designed around:

- Touch.
- Thumb reach.
- Small screens.
- Variable network conditions.

---

# 4. Primary Navigation

Customer navigation should contain:

1. Home
2. Explore
3. Saved
4. Activity
5. Profile

The exact labels may be refined during visual design.

Navigation should remain predictable across the application.

---

# 5. Home Screen

## Purpose

Provide immediate personalized discovery.

The Home screen may contain:

- Greeting.
- Contextual recommendation.
- Featured venue.
- Nearby venues.
- Categories.
- Personalized suggestions.
- Promotions.
- Recently viewed or saved places.

The primary content should change based on context.

Example:

> "Looking for somewhere relaxed tonight?"

---

# 6. Explore Screen

## Purpose

Provide broad discovery.

Possible elements:

- Search.
- Categories.
- Filters.
- Recommended venues.
- Nearby venues.
- Popular venues.
- New venues.

Users should be able to explore without completing personalization onboarding.

---

# 7. Search

Search should be:

- Fast.
- Forgiving.
- Easy to access.
- Easy to cancel.

Search should support:

- Venue names.
- Categories.
- Food/drink types.
- Relevant keywords.

Possible future support:

- Natural language queries.

Example:

> "A quiet place for coffee"

---

# 8. Venue Cards

Venue cards are one of the most important components in Conto.

A venue card may display:

- Image.
- Name.
- Category.
- Price.
- Distance.
- Atmosphere tags.
- Relevant contextual information.
- Save action.

Cards should not become overloaded with metadata.

The card's job is to encourage the user to decide whether to explore the venue.

---

# 9. Venue Detail Screen

The venue detail screen should provide enough information to make a decision.

Recommended structure:

1. Hero image/gallery.
2. Venue name.
3. Category and basic metadata.
4. Atmosphere.
5. Description.
6. Primary action.
7. Secondary actions.
8. Location.
9. Opening hours.
10. Menu.
11. Promotions.
12. Additional information.

The most important action should remain visually dominant.

---

# 10. Primary Actions

Primary actions may include:

- Explore.
- Reserve.
- Order.
- Save.
- View menu.
- Get directions.

Only one action should normally be treated as the primary CTA on a screen.

Secondary actions should not visually compete with it.

---

# 11. Buttons

Buttons should have clear:

- Label.
- Purpose.
- State.

States should include:

- Default.
- Hover.
- Pressed.
- Focused.
- Disabled.
- Loading.

Loading states must prevent accidental duplicate submissions.

---

# 12. Forms

Forms should be as short as possible.

Guidelines:

- Group related fields.
- Use meaningful labels.
- Avoid placeholder-only labels.
- Validate close to the relevant field.
- Explain errors clearly.
- Preserve user input after validation errors.

---

# 13. Authentication UX

Authentication should appear only when necessary.

The user should understand:

> Why am I being asked to sign in?

Example:

> "Sign in to save this place."

After authentication, Conto should return the user to the action they originally wanted to complete.

---

# 14. Personalization Onboarding

Personalization should feel lightweight and optional.

Recommended interaction:

- One question at a time.
- Large touch targets.
- Minimal text.
- Clear progress.
- Easy skip option.

Avoid presenting a long traditional registration questionnaire.

---

# 15. Filters

Filters should be easy to discover and easy to remove.

Selected filters should be visually obvious.

Provide:

`Clear all`

when multiple filters are active.

Applying filters should not unnecessarily reset the user's search context.

---

# 16. Saved Places

Saved places should provide a simple collection of venues.

The screen should support:

- Browsing saved venues.
- Opening venue details.
- Removing saved venues.

An empty state should be helpful.

Example:

> "Save places you want to remember."

---

# 17. Activity

Activity may contain:

- Upcoming reservations.
- Past reservations.
- Current orders.
- Past orders.
- Rewards activity.

The interface should distinguish clearly between:

- Upcoming.
- Active.
- Completed.
- Cancelled.

---

# 18. Reservation UX

Reservation flow:

**Venue → Reserve → Date → Time → Party Size → Review → Confirm**

The user should always see the selected:

- Venue.
- Date.
- Time.
- Party size.

The final confirmation should be unambiguous.

---

# 19. Reservation Confirmation

After successful reservation:

Display:

- Confirmation status.
- Venue.
- Date.
- Time.
- Party size.
- Address.
- Relevant instructions.

Primary actions:

- View reservation.
- Get directions.

---

# 20. Order UX

Ordering should be optimized for speed.

Flow:

**Menu → Item → Customize → Cart → Review → Place Order**

The user should always be able to see:

- Current cart.
- Quantity.
- Price.
- Total.

---

# 21. Cart

The cart should allow:

- Increase quantity.
- Decrease quantity.
- Remove item.
- Edit modifiers.
- Add notes where supported.

The total should update immediately.

---

# 22. Order Status

Order status should be visually understandable.

Recommended progression:

**Received → Accepted → Preparing → Ready → Completed**

The current state should be clearly highlighted.

---

# 23. QR Experience

The QR experience should minimize friction.

Expected flow:

**Scan → Venue recognized → Menu / venue experience**

Do not force account creation merely to view a menu.

If authentication is required for a later action, request it at that point.

---

# 24. ContoCoins UX

The rewards system should be understandable without explaining complex economics.

Users should be able to see:

- Current balance.
- How they earned coins.
- What they can redeem.
- Relevant expiration information.

When coins are earned, provide immediate feedback.

Example:

> "+50 ContoCoins"

---

# 25. Rewards UX

Rewards should clearly communicate:

- What the reward provides.
- Where it can be used.
- Cost.
- Expiration.
- Redemption status.

Avoid ambiguous reward descriptions.

---

# 26. Business Dashboard UX

The business experience is separate from the consumer experience.

The dashboard should prioritize operational tasks.

Primary sections:

- Overview.
- Venues.
- Reservations.
- Orders.
- Menu.
- Promotions.
- Analytics.

Business users should be able to complete common operational tasks quickly.

---

# 27. Business Dashboard Overview

The dashboard may show:

- Today's reservations.
- Active orders.
- Revenue-related metrics where available.
- Venue activity.
- Alerts.
- Promotions.

The MVP should avoid unnecessary analytics complexity.

---

# 28. Menu Management UX

Menu management should make common tasks easy:

- Add item.
- Edit item.
- Change price.
- Disable item.
- Reorder items.
- Create category.

Availability should be easy to toggle.

---

# 29. Loading States

Every asynchronous operation should have an appropriate loading state.

Examples:

- Skeleton cards.
- Button spinner.
- Inline loading indicator.
- Page-level loading state.

Avoid unnecessary full-screen loading screens.

---

# 30. Empty States

Empty states should explain:

1. What is empty.
2. Why it may be empty.
3. What the user can do next.

Example:

> "You haven't saved any places yet."

CTA:

> "Explore places"

---

# 31. Error States

Errors should be:

- Clear.
- Human-readable.
- Actionable.

Avoid technical messages such as:

> "HTTP 500."

Prefer:

> "Something went wrong. Please try again."

When possible, provide a recovery action.

---

# 32. Success States

Important successful actions should receive immediate feedback.

Examples:

- Venue saved.
- Reservation confirmed.
- Order placed.
- Reward redeemed.
- Preferences updated.

Feedback should be noticeable without becoming disruptive.

---

# 33. Confirmation Dialogs

Confirmation dialogs should be used only when an action has meaningful consequences.

Good examples:

- Irreversible deletion.
- Important cancellation.
- High-impact business action.

Do not use confirmation dialogs for trivial actions such as saving or removing a saved venue.

---

# 34. Toasts and Temporary Feedback

Use temporary feedback for lightweight events.

Examples:

- Saved.
- Copied.
- Preference updated.

Temporary feedback should not contain information that the user needs to retain.

---

# 35. Accessibility

The product should target strong accessibility from the beginning.

Requirements include:

- Semantic HTML where applicable.
- Keyboard navigation.
- Visible focus states.
- Sufficient contrast.
- Accessible labels.
- Screen-reader-friendly controls.
- Proper heading hierarchy.
- Touch targets of appropriate size.
- Meaningful error messages.

Accessibility should not be treated as a final polish step.

---

# 36. Typography

Typography should prioritize:

- Readability.
- Clear hierarchy.
- Comfortable mobile reading.
- Consistent scale.

The final font family and exact sizes belong to the visual design system.

Avoid excessive font-size variation.

---

# 37. Color System

The final color palette should be defined as design tokens.

At minimum:

- Primary.
- Secondary.
- Background.
- Surface.
- Text.
- Muted text.
- Border.
- Success.
- Warning.
- Error.

Colors should communicate meaning consistently.

Do not rely on color alone to communicate status.

---

# 38. Spacing System

Use a consistent spacing scale.

The final scale should be defined as design tokens rather than arbitrary values throughout the application.

Consistency is more important than the specific numeric scale during the MVP.

---

# 39. Border Radius and Surfaces

Cards, buttons, inputs, and containers should use a consistent visual language.

Avoid mixing many unrelated:

- Border radii.
- Shadows.
- Surface treatments.

The interface should feel like one coherent system.

---

# 40. Icons

Icons should:

- Have consistent visual weight.
- Have accessible labels when needed.
- Support the meaning of the associated action.
- Never replace essential text when the meaning is ambiguous.

---

# 41. Motion

Motion should be subtle and purposeful.

Use animation to communicate:

- Navigation.
- State changes.
- Loading.
- Success.
- Contextual transitions.

Avoid animation that slows down the user.

Respect reduced-motion preferences.

---

# 42. Responsive Behavior

The application should adapt to:

- Small mobile screens.
- Large mobile screens.
- Tablets.
- Desktop.

Responsive behavior should preserve hierarchy rather than simply shrinking components.

---

# 43. Mobile Navigation

On mobile, primary navigation should remain easily reachable.

A bottom navigation pattern may be appropriate for the consumer application.

Business dashboards may use a different navigation pattern.

---

# 44. Desktop Navigation

On desktop, the interface may use:

- Sidebar navigation.
- Top navigation.
- Persistent contextual controls.

The final choice should be made during visual implementation.

---

# 45. Performance UX

Perceived performance is part of UX.

The application should:

- Load useful content quickly.
- Avoid blocking the entire interface.
- Lazy-load heavy media where appropriate.
- Optimize images.
- Cache appropriate data.
- Provide immediate feedback for interactions.

---

# 46. Image UX

Venue imagery is important.

Images should:

- Have appropriate aspect ratios.
- Load efficiently.
- Provide fallbacks.
- Have meaningful alt text where applicable.
- Avoid layout shifts.

---

# 47. Network Resilience

The UI should gracefully handle:

- Slow connections.
- Temporary connection loss.
- API failures.
- Retry scenarios.

Never display an action as successful until the backend has confirmed success for critical operations.

---

# 48. Security UX

Security should not unnecessarily burden the user.

However, sensitive operations should communicate clearly when authentication or verification is required.

Examples:

- Account changes.
- Reward redemption.
- Reservation ownership.
- Business administration.

---

# 49. Internationalization

The UI should be designed so that text can eventually support multiple languages.

Avoid hard-coding assumptions about:

- Text length.
- Currency.
- Date formats.
- Number formats.
- Address formats.

The initial language may be Spanish, but the architecture should allow future localization.

---

# 50. Currency and Localization

Currency should be displayed according to the relevant venue/user context.

Dates and times should use appropriate local formatting.

The backend should maintain canonical timestamps.

---

# 51. Design Tokens

The implementation should eventually define tokens for:

- Colors.
- Typography.
- Spacing.
- Radius.
- Shadows.
- Breakpoints.
- Motion.

Components should consume tokens instead of arbitrary values.

---

# 52. Component Architecture

The UI should use reusable components.

Likely components include:

- Button.
- Input.
- Select.
- SearchBar.
- VenueCard.
- VenueGrid.
- Tag.
- FilterChip.
- Modal.
- BottomSheet.
- Toast.
- Skeleton.
- EmptyState.
- ErrorState.
- ReservationCard.
- OrderCard.
- MenuItemCard.
- RewardCard.

Components should have predictable APIs and accessible states.

---

# 53. Component States

Reusable components should account for:

- Default.
- Hover.
- Focus.
- Active.
- Disabled.
- Loading.
- Error.
- Empty.

Not every component requires every state.

---

# 54. UX Consistency

The same action should behave the same way throughout Conto.

Examples:

- Save always uses the same interaction pattern.
- Loading always communicates progress.
- Errors use consistent language.
- Primary actions use consistent visual hierarchy.

---

# 55. Content Guidelines

Microcopy should be:

- Short.
- Friendly.
- Clear.
- Direct.
- Human.

Avoid:

- Corporate jargon.
- Technical language.
- Excessive exclamation marks.
- Ambiguous instructions.

The product voice should feel approachable rather than robotic.

---

# 56. AI Interaction UX

If AI-powered features are introduced, the UI should make it clear when the user is interacting with an AI-generated recommendation.

AI should assist discovery without pretending to be a human.

AI-generated information should not be presented as guaranteed fact when uncertainty exists.

---

# 57. Recommendation Explanation

When useful, recommendations should include a short explanation.

Examples:

> "Because you liked quiet cafés."

> "Popular nearby right now."

> "This matches the vibe you're looking for."

Explanations should be concise.

---

# 58. MVP Screen Inventory

The initial consumer MVP should include approximately:

1. Landing / Welcome.
2. Home.
3. Explore.
4. Search.
5. Filters.
6. Venue detail.
7. Personalization onboarding.
8. Saved places.
9. Activity.
10. Reservation flow.
11. Reservation confirmation.
12. QR / menu.
13. Cart.
14. Order status.
15. Profile.
16. Preferences.
17. ContoCoins.
18. Rewards.

Business MVP:

1. Login.
2. Dashboard.
3. Venue management.
4. Menu management.
5. Reservation management.
6. Order management.
7. Promotions.
8. Basic analytics.

The final screen count may change during implementation.

---

# 59. UX Priority

The most important experience is:

**Discover → Understand → Decide**

The second most important is:

**Reserve / Visit → Interact → Complete**

The third is:

**Return → Personalize → Discover better**

Everything else should support these loops.

---

# 60. Final UX Principle

Conto should never feel like a database of places.

It should feel like a smart, visual and trustworthy companion for deciding:

> "Where should I go?"

The interface should reduce decision fatigue, not add to it.

The ideal user reaction is:

> "Ah, this is exactly what I was looking for."

```
