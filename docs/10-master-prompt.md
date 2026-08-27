# Conto — Master Implementation Prompt

**Document status:** Draft
**Version:** 0.1
**Product:** Conto
**Purpose:** Define the initial implementation mission, execution order, and constraints for building Conto.

---

# 1. Mission

Build Conto's MVP as a mobile-first web application.

The MVP must allow a customer to:

1. Discover venues.
2. Explore venue details.
3. Save interesting places.
4. Make a reservation.
5. View a menu.
6. Place an order where supported.
7. Earn and redeem rewards.

The MVP must allow a business to:

1. Manage venue information.
2. Manage menus.
3. Manage availability.
4. Manage reservations.
5. Receive orders.
6. Participate in the rewards ecosystem.

---

# 2. Product Source of Truth

The product definition lives in:

* `docs/00-vision.md`
* `docs/01-product-spec.md`
* `docs/02-user-flows.md`

These documents define **what Conto should do and why**.

---

# 3. Technical Source of Truth

The technical foundation lives in:

* `docs/03-data-model.md`
* `docs/04-api-spec.md`
* `docs/05-ui-ux-spec.md`
* `docs/06-security-spec.md`
* `docs/07-tech-stack.md`
* `docs/08-ai-spec.md`

These documents define **how the system should be built**.

---

# 4. Workflow Source of Truth

The development workflow lives in:

* `docs/09-dev-workflow.md`

This document defines **how OpenCode should operate within the project**.

---

# 5. Implementation Approach

The implementation must proceed incrementally.

Do not attempt to generate the entire product in one pass.

Each implementation step should:

1. Be small enough to verify.
2. Preserve existing functionality.
3. Follow the relevant specifications.
4. Include appropriate tests.
5. Leave the system in a working state.

---

# 6. Quality Expectations

The MVP must meet these quality expectations:

* Correct behavior over clever implementation.
* Security over convenience.
* Simplicity over abstraction.
* Testability over speed of generation.
* Maintainability over novelty.
* Real functionality over simulated progress.

---

# 7. Development Strategy

Build the application incrementally.

Do not attempt to generate the entire product in one operation.

Implementation should proceed in vertical slices that can be tested independently.

Recommended sequence:

### Phase 0 — Repository and Tooling

Establish:

* Project configuration.
* TypeScript.
* Next.js.
* pnpm.
* ESLint.
* Prettier.
* Testing setup.
* Environment configuration.
* Basic project structure.

### Phase 1 — Design System Foundation

Implement:

* Design tokens.
* Base typography.
* Buttons.
* Inputs.
* Cards.
* Tags.
* Navigation.
* Loading states.
* Empty states.
* Error states.

### Phase 2 — Venue Discovery

Implement:

* Home.
* Explore.
* Venue cards.
* Search.
* Filters.
* Venue detail.
* Saved venues.

### Phase 3 — Accounts and Preferences

Implement:

* Authentication.
* User profile.
* Optional personalization onboarding.
* Preference editing.

### Phase 4 — Reservations

Implement:

* Availability.
* Reservation creation.
* Reservation confirmation.
* Reservation listing.
* Reservation cancellation.
* Business reservation management.

### Phase 5 — Business Foundation

Implement:

* Business authentication.
* Business dashboard.
* Venue management.
* Menu management.

### Phase 6 — QR and Ordering

Implement:

* QR resolution.
* Digital menus.
* Cart.
* Order creation.
* Order status.
* Business order management.

### Phase 7 — ContoCoins and Rewards

Implement:

* Coin ledger.
* Balance display.
* Earning rules.
* Reward definitions.
* Redemption flow.

### Phase 8 — AI Features

Implement:

* Recommendation explanations.
* Personalization support.
* Natural-language discovery where appropriate.

---

# 8. Non-Functional Requirements

The MVP must also satisfy:

* Responsive design.
* Accessibility basics.
* Error handling.
* Loading states.
* Empty states.
* Security constraints.
* Environment configuration.
* Deployment readiness.

---

# 9. MVP Success Criteria

The MVP is successful if:

1. A customer can discover and explore venues.
2. A customer can save venues.
3. A customer can make and manage reservations.
4. A customer can view menus.
5. A customer can place orders where supported.
6. A customer can earn and redeem rewards.
7. A business can manage its presence.
8. The application is secure, testable, and maintainable.
9. The codebase is clean, well-structured, and extendable.

