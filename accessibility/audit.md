# Accessibility Audit

## Color based accessibility issues
0. check if the page title is available for every page, and it is updating dynamically
1. Switch to greyscale and check color contrast and readability
2. Input fields, buttons, icons, and more all take up enough visual space
3. Check target size for CTAs
4. Take a look at how our layout adjusts when the orientation of the device is changed
5. Resize the screen width, zoom in to 200% and check how the screen looks like
6. Text sizes - if they are in px or relative units
7. Check if buttons and links are serving their correct purposes
8. Use the list below as a guide for thoroughly testing our form for keyboard navigability:
    Use the list below as a guide for thoroughly testing our form for keyboard navigability:
    - Can we focus on every question in the form?

    - Can we go backward in the form to correct or change an answer we entered earlier?

    - If the form has a lot of questions, how much time and how many clicks does it take us to tab through the entire thing to get to a specific question at the beginning or end?
        - If this is an issue, we can resolve it by either 
            - breaking up our form into a multipage form,  or
            - breaking up our content into sections with (semantically correct) headers that our users can jump between easily.

        - If the form is a multipage form, can we easily navigate back and forth between the pages without accidentally focusing on a question?

    - Can we easily use every single input in the form?
        - Pay special attention to complex inputs such as color pickers, multi-selects, date/time selectors, and similar. Anything that includes a drop-down should always be tested carefully.

    - Can we easily navigate (and exit) any pop-ups or modals that appear as part of the form?
        - This is a common problem with confirmation or error dialogs. We have to make sure our testing includes the actual submission of the form, not just the completion.

9. 