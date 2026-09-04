Quick Check Q1: You change the footer colour in styles.css. How many pages update? What if the same colour was only set with an inline style on index.html?
Ans:
Changing a color in an external CSS file updates all linked pages, while an inline style only affects the single page it’s written on.


Quick Check Q2: Which is more specific: h1 or #welcome? If both set color, which wins? Write a one-line proof from your page.
Answer: #welcome is more specific — it wins.
Why: CSS specificity is calculated by counting selector types, roughly in this order of weight (highest to lowest): inline styles → IDs → classes/attributes/pseudo-classes → elements/pseudo-elements.

Quick Check Q3: Convert #0369a1 into an approximate rgb(...) value (you may use a colour picker). Why do designers often prefer hex in stylesheets?
ANS:
Convert #0369a1 to RGB:
03 = 3, 69 = 105, a1 = 161 → rgb(3, 105, 161)
Why hex over RGB?
•	Shorter to write and read
•	Directly copy-pasted from design tools (Figma, Photoshop, DevTools)
•	More compact — no commas/spaces, and supports 3-digit shorthand (#fff)
•	RGB is mainly used instead when you need transparency (rgba(...))



Quick Check Q4: Set a nav link to display: none, then to visibility: hidden. What is the difference in the layout?
ANS: display: none → The link is completely removed from the layout; the space it occupied disappears, and other elements shift to fill the gap.
 visibility: hidden → The link becomes invisible but still takes up its original space; the layout does not change



Quick Check Q5: In your wireframe, how many event cards appear side-by-side at phone width? At desktop width?
Ans: 
 Desktop width: 3 event cards side-by-side (both "Welcome to My Website" wireframes show this). 


 Quick Check Q6: Why must styles.css be linked AFTER the Bootstrap CSS file? What happens if you reverse the order and both set h1 colour?
Simple answer:
styles.css must load after Bootstrap so custom styles win. CSS follows "last one wins" whichever stylesheet loads last overrides the earlier one.
If reversed: Bootstrap would override the h1 color instead, and the custom CSS would appear "not working" even though it's correct.

