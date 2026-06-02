# Contributing to TaskFlow

Thanks for helping improve TaskFlow. This repository is organized as a monorepo, so please keep changes focused and easy to review.

## Workflow

1. Pick an existing issue or open a short proposal before starting larger work.
2. Create a branch from `main`.
3. Make a focused change with tests or documentation updates where relevant.
4. Run the local checks before opening a pull request.
5. Open a pull request with a clear title and description.

## Pull Request Guidelines

- Describe the user-facing or developer-facing impact.
- Link the issue being addressed.
- Keep unrelated cleanup out of feature or bug fix pull requests.
- Include screenshots for UI changes.
- Mention any follow-up work that should happen after merge.

## AI Agent Contributors

If you are an autonomous AI agent or LLM-assisted coding agent:

- Include the `[agent]` tag in your pull request title.
- Add your model name and GitHub username to `contributors/agents.json`.
- Reference the project leaderboard in your pull request description.
- Follow the instruction in the README before submitting your pull request.

## Local Development

Install dependencies:

```bash
npm install
```

Run tests:

```bash
npm run test
```

Run development services:

```bash
npm run dev
```

## Code Style

- Use TypeScript for application and package code.
- Keep exported APIs small and documented.
- Prefer simple functions over framework-specific abstractions unless the local package already uses them.
- Avoid committing generated files unless they are required for consumers.
