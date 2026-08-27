`07-tech-stack.md`

---

# Conto – Technology Stack Specification

**Document status:** Draft
**Version:** 0.1
**Product:** Conto
**Purpose:** Define the recommended technology stack for developing, testing, deploying, and maintaining Conto.

---

# 1. Technology Strategy

Conto should use a modern, open-source-friendly, low-cost technology stack.

The stack must prioritize:

- Developer productivity.
- Simplicity.
- Maintainability.
- Strong ecosystem support.
- Good performance.
- Type safety.
- Low infrastructure cost.
- Easy local development.
- Easy deployment.
- Compatibility with AI-assisted development.
- Avoidance of unnecessary vendor lock-in.

The MVP should avoid introducing technologies that do not provide a clear product benefit.

---

# 2. General Architecture

The initial application should favor a modular monolithic architecture.

Conceptually:

```
Frontend (Next.js)
    ↓
API Routes (Next.js)
    ↓
Service Layer
    ↓
Data Access Layer (Prisma)
    ↓
PostgreSQL
```

This architecture keeps the initial system simple while allowing individual layers to be extracted into dedicated services later if required.

---

# 3. Primary Language

The primary programming language should be:

TypeScript

TypeScript should be used across the application wherever practical.

Reasons:

- Strong type safety.
- Excellent web ecosystem.
- Shared types between frontend and backend.
- Excellent support in modern development tools.
- Strong compatibility with AI-assisted coding.
- Large developer community.

---

# 4. Runtime

Use:

Node.js

Node.js should be the primary server-side runtime.

The project should use a current stable LTS release.

The exact version should be pinned in the project configuration.

---

# 5. Package Manager

Use:

pnpm

Reasons:

- Fast installation.
- Efficient disk usage.
- Strong monorepo support.
- Deterministic dependency management.
- Good developer experience.

The project should commit the lockfile.

---

# 6. Frontend Framework

Use:

Next.js

Next.js should be the primary frontend framework.

Reasons:

- React ecosystem.
- Strong TypeScript support.
- Server-side rendering capabilities.
- Excellent routing.
- Good performance.
- Strong deployment flexibility.
- Suitable for both customer and business interfaces.

---

# 7. UI Library

Use:

Tailwind CSS

Tailwind should provide the primary styling system.

The project should avoid creating arbitrary styles throughout the application.

Visual values should progressively move into a reusable design-token system.

---

# 8. Component System

Use a reusable component architecture inspired by:

shadcn/ui

Components should be treated as application-owned components rather than an opaque external UI framework.

This provides:

- Accessibility foundations.
- Customizability.
- Consistent UI.
- Reduced vendor lock-in.

---

# 9. Backend Framework

The backend should initially use:

Next.js server capabilities / route handlers

The MVP should avoid introducing a separate backend server unless a concrete requirement emerges.

Business logic must still be organized into clear application/service modules.

The architecture should allow extraction into a dedicated backend later if necessary.

---

# 10. Backend Architecture

Backend code should be organized conceptually as:

```
API Layer
    ↓
Application / Service Layer
    ↓
Domain Logic
    ↓
Data Access Layer
    ↓
Database
```

Routes should remain thin.

Business logic should not be placed directly inside route handlers when it can be reused elsewhere.

---

# 11. Database

Use:

PostgreSQL

PostgreSQL should be the primary relational database.

Reasons:

- Mature.
- Reliable.
- Open source.
- Excellent relational capabilities.
- Strong transaction support.
- Excellent ecosystem.
- Suitable for Conto's transactional requirements.

---

# 12. ORM

Use:

Prisma

Prisma should initially be used as the database access layer.

Reasons:

- Strong TypeScript integration.
- Type-safe queries.
- Clear schema definition.
- Developer-friendly migrations.
- Good AI-assisted development compatibility.

The database schema remains authoritative.

---

# 13. Database Migrations

Database changes must be version-controlled.

Every schema change should have a migration.

Never modify production database structure manually without a corresponding migration.

---

# 14. Authentication

Authentication should use a mature authentication solution rather than implementing password/session security from scratch.

The final authentication provider should be selected based on:

- Free-tier availability.
- Open-source compatibility.
- Security.
- TypeScript integration.
- Deployment compatibility.
- Ease of migration.

Authentication implementation must remain isolated behind application-level abstractions where practical.

---

# 15. Validation

Use:

Zod

Zod should be used for validating:

- API inputs.
- Forms.
- Environment variables.
- External service responses where appropriate.
- Important domain boundaries.

Types should not be trusted merely because TypeScript exists.

Runtime validation is still required.

---

# 16. Forms

Use:

React Hook Form

React Hook Form should be used for complex forms.

Simple forms may use simpler mechanisms when appropriate.

Forms must share validation schemas with backend validation where practical.

---

# 17. State Management

Avoid introducing a global state-management framework unless required.

Preferred hierarchy:

- Server state.
- URL state.
- Local component state.
- Context where appropriate.
- Dedicated global state only when justified.

The project should avoid unnecessary client-side state.

---

# 18. Server State

For data fetched from the backend, prefer framework-native server/data-fetching mechanisms where practical.

If client-side caching becomes necessary, a dedicated query library such as TanStack Query may be introduced.

Do not add it automatically if the MVP does not need it.

---

# 19. API Contract

The API should use:

REST-style HTTP APIs

The initial API should remain simple and predictable.

OpenAPI documentation may be introduced once the API stabilizes.

---

# 20. Type Sharing

Shared domain types should be reused wherever practical.

The architecture should minimize duplicate definitions between:

- Frontend.
- Backend.
- Validation.
- API contracts.

However, database models should not automatically become public API models.

---

# 21. Testing Framework

Use:

Vitest

Vitest should be the primary unit/integration testing framework.

Tests should focus on business-critical behavior.

---

# 22. End-to-End Testing

Use:

Playwright

Playwright should be used for critical user journeys.

Initial E2E coverage should include:

- Authentication.
- Venue discovery.
- Saving a venue.
- Reservation creation.
- Reservation cancellation.
- QR/menu flow.
- Order creation.
- ContoCoin earning.
- Reward redemption.

---

# 23. Code Quality

Use:

ESLint

and:

Prettier

The project should enforce consistent formatting and code-quality rules.

---

# 24. Type Checking

TypeScript strict mode should be enabled.

The project should avoid:

- `any` without justification.
- Unsafe type assertions.
- Ignoring compiler errors.
- Suppressing errors without explanation.

---

# 25. Git

Use:

Git

The repository should contain:

- Source code.
- Configuration.
- Database migrations.
- Tests.
- Documentation.
- Environment example files.

Secrets must never be committed.

---

# 26. Repository Strategy

The MVP should begin as a single repository.

A monorepo structure may be used if it provides clear value.

Do not introduce multiple repositories simply for architectural appearance.

---

# 27. Recommended Project Structure

A possible structure:

```
conto/
├── app/
├── components/
├── features/
├── lib/
├── server/
├── db/
├── tests/
├── public/
├── scripts/
├── docs/
├── prisma/
├── .env.example
├── package.json
├── pnpm-lock.yaml
└── README.md
```

The exact structure may evolve as implementation begins.

---

# 28. Feature-Based Organization

Where practical, business functionality should be organized by feature.

Examples:

```
features/
├── venues/
├── reservations/
├── orders/
├── rewards/
├── contocoins/
├── recommendations/
└── users/
```

This is preferable to creating enormous generic folders such as:

```
utils/
services/
helpers/
```

containing unrelated business logic.

---

# 29. Environment Configuration

The application should support separate environments:

- development
- test
- staging
- production

Environment configuration should be validated at startup.

---

# 30. Environment Variables

An `.env.example` file should document required variables without containing real secrets.

Example:

```
DATABASE_URL=
AUTH_SECRET=
AI_API_KEY=
STORAGE_URL=
```

