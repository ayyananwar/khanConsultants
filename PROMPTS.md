# Prompt Library — Khan Consultants

Use these prompts as templates in new Copilot sessions.

## 1) Add a New Feature (Safe Pattern)
Prompt:
"Implement [feature] in this project using existing patterns only. Before coding, list exact files to touch and risk points. Keep changes minimal, preserve SEO routing behavior, and do not refactor unrelated code. After changes, run npm run build and summarize only deltas."

## 2) Debug a Production Issue
Prompt:
"Debug this issue: [describe symptom]. First reproduce/inspect likely files. Then propose root cause and smallest fix. Flag any behavior changes that could affect booking flow, SEO, routing, or Netlify function proxy. Apply fix and run npm run build."

## 3) Booking Flow Change (High-Risk Area)
Prompt:
"Update Birth Certificate booking flow for [change]. Do not alter payment verification semantics or proxy/env contracts. Show which parts are UI-only vs API-contract-impacting. Keep backward compatibility with current Apps Script response envelope."

## 4) SEO Change Request
Prompt:
"Implement this SEO change: [request]. Preserve canonical host redirects, 404 noindex strategy, robots/sitemap integrity, and SeoManager schema behavior. Mention any Search Console side-effects expected after deploy."

## 5) Pre-Commit Review
Prompt:
"Review my current workspace changes before commit. Focus on: accidental scope creep, broken routes, SEO regressions, booking flow break risk, env var usage, and mobile layout regressions. Give a concise go/no-go list."

## 6) Explain Complex Code
Prompt:
"Explain [file/symbol] in this project in plain language: purpose, inputs/outputs, side effects, dependencies, and failure modes. Include what not to change casually and why."

## 7) Safe Refactor Request
Prompt:
"Refactor only [target file/symbol] for readability without changing behavior. Ask me before touching shared components or API contracts. Keep class names/tokens style-compatible and preserve route/SEO semantics."

## 8) Add Tests (When Introduced)
Prompt:
"Add minimal tests for [feature] with current architecture. Prefer focused tests around route metadata, API response mapping, and helper logic. Avoid broad rewrites. Explain any testability constraints in this codebase."

## 9) Mobile Layout Fixes
Prompt:
"Fix this mobile UI issue: [issue]. Keep desktop unchanged unless explicitly needed. Use existing Tailwind patterns, avoid introducing new design language, and run build after changes."

## 10) Deploy-Readiness Checklist
Prompt:
"Create a deploy readiness checklist for current changes including: env vars, Netlify routing, booking proxy health, SEO assets, build output, and post-deploy validation steps."
