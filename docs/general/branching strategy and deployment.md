# Branching Strategy Guide

> **Disclaimer:**  
> This guide blends practical team learnings with industry-standard workflows used across fintech, banking, SaaS, and enterprise engineering environments.  
> It is meant to help teams adopt a branching strategy that **balances agility and governance** based on project maturity.

---

## Purpose

A well-defined branching strategy ensures:
- **Code stability** across environments  
- **Parallel development** without conflict  
- **Predictable deployments** with rollback options  
- **Traceability** between commits, releases, and tickets  

This guide compares **lightweight modern practices** and **formal enterprise workflows**, helping teams evolve from one to the other as they scale.

## Core Principles

| Principle | Description |
|------------|--------------|
| **Isolation** | Each branch isolates specific work (feature, bugfix, release) to prevent interference. |
| **Integration** | Changes are merged frequently to detect integration issues early. |
| **Promotion Path** | Code progresses through structured environments (Dev → QA → Staging → Prod). |
| **Automation** | CI/CD handles builds, tests, tagging, and deployments to minimize human error. |
| **Governance** | Code reviews, merge approvals, and version tagging ensure accountability and auditability. |


## Branch Overview (Side-by-Side)

| Branch | Lightweight Workflow | Enterprise Workflow |
|--------|----------------------|---------------------|
| **`main`** | Stable, production-ready branch. CI automatically deploys tagged versions to Prod. | Same — considered the *single source of truth* for production code. Only release managers can merge. |
| **`develop`** | Central integration branch where all features merge for testing and staging deployment. | Same, but with stricter access control and automated quality gates. |
| **`feature/*`** | Short-lived branches for individual tasks or stories (merged via PR). | Same, but must link to tracked tickets (e.g., JIRA ID) and undergo peer review + static analysis. |
| **`release/*`** | Optional; used before large releases for final regression. | Mandatory; created per version (`release/2.3.0`) for QA, sign-off, and UAT. |
| **`hotfix/*`** | For urgent production fixes merged into both `main` and `develop`. | Same, but requires SRE or release lead approval before deployment. |

## Workflow Comparison

### 🔹 Lightweight Workflow (for Agile or Early-Stage Teams)

```
feature → develop → main
```

**Process:**
1. Developer branches from `develop`
2. Commits, tests, and raises PR
3. Peer review → merge to `develop`
4. After testing, changes are merged to `main` for release
5. CI tags version and deploys automatically

**Ideal for:**
- Small to mid-sized teams
- Continuous delivery (frequent releases)
- Startups and agile environments

**Advantages:**
- Simple and fast
- Minimal overhead
- Encourages frequent integration

**Considerations:**
- Requires disciplined testing and automation
- Limited control for staged sign-offs

### 🔸 Enterprise Workflow (for Regulated or Large Organizations)

```
feature → develop → release → main
                 ↘ hotfix ↗
```

**Process:**
1. Features merge into `develop` for integration
2. Once a release window begins, `release/<version>` is cut from `develop`
3. QA validates, performs UAT, and regression testing
4. Approved changes merge to `main`
5. `main` is tagged (e.g., `v2.3.0`) and deployed to production
6. Changes are merged back to `develop` to stay in sync

**Ideal for:**
- Enterprises or regulated industries (banking, healthcare, insurance)
- Version-controlled, multi-environment CI/CD pipelines
- Teams with distinct QA, staging, and release phases

**Advantages:**
- Controlled release process
- Clear traceability between versions and deployments
- Simplifies rollback and auditability

**Considerations:**
- Slower delivery cycle
- Requires release coordination and process enforcement

## Environment Mapping

| Environment | Lightweight Model | Enterprise Model |
|--------------|------------------|------------------|
| **Local / Dev** | `feature/*` | `feature/*` |
| **Staging / QA** | `develop` | `develop` and `release/*` |
| **Pre-Prod / UAT** | Optional | `release/*` |
| **Production** | `main` | `main` |
| **Hotfix Path** | `hotfix/*` → `main` & `develop` | `hotfix/*` → `main` & `develop` |

## Naming Conventions

| Branch Type | Convention | Example |
|--------------|-------------|----------|
| Feature | `feature/<ticket-id>-<short-desc>` | `feature/GEFT-231-user-auth` |
| Bugfix | `bugfix/<ticket-id>-<short-desc>` | `bugfix/GEFT-244-transaction-timeout` |
| Release | `release/<version>` | `release/2.3.0` |
| Hotfix | `hotfix/<short-desc>` | `hotfix/api-crash-prod` |

**Tip:** Always include the issue ID to maintain traceability with your project management tool.

## CI/CD Integration

- **Automated Builds:** Trigger on PR creation and merge  
- **Linting & Tests:** Run unit, integration, and security tests before merge  
- **Deploy Rules:**  
  - `develop` → staging environment  
  - `main` → production  
  - `release/*` → pre-prod  
- **Tagging:** Auto-generate version tags based on commit type (SemVer)  
- **Rollback:** Enable automatic redeploy of last successful version  

## Governance and Access Control

| Aspect | Lightweight | Enterprise |
|--------|--------------|------------|
| **Branch Protection** | Only `main` is protected | `main`, `develop`, and `release/*` are protected |
| **Approvals Required** | 1–2 reviewers | 2+ reviewers + QA or release sign-off |
| **CI/CD Checks** | Tests and lints | Tests, security scans, SAST/DAST |
| **Versioning** | Optional tags | Mandatory SemVer tagging with release notes |
| **Audits** | Minimal | Detailed audit trail via ticket + commit links |

## Continuous Improvement

- Conduct **branching retrospectives** every quarter to evaluate if your model fits the team’s release cadence  
- Document **release naming conventions** and **branching rules** in the team Wiki  
- Automate **version bumping** and **changelog generation**  
- Periodically clean up stale branches with GitHub Actions or scripts  


## Transition Path (How to Scale Maturity)

| Phase | Description | When to Move Up |
|--------|--------------|----------------|
| **Stage 1:** Simplified Workflow | `feature → develop → main` | Early development stage; small team (<5 devs) |
| **Stage 2:** GitFlow Lite | Add `release/*` branches for structured releases | Team scaling, multiple feature streams |
| **Stage 3:** Full Enterprise GitFlow | Add governance, protected branches, approval gates | Regulated industry, multi-region deployments |

---

## Good reads and References

- [GitFlow Workflow by Vincent Driessen](https://nvie.com/posts/a-successful-git-branching-model/)  
- [Atlassian Git Branching Strategies](https://www.atlassian.com/git/tutorials/comparing-workflows/gitflow-workflow)  
- [Trunk-Based Development](https://trunkbaseddevelopment.com/)  
- [Semantic Versioning (SemVer)](https://semver.org/)  
- [GitHub Protected Branch Rules](https://docs.github.com/en/repositories/configuring-branches-and-merges-in-your-repository/managing-protected-branches)  
