# GenAI Test Manager Platform

A modern test management platform powered by AI to help teams create, organize, and execute software tests using natural language.

## Architecture

This project uses a monorepo structure with three main services:

- **Backend**: NestJS application providing a RESTful API with TypeScript
- **Frontend**: Next.js UI application with TypeScript and TailwindCSS
- **Agent**: Test execution service that runs Playwright tests

## Features

- 🧠 Generate test cases from natural language descriptions using AI
- 📊 Organize tests by projects
- 🚀 Execute tests and view results
- 👥 User management with role-based access control

## Getting Started

### Prerequisites

- Node.js (v18+)
- Docker and Docker Compose
- pnpm (for package management)

### Setup

1. Clone the repository
2. Run `pnpm install`
3. Copy `.env.example` to `.env` and configure environment variables
4. Run `docker-compose up -d` to start dependencies
5. Run `pnpm dev` to start all services locally

## Development

This project is built as a monorepo using pnpm workspaces.

```bash
# Start all services
pnpm dev

# Start specific service
pnpm dev:backend
pnpm dev:frontend
pnpm dev:agent

# Build all services
pnpm build
```

## License

MIT
