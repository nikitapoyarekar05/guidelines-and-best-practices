# POUR principles

The POUR principles are at the heart of WCAG (Web Content Accessibility Guidelines), and every developer should understand how to apply them in code.

## POUR criteria for developers

| Principle              | Meaning                                                                                               | What It Means for a Developer                                                                       | Common Implementation Examples                                                                                                                                                                                                                                                   |
| ---------------------- | ----------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **P – Perceivable**    | Information and UI must be presented in ways users can perceive (see, hear, or feel).                 | Ensure all non-text content has text alternatives, and content is adaptable and distinguishable.    | - Add `alt` text to images<br>- Use proper HTML structure (`<h1>`–`<h6>`, `<p>`, `<ul>`)<br>- Provide captions/transcripts for videos<br>- Maintain sufficient **color contrast** (≥ 4.5:1)<br>- Don’t rely on color alone to convey meaning                                     |
| **O – Operable**       | Users must be able to operate interface components via various input methods (keyboard, voice, etc.). | Make all functionality available from a keyboard and give users time and control over interactions. | - Ensure **keyboard navigation** (tab, enter, space) works for all controls<br>- Use focus states (`:focus-visible`) and manage focus properly in modals/dialogs<br>- Avoid auto-playing content or flashing animations<br>- Provide **skip links** to bypass repetitive content |
| **U – Understandable** | Information and operation of the interface must be easy to understand.                                | Keep interactions predictable, provide clear instructions, and prevent user errors.                 | - Use consistent navigation and button labeling<br>- Associate `<label>`s with form inputs<br>- Use **ARIA live regions** for status updates<br>- Validate forms clearly and show error messages near the fields<br>- Avoid jargon; use plain language in UI text                |
| **R – Robust**         | Content must be compatible with current and future assistive technologies.                            | Use clean, semantic HTML and proper ARIA roles only when needed.                                    | - Prefer native HTML elements over divs with click handlers<br>- Ensure correct ARIA roles, states, and properties<br>- Validate HTML and avoid duplicate IDs<br>- Test with screen readers (NVDA, VoiceOver)<br>- Don’t override browser accessibility behaviors                |


## Quick Developer Tips

1. HTML first, ARIA second → “Use native before ARIA.”
2. Check contrast using tools like Axe, Lighthouse, or Deque’s Contrast Checker
3. Keyboard-test everything: You should be able to navigate your app using just Tab, Shift+Tab, Enter, and Space.
4. Use semantic HTML (e.g. button,nav, main, header) to improve screen reader compatibility
4. Run automated accessibility tests in CI/CD