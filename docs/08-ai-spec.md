# Conto — AI Specification

**Document status:** Draft
**Version:** 0.1
**Product:** Conto
**Purpose:** Define the role, scope, constraints, security requirements, and operational rules for AI within the Conto MVP.

---

# 1. AI Principles

AI within Conto must follow these principles:

1. AI is an assistant, not the source of truth.
2. AI must never independently control authorization, reservation availability, order totals, ContoCoins, rewards, payments, or security decisions.
3. AI-generated structured data must be validated before use.
4. AI output must never directly execute privileged operations.
5. AI should enhance the product without making it less reliable.
6. The core system must remain deterministic.
7. AI must not become a single point of failure.

---

# 2. AI Scope

AI features in the MVP are limited to:

**Must have for MVP:**

- Recommendation explanations.
- Personalized recommendation reasons.

**Should have for MVP:**

- Natural-language discovery.
- Intent extraction.
- Business content assistance.

**Could have for MVP:**

- Conversational assistant.
- Advanced recommendation ranking.

**Not in MVP:**

- Autonomous multi-step agents.
- Complex business automation.
- AI-controlled financial operations.

The MVP must remain fully functional if all AI features fail.

---

# 3. AI Architecture

The application should use an abstracted AI service layer.

Conceptually:

```
AIService
   ├── LocalModelProvider
   ├── FreeCloudModelProvider
   └── PaidModelProvider
```

The initial implementation may use only one provider.

The architecture must allow changing providers without rewriting the application.

AI configuration should be centralized:

```
AI_PROVIDER
AI_MODEL
AI_BASE_URL
AI_MAX_TOKENS
AI_TEMPERATURE
```

Secrets must remain outside source control.

---

# 4. Development AI vs Product AI

The architecture must maintain two independent AI configurations:

```
OPEN_CODE_AI
    ↓
Developer productivity
```

```
CONTO_AI
    ↓
User-facing product functionality
```

The model that writes code does not need to be the model that powers Conto's user-facing AI.

They may use the same model initially, but they must not be architecturally coupled.

The coding model is selected based on:

- TypeScript performance.
- React performance.
- Next.js performance.
- SQL performance.
- Long-context reasoning.
- Cost (free or local preferred).

The production model is selected based on:

- User experience.
- Latency.
- Cost.
- Quality.
- Privacy.
- Availability.

---

# 5. AI in Discovery and Recommendations

AI may assist with:

- Generating personalized recommendation reasons.
- Explaining why a venue is relevant to a user.
- Matching user preferences to venue characteristics.

AI must never:

- Invent venue characteristics that do not exist in the database.
- Override deterministic recommendation logic without validation.
- Assume a user's preferences without explicit signals or behavioral data.

Recommendation explanations should be concise and grounded in actual venue data.

Example:

> "Quiet atmosphere and great coffee."

Not:

> "This venue has a 94% match score."

---

# 6. AI in Search

AI may assist with:

- Understanding natural-language search queries.
- Extracting intent from user input.
- Mapping free-text queries to filterable attributes.

AI must not:

- Return results for venues that do not match the query.
- Bypass the search API.
- Invent search results.

Search must remain functional without AI.

---

# 7. AI in Personalization

AI may assist with:

- Interpreting user preferences from onboarding.
- Adjusting recommendations based on behavior.
- Identifying patterns in user interactions.

AI must never:

- Create rigid user categories.
- Make preferences permanent without user consent.
- Override the user's ability to explore everything.

Users must always have a clear option to:

- Skip personalization.
- Reset preferences.
- Explore everything.

---

# 8. AI in Venue Information

AI may assist with:

- Generating venue descriptions.
- Suggesting atmosphere tags.
- Improving venue copy.

AI-generated venue content must:

- Be reviewed by the business before publishing.
- Not invent factual claims about the venue.
- Not fabricate amenities, services, or attributes.

Business users must be able to edit or reject AI-generated content.

---

# 9. AI in Menus

AI may assist with:

- Menu discovery.
- Item recommendations based on preferences.
- Suggesting menu descriptions.

However:

- Menu items must come from the actual menu.
- Prices must come from the backend.
- Order totals must be calculated by the backend.
- Order creation must go through the normal order API.

AI must not invent menu items, prices, or availability.

---

# 10. AI in Ordering

AI may assist with:

- Suggesting items based on user preferences.
- Helping users customize orders.
- Explaining order status.

AI must never:

- Calculate order totals.
- Modify prices.
- Submit orders without backend validation.
- Override item availability.

All order operations must go through the standard order API.

---

# 11. AI in Reservations

AI may assist with:

- Suggesting suitable times based on user preferences.
- Explaining reservation availability.
- Recommending venues for specific occasions.

AI must never:

- Create reservations without explicit user confirmation.
- Override availability checks.
- Modify reservation status.
- Bypass the reservation API.

All reservation operations must go through the standard reservation API.

---

# 12. AI and Customer Support

AI may eventually assist with:

- Answering common questions.
- Guiding users through flows.
- Explaining features.

AI must never:

- Access private user data without authorization.
- Modify account settings.
- Process refunds or handle payments.
- Override security policies.

