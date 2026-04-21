# Security policy

Thanks for helping keep Draft0 and its users safe.

## Supported versions

Draft0 packages are developed in a single monorepo and published to npm under the `@draft0/*` scope. Only the **latest published version** on the `latest` npm dist-tag is actively supported with security fixes. Prereleases on the `next` dist-tag are not guaranteed to receive backports.

## Reporting a vulnerability

**Please do not open a public GitHub issue for security reports.**

Instead, report vulnerabilities privately through GitHub's security advisory workflow:

- [Open a private security advisory](https://github.com/arsnl/draft0/security/advisories/new)

Include as much of the following as you can:

- The affected package and version (e.g. `@draft0/oxlint@0.1.2`).
- A description of the issue and its impact.
- Steps to reproduce, or a proof-of-concept if possible.
- Any suggested fix or mitigation.

## What to expect

- **Acknowledgement:** you can expect an initial response within a few business days.
- **Triage:** the maintainers will confirm the issue, assess severity, and agree on a fix timeline with you.
- **Fix & disclosure:** a patch will be released on npm, and the advisory will be published coordinated with the fix. Reporters are credited in the advisory unless they prefer anonymity.

## Scope

In scope:

- Code published under the `@draft0/*` npm scope.
- This repository's build, release, and CI pipelines insofar as they affect published artifacts.

Out of scope:

- Vulnerabilities in third-party dependencies (please report those upstream — we will update once a fix is available).
- Issues that require privileged access to a user's machine or account to exploit.
- Theoretical weaknesses without a demonstrable impact on Draft0 users.

Thank you for contributing to the security of the Draft0 ecosystem.
