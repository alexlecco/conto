`06-security-spec.md`

---

# Conto — Security Specification

**Document status:** Draft  
**Version:** 0.1  
**Product:** Conto  
**Purpose:** Define the security requirements, principles, controls, and practices for the Conto MVP.

---

# 1. Security Objectives

Conto security must protect:

- User accounts.
- Business accounts.
- Personal information.
- Reservations.
- Orders.
- ContoCoins.
- Rewards.
- Business data.
- API access.
- Application infrastructure.
- Secrets and credentials.

Security must be designed into the system from the beginning rather than added after the MVP is complete.

---

# 2. Security Principles

Conto follows these principles:

1. Never trust the client.
2. Validate all important operations server-side.
3. Apply least privilege.
4. Deny access by default.
5. Minimize stored personal data.
6. Never store secrets in source code.
7. Never expose sensitive internal data through public APIs.
8. Keep dependencies updated.
9. Log security-relevant events.
10. Make security controls simple enough to maintain.

---

# 3. Threat Model

The system should consider at least the following threats:

- Account takeover.
- Credential theft.
- Unauthorized API access.
- Privilege escalation.
- Data leakage.
- Fake reservations.
- Fake orders.
- ContoCoin manipulation.
- Reward abuse.
- QR code abuse.
- Business account compromise.
- Malicious input.
- Automated abuse.
- Denial of service.
- Dependency vulnerabilities.
- Exposed secrets.
- Improper access to personal data.

The threat model should evolve as the product grows.

---

# 4. Authentication

Authentication determines the identity of the requester.

Conto should support a secure authentication mechanism suitable for:

- Customer accounts.
- Business accounts.
- Administrative accounts.

The exact authentication provider belongs to the technical stack specification.

---

# 5. Authentication Requirements

Authentication must:

- Use secure credential handling.
- Protect authentication tokens.
- Support session expiration.
- Support logout.
- Support account recovery.
- Prevent credential enumeration where practical.
- Rate-limit authentication attempts.
- Avoid storing plaintext passwords.

If passwords are implemented, they must be securely hashed using a modern password hashing algorithm.

---

# 6. Session Management

Sessions must:

- Expire appropriately.
- Be revocable.
- Be protected against theft.
- Avoid exposing tokens unnecessarily.
- Use secure transport.

Authentication state should not be trusted merely because it exists on the client.

The backend must validate the session or token on protected operations.

---

# 7. Authorization

Authorization must be enforced server-side.

The system must distinguish between:

- Anonymous users.
- Customers.
- Business users.
- Administrators.

Additional roles may be introduced later.

---

# 8. Role-Based Access Control

Initial conceptual roles:

```text
ANONYMOUS
CUSTOMER
BUSINESS_USER
ADMIN
```

---

# 9. Customer Permissions

A customer may:

- View public venues.
- Search venues.
- View public menus.
- Manage their own profile.
- Manage their own preferences.
- Save venues.
- Create their own reservations.
- View their own reservations.
- Cancel eligible reservations.
- Create eligible orders.
- View their own orders.
- View their own ContoCoin balance.
- View their own rewards.
- Redeem eligible rewards.

A customer must never access another customer's private information.

---

# 10. Business Permissions

A business user may:

- Manage authorized business information.
- Manage authorized venues.
- Manage authorized menus.
- Manage authorized reservations.
- Manage authorized orders.
- Manage promotions.
- View authorized analytics.

A business user must never access another business's private operational data.

---

# 11. Administrator Permissions

Administrators may have elevated permissions for:

- Platform management.
- Moderation.
- Business verification.
- Security operations.
- Support operations.

Administrative access should be tightly controlled and audited.

---

# 12. Object-Level Authorization

Every protected resource must verify ownership or permission.

Example:

A request such as:

`GET /reservations/{reservationId}`

must verify that:

- The reservation belongs to the authenticated user,

or:

- The authenticated business is authorized to access that reservation.

Never rely only on the existence of the resource ID.

---

# 13. IDOR Prevention

The application must protect against Insecure Direct Object Reference vulnerabilities.

Example of an unsafe assumption:

User A requests:

`GET /reservations/123`

The API returns reservation 123 without checking ownership.

This must never be allowed.

Resource authorization must happen on the server.

---

# 14. Input Validation

All external input must be validated.

Input includes:

- Request bodies.
- Query parameters.
- Path parameters.
- Headers where relevant.
- Uploaded files.
- QR tokens.
- Search queries.

Validation must happen server-side.

---

# 15. Output Validation

APIs should return only information that the requester is authorized to see.

Do not serialize entire database objects blindly.

Use explicit response schemas where practical.

---

# 16. Injection Protection

The system must protect against:

- SQL injection.
- NoSQL injection where applicable.
- Command injection.
- Template injection.
- HTML injection.
- Header injection.

Use parameterized queries, safe libraries, validation, and proper output encoding.

---

# 17. Cross-Site Scripting

User-controlled content must be safely handled.

Potential user-generated content includes:

- Business descriptions.
- Menu descriptions.
- Promotion text.
- Profile information.
- Notes.

The frontend and backend must prevent malicious scripts from being executed.

---

# 18. Cross-Site Request Forgery

If the authentication architecture is susceptible to CSRF, appropriate protections must be implemented.

The final mechanism depends on the selected authentication strategy.

---

# 19. Transport Security

All production traffic must use HTTPS.

Sensitive information must never be transmitted over unsecured HTTP.

The application should redirect or otherwise prevent insecure production connections where appropriate.

---

# 20. API Security

APIs must:

- Authenticate protected requests.
- Authorize resources.
- Validate inputs.
- Apply rate limits.
- Return controlled errors.
- Avoid leaking internal implementation details.
- Avoid exposing secrets.
- Log relevant security events.

---

# 21. Rate Limiting

Rate limiting should be applied according to risk.

Higher-risk endpoints should receive stricter limits.

Examples:

- Login.
- Password recovery.
- Reservation creation.
- Order creation.
- Reward redemption.
- ContoCoin operations.
- Business administration.

---

# 22. Abuse Prevention

The system should detect and limit suspicious behavior.

Potential abuse patterns:

- Excessive reservation creation.
- Repeated reservation cancellation.
- Automated reward redemption.
- Unusual ContoCoin activity.
- Excessive API requests.
- Repeated failed authentication.
- QR token abuse.

The MVP may use basic rate limiting and logging before introducing advanced fraud detection.

---

# 23. Reservation Security

Reservation creation must be validated server-side.

The backend must verify:

- Venue exists.
- Venue is active.
- Date is valid.
- Time is valid.
- Party size is valid.
- Requested slot is available.
- User is authorized.

The server must perform a final availability check immediately before creating the reservation.

---

# 24. Order Security

Orders are security-sensitive because they may eventually involve money.

The backend must calculate:

- Item prices.
- Quantities.
- Modifiers.
- Discounts.
- Total.

The client must never be trusted to provide the final total.

Example of unsafe behavior:

Client:

```
total = 1 ARS
```

Server:

```
accepts total = 1 ARS
```

This must never happen.

---

# 25. Order Integrity

The server should create immutable historical snapshots of relevant order information.

At minimum:

- Item name.
- Price.
- Quantity.
- Applicable modifiers.

Later menu changes must not rewrite historical orders.

---

# 26. ContoCoin Security

ContoCoins must be treated as a controlled digital value.

Users must never be able to directly modify their balance.

Unsafe:

`PATCH /me`

```json
{
  "contoCoins": 999999
}
```

This must never be supported.

Coin changes should occur through authorized backend-controlled operations.

---

# 27. ContoCoin Ledger

ContoCoin changes should preferably be represented as transactions.

Examples:

- `+50` earned
- `-100` redeemed
- `+200` bonus
- `-50` adjustment

The system should maintain an auditable history.

Administrative adjustments must be traceable.

---

# 28. Reward Redemption Security

Reward redemption must validate:

- User identity.
- Reward existence.
- Reward availability.
- Expiration.
- Usage limits.
- Coin balance.
- User eligibility.

Coin deduction and reward creation should be performed atomically whenever possible.

---

# 29. QR Code Security

QR codes must not expose sensitive internal information unnecessarily.

Prefer opaque tokens.

Example:

`https://conto.app/qr/8f7a9c...`

instead of exposing:

`https://conto.app/venue/123/table/4`

where possible.

---

# 30. QR Token Requirements

QR tokens should:

- Be difficult to guess.
- Be revocable.
- Support expiration where appropriate.
- Be associated with an authorized venue or table.
- Be validated server-side.

Invalid or disabled tokens must fail safely.

---

# 31. Business Account Security

Business accounts require stronger controls because they can modify operational data.

Important actions include:

- Changing venue information.
- Editing menu prices.
- Managing reservations.
- Updating orders.
- Creating promotions.

These actions must always be authorized against the business identity.

---

# 32. Administrative Security

Administrative functionality should not be exposed casually.

Admin access should ideally include:

- Strong authentication.
- Restricted permissions.
- Audit logging.
- Session controls.
- Additional verification for highly sensitive operations where appropriate.

