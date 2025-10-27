# Code Review Practices

Code reviews ensure **code quality, maintainability, performance**, and **team learning**. The goal is to **improve the codebase**, **share knowledge**, and **prevent defects** before they reach production.

> **Disclaimer:**  
> The practices outlined in this document are based on collective industry experience, team retrospectives, and personal learnings.  
> They are meant to serve as general guidance. Teams/Individuals should adapt them to their specific workflows, technologies, and organizational standards.


## General Guidelines
- **Keep reviews small**: Prefer PRs with fewer than *400 lines of changes*. Small reviews are faster, more focused, and easier to reason about.  
- **Review regularly**: Don’t let PRs sit idle. Aim for **review within 24 hours** of submission.  
- **Prioritize clarity**: The reviewer should be able to understand the change *without* asking for a walkthrough.  
- **Stay constructive**: Phrase feedback around *the code*, not the coder. Example:  
  - ✅ “Can we simplify this logic by using a map?”  
  - 🚫 “This code is confusing.”  

## For Authors (PR Creators)
1. **Pre-review your code**  
   - Run linters, unit tests, and static analysis tools.  
   - Double-check logic and remove commented-out code or debug prints.  

2. **Keep PRs atomic**  
   - Focus on a single logical change (feature, bug fix, or refactor).  
   - Avoid bundling unrelated updates.  

3. **Write clear PR descriptions**  
   Include:
   - **Summary:** What this change does.  
   - **Context:** Why it’s needed.  
   - **Impact:** Which parts of the system it affects.  
   - **Testing Steps:** How reviewers can verify it works.  

4. **Use meaningful commit messages**  
   - Example: `fix(auth): handle token expiration correctly`  
   - Avoid: `fixes` or `update stuff`.  

5. **Be open to feedback**  
   - Discuss suggestions thoughtfully.  
   - Ask clarifying questions instead of defending code blindly.  

## For Reviewers
1. **Understand the intent first**  
   - Read the PR description, not just the diff.  
   - Check the related issue or ticket for context.  

2. **Focus on high-value aspects**  
   - ✅ **Correctness:** Logic and business rules  
   - ✅ **Readability:** Can future maintainers understand it?  
   - ✅ **Performance:** Any obvious inefficiencies?  
   - ✅ **Security:** Potential vulnerabilities?  
   - ✅ **Tests:** Are they meaningful and sufficient?  

3. **Leave actionable comments**  
   - Suggest code snippets or references when possible.  
   - Mark *blocking* vs *non-blocking* comments clearly.  
     - Example:  
       - 🚫 **Blocking:** Missing null-check on API response.  
       - 💬 **Non-blocking:** Consider extracting this into a helper for clarity.  

4. **Approve only when ready**  
   - All comments addressed or acknowledged.  
   - CI/CD pipelines are green.  
   - Code follows project conventions and passes tests.  

## Testing Before Approval
- Run unit and integration tests locally or verify CI results.  
- Test critical user flows impacted by the change.  
- Check for **regression risk** in adjacent modules.  

## Style & Consistency
- Follow project-specific **lint rules** and **naming conventions**.  
- Prefer **descriptive variable/function names**.  
- Maintain **consistent formatting**, indentation, and imports.  
- Respect **code ownership boundaries**. Consult relevant owners when modifying shared modules.  

## Continuous Improvement
- Encourage **knowledge sharing** from review insights.  
- Add **common feedback patterns** to team style guides.  
- Periodically **retrospect** on the code review process: what slows it down, what improves it.  

## Good reads and Reference articles
- [Google Code Review Guidelines](https://google.github.io/eng-practices/review/)  
- [GitHub Pull Request Best Practices](https://docs.github.com/en/pull-requests)  
- [Conventional Commits](https://www.conventionalcommits.org/)  