---

# 13. AI and Business Operations

Future AI capabilities may help businesses:

- Write venue descriptions.
- Improve menu descriptions.
- Create promotional copy.
- Summarize business activity.
- Analyze customer trends.
- Suggest promotions.

AI-generated business content must remain editable by the business.

AI must not autonomously publish content without business approval.

---

# 14. AI Content Approval

AI-generated content should not automatically become public in situations where incorrect content could materially affect users.

For business-facing generated content:

```
Generate
   ↓
Preview
   ↓
Business Review
   ↓
Approve
   ↓
Publish
```

---

# 15. AI Recommendations and Personalization Engine

The personalization engine may use AI to improve recommendations over time.

Signals that may be used:

- User-selected preferences.
- Saved venues.
- Viewed venues.
- Search queries.
- Categories explored.
- Reservation history.
- Order history.
- Reward interactions.

For the MVP, personalization should remain simple.

A rules-based recommendation system is acceptable initially.

The architecture should allow a more sophisticated recommendation model to be introduced later.

AI-generated recommendations must:

- Be grounded in actual venue data.
- Be explainable in simple terms.
- Allow the user to override or ignore them.

---

# 16. AI and Core Business Rules

AI may assist with:

- Menu discovery.
- Item recommendations.
- Natural-language ordering.

However:

- Menu items must come from the actual menu.
- Prices must come from the backend.
- Order totals must be calculated by the backend.
- Order creation must go through the normal order API.

---

# 17. AI and ContoCoins

AI may explain:

- How ContoCoins work.
- How many coins the user has.
- What rewards may be relevant.

The model must never directly modify a coin balance.

Coin operations must use authorized backend services.

---

# 18. AI and Business Users

Future AI capabilities may help businesses:

- Write venue descriptions.
- Improve menu descriptions.
- Create promotional copy.
- Summarize business activity.
- Analyze customer trends.
- Suggest promotions.

AI-generated business content must remain editable by the business.

---

# 19. AI Content Approval

AI-generated content should not automatically become public in situations where incorrect content could materially affect users.

For business-facing generated content:

```
Generate
   ↓
Preview
   ↓
Business Review
   ↓
Approve
   ↓
Publish
```

---

# 20. AI Privacy

Only the minimum necessary user information should be sent to an external AI provider.

Avoid sending:

- Passwords.
- Authentication tokens.
- Payment credentials.
- Unnecessary personal information.
- Internal security data.

---

# 21. AI Provider Abstraction

The application should not assume that one AI provider will always be used.

Conceptually:

```
AIService
   ├── LocalModelProvider
   ├── FreeCloudModelProvider
   └── PaidModelProvider
```

The initial implementation may use only one provider.

---

# 22. Cost Strategy

The MVP should prioritize:

- Free models.
- Local models.
- Free inference providers.
- Low-cost paid providers only when necessary.

The architecture must allow changing providers without rewriting the application.

---

# 23. AI Model Selection Criteria

The model used by Conto should be evaluated according to:

- Coding/reasoning quality where relevant.
- General reasoning quality.
- Instruction following.
- Context length.
- Structured output support.
- Latency.
- Availability.
- Free usage limits.
- Local hardware requirements.
- License.
- Community support.
- Reliability.

A model should not be selected solely because it is popular.

---

# 24. OpenCode Development Model

OpenCode is the primary AI-assisted coding environment for the project.

The coding model should be selected separately from the production AI model.

This distinction is important.

```
Development AI
        ≠
Product AI
```

The model that writes code does not necessarily need to be the model that powers Conto's user-facing AI.

---

# 25. OpenCode Model Requirements

The coding model should provide strong performance for:

- TypeScript.
- React.
- Next.js.
- SQL.
- PostgreSQL.
- API design.
- Testing.
- Debugging.
- Refactoring.

It should also support long-context project reasoning.

---

# 26. OpenCode Cost Requirement

The initial OpenCode workflow should use a model that can be accessed:

- Free of charge, or
- Locally without per-request API costs.

Paid models may be used later if the project requires higher performance.

---

# 27. Recommended Development Strategy

Start with a strong free-access coding model.

If performance becomes insufficient:

```
Free model
   ↓
Evaluate limitations
   ↓
Optimize prompts/context
   ↓
Try another free/local model
   ↓
Only then consider paid inference
```

Do not introduce paid inference before establishing that the free workflow is insufficient.

---

# 28. Local Development Models

The project should remain compatible with local inference tools such as:

- Ollama.
- Other OpenAI-compatible local inference servers.

The exact model should be documented in the development setup once selected.

---

# 29. Model Configuration

AI model configuration should not be hard-coded throughout the application.

Use a centralized configuration.

Conceptually:

```
AI_PROVIDER
AI_MODEL
AI_BASE_URL
AI_MAX_TOKENS
AI_TEMPERATURE
```

Secrets must remain outside source control.

---

# 30. Temperature and Determinism

For structured application tasks, prefer lower randomness.

Examples:

- Intent extraction.
- Structured recommendations.
- Data transformation.

More creative settings may be appropriate for:

- Marketing copy.
- Business descriptions.
- Creative content.

The configuration should be task-specific where necessary.

---

# 31. Prompt Management

Prompts should be version-controlled.

Do not bury critical prompts inside arbitrary route handlers.

Prompts should be organized by capability.

Example:

```
prompts/
├── venue-discovery/
├── recommendations/
├── business-copy/
└── assistant/
```

---

# 32. Prompt Versioning

Important production prompts should have identifiable versions.

Example:

```
venue-discovery-v1
venue-discovery-v2
```

Changes to critical prompts should be tested.

---

# 33. AI Evaluation

AI features must have evaluation criteria.

Evaluation should measure:

- Correctness.
- Relevance.
- Grounding.
- Safety.
- Latency.
- Cost.

A model should not be considered successful merely because its responses sound good.

---

# 34. AI Test Cases

Maintain representative test cases.

Example:

User:

```
"Quiero un café tranquilo cerca de mí."
```

Expected:

```
category = coffee
atmosphere = quiet
location = current user location
```

The exact result can vary, but the intent extraction should remain valid.

---

# 35. AI Fallbacks

If AI fails:

- The application should remain usable.
- Core discovery should still work.
- Search should still work.
- Reservations should still work.
- Orders should still work.

AI should enhance the product rather than become a single point of failure.

---

# 36. Timeout Handling

AI requests should have reasonable timeouts.

The UI should communicate when an AI operation is taking longer than expected.

Do not leave users waiting indefinitely.

---

# 37. Retry Strategy

Retries should be limited.

Avoid repeatedly retrying expensive AI requests.

Retry only transient failures when appropriate.

---

# 38. AI Observability

Where privacy allows, monitor:

- Request latency.
- Error rate.
- Token usage.
- Provider failures.
- Model failures.
- Structured-output validation failures.

Sensitive prompt content should not be logged indiscriminately.

---

# 39. AI Security

AI must be considered an untrusted component.

The model must never:

- Bypass authorization.
- Directly access the database without controlled tools.
- Execute arbitrary commands.
- Modify critical state without backend validation.
- Reveal secrets.
- Override security policies.

---

# 40. Tool Calling

If AI tool calling is introduced, tools should expose narrow capabilities.

Prefer:

```
searchVenues()
getVenue()
checkAvailability()
createReservation()
```

over:

```
executeDatabaseQuery()
```

AI should interact with controlled domain-level tools.

---

# 41. Tool Authorization

Every tool call must validate authorization independently.

The AI model cannot grant itself permission.

Example:

AI requests:

```
getReservation(123)
```

Backend:

```
verify current user owns reservation 123
```

Backend:

```
allow or deny
```

---

# 42. Prompt Injection Defense

User-controlled text should be treated as untrusted.

Instructions contained inside:

- Venue descriptions.
- Menu descriptions.
- Reviews.
- Search queries.
- Business content.

must not override system-level security instructions.

---

# 43. AI Output Validation

Generated structured data must be validated before use.

Example:

```
AI Output
   ↓
Schema Validation
   ↓
Business Validation
   ↓
Execution
```

Never:

```
AI Output
   ↓
Direct Execution
```

---

# 44. AI Provider Failure

If an external provider is unavailable:

- Return a graceful fallback.
- Do not expose provider internals.
- Log the failure securely.
- Preserve the core user experience.

---

# 45. Production AI

The production AI model may differ from the OpenCode development model.

The production model should be chosen according to:

- User experience.
- Latency.
- Cost.
- Quality.
- Privacy.
- Availability.

---

# 46. Development AI vs Product AI

The architecture should explicitly maintain two independent configurations.

```
OPEN_CODE_AI
    ↓
Developer productivity
```

```
CONTO_AI
    ↓
User-facing product functionality
```

They may use the same model initially, but they should not be architecturally coupled.

---

# 47. Initial AI Scope

The MVP should prioritize AI features with high value and low complexity.

Recommended initial scope:

**Priority 1**

- Natural-language discovery.
- Intent extraction.
- Recommendation explanations.

**Priority 2**

- Personalized recommendations.
- Business content assistance.

**Priority 3**

- Conversational assistant.
- Advanced recommendation ranking.

**Later**

- Autonomous multi-step agents.
- Complex business automation.

---

# 48. What We Explicitly Avoid

The MVP should avoid:

- Autonomous agents with unrestricted access.
- AI-controlled database access.
- AI-controlled financial operations.
- AI-only authorization.
- AI-generated facts without grounding.
- Unnecessary AI calls.
- AI dependencies for core application availability.

---

# 49. AI Decision Rule

Before adding an AI feature, ask:

- Does AI provide meaningful value?
- Can the feature work reliably without AI?
- What happens if AI fails?
- What data must be sent to the model?
- Can the output be validated?
- What does the feature cost?
- Can the model be replaced later?

---

# 50. Final AI Principle

AI should make Conto feel smarter without making Conto less reliable.

The core system remains deterministic.

AI provides:

- understanding,
- personalization,
- discovery,
- and assistance.

The backend remains responsible for:

- truth,
- authorization,
- transactions,
- and critical state.
