# Conto

Discover, reserve, order and enjoy — all in one place.

## Tech Stack

- **Frontend:** Next.js 15, React 19, Tailwind CSS
- **Backend:** Next.js API Routes, Prisma ORM
- **Database:** PostgreSQL
- **Language:** TypeScript (strict mode)
- **Testing:** Vitest
- **Linting:** ESLint, Prettier

## Getting Started

### Prerequisites

- Node.js 18+ (LTS recommended)
- pnpm
- PostgreSQL

### Setup

1. Install dependencies:

   ```bash
   pnpm install
   ```

2. Copy the environment file:

   ```bash
   cp .env.example .env
   ```

3. Update `DATABASE_URL` in `.env` with your PostgreSQL connection string.

4. Generate the Prisma client:

   ```bash
   pnpm db:generate
   ```

5. Push the schema to the database:

   ```bash
   pnpm db:push
   ```

6. Seed the database:

   ```bash
   pnpm db:seed
   ```

7. Start the development server:
   ```bash
   pnpm dev
   ```

Visit [http://localhost:3000](http://localhost:3000) to see the application.

## Development Commands

| Command             | Description                    |
| ------------------- | ------------------------------ |
| `pnpm dev`          | Start development server       |
| `pnpm build`        | Build for production           |
| `pnpm start`        | Start production server        |
| `pnpm lint`         | Run ESLint                     |
| `pnpm format`       | Format code with Prettier      |
| `pnpm format:check` | Check formatting               |
| `pnpm typecheck`    | Run TypeScript type checker    |
| `pnpm test`         | Run Vitest tests               |
| `pnpm db:generate`  | Generate Prisma client         |
| `pnpm db:push`      | Push schema to database        |
| `pnpm db:seed`      | Seed database with sample data |
| `pnpm db:reset`     | Reset and reseed database      |

## Project Structure

```
conto/
├── app/                    # Next.js App Router pages and API routes
│   ├── api/                # API route handlers
│   ├── explore/            # Explore page
│   ├── venues/             # Venue detail pages
│   ├── saved/              # Saved venues (placeholder)
│   ├── activity/           # Activity (placeholder)
│   └── profile/            # Profile (placeholder)
├── components/             # Reusable UI components
│   ├── ui/                 # Base UI components (Button, Input, Card, Badge)
│   ├── layout/             # Layout components (Navbar)
│   └── venues/             # Venue-specific components
├── lib/                    # Utility functions and validators
├── server/                 # Server-side business logic
├── prisma/                 # Database schema and seed data
└── tests/                  # Test files
```

## Database Schema

The application uses the following core entities:

- **Business** — owns and manages venues
- **Venue** — physical locations users can discover
- **VenueCategory** — primary venue classification
- **VenueTag** — characteristics for discovery
- **VenueImage** — photos associated with venues

## API Endpoints

| Method | Endpoint                | Description                               |
| ------ | ----------------------- | ----------------------------------------- |
| GET    | `/api/venues`           | List venues with filtering and pagination |
| GET    | `/api/venues/[venueId]` | Get venue details                         |

## License

Private — All rights reserved.
