## Keyboard controls
- Focus on list items
- Pick up an item 
- Move it up/down 
- Drop 
- Cancel 
- Also use Move up / down buttons with the mouse or keyboard

All actions are announced via ARIA live region, ensuring screen readers describe what’s happening.

## Classes
- Focus outline
- .grabbed — highlights picked-up item
- .sr-only — hides visually but remains readable by screen readers (used for live updates)
- .controls and .icon — the up/down buttons


## Accessibility attributes used
| Attribute                           | Purpose                                                               |
| ----------------------------------- | --------------------------------------------------------------------- |
| `role="region"`                     | Defines a logical section (helpful for navigation by screen readers). |
| `aria-label="Reorder list example"` | Gives the region a name.                                              |
| `role="list"`                       | Semantically identifies the list.                                     |
| `role="option"`                     | Tells assistive tech that each item is selectable/reorderable.        |
| `aria-grabbed="true/false"`         | Indicates whether an item is currently "picked up".                   |
| `tabindex="0"`                      | Makes each list item focusable by keyboard.                           |

## Live Region
Screen readers automatically announce updates to the following element

`<div id="live" aria-live="polite" class="sr-only"></div>`

Used to communicate status: e.g., “Task A picked up”, “moved to position 2”, etc.

## JavaScript Behavior - key functions
The JavaScript (inside the self-invoking function) handles keyboard logic and ARIA updates

1. refreshElems(): Rebuilds an array of list items and updates
    - Each item’s data-index
    - A screen-reader-friendly label like "Task A, 1 of 4"

2. announce(text): Writes to the hidden live region so screen readers read out changes

3. grabItem(idx): Marks the selected item as “picked up”:
    - Adds .grabbed class (visual)
    - Sets aria-grabbed="true"
    - Announces pickup instructions.

4. dropItem(): Drops the grabbed item
    - Removes highlight
    - Announces where it was dropped
    - Resets state

5. cancelGrab(): Cancels movement via Escape.

6. moveGrabbed(delta): Moves the picked-up item up or down in the DOM
    - Updates list order visually
    - Announces new position
    - Keeps focus on the moved item.


## Keyboard Event Handler
Listens for keys on any list item

| Key                 | Action                              |
| ------------------- | ----------------------------------- |
| **Tab**             | Focus on list items                 |
| **Space / Enter**   | Pick up or drop item                |
| **Arrow Up / Down** | Move item if grabbed, else navigate |
| **Escape**          | Cancel move                         |

Focus and order are dynamically updated with refreshElems() after every change.

## Mouse Event Handler
Handles the ▲ / ▼ buttons for users who prefer mouse or button controls.