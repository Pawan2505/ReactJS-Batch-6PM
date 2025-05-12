## React Component Lifecycle with useState and useEffect Hooks

---

### 1. What are useState and useEffect Hooks?

* `useState`: Manages state in functional components.
* `useEffect`: Handles side effects in functional components, such as data fetching, DOM updates, or subscriptions.

---

### 2. Example Code: Component Lifecycle

```javascript
import React, { useState, useEffect } from "react";

const ComponentLifiCycle = () => {
  // Component Lifecycle: Mount → Update → Unmount
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log("Mounting..");
    return () => {
      console.log("Component will unmount");
    };
  }, []);

  useEffect(() => {
    document.title = count; 
  }, [count]); 

  return (
    <div>
      <h1>Count : {count}</h1>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
};

export default ComponentLifiCycle;
```

---

### 3. Explanation of Component Lifecycle

🔸 **Mounting**

* When the component first renders, the `useEffect` with an empty dependency `[]` runs.
* The message "Mounting.." will be printed in the console.
* The `return` statement inside the `useEffect` will be used for cleanup, which gets called when the component is unmounted.

🔸 **Updating**

* Whenever the `count` state updates, the second `useEffect` will run, and the `document.title` will be updated to reflect the new count.

🔸 **Unmounting**

* When the component is removed from the DOM, the cleanup function inside the `useEffect` will run, printing "Component will unmount" in the console.

🔸 **useState**

* `count` holds the state value.
* `setCount` updates the state value.

🔸 **JSX**

* The `h1` element displays the current value of `count`.
* The button triggers the increment logic, increasing the count when clicked.

---

### 4. Video

You can view the full video explanation here:

[React Component Lifecycle Video](https://drive.google.com/file/d/1sr8TcvVtrCbDfCER_MVAySeAopKuzK_D/view?usp=sharing)

---

### Key Points:

* **Mounting**: `useEffect(() => { ... }, [])` runs when the component is first rendered.
* **Updating**: `useEffect(() => { ... }, [count])` runs when the state (or props) change.
* **Unmounting**: Cleanup function inside `useEffect` runs when the component is removed from the DOM.
* `useState` is used for managing the state, while `useEffect` manages side effects based on state and component lifecycle.

