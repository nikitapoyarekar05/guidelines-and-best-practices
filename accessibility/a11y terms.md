## Disability
Restriction to do certain activities

Five categories: Visual, Motor, Hearing, Cognitive, Speech

- Visual: blindness, partial blindness, color blindness, blurred vision, low vision
- Motor: tremors, lack of fine motor control, limb loss or damage, paralyzation
- Hearing: deafness, partial hearing loss, ringing in the ears
- Cognitive disability: ADHD, dyslexia, traumatic brain injuries, Alzheimer’s
- Speech: mutism and speaking impediments that make words difficult or impossible to distinguish

## Web Content Accessibility Guidelines
- Define standards to assess websites and applications
- Applicable worldwide
- Support rankings A, AA, AAA
- Recommended AA

## Section 508 
- A11y standards for US legal purposes
- used for US federal agency applications

## Accessibility tree
- Part of the browser that compiles and communicates accessibility information to assistive technologies
- Based on the DOM tree and structured similarly
- Uses accessibility APIs to send assistive technologies the information they need about the name, description, role, state, and interaction options of the elements on the page. All of that information is sent over for every single element on the page, allowing users of assistive technologies to get the full context and understanding that they need to navigate an application

## WAI-ARIA
- Web Accessibility Initiative - Accessible Rich Internet Applications
- Set of attributes that can be added to HTML elements in order to share information about that element with the browser’s accessibility tree and, eventually, a user’s assistive technologies
- It’s a way to communicate information about elements on the page to assistive technologies such as screen readers 

## Accessibility a11y
- Numeronym: keeps the first and last letters of a word but replaces the middle with the number of letters in between. Therefore **a11y**

## Semantic HTML and landmark elements
- Both of these techniques are used to allow the assistive technology to understand the structure of the page and then communicate that information back to the user

    | Aspect                 | Semantic Elements                       | Landmark Elements                                         |
    | ---------------------- | --------------------------------------- | --------------------------------------------------------- |
    | **Purpose**            | Convey meaning and structure            | Define page navigation regions                            |
    | **Scope**              | Broad — all meaningful HTML tags        | Specific subset focused on layout/navigation              |
    | **Assistive Tech Use** | Announces meaning of each element       | Enables quick jump between sections                       |
    | **ARIA Equivalent**    | `role="button"`, `role="heading"`, etc. | `role="main"`, `role="navigation"`, `role="banner"`, etc. |
    | **Example**            | `<article>`, `<button>`                 | `<main>`, `<nav>`, `<header>`                             |

- All landmark elements are semantic, but not all semantic elements are landmarks
    - Landmarks like `<header>, <nav>, <main>, <aside>, <footer>` describe both structure and meaning of the page. By definition, that makes them semantic elements. They tell the browser and assistive tech what that section represents.
    - Many elements are semantic, but they don’t define a navigational or structural region for assistive technologies. These include elements like   `<article>, <section> (without aria-label) <figure>, <blockquote>, <p>, <h1>–<h6>, <strong>, <em>` etc. These are semantic because they describe the purpose of their content but screen readers don’t treat them as landmarks you can jump to. 

So, landmarks form a subset of semantic elements, specifically those that define major regions of a page layout.


## Keyboard navigation 
Navigation without mouse or touch input.

The most important things to support here are:
1. Focus:  indicates which element is currently being interacted with
    - every browser will have a default focus indicator or style that marks where the focus is on the page by highlighting the focused element
    - style can be changed in CSS via the :focus pseudo-selector

2. Focus order: the order in which the focus moves from element to element on the page
    - Use the tab key to move the focus automatically 

## Contextual information
Additional information attached to elements so that assistive technologies can help translate them to our users. Examples are alt text, labels, titles, and WAI-ARIA labels

## A11y first approach
Accessibility-first reminds us that accessibility is a crucial part of our application, and if that’s not getting addressed during user testing at all, then we aren’t testing effectively.

Make sure:
1. Accessibility is a part of the minimum viable product
2. You build for accessibility from the beginning
3. Plan ahead for diverse user testing
4. Share the responsibility for accessibility within the team




