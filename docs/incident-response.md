# Incident response: КодСтарт

This checklist covers an availability incident for the production demo site.

## Triage

1. Confirm the alert and check the site from a browser.
2. Review the latest GitHub Actions run and GitHub Pages deployment status.
3. Record the start time (UTC), user impact, suspected cause, and actions taken. Do not include personal data or credentials.

## Recovery

1. Confirm the site returns HTTP 200 and the expected page title.
2. Confirm the UptimeRobot monitor reports **Up** and note the recovery time.
3. Record the cause, resolution, and any follow-up action.