---

# 10. Constraints

The implementation must respect:

* The approved technology stack.
* The defined architecture.
* The security specification.
* The data model.
* The API contracts.
* The workflow rules.

Do not introduce:

* Alternative frameworks.
* Alternative databases.
* Alternative architectures.
* Undocumented features.
* Speculative abstractions.

---

# 11. Documentation Requirement

Every significant implementation decision must be traceable to a document in `docs/`.

If a requirement is missing, identify the gap before inventing a solution.

If a conflict exists between documents, follow the hierarchy:

1. Vision.
2. Product specification.
3. User flows.
4. Security specification.
5. Technical specifications.

---

# 12. Final Constraint

The MVP must be built as a real, working product.

Do not generate placeholder logic.

Do not generate fake integrations.

Do not generate incomplete features disguised as complete.

Build only what is specified. Build it correctly. Stop when the MVP is complete.

---

# 13. OpenCode Behavioral Constraints

OpenCode must not:

* Modify security-critical logic without explicit review.
* Change data models without confirming product impact.
* Alter API contracts without checking downstream effects.
* Skip tests to accelerate delivery.
* Introduce new libraries without justification.
* Refactor unrelated code during feature work.
* Make business decisions that belong to the product specification.

---

# 14.例外時の対応

When something is ambiguous:

1. Check the specification.
2. Check the data model.
3. Check the user flow.
4. If still unclear, stop and ask.

Do not guess. Do not assume. Do not silently choose an interpretation that could break the product.

---

# 15. MVP Boundary

The MVP does **not** include:

* Multi-language support.
* Advanced analytics.
* Payments.
* Driver/delivery logic.
* Complex AI automation.
* Custom business dashboards beyond the basics.
* Admin panels beyond what is specified.
* Feature flags.
* A/B testing infrastructure.
* Notification infrastructure beyond basic needs.

Build only what is specified. Build it correctly. Stop when the MVP is complete.

---

# 16. Commit Strategy

Keep commits small and focused.

Each commit should represent one coherent change.

Do not mix:

* Feature work with refactors.
* Bug fixes with new features.
* Documentation updates with code changes.

Commit messages should clearly describe what changed and why.

---

# 17. Testing Strategy

Every meaningful feature should have tests.

At minimum:

* Unit tests for business logic.
* Integration tests for API routes.
* End-to-end tests for critical flows.

Tests must be included in the repository.

Do not leave tests for later.

---

# 18. Security Reminder

Security is not optional.

Never trust the client.

Always validate on the server.

Never expose secrets.

Never commit environment variables.

Always use parameterized queries.

Always validate input.

Always handle errors safely.

---

# 19. Performance Considerations

The MVP should be reasonably fast.

Do not optimize prematurely.

But do not ignore obvious inefficiencies.

Use:

* Server-side rendering where appropriate.
* Caching where appropriate.
* Lazy loading where appropriate.
* Pagination for collections.

---

# 20. Deployment Readiness

The MVP should be deployable.

Ensure:

* Environment variables are documented.
* Build process works.
* Start process works.
* Database migrations work.
* Seed data is available.

---

# 21. Handoff Readiness

When the MVP is complete, the codebase should be ready for:

* Human review.
* Extension by other developers.
* Deployment.
* Further development.

The code should be clean, documented, tested, and consistent with the specifications.

---

# 22. Summary

Build Conto incrementally.

Follow the specifications.

Maintain quality.

Preserve security.

Include tests.

Document decisions.

Stop when the MVP is complete.

---

# 23. Overall Constraint

Everything in this document is subordinate to the product specification and the repository documentation.

If this document conflicts with the product specification, the product specification wins.

---

# 24. Final Instruction

Build the MVP as specified. Build it correctly. Build it securely. Build it incrementally. Stop when complete.

---

# 25. No Generality

This document applies only to Conto.

Do not reuse it for other projects without adaptation.

---

# 26. Final Mission

Build Conto as a real, maintainable product.

Do not optimize for impressive code generation.

Optimize for:

**Correctness. Security. Simplicity. Usability. Testability. Maintainability.**

Start with the smallest complete vertical slice.

Then expand the system incrementally.

Never lose sight of the core question:

> Does this help the user discover, choose, visit, enjoy, or return to a place?
