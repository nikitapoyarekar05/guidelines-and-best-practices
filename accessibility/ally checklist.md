# Accessibility Checklist based on POUR

## P – Perceivable
> Ensure all users can perceive content through one or more senses.

| Check                                                                      | How to Test                     | Tool / Tip                                           |
| -------------------------------------------------------------------------- | ------------------------------- | ---------------------------------------------------- |
| ✅ All images have descriptive `alt` text                                   | Inspect DOM or use Axe DevTools | Avoid “image of…” — describe purpose, not appearance |
| ✅ Decorative images use empty `alt=""`                                     | Check `<img>` tags              | Screen readers will skip them                        |
| ✅ Videos have captions and transcripts                                     | Play video                      | Auto-captioned ≠ compliant; ensure accuracy          |
| ✅ Text contrast ratio ≥ 4.5:1 (normal text), 3:1 (large text)              | Use Contrast Checker / Axe      | Don’t rely on color alone to convey information      |
| ✅ Proper HTML structure (`<h1>`–`<h6>`, `<main>`, `<nav>`)                 | Inspect in browser dev tools    | Logical heading hierarchy helps screen readers       |
| ✅ Dynamic content (modals, toasts, loaders) is announced to screen readers | Use ARIA live regions           | Example: `<div aria-live="polite">`                  |


## O – Operable
> Ensure all functionality works via keyboard and input devices.

| Check                                                         | How to Test                | Tool / Tip                                                  |
| ------------------------------------------------------------- | -------------------------- | ----------------------------------------------------------- |
| ✅ All interactive elements are reachable via keyboard (`Tab`) | Manually tab through app   | Focus should be visible and logical                         |
| ✅ Focus indicator is visible and consistent                   | Check CSS `:focus-visible` | Don’t remove outline; customize it instead                  |
| ✅ Modals trap focus within dialog                             | Tab test inside modal      | Use libraries like `@reach/dialog` or manage focus manually |
| ✅ No auto-playing audio or animation                          | Load page                  | Allow users to pause/stop motion                            |
| ✅ “Skip to main content” link available                       | Press `Tab` on page load   | Should jump to main content area                            |
| ✅ Links and buttons are clearly distinguishable               | Visual check               | Buttons must look like buttons, not plain text              |

## U – Understandable
> Make content and interactions easy to comprehend.

| Check                                                                   | How to Test                  | Tool / Tip                                         |
| ----------------------------------------------------------------------- | ---------------------------- | -------------------------------------------------- |
| ✅ Each form field has a `<label>` linked via `for` or `aria-labelledby` | Inspect form elements        | Use unique IDs                                     |
| ✅ Placeholder ≠ Label                                                   | Check visually               | Placeholder text is *not* a replacement for labels |
| ✅ Input errors have clear messages and instructions                     | Submit invalid form          | Example: “Enter a valid email address”             |
| ✅ Consistent navigation across pages                                    | Compare header/footer        | Predictable UI improves comprehension              |
| ✅ Buttons and links use meaningful text                                 | Read out with NVDA/VoiceOver | Avoid “Click here” or “Learn more”                 |
| ✅ Status messages (e.g., “Form submitted”) are announced                | Use ARIA live region         | `<div role="status">Form submitted</div>`          |

## R – Robust
> Ensure compatibility with assistive technologies and future tools.

| Check                                                            | How to Test                         | Tool / Tip                                                    |
| ---------------------------------------------------------------- | ----------------------------------- | ------------------------------------------------------------- |
| ✅ Use semantic HTML over `div` soup                              | Inspect structure                   | Prefer `<button>`, `<header>`, `<section>`                    |
| ✅ Proper ARIA roles used only when needed                        | Validate HTML                       | Don’t misuse ARIA (`role="button"` on `<div>` is last resort) |
| ✅ No duplicate IDs                                               | Run Axe or Lighthouse               | Each element must have a unique ID                            |
| ✅ Dynamic components (dropdowns, tabs) use correct ARIA patterns | Refer WAI-ARIA Authoring Practices  | Test with screen readers                                      |
| ✅ Test with screen readers                                       | Use NVDA (Windows), VoiceOver (Mac) | Verify announcements and reading order                        |
| ✅ Automated tests in CI/CD pipeline                              | Integrate Axe-core or Pa11y         | Fail build on a11y regressions                                |


## Result
Your CI/CD pipeline will automatically flag accessibility regressions, enforce WCAG compliance, and ensure inclusive UX in every release.