# Grid vs Inline-Block Friend Request UI  

In this practice file, we recreated **Facebook Friend Request Cards** using two different CSS layout techniques: **Grid** and **Inline-block**.  

Both versions look visually the same, but the **logic behind the layout** is different. This helped in understanding how different layout systems can achieve similar results.  

---

### Concepts Practiced  
- **HTML Basics**: headings, images, buttons, and div structure.  
- **CSS Layout Techniques**:  
  - **Grid**: defining rows and columns for structured placement.  
  - **Inline-block**: aligning elements next to each other without floats.  
- **Styling Elements**:  
  - Profile images with `border-radius`.  
  - Mutual friend section with image + text.  
  - Add Friend button with hover transition & shadow.  

---

## Grid  

**Uses**:  
- Creating structured layouts (rows & columns).  
- Useful for dashboards, cards, galleries, and complex UIs.  

**Advantages**:  
- Very visual and structured.  
- Easy to design full-page or component layouts.  
- Precise control of rows, columns, and gaps.  

**Disadvantages**:  
- Can feel “too rigid” for simple one-dimensional layouts.  
- More code if the layout is very simple.  

---

## Inline-Block  

**Uses**:  
- Aligning small elements horizontally (like text + icon, or image + label).  
- Good for older projects where Grid or Flexbox isn’t supported.  

**Advantages**:  
- Simple for aligning a few items.  
- Easy to understand for beginners.  

**Disadvantages**:  
- Tricky with spacing (extra gaps between inline-block elements).  
- Requires hacks (like `vertical-align`) for proper alignment.  
- Less flexible for complex layouts.  

---

## Which is Better?  

**Grid** is usually the better choice for structured, modern layouts since it reduces complexity and gives more control.  
**Inline-block** works but can feel outdated and harder to manage when layouts grow.  

---

## Demo Preview  

Here is how the code output looks like (same design, different logic):  

- **Friend Request Card with Grid**  
- **Friend Request Card with Inline-block**  