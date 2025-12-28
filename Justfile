set unstable
set positional-arguments

# List available recipes
default:
  @just --list

# Build the site
build:
  pnpm exec astro build

# Clean build artifacts
clean:
  rm -rf dist .astro

# Deploy to production
deploy:
  pnpm exec wrangler deploy

# Deploy to preview environment
deploy-preview pr_number:
  pnpm exec wrangler deploy --env preview --name tbhb-dev-preview-pr-{{pr_number}}

# Start Astro hot reload server (faster, but no directory index for public/)
dev:
  pnpm dev

# Format code
format:
  pnpm exec biome format --write .

# Fix code issues
fix:
  pnpm exec biome check --write .

# Install all dependencies (Node.js)
install: install-node install-python

# Install only Node.js dependencies
install-node:
  pnpm install

# Install Python dependencies
install-python:
  uv sync

# Run Lighthouse
lighthouse *args:
  pnpm exec lighthouse "$@"

# Run Lighthouse CI
lighthouse-ci:
  pnpm exec lhci autorun

# Run all linters
lint: lint-astro lint-web lint-markdown lint-prose lint-spelling

# Lint Astro files
lint-astro:
  pnpm exec astro check

# Lint Markdown files
lint-markdown:
  pnpm exec markdownlint-cli2 "**/*.md"

# Lint prose in documentation
lint-prose:
  uv run vale .

# Lint spelling
lint-spelling:
  uv run codespell

# Lint web files (CSS, HTML, JS, JSON)
lint-web:
  pnpm exec biome check .

# Run pre-commit hooks on changed files
prek:
  uv run prek

# Run pre-commit hooks on all files
prek-all:
  uv run prek --all-files

# Install pre-commit hooks
prek-install:
  prek install

# Preview the built site locally
preview:
  pnpm exec astro preview

# Sync Vale styles and dictionaries
vale-sync:
  uv run vale sync
