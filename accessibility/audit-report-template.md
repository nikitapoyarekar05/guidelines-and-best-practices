# Accessibility Audit Report Template

> Website / Application:

>URL:

>Auditor:

> Date:

> Scope: (Pages, flows, components tested)

## Audit Overview
Objective: Ensure website/app meets WCAG 2.2 Level AA accessibility standards.

Tools Used: Anything from axe DevTools, WAVE, Lighthouse, NVDA, VoiceOver, Contrast Checker, Browser DevTools, etc.

**Use the following symbols for conveying a11y status:**
✅ - Pass, 
❌ - Fail, 
⚠️ - Warning

## Visual Design & Perception (WCAG 1.x)

| Checkpoint                                              | Status (✅ / ❌ / ⚠️) | Notes / Examples | Recommendations |
| ------------------------------------------------------- | ------------------- | ---------------- | --------------- |
| Images have meaningful `alt` text                       |                     |                  |                 |
| Decorative images use `alt=""` or `role="presentation"` |                     |                  |                 |
| Complex images (charts/graphs) have text summaries      |                     |                  |                 |
| Video/audio has captions or transcripts                 |                     |                  |                 |
| Text contrast meets minimum (4.5:1 normal, 3:1 large)   |                     |                  |                 |
| Text resizes up to 200% without breaking layout         |                     |                  |                 |
| No blinking or flashing content >3 times/sec            |                     |                  |                 |
| Animations follow `prefers-reduced-motion`              |                     |                  |                 |

## Operable (WCAG 2.x)
| Checkpoint                                      | Status | Notes / Examples | Recommendations |
| ----------------------------------------------- | ------ | ---------------- | --------------- |
| All functionality accessible via keyboard       |        |                  |                 |
| No keyboard traps                               |        |                  |                 |
| Logical tab / focus order                       |        |                  |                 |
| Focus indicator visible on interactive elements |        |                  |                 |
| Skip link or landmarks provided                 |        |                  |                 |
| Links descriptive (no "click here")             |        |                  |                 |
| Moving content can be paused/stopped            |        |                  |                 |
## Understandable (WCAG 3.x)
| Checkpoint                                         | Status | Notes / Examples | Recommendations |
| -------------------------------------------------- | ------ | ---------------- | --------------- |
| Page language declared (`lang` attribute)          |        |                  |                 |
| Simple, readable content                           |        |                  |                 |
| Avoid jargon or provide definitions                |        |                  |                 |
| Consistent layout and navigation                   |        |                  |                 |
| Forms have labels, instructions, and clear errors  |        |                  |                 |
| Input fields have proper `autocomplete` attributes |        |                  |                 |

## Robust (WCAG 4.x)
| Checkpoint                                        | Status | Notes / Examples | Recommendations |
| ------------------------------------------------- | ------ | ---------------- | --------------- |
| Correct ARIA roles, states, properties            |        |                  |                 |
| No misuse of ARIA (`role="button"` etc.)          |        |                  |                 |
| HTML validates (no duplicate IDs, proper nesting) |        |                  |                 |
| Screen reader tested (NVDA/VoiceOver)             |        |                  |                 |
| Interactive elements announced correctly          |        |                  |                 |

## Media & Multimedia
| Checkpoint                                            | Status | Notes / Examples | Recommendations |
| ----------------------------------------------------- | ------ | ---------------- | --------------- |
| Media player accessible (play/pause, keyboard, focus) |        |                  |                 |
| Autoplay avoided or muted & WCAG-compliant            |        |                  |                 |
| Captions for prerecorded video                        |        |                  |                 |
| Captions for live video                               |        |                  |                 |
| Transcripts for audio-only content                    |        |                  |                 |
| Avoid auto-generated captions without review          |        |                  |                 |

## Animation & Motion
| Checkpoint                                 | Status | Notes / Examples | Recommendations |
| ------------------------------------------ | ------ | ---------------- | --------------- |
| Animations can be toggled off              |        |                  |                 |
| Compliant with `prefers-reduced-motion`    |        |                  |                 |
| No content that can trigger seizures       |        |                  |                 |
| Motion doesn’t distract or disorient users |        |                  |                 |

## Mobile / Responsive Accessibility
| Checkpoint                                           | Status | Notes / Examples | Recommendations |
| ---------------------------------------------------- | ------ | ---------------- | --------------- |
| Touch targets large enough (44x44px)                 |        |                  |                 |
| Responsive layout maintains focus order              |        |                  |                 |
| Mobile gestures accessible via keyboard alternatives |        |                  |                 |
| Color contrast maintained on small screens           |        |                  |                 |


## Summary of Findings
- Total Issues Found:
- Critical Issues:
- Major Issues:
- Minor Issues:
- General Recommendations:

## Retest Notes
- Issues fixed / pending:
- Next steps: