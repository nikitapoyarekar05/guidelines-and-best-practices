# Focus order & Focus indication

## Focus order
> Learn how focus order works and how we can determine it in the code we write. 

There are two major aspects of focus that work together to create the keyboard navigation experience: focus order and focus indication.

The focus order controls the order in which elements will be focused on as the user navigates through the page using their keyboard. The focus indication is the visual design that indicates which element is currently being focused on.

Both of these aspects have default configurations, either from the browser or the HTML. Developers can override or reconfigure them, but we need to be careful and smart about how we do so.

---

### How the focus order works
The focus order reflects the importance of elements, following the visual hierarchy that the designer has established on the page. 
- As we work our way through a page on our keyboards, the focus should follow the content: top to bottom, left to right (or right to left if the content is in an RTL language such as Hebrew)
- From any given element, the user should be able to guess which element will be focused on next when they click the “Tab” key.

Focus order is determined based on the structure of the DOM tree. The focus will move from one interactive element to the next, following the order those elements appear in the DOM.

---

### When focus order can be disrupted
- Responsiveness: when elements get realigned as part of the responsive technique on smaller screens, the focus order can get bumped around
    - More common when we use techniques like CSS grid or Flexbox  
- When items on the page are moved or customised by the user

---

### Changes to the DOM: 
Add items to the page (most common, as state updates due to human actions), with modals and pop ups - these can disrupt the focus order

We should be using ARIA announcements anytime the DOM is changing. In addition to that, we need to ensure that:
- The user can easily return to the item that they were focused on when the focus is intentionally disrupted. 
    - Ex. when a modal is closed, the user should be returned to the element they were focused on before the modal launched and not just returned to the top of the page
- The user can easily access new elements that have appeared on the page. 
    - If answering one question in a form triggers the appearance of a second follow-up question, the user needs to be able to easily access the new question.

---

### Repairing disrupted focus order
- We can add items to the tabindex, if they’re not naturally selectable (although that is often a red flag that you should be using another, more accurate semantic tag for that element).

- We can adjust the focus order if we want something to be focused on before something else. Ideally, we do this by adjusting the HTML and then using CSS to change the look of the page.

---

### Manual focus with tabindex
Before we add an item to the tabindex, we must ask ourselves: is this item actually interactive? Users should only be able to focus on an element that they can actually use, change, click, or interact with in some way.

We can force elements to be focusable by using tabindex. 
- use only if you have created a custom interactive element that wouldn’t otherwise be focusable
- If the user can’t interact with the element in any way, then we should ensure that tabindex is not being applied.

| Value                    | Behavior                                                       |
| ------------------------ | -------------------------------------------------------------- |
| `tabindex="0"`           | Adds element to normal tab order (based on HTML position).     |
| `tabindex="-1"`          | Makes element focusable *via script*, but not via Tab key.     |
| `tabindex="1"` or higher | Moves element to the front of the tab order (not recommended). |

---

## Focus indication
> Learn how the browser determines focus and how we can update the style of the focus indicator.

Visual indicator is what allows the user to find the focused-upon element on the page, which means it’s essential for accessibility.

## How does the browser determine focus?
- User preference: Typically depends on the user settings. But if they click on the screen pressing the tab key,focus becomes visible

- When the user interacts with a focusable element: When a user interacts with a focusable element—no matter the method of interaction—the focus should appear. 
    - Ex. when we interact with the input box in the example below, the focus indicator appears. It doesn’t matter whether we’ve clicked into the input box, tapped on the input box, or tabbed to the input box via the keyboard. The focus indicator will appear regardless.

- When the user begins non-mouse navigation: This is the default setting.       
    - When a keyboard or alternative non-pointer navigation method is prompted (such as by clicking the “Tab” key), the focus indicator appears on the first focusable element of the page.

- When the focus is moved outside of user control: This most often happens when new elements appear on the page as a result of a user action. 
    - Ex. the focus can automatically shift to a follow-up question in a form that appears based on the user’s response to a previous question. 
    - The focus can also shift to the input fields in a prompt to log in or to the options in a confirmation dialog after the user makes a selection.

## Styling the focus indicator
High visibility is the most important goal if we want to change the focus indicator. The color we choose for the indicator needs to be quickly and easily findable on the page. 
- Need highly visible color with a AAA contrast ratio
- Avoid very thin border weights. Thicker border is easily locatable on the page
- Make sure that focus indicator adapt to the changing theme.