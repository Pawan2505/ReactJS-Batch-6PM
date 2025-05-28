### **React Basics**

#### **1. Functional Components:**
In React, we create components that are **functions**. These functions return **JSX**, which looks like HTML but is a bit different. 

Example:
```jsx
function Greet() {
  return <h1>Greet Component</h1>;
}
```
This is a **functional component** that simply returns a heading.

---

#### **2. JSX (JavaScript XML):**
JSX is a special syntax used in React. It looks like HTML but also includes JavaScript. We can use JavaScript inside JSX by wrapping it in **curly braces `{}`**.

Example:
```jsx
const [x, y, z] = arr;
return (
  <div>
    <h1>x: {x}</h1>
    <h1>y: {y}</h1>
    <h1>z: {z}</h1>
  </div>
);
```
Here, `{x}`, `{y}`, and `{z}` are dynamically showing the values from the `arr`.

---

#### **3. Array Destructuring:**
**Destructuring** is a simple way to extract values from an array or object and store them in variables.

Example:
```jsx
const [x, y, z] = arr;
```
This assigns `arr[0]` to `x`, `arr[1]` to `y`, and `arr[2]` to `z`.

---

#### **4. Spread Operator (`...`):**
The **spread operator** `...` allows us to expand arrays or objects. It's helpful when merging multiple arrays or copying an object.

Example:
```jsx
const mergedArray = [...arr1, ...arr2];
```
This merges two arrays (`arr1` and `arr2`) into one.

---

#### **5. `map()` Function for Lists:**
When rendering a list in React, we often use the **`map()`** function. It takes an array and returns a new array with JSX elements for each item.

Example:
```jsx
return (
  <ul>
    {arr.map((item, index) => (
      <li key={index}>{item}</li>
    ))}
  </ul>
);
```
This code will display each item in the array as a list item (`<li>`). The **`key`** prop is important for React to track the list items efficiently.

---

#### **6. `key` Prop in Lists:**
Whenever you render a list in React, you need to give each item a unique **`key`**. This helps React know which item has changed, added, or removed.

Example:
```jsx
<li key={index}>{item}</li>
```
Here, `key={index}` assigns a unique key to each list item based on its position in the array.

---

#### **7. Import and Export:**
In React, we store components in different files. To use a component from another file, we **import** it, and to make it available for use, we **export** it.

Example:
```jsx
import FilterData from "./components/FilterData";
```

And to export a component:
```jsx
export default FilterData;
```

---

#### **8. Commenting Code:**
You can **comment out** code when you don't want to execute it temporarily. This is useful for debugging or skipping parts of the code.

Example:
```jsx
{/* <Greet /> */}
```

---

#### **9. Conditional Rendering:**
Sometimes, you only want to display a component if a certain condition is true. React makes it easy to do this.

Example:
```jsx
{shouldDisplaySperadData && <SperadData />}
```
This will only render the `SperadData` component if the condition `shouldDisplaySperadData` is true.

---

#### **10. Component Reusability:**
React components are meant to be **reusable**. Once you create a component, you can use it in multiple places by passing different data to it.

Example:
```jsx
<UserList />
```
Here, the `UserList` component can be used anywhere in your app.

---

### **Lecture Videos**

Here are two video links to help you understand the concepts better:

- **Part 1:** [Watch Video Part 1](https://drive.google.com/file/d/1-Ea7kPB93mSZxeLbUgE2OneP0Kar_PQd/view?usp=sharing)
- **Part 2:** [Watch Video Part 2](https://drive.google.com/file/d/1GpDnE6shTL1-idfJFM7t5cFFCiY_TPSJ/view?usp=sharing)
- **Part 3:** [Watch Video Part 3](https://drive.google.com/file/d/1OHekrxAXWIC53hS4N6tIQyYa0IgggUmZ/view?usp=sharing)
---

### **Note:**
React is built around simple and powerful concepts like **functional components**, **JSX**, **array destructuring**, **spread operator**, and **map()**. Once you understand these, you can easily build complex applications in React.

Key points:
- Keep **components small and reusable**.
- Use **conditional rendering** when necessary.
- **Comment your code** for better understanding.

With practice, React will become easy and you'll be able to build great apps!