---

# 33. Secrets Management

Secrets must never be committed to source control.

Examples:

- Database credentials.
- API keys.
- Authentication secrets.
- Encryption keys.
- Third-party credentials.
- AI provider keys.

Secrets should be provided through secure environment/configuration mechanisms.

---

# 34. Environment Separation

The project should separate:

- Development.
- Testing.
- Staging.
- Production.

Production credentials must never be reused casually in development.

Development data should not automatically contain real user information.

---

# 35. Environment Variables

Sensitive configuration should be loaded from environment variables or a secure secrets manager.

Example:

```
DATABASE_URL
AUTH_SECRET
AI_API_KEY
STORAGE_ACCESS_KEY
```

Actual secret values must never appear in documentation or source code.

---

# 36. Database Security

Database access must be restricted.

The application should use:

- Strong credentials.
- Least-privilege database users.
- Encrypted connections where supported.
- Restricted network access.
- Regular backups.

The database should not be publicly accessible unless absolutely necessary.

---

# 37. Database Access

The application should not use a database administrator account for normal runtime operations.

Runtime credentials should have only the permissions required by the application.

Migration operations may use a separate privileged credential.

---

# 38. Personal Data Minimization

Only collect information that has a legitimate product purpose.

Avoid collecting unnecessary:

- Personal identifiers.
- Precise location history.
- Contact information.
- Behavioral data.

If data is not needed, do not collect it.

---

# 39. Location Privacy

Location can be useful for discovery.

However, Conto should minimize persistent storage of precise user location.

Where possible:

- Use approximate location for discovery.
- Process location transiently.
- Store only what is required.
- Clearly explain location usage.

---

# 40. Sensitive Data

The system should identify sensitive information and restrict access.

Examples:

- Authentication credentials.
- Private profile information.
- Reservation details.
- Business operational information.
- Internal analytics.
- Security logs.

Sensitive data should never be returned through public endpoints.

---

# 41. Logging

Security-relevant events should be logged.

Examples:

- Login success/failure.
- Password recovery.
- Permission failures.
- Administrative actions.
- Business account changes.
- Reward redemption.
- ContoCoin adjustments.
- Suspicious API activity.

---

# 42. Logging Privacy

Logs must not contain unnecessary sensitive information.

Never log:

- Passwords.
- Authentication secrets.
- API keys.
- Full payment credentials.
- Session tokens.

Logs should use identifiers and metadata where possible.

---

# 43. Audit Trail

Important operations should be auditable.

Examples:

- Who performed the action?
- What happened?
- When did it happen?
- Which resource was affected?
- What was the result?

Audit records should be protected from ordinary users.

---

# 44. Error Handling

Production errors must not expose:

- Stack traces.
- Database queries.
- Internal file paths.
- Secrets.
- Internal service credentials.
- Infrastructure details.

Users should receive safe, understandable errors.

Detailed diagnostics belong in protected logs.

---

# 45. File Upload Security

If users or businesses can upload images:

The system should validate:

- File type.
- File size.
- File extension.
- Actual file content where practical.

Uploads should be stored outside executable application directories.

Image processing should be performed safely.

---

# 46. Dependency Security

Third-party dependencies must be monitored for known vulnerabilities.

The project should:

- Keep dependencies reasonably updated.
- Remove unnecessary dependencies.
- Review critical vulnerabilities.
- Avoid abandoned packages when practical.

Dependency updates should be tested before deployment.

---

# 47. Supply Chain Security

The project should minimize unnecessary external dependencies.

For important dependencies:

- Prefer established packages.
- Pin or constrain versions appropriately.
- Review unexpected dependency changes.
- Use lockfiles.

---

# 48. Frontend Security

The frontend must not contain:

- Private API keys.
- Database credentials.
- Server secrets.
- Administrative secrets.

Anything shipped to the browser should be considered potentially visible to users.

---

# 49. Backend Security

The backend is responsible for enforcing:

- Authorization.
- Validation.
- Business rules.
- Sensitive calculations.
- Security policies.

The frontend should never be treated as a security boundary.

---

# 50. AI Security

If Conto uses AI services:

- Never expose provider API keys to the client.
- Validate AI inputs.
- Treat model output as untrusted data.
- Do not allow AI output to directly execute privileged operations.
- Apply authorization before performing tool actions.
- Limit sensitive data sent to external AI providers.

AI must not bypass normal backend security controls.

---

# 51. Prompt Injection

If AI features accept user-controlled content, the system must consider prompt injection.

User-provided text must not automatically override:

- System instructions.
- Security rules.
- Authorization.
- Tool permissions.

AI output must be treated as untrusted.

---

# 52. AI Tool Access

If the AI eventually has access to tools such as:

- Search.
- Reservations.
- Orders.
- Rewards.
- Business operations.

each tool must enforce its own authorization.

The AI must not be the only security layer.

---

# 53. Webhook Security

If external services send webhooks:

The system must verify authenticity using appropriate mechanisms such as:

- Signature verification.
- Shared secrets.
- Provider-specific verification.

Webhook endpoints should also validate payloads and prevent replay where necessary.

---

# 54. Idempotency and Replay Protection

Critical operations should protect against duplicate requests.

Especially:

- Reservations.
- Orders.
- Reward redemption.
- Coin transactions.
- External webhook processing.

Repeated delivery of the same operation should not unintentionally duplicate its effect.

---

# 55. Backups

Production data should be backed up according to the importance of the data.

Backups should be:

- Automated where practical.
- Access-controlled.
- Protected from unauthorized modification.
- Tested periodically.

A backup that has never been restored should not be assumed to work.

---

# 56. Recovery

The system should eventually define:

- Recovery Point Objective.
- Recovery Time Objective.
- Backup retention.
- Restoration procedures.

The exact values can be defined once infrastructure requirements are finalized.

---

# 57. Security Testing

The project should include security testing appropriate to the MVP.

At minimum:

- Authentication tests.
- Authorization tests.
- Input validation tests.
- API permission tests.
- Reservation integrity tests.
- Order integrity tests.
- ContoCoin integrity tests.
- Reward redemption tests.

---

# 58. Automated Security Checks

The development pipeline should eventually include:

- Dependency vulnerability scanning.
- Static analysis where practical.
- Secret detection.
- Linting.
- Automated tests.

Security checks should run before production deployment.

---

# 59. Production Deployment

Production deployments should:

- Use production-specific secrets.
- Use HTTPS.
- Restrict infrastructure access.
- Run database migrations safely.
- Avoid debug mode.
- Avoid exposing development tools.
- Monitor application health.

---

# 60. Security Headers

Where applicable, the application should configure appropriate security headers.

Examples may include:

- Content Security Policy.
- Strict Transport Security.
- X-Content-Type-Options.
- Referrer Policy.
- Frame protection.

The exact configuration depends on the frontend and deployment architecture.

---

# 61. CORS

Cross-Origin Resource Sharing must be explicitly configured.

Avoid allowing arbitrary origins in production.

Only trusted application origins should be permitted where applicable.

---

# 62. Account Deletion

Users should eventually have a way to request account deletion.

Deletion must consider:

- Legal requirements.
- Historical reservations.
- Historical orders.
- Reward records.
- Audit records.

Not every historical record should necessarily be physically deleted if retention is legally or operationally required.

---

# 63. Data Retention

The project should define retention policies for:

- User data.
- Orders.
- Reservations.
- Logs.
- Analytics.
- Security events.

Data should not be retained indefinitely without a reason.

---

# 64. Privacy by Design

Privacy should be considered during feature development.

Before adding a feature that collects personal data, ask:

- Why is the data needed?
- Can the feature work with less data?
- Who can access it?
- How long should it be retained?
- Can the user control it?

---

# 65. Security Incident Response

The project should eventually define a process for:

- Detecting an incident.
- Containing it.
- Investigating it.
- Recovering systems.
- Rotating compromised credentials.
- Assessing affected data.
- Communicating appropriately.
- Documenting lessons learned.

---

# 66. Security Priority

For the MVP, the highest priorities are:

**Priority 1**

- Authentication.
- Authorization.
- HTTPS.
- Secret management.
- Input validation.
- Database protection.

**Priority 2**

- Rate limiting.
- Audit logging.
- Reservation integrity.
- Order integrity.
- ContoCoin integrity.

**Priority 3**

- Dependency scanning.
- Automated security checks.
- Backup and recovery procedures.
- Advanced abuse detection.

---

# 67. Security Rule for MVP

Do not build a feature that requires bypassing security controls just because the feature is "only for the MVP."

MVP means:

- Minimum viable product.

It does not mean:

- Minimum viable security.

---

# 68. Final Security Principle

Conto must assume that:

- Clients can be modified.
- Requests can be forged.
- Users can behave maliciously.
- Business accounts can be compromised.
- External services can fail.
- AI output can be wrong or manipulated.
- Networks can be unreliable.

Therefore:

The backend is the final authority for identity, authorization, business rules, and critical state changes.

Security must protect the user, the business, and the integrity of the Conto ecosystem.
