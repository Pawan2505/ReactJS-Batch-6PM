## 📘 Understanding Redux

---

### What is Redux?

**Redux** is a **state management library**. It helps you manage data (state) in your application in a **centralized**, **predictable**, and **scalable** way.

---

### Why Redux?

React components can manage local state using `useState()`, but:

* What if **many components** need the **same data**?
* What if **state changes** need to be **tracked/debugged** clearly?
* What if your app grows **too large**?

Redux solves these by introducing a **global store** and a **strict flow** for updating state.

---

### 🔁 Redux Flow Diagram

```
    UI (React)
      ↓ dispatch(action)
    Action (plain object)
      ↓
    Reducer (pure function)
      ↓
    Store (single source of truth)
      ↓
    UI updates
```

---

### Key Concepts in Redux

| Term         | Description                                                          |
| ------------ | -------------------------------------------------------------------- |
| **Store**    | Holds the global application state                                   |
| **Action**   | A plain JS object that tells what happened (`{ type: "INCREMENT" }`) |
| **Reducer**  | A function that updates the state based on the action                |
| **Dispatch** | A function that sends an action to the reducer                       |
| **Selector** | A way to get specific data from the state (`useSelector`)            |

---

### Analogy: Bank Transaction

* **State** = Your bank balance
* **Action** = Deposit or Withdraw
* **Reducer** = Bank's logic to update balance
* **Dispatch** = Teller giving the instruction
* **Store** = Centralized bank database

---

## Build a Redux Counter Project

Now let’s build a **counter app** using Redux with `increment` and `decrement` functionality.

---

### 🗂️ Project Folder Structure

```
my-redux-counter-app/
├── src/
│   ├── components/
│   │   └── Counter.js
│   ├── redux/
│   │   ├── actions.js
│   │   ├── reducer.js
│   │   └── store.js
│   ├── App.js
│   └── index.js
```

---

### Step-by-Step Setup

#### Step 1: Create React App & Install Redux

```bash
npx create-react-app my-redux-counter-app
cd my-redux-counter-app
npm install redux react-redux
```

---

### Step 2: Create Redux Files

#### `redux/actions.js`

```js
export const INCREMENT = 'INCREMENT';
export const DECREMENT = 'DECREMENT';

export const increment = () => ({ type: INCREMENT });
export const decrement = () => ({ type: DECREMENT });
```

#### `redux/reducer.js`

```js
import { INCREMENT, DECREMENT } from './actions';

const initialState = { count: 0 };

export const counterReducer = (state = initialState, action) => {
  switch (action.type) {
    case INCREMENT:
      return { count: state.count + 1 };
    case DECREMENT:
      return { count: state.count - 1 };
    default:
      return state;
  }
};
```

#### `redux/store.js`

```js
import { createStore } from 'redux';
import { counterReducer } from './reducer';

export const store = createStore(counterReducer);
```

---

### Step 3: React Component

#### `components/Counter.js`

```js
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement } from '../redux/actions';

const Counter = () => {
  const count = useSelector((state) => state.count);
  const dispatch = useDispatch();

  return (
    <div>
      <h1>Redux Counter</h1>
      <h2>Count: {count}</h2>
      <button onClick={() => dispatch(increment())}>+</button>
      <button onClick={() => dispatch(decrement())}>-</button>
    </div>
  );
};

export default Counter;
```

---

### Step 4: Wire Everything Up

#### `App.js`

```js
import React from 'react';
import Counter from './components/Counter';

const App = () => <Counter />;

export default App;
```

#### `index.js`

```js
import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { store } from './redux/store';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);
```

---

## Output

> You now have a Redux-powered React app that lets you increment and decrement a number globally.

---

## Summary

| Concept         | Role                      |
| --------------- | ------------------------- |
| **Redux**       | State management tool     |
| **Store**       | Holds state               |
| **Actions**     | Describe changes          |
| **Reducer**     | Updates state             |
| **Dispatch**    | Sends action              |
| **React-Redux** | Connects Redux with React |

---

