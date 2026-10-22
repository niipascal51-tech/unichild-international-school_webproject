# Contributing to the Unichild International School Project

## Workflow
1. Check the relevant GitHub issue and confirm scope with the team.
2. Work on the agreed branch; do not push directly to the release branch unless the team explicitly permits it.
3. Make focused changes and use descriptive commit messages.
4. Test the change using the commands defined by the repository's `Makefile` and project instructions.
5. Open a pull request when required and explain what changed, how it was tested, and any known limitations.
6. Request the required review and address feedback before merging.
7. Update relevant documentation and the linked issue.

## Quality and security
- Do not commit credentials, API keys, passwords, `.env` files, or private student records.
- Use anonymized or placeholder data in examples and screenshots.
- Record AI-assisted work according to `AI_USAGE.md` and `AI_USAGE_LOG.md`.
- Do not claim a feature or test is complete without evidence.
- Keep documentation aligned with the actual implementation.

## Standard commands
Inspect the root `Makefile` and project prerequisites before running:
```bash
make setup
make lint
make test
```
Report actual command results. If a command is not applicable or fails, document that accurately.
