# Conto — AI Coding Agent Instructions

## 1. Project

Conto is a mobile-first platform for discovering, choosing, reserving, ordering from, and returning to bars, restaurants, cafés, breweries, and other places to go out.

The repository documentation in `docs/` is the primary source of truth for product and engineering decisions.

---

## 2. Source of Truth

Before implementing or modifying a feature, inspect the relevant documents in `docs/`.

Primary documents:

* `docs/00-vision.md`
* `docs/01-product-spec.md`
* `docs/02-user-flows.md`
* `docs/03-data-model.md`
* `docs/04-api-spec.md`
* `docs/05-ui-ux-spec.md`
* `docs/06-security-spec.md`
* `docs/07-tech-stack.md`
* `docs/08-ai-spec.md`
* `docs/09-dev-workflow.md`

If `docs/10-master-prompt.md` exists, it defines the initial implementation mission and execution order.

Do not invent requirements that are not supported by the documentation.

---

## 3. Product Priorities

Always prioritize:

1. Correctness.
2. Security.
3. User experience.
4. Simplicity.
5. Maintainability.
6. Performance.
7. Cost efficiency.

Do not optimize for code volume.

---

## 4. MVP Scope

The MVP focuses on:

* Venue discovery.
* Search.
* Filters.
* Personalized discovery.
* Venue details.
* Saved venues.
* Reservations.
* Digital menus.
* QR-based venue experiences.
* Ordering where supported.
* ContoCoins.
* Rewards.
* Basic business operations.

Payments are not part of the initial MVP unless explicitly added to the specification.

---

## 5. Technology Stack

Use the technology decisions documented in `docs/07-tech-stack.md`.

Current target stack:

* TypeScript.
* Node.js.
* pnpm.
* Next.js.
* React.
* Tailwind CSS.
* shadcn/ui-style application-owned components.
* PostgreSQL.
* Prisma.
* Zod.
* React Hook Form where appropriate.
* Vitest.
* Playwright.
* ESLint.
* Prettier.

Do not introduce alternative frameworks or major infrastructure without an explicit architectural reason.

---

## 6. Architecture

Prefer a modular monolith.

Conceptually:

Frontend
→ API / Route Handlers
→ Service Layer
→ Data Access Layer
→ PostgreSQL

Keep route handlers thin.

Business logic belongs in appropriate service/domain modules.

Do not introduce microservices for the MVP.

---

## 7. Security

Security requirements are mandatory.

Never trust client-provided:

* Permissions.
* Prices.
* Totals.
* Reservation availability.
* ContoCoin balances.
* Reward eligibility.
* Business ownership.

All critical operations must be validated server-side.

Never expose:

* Secrets.
* API keys.
* Authentication credentials.
* Private user data.
* Private business data.

Never commit secrets.

---

## 8. AI Rules

AI is an assistant, not the source of truth.

AI must never independently control:

* Authorization.
* Reservation availability.
* Order totals.
* ContoCoins.
* Rewards.
* Payments.
* Security decisions.

AI-generated structured data must be validated before use.

AI output must never directly execute privileged operations.

---

## 9. Implementation Workflow

For every meaningful task:

1. Read the relevant specification.
2. Inspect the existing repository.
3. Identify affected files.
4. Make a concise implementation plan.
5. Implement the smallest appropriate change.
6. Add or update tests.
7. Run validation.
8. Review the result against the specification.
9. Update documentation when behavior changes.

---

## 10. No Speculative Development

Do not add features merely because they seem useful.

Do not silently introduce:

* New databases.
* New frameworks.
* New authentication systems.
* New state-management libraries.
* New infrastructure.
* New AI providers.

Without an explicit reason.

---

## 11. Existing Code First

Never assume a file, dependency, API, database model, or component exists.

Inspect the repository before modifying it.

The actual repository state is authoritative for implementation details.

---

## 12. Dependencies

Before adding a dependency, determine:

* Whether it is necessary.
* Whether the existing stack can solve the problem.
* Whether it is maintained.
* Whether it introduces security or licensing concerns.
* Whether it increases complexity.
* Whether it creates vendor lock-in.

Prefer the smallest dependency footprint possible.

---

## 13. TypeScript

Use strict TypeScript.

Avoid `any` unless there is a documented reason.

Use runtime validation at external boundaries.

Prefer explicit, understandable types.

---

## 14. Testing

Every meaningful business feature should include automated tests.

At minimum consider:

* Happy path.
* Invalid input.
* Unauthorized access.
* Important edge cases.
* Failure states.

Use:

* Vitest for unit/integration testing.
* Playwright for critical end-to-end journeys.

---

## 15. UI

UI must be:

* Mobile-first.
* Responsive.
* Accessible.
* Fast.
* Consistent.
* Simple.

Important screens must account for:

* Loading.
* Empty.
* Error.
* Disabled.
* Unauthorized.
* Success states.

---

## 16. Documentation Integrity

When implementation changes documented behavior, update the relevant document.

Documentation must not intentionally drift from the implementation.

When a specification conflict is discovered:

* Do not silently choose an interpretation.
* Identify the conflict.
* Prefer the higher-priority requirement.
* Ask for a decision when the conflict materially affects implementation.

---

## 17. Git

Keep changes focused.

Prefer small, coherent commits.

Do not mix unrelated refactors with feature work.

Never commit secrets.

---

## 18. Definition of Done

A feature is not complete until:

* The requirement is implemented.
* Security requirements are satisfied.
* Relevant validation exists.
* Relevant tests exist.
* Type checking passes.
* Linting passes.
* The application builds.
* Relevant documentation is updated.

---

## 19. Agent Behavior

Be decisive when the specification is clear.

Do not ask unnecessary questions.

Do not guess when a missing decision could materially change the implementation.

Do not claim functionality exists unless it actually works.

Never create fake success states merely to make a feature appear complete.

---

## 20. Final Rule

Build the smallest correct version of Conto.

Prefer:

simple → explicit → tested → secure → maintainable

over:

complex → clever → speculative → fragile