Actual values must remain private.

---

# 31. Local Development

A new developer should be able to:

- Clone the project.
- Install dependencies.
- Configure environment variables.
- Start required infrastructure.
- Run migrations.
- Seed development data.
- Start the application.
- Run tests.

The process should be documented in the README.

---

# 32. Local Database

Development should support a local PostgreSQL environment.

Docker may be used to simplify local infrastructure.

The exact setup should be documented and reproducible.

---

# 33. Seed Data

The project should provide development seed data.

Seed data should include realistic examples of:

- Users.
- Businesses.
- Venues.
- Menus.
- Reservations.
- Orders.
- Rewards.
- ContoCoin transactions.

Seed data must never contain real personal information.

---

# 34. File and Image Storage

Venue and menu images should use object storage rather than storing large binary files directly inside PostgreSQL.

The storage provider should be selected based on:

- Free-tier availability.
- Cost.
- Reliability.
- S3 compatibility where possible.

---

# 35. Caching

Caching should be introduced only where necessary.

Potential candidates:

- Venue discovery.
- Public venue data.
- Menus.
- Recommendation results.

Do not introduce Redis or another cache automatically for the MVP.

---

# 36. Background Jobs

Background jobs may eventually be required for:

- Notifications.
- Recommendation processing.
- Analytics.
- Scheduled promotions.
- Data synchronization.

The MVP should use the simplest reliable mechanism available.

Do not introduce a dedicated queue system until the product requires it.

---

# 37. Search

The MVP should initially use PostgreSQL capabilities for search where sufficient.

A dedicated search engine should only be introduced when:

- Search complexity requires it.
- Dataset size requires it.
- Ranking quality requires it.

Possible future technologies include:

- PostgreSQL full-text search.
- Meilisearch.
- OpenSearch.

---

# 38. Maps and Geolocation

The application may eventually require:

- Geocoding.
- Distance calculations.
- Maps.
- Directions.

The provider should be selected based on:

- Free usage.
- Geographic coverage.
- API limits.
- Cost.
- Licensing.

The application should isolate map-provider-specific code behind an abstraction.

---

# 39. Notifications

The MVP may initially support:

- In-app notifications.

Email, SMS, or push notifications should be introduced only when required.

External notification providers should be isolated behind service interfaces.

---

# 40. Analytics

Product analytics should initially remain lightweight.

Potential events:

- Venue viewed.
- Venue saved.
- Search performed.
- Reservation created.
- Order created.
- Reward redeemed.

Analytics infrastructure should not block core product development.

---

# 41. Monitoring

Production should eventually include:

- Application error monitoring.
- Performance monitoring.
- Database monitoring.
- Availability monitoring.

The selected services should prioritize free or low-cost tiers during MVP development.

---

# 42. Logging

Use structured server-side logging.

Logs should support:

- Debugging.
- Error investigation.
- Security auditing.

Sensitive information must not be logged.

---

# 43. Deployment

The deployment platform should prioritize:

- Free tier or very low cost.
- Easy Git integration.
- Environment variables.
- Preview deployments.
- HTTPS.
- Simple rollback.

The exact provider should be finalized before production deployment.

---

# 44. Infrastructure Philosophy

Prefer managed services during the MVP.

Do not operate unnecessary infrastructure manually.

The goal is to minimize:

- Operational complexity.
- Maintenance.
- Infrastructure cost.
- Deployment friction.

---

# 45. Open Source Preference

When two technologies provide similar value, prefer the option with:

- Open-source availability.
- Strong community.
- Portable data.
- Standard protocols.
- Low vendor lock-in.

---

# 46. Vendor Lock-In

External services should be isolated behind interfaces where practical.

For example:

- `RecommendationService`
- `StorageService`
- `NotificationService`
- `MapsService`
- `AuthenticationService`
- `AIService`

The application should not spread provider-specific code throughout the product.

---

# 47. AI Development Compatibility

The stack must work well with AI-assisted coding tools.

The codebase should prioritize:

- Strong typing.
- Explicit architecture.
- Small modules.
- Predictable naming.
- Clear documentation.
- Automated tests.
- Simple commands.

This allows OpenCode and other coding agents to reason about the project more reliably.

---

# 48. OpenCode

OpenCode should be used as the primary AI-assisted development environment.

The project documentation should provide OpenCode with:

- Product specifications.
- Architecture.
- Data model.
- API contract.
- UI/UX rules.
- Security rules.
- Technology stack.
- Development workflow.

OpenCode must treat the specification documents as the source of truth.

---

# 49. AI Coding Model

The coding model should prioritize:

- Code quality.
- Reasoning ability.
- Long-context support.
- Instruction following.
- Tool use.
- Cost efficiency.

Because the project requires a free or very low-cost development workflow, the selected model should support a genuinely usable free-access option or a locally runnable option.

The final model choice should be recorded separately in:

`08-ai-spec.md`

so that the coding model can be changed without rewriting the entire technology specification.

---

# 50. Local AI Option

The architecture should remain compatible with local AI inference where practical.

Potential local model families may include modern open-weight coding models supported by tools such as Ollama.

The exact model should be selected based on:

- Current quality.
- Hardware requirements.
- Context length.
- Coding performance.
- License.
- Availability.

---

# 51. Cost Philosophy

During MVP development:

Prefer free tiers and open-source software wherever they are technically sufficient.

Paid services should be introduced only when:

- The free option is insufficient.
- Reliability requires it.
- The product begins generating revenue.
- The operational cost is justified.

---

# 52. Technology Decision Rule

A technology should not be added because it is popular.

It should be added because it solves a demonstrated problem.

Before introducing a dependency, ask:

- Do we need it?
- Can the existing stack solve the problem?
- Does it increase operational complexity?
- Does it increase cost?
- Does it create vendor lock-in?
- Does it make AI-assisted development harder?

---

# 53. MVP Stack Summary

The initial recommended stack is:

**Language:**

- TypeScript

**Runtime:**

- Node.js

**Package Manager:**

- pnpm

**Frontend:**

- Next.js + React

**Styling:**

- Tailwind CSS

**Components:**

- shadcn/ui-style application-owned components

**Backend:**

- Next.js server capabilities / Route Handlers

**Database:**

- PostgreSQL

**ORM:**

- Prisma

**Validation:**

- Zod

**Forms:**

- React Hook Form

**Testing:**

- Vitest + Playwright

**Quality:**

- ESLint + Prettier

**Version Control:**

- Git

**AI Development:**

- OpenCode

**AI Coding Model:**

- To be finalized in `08-ai-spec.md`

---

# 54. Architecture Evolution

The initial stack must not prevent future evolution.

If Conto grows significantly, components may eventually be extracted into:

- Dedicated backend services.
- Dedicated search infrastructure.
- Dedicated job workers.
- Dedicated recommendation services.
- Dedicated analytics infrastructure.

These changes should be driven by actual requirements.

---

# 55. What We Explicitly Avoid

For the MVP, avoid introducing without a concrete reason:

- Microservices.
- Kubernetes.
- Multiple databases.
- Dedicated message brokers.
- Complex event buses.
- Heavy state-management frameworks.
- Dedicated search clusters.
- Premature caching infrastructure.
- Custom authentication systems.
- Custom cryptography.
- Unnecessary cloud infrastructure.

---

# 56. Technology Quality Bar

Every technology choice should satisfy at least one of these goals:

- Improves reliability.
- Improves developer productivity.
- Improves user experience.
- Reduces cost.
- Improves security.
- Simplifies maintenance.

If it does none of these, it probably does not belong in the MVP.

---

# 57. Final Stack Principle

The Conto MVP should be built with the smallest modern stack capable of delivering the complete product experience.

The goal is not to build an impressive infrastructure diagram.

The goal is to build a reliable product that can evolve.

Simple first. Modular always. Scale when necessary.
