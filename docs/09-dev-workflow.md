`09-dev-workflow.md`

Este es especialmente importante porque va a decirle a **OpenCode cómo trabajar dentro del proyecto**, cómo leer los specs, cómo avanzar por etapas, cómo probar lo que hace y qué cosas tiene prohibido inventar o cambiar por su cuenta.

````md
# Conto — Development Workflow Specification

**Document status:** Draft
**Version:** 0.1
**Product:** Conto
**Purpose:** Define the development workflow, engineering rules, AI-assisted development process, testing requirements, and operational conventions for building Conto.

---

# 1. Development Philosophy

Conto should be developed incrementally.

The development process must prioritize:

- Correctness.
- Simplicity.
- Small changes.
- Frequent validation.
- Clear architecture.
- Automated testing.
- Maintainability.
- Security.
- Alignment with the product specifications.

The goal is not to generate the maximum amount of code.

The goal is to build the correct product in controlled steps.

---

# 2. Source of Truth

The specification documents are the primary product and engineering source of truth.

The expected documentation structure is:

```text
docs/
├── 00-vision.md
├── 01-product-spec.md
├── 02-architecture-spec.md
├── 03-data-model.md
├── 04-api-spec.md
├── 05-ui-ux-spec.md
├── 06-security-spec.md
├── 07-tech-stack.md
├── 08-ai-spec.md
├── 09-dev-workflow.md
└── 10-master-prompt.md
````

The implementation must remain consistent with these documents.

---

# 3. Specification Hierarchy

When resolving conflicts, use the following priority:

```text
Product requirements
        ↓
Architecture requirements
        ↓
Security requirements
        ↓
Data/API contracts
        ↓
UI/UX requirements
        ↓
Implementation details
```

Security requirements must never be weakened merely to simplify implementation.

---

# 4. OpenCode Role

OpenCode is an AI-assisted development agent.

OpenCode should act as:

* Software engineer.
* Code reviewer.
* Test writer.
* Debugging assistant.
* Refactoring assistant.
* Documentation assistant.

OpenCode must not act as an unrestricted autonomous decision-maker.

---

# 5. OpenCode First Rule

Before implementing a feature, OpenCode must:

1. Read the relevant specification.
2. Understand the existing implementation.
3. Identify affected modules.
4. Identify dependencies.
5. Determine required tests.
6. Plan the smallest reasonable implementation.

OpenCode should not immediately start generating large amounts of code.

---

# 6. Context Loading

For a feature request, OpenCode should load only the documentation relevant to that task.

Examples:

For reservations:

```text
00-vision.md
01-product-spec.md
02-architecture-spec.md
03-data-model.md
04-api-spec.md
06-security-spec.md
```

For UI work:

```text
01-product-spec.md
05-ui-ux-spec.md
07-tech-stack.md
```

For AI work:

```text
01-product-spec.md
02-architecture-spec.md
04-api-spec.md
06-security-spec.md
08-ai-spec.md
```

---

# 7. Existing Code First

Before modifying a feature, OpenCode must inspect the existing implementation.

It must not assume that:

* A file exists.
* A function exists.
* A dependency exists.
* A database model exists.
* An API route exists.

The actual repository state is authoritative for implementation details.

---

# 8. Minimal Change Principle

When implementing a feature:

> Change the smallest amount of code necessary to satisfy the requirement.

Avoid unrelated:

* Refactors.
* Renames.
* Dependency changes.
* Architecture changes.
* Formatting changes.

unless they are necessary.

---

# 9. No Unrequested Features

OpenCode must not add features merely because they seem useful.

If the requested feature is:

> Save a venue.

Do not automatically implement:

* Social sharing.
* Reviews.
* Notifications.
* Recommendations.
* Gamification.

Those belong to separate requirements.

---

# 10. Clarification Rule

If a requirement is genuinely ambiguous and the ambiguity could materially change the implementation, OpenCode should stop and ask for clarification.

However, if the specifications already provide a clear answer, OpenCode should proceed without asking unnecessary questions.

---

# 11. No Speculation

OpenCode must not invent:

* Business rules.
* API behavior.
* Database fields.
* User roles.
* Security exceptions.
* AI behavior.

If a required detail is missing, it should identify the missing decision rather than silently inventing one.

---

# 12. Architecture Compliance

New code must fit the existing architecture.

Do not introduce a new architectural pattern for a single feature without justification.

Example:

If the project uses a service layer, do not create a completely different business-logic pattern for one endpoint.

---

# 13. Dependency Rule

Before adding a dependency, OpenCode should determine:

1. Whether the dependency is necessary.
2. Whether the existing stack already solves the problem.
3. Whether the dependency is maintained.
4. Whether it introduces security concerns.
5. Whether it increases complexity.
6. Whether it is compatible with the project license and cost strategy.

---

# 14. Dependency Approval

Major dependencies should not be introduced silently.

Examples:

* New database.
* New framework.
* New state-management library.
* New infrastructure system.
* New AI provider.
* New queue system.

These require an explicit architectural decision.

---

# 15. TypeScript Rules

TypeScript strict mode should remain enabled.

Avoid:

```ts
any
```

unless there is a documented reason.

Prefer:

* Explicit types.
* Type inference where safe.
* Zod schemas at runtime boundaries.
* Narrow types.
* Discriminated unions where useful.

---

# 16. Error Handling

Errors should be handled intentionally.

Do not:

* Swallow exceptions.
* Ignore failed promises.
* Return misleading success responses.
* Expose internal stack traces.

Errors should either be:

* Handled.
* Propagated appropriately.
* Logged where useful.

---

# 17. API Development Workflow

For a new API capability:

```text
Requirement
    ↓
