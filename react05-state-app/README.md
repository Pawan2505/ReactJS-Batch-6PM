## React useState Notes

---

### 1. What is useState Hook?

The `useState` hook is a fundamental hook in React that allows us to add **state** to functional components. It enables us to **track and update the component's state** throughout its lifecycle.

* **Syntax**:

```javascript
const [state, setState] = useState(initialState);
```

* **state**: The current state value.
* **setState**: The function used to update the state.
* **initialState**: The value that the state will have when the component is first rendered.

---

### 2. Example Code (Counter App)

```javascript
import React, { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);

  const handleDecrement = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  };

  return (
    <div>
      <h1>Count {count}</h1>
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <button onClick={handleDecrement}>Decrement</button>
    </div>
  );
};

export default Counter;
```

---

### 3. Explanation of the Code

🔸 **React Functional Component (`Counter`)**
We created a simple React functional component named `Counter`.

🔸 **useState Hook**

* `useState(0)`: The initial state value is set to `0`.
* `count`: Holds the current value of the counter.
* `setCount`: Function to update the `count`.

🔸 **Increment**

* The "Increment" button increases the `count` value by 1 when clicked.
* This is done using an arrow function `() => setCount(count + 1)` in the `onClick` event.

🔸 **Decrement**

* The "Decrement" button decreases the `count` by 1, but only if `count` is greater than 0 (to avoid negative values).
* We created a custom function `handleDecrement()` to perform this task, and added a condition: `if (count > 0)`.

🔸 **JSX**

* JSX (HTML-like syntax) is used to render the UI.
* The `h1` element displays the current `count`.
* Two buttons are used to trigger the increment and decrement actions.

🔸 **Export**

* The `Counter` component is exported to make it available for use in other files.

---

### 4. Video

You can view the full video explanation here:

[React useState Tutorial](https://drive.google.com/file/d/1MAaZhCEubcZEHFB2-LOUdgIsifvxW3-M/view?usp=sharing)

---

### Key Points:

* `useState` is used for managing state in functional components.
* The state is updated via the `setState` function, which triggers a re-render.
* The state value and its updater function are destructured from the array returned by `useState`.
* Always use conditions to avoid unwanted negative values or errors (like in the decrement example).


### Here are the video links for React events:

* [React Event Video Part 1](https://drive.google.com/file/d/1tSKtAxNQcGRwB2xTQOny2aDas3eXvGUJ/view?usp=sharing)
* [React Event Video Part 2](https://drive.google.com/file/d/1WKSbJihpU5112OQd4PR7ImzNp04nau8s/view?usp=sharing)
