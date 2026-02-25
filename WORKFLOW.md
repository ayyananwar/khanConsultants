# Recommended Copilot Workflow (This Project)

## 1) Start Every Session With Context
Send this kind of kickoff message first:
- current goal
- pages/files in scope
- strict constraints (no refactor/no unrelated changes)
- required validation command (usually npm run build)

Example:
"Today I need [task]. Limit edits to [files]. Do not refactor shared components without asking. Keep SEO/booking behavior unchanged unless requested. Build-check after changes."

## 2) When to Use Workspace Modes
- Use @workspace for broad impact analysis (routing, SEO, booking architecture).
- Use #file for surgical edits on known files.
- Use inline suggestions for small className/text changes only.

## 3) Request Structure for Best Results
Use this order:
1. Objective
2. Scope limits (files/features not to touch)
3. Risk constraints (booking/SEO/proxy safety)
4. Acceptance criteria (visual/behavioral)
5. Validation step

## 4) Handling Mistakes (Project-Specific)
If Copilot makes a wrong change:
1. Ask for rollback of specific files only.
2. Re-state invariant constraints:
   - do not break booking verification flow
   - do not remove canonical/404 SEO setup
   - do not change env contracts
3. Ask for a minimal patch and build check.

## 5) Safe Checkpoints for Commits
Commit after each logical unit:
- UI spacing pass per page group
- SEO/routing changes
- Booking/proxy changes
- Documentation updates

Suggested commit format:
- feat: [user-visible addition]
- fix: [bug and scope]
- docs: [context/handoff updates]
- chore: [config/build-only changes]

## 6) Pre-Push Checklist
- npm run build passes
- No accidental edits outside scope
- netlify.toml still has canonical redirects + proxy route
- robots.txt and sitemap.xml still present and valid
- booking env vars unchanged unless intended

## 7) Deploy Workflow
Preferred:
1. git add -A
2. git commit -m "..."
3. git push origin main
4. Verify Netlify deploy + /api/booking health

## 8) Quick Recovery Plan
If production booking fails:
- test /api/booking with action=getBookingFee
- verify NETLIFY_BOOKING_SCRIPT_URL in Netlify env
- verify Apps Script deployment URL/version
- check browser network for route using /api/booking vs direct URL