API contract
    ↓
Validation schema
    ↓
Business logic
    ↓
Data access
    ↓
Authorization
    ↓
Tests
    ↓
Implementation
```

The API should not be implemented as a database wrapper.

---

# 18. Authorization First

Every protected API endpoint must answer:

> Who is allowed to perform this operation?

Authorization must be implemented before considering the endpoint complete.

---

# 19. Database Workflow

For database changes:

```text
Specification
    ↓
Schema change
    ↓
Migration
    ↓
Seed/update test data
    ↓
Tests
    ↓
Application implementation
```

Never modify production schema manually as the normal development workflow.

---

# 20. Migration Safety

Migrations should:

* Be deterministic.
* Be version-controlled.
* Be tested.
* Avoid unnecessary destructive operations.
* Consider existing production data.

Destructive migrations require explicit consideration.

---

# 21. Feature Development Cycle

Each feature should follow:

```text
1. Understand
2. Plan
3. Implement
4. Validate
5. Test
6. Review
7. Document
```

---

# 22. Planning

Before substantial implementation, OpenCode should produce a concise plan.

Example:

```text
Plan:
1. Add reservation domain validation.
2. Add reservation service.
3. Add API route.
4. Add authorization.
5. Add tests.
6. Update relevant documentation.
```

The plan should remain proportional to the feature.

---

# 23. Implementation

Implementation should proceed in small logical increments.

Avoid generating an entire application in one operation.

Large features should be divided into independently testable steps.

---

# 24. Testing Requirement

Every meaningful business feature should have automated tests.

At minimum, test:

* Happy path.
* Invalid input.
* Unauthorized access.
* Important edge cases.
* Failure conditions.

---

# 25. Unit Tests

Unit tests should focus on:

* Business rules.
* Pure functions.
* Validation.
* Calculations.
* State transitions.

Examples:

* Reservation eligibility.
* ContoCoin calculations.
* Reward eligibility.
* Order total calculation.

---

# 26. Integration Tests

Integration tests should verify:

* API behavior.
* Database interaction.
* Authorization.
* Business services.
* Important workflows.

---

# 27. End-to-End Tests

E2E tests should cover critical user journeys.

Initial journeys:

```text
Discover venue
    ↓
View venue
    ↓
Save venue
```

```text
Discover venue
    ↓
Check availability
    ↓
Create reservation
    ↓
View confirmation
```

```text
Scan QR
    ↓
View menu
    ↓
Add item
    ↓
Create order
```

---

# 28. Test Before Refactor

When modifying working functionality:

1. Confirm existing tests.
2. Add missing coverage if necessary.
3. Make the change.
4. Run tests.
5. Refactor only if needed.

---

# 29. Test Data

Tests should use controlled test data.

Tests must not depend on:

* Production data.
* External APIs unless explicitly testing an integration.
* Unstable external services.

---

# 30. External Services

External services should be abstracted where practical.

Examples:

```text
AIService
StorageService
MapsService
NotificationService
AuthenticationService
```

Tests should be able to replace these dependencies with controlled implementations.

---

# 31. AI Development Workflow

When OpenCode uses AI capabilities to assist development:

The model should receive:

* Relevant specifications.
* Relevant code.
* Relevant tests.
* Explicit task requirements.

Do not provide unnecessary unrelated context.

---

# 32. AI Coding Safety

AI-generated code must be reviewed through:

* Type checking.
* Linting.
* Tests.
* Security review where relevant.

AI-generated code is not considered correct merely because it compiles.

---

# 33. AI Hallucination Control

OpenCode must not assume APIs or libraries exist.

Before using an unfamiliar dependency or API:

* Verify it exists.
* Verify the installed version.
* Verify the documented API.
* Inspect the existing project when possible.

---

# 34. No Fake Implementations

Do not create fake functionality merely to make a feature appear complete.

Examples of unacceptable behavior:

```text
Reservation created successfully
```

when no reservation was actually persisted.

```text
Payment successful
```

when no payment occurred.

```text
+500 ContoCoins
```

when no ledger transaction exists.

The UI must reflect actual system state.

---

# 35. Mocking Rule

Mocks are acceptable in tests.

Mocks must not accidentally become production behavior.

Production code should clearly distinguish:

* Real implementation.
* Test implementation.
* Development fixtures.

---

# 36. Environment Rule

OpenCode must know which environment it is operating in.

Never use production credentials for local development unless explicitly required and authorized.

---

# 37. Secrets Rule

OpenCode must never:

* Print secrets.
* Commit secrets.
* Hard-code API keys.
* Include credentials in test fixtures.
* Put secrets into documentation.

Use environment variables or secure secret management.

---

# 38. Git Workflow

Changes should be logically grouped.

A commit should ideally represent one coherent change.

Examples:

```text
feat: add venue saving
feat: add reservation availability
fix: prevent duplicate reward redemption
test: add reservation authorization tests
```

---

# 39. Commit Quality

Avoid commits containing unrelated changes.

Bad:

```text
feat: reservations + redesign homepage + upgrade dependencies + rename files
```

Prefer smaller, focused changes.

---

# 40. Branching

The exact branching strategy may evolve.

For the MVP, keep it simple.

A lightweight workflow is preferred over complex GitFlow unless the team grows enough to justify it.

---

# 41. Pull Requests

When pull requests are used, they should contain:

* What changed.
* Why it changed.
* Tests performed.
* Known limitations.
* Screenshots for significant UI changes where useful.

---

# 42. Code Review

Code review should focus on:

* Correctness.
* Security.
* Architecture.
* Maintainability.
* Tests.
* User impact.

Reviewers should not focus exclusively on formatting.

---

# 43. UI Development Workflow

For UI features:

```text
UX requirement
    ↓
Component design
    ↓
Responsive implementation
    ↓
Loading state
    ↓
Empty state
    ↓
Error state
    ↓
Accessibility
    ↓
Testing
```

A screen is not considered complete if only the happy state works.

---

# 44. UI State Requirements

Important screens should consider:

* Loading.
* Success.
* Empty.
* Error.
* Disabled.
* Unauthorized.
* Offline/degraded state where relevant.

---

# 45. Accessibility Workflow

Accessibility should be tested during implementation.

Check:

* Keyboard navigation.
* Focus behavior.
* Labels.
* Semantic structure.
* Contrast.
* Screen-reader behavior.
* Touch target size.

---

# 46. Responsive Workflow

Every major UI component should be evaluated at:

* Small mobile.
* Large mobile.
* Tablet.
* Desktop.

Do not wait until the end of the project to discover responsive problems.

---

# 47. Performance Workflow

Performance should be considered during implementation.

Avoid:

* Unnecessary client-side rendering.
* Large bundles.
* Unoptimized images.
* Excessive API calls.
* Repeated database queries.

Measure before introducing complex optimization systems.

---

# 48. Security Review Triggers

A security review is required when modifying:

* Authentication.
* Authorization.
* User data.
* Business permissions.
* Orders.
* Reservations.
* ContoCoins.
* Rewards.
* Payments.
* File uploads.
* AI tools.
* External integrations.

---

# 49. Documentation Workflow

When implementation changes a documented behavior:

The relevant specification must be updated.

Documentation should not intentionally drift from the implementation.

---

# 50. Decision Records

Significant architectural decisions should be documented.

Potential format:

```text
Decision:
Use PostgreSQL for primary storage.

Reason:
Strong transactional support and mature ecosystem.

Alternatives considered:
MongoDB
SQLite

Status:
Accepted
```

A lightweight ADR system may be introduced later.

---

# 51. Technical Debt

Technical debt should be explicitly identified.

Do not silently accumulate known problems.

When intentionally taking a shortcut, document:

* What was simplified.
* Why.
* What would be needed later.
* Whether it affects security or correctness.

---

# 52. Refactoring Rule

Refactoring is encouraged when it improves maintainability.

However:

> Do not combine large refactors with unrelated product features unless necessary.

Large refactors should be isolated and tested.

---

# 53. Performance vs Simplicity

For the MVP:

Prefer:

**simple and correct**

over:

**highly optimized and complex**

unless performance is already demonstrated to be a problem.

---

# 54. Premature Abstraction

Do not create abstractions for hypothetical future requirements.

Create abstractions when:

* Duplication exists.
* Multiple implementations exist.
* A boundary is genuinely useful.
* Testing requires isolation.
* Vendor lock-in needs to be contained.

---

# 55. Feature Flags

Feature flags may be introduced for:

* Experimental AI features.
* Gradual rollouts.
* Risky changes.

Do not create a feature-flag system unnecessarily early.

---

# 56. Release Process

A release should follow:

```text
Implementation
    ↓
Automated tests
    ↓
Type checking
    ↓
Linting
    ↓
Build
    ↓
Security checks
    ↓
Staging validation
    ↓
Production deployment
```

The exact pipeline may evolve.

---

# 57. Deployment Rule

Never deploy code that:

* Does not build.
* Has failing critical tests.
* Contains known exposed secrets.
* Breaks database migrations.
* Bypasses authorization.

---

# 58. Rollback

Production deployment should have a rollback strategy.

Application rollback and database rollback must be considered separately.

Database migrations should be designed carefully because some changes cannot be safely reversed.

---

# 59. Observability

Production should provide enough information to determine:

* What failed.
* Where it failed.
* When it failed.
* Which operation was affected.

Do not solve every operational problem with more logging.

Use structured, useful logs.

---

# 60. Development Commands

The project should provide simple commands for:

```text
install
dev
build
test
test:e2e
lint
typecheck
format
db:migrate
db:seed
```

The exact command names may follow the selected tooling conventions.

---

# 61. Definition of Done

A feature is considered complete when:

* Requirements are implemented.
* Architecture is respected.
* Authorization is implemented.
* Validation exists.
* Critical business logic is tested.
* UI states are handled.
* Accessibility is considered.
* Type checking passes.
* Linting passes.
* Relevant tests pass.
* Documentation is updated where necessary.

---

# 62. OpenCode Definition of Done

Before declaring a task complete, OpenCode should verify:

```text
[ ] Requirement understood
[ ] Relevant specs consulted
[ ] Existing implementation inspected
[ ] Plan followed
[ ] Implementation completed
[ ] Validation added
[ ] Authorization checked
[ ] Tests added/updated
[ ] Typecheck passes
[ ] Lint passes
[ ] Build passes
[ ] Documentation updated if necessary
```

---

# 63. When OpenCode Must Stop

OpenCode should stop rather than guessing when:

* A security requirement is ambiguous.
* A destructive database change is required.
* A major architectural decision is needed.
* A specification conflict is discovered.
* Required credentials are missing.
* A critical external dependency is unavailable.
* A requested implementation contradicts the product specification.

---

# 64. When OpenCode May Proceed

OpenCode may proceed without asking for confirmation when:

* The specification is clear.
* The change is local.
* Existing architecture provides an obvious solution.
* The implementation does not introduce significant risk.
* Tests can validate the behavior.

---

# 65. No Scope Expansion

If OpenCode discovers a useful improvement outside the current task:

It should report it separately rather than silently implementing it.

Example:

```text
Additional observation:
The current search implementation could later benefit from full-text indexing.

Action:
Not implemented because it is outside the current task.
```

---

# 66. Development Loop

The preferred loop is:

```text
Understand
   ↓
Plan
   ↓
Implement
   ↓
Test
   ↓
Inspect
   ↓
Fix
   ↓
Document
```

Repeat until the feature satisfies the definition of done.

---

# 67. Final Development Principle

OpenCode should optimize for:

**Correctness > Simplicity > Maintainability > Speed of implementation**

Fast code generation is not the objective.

Building the right system is.

---

# 68. Final Rule for OpenCode

When uncertain:

1. Read the specs.
2. Inspect the existing code.
3. Prefer the simplest solution.
4. Protect security and data integrity.
5. Write tests.
6. Do not invent requirements.
7. Ask only when a real decision is required.

The specification defines what Conto should be.

The code implements it.

The tests prove it.

```
```
