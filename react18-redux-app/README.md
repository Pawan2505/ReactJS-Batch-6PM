## 📘 Redux

### What is Redux?

Redux is a **state manager**. It helps manage your app’s data (state) in one central place.

---

### 📁 Folder Structure (from your image)

```
src/
│
├── components/
│   └── Counter.jsx        ⬅️ UI component
│
├── redux/
│   ├── Action.jsx         ⬅️ Actions (describe what should happen)
│   ├── Reducer.jsx        ⬅️ Reducer (updates the state)
│   └── Store.jsx          ⬅️ Store (central state storage)
```

---

### Redux Flow

```
[UI (Button)] 
   ↓ dispatch
[Action] 
   ↓ 
[Reducer] 
   ↓ 
[Store] 
   ↓ 
[UI Updated Automatically]
```

---

### 1️Action (📄 Action.jsx)

**Action is like a message. It tells Redux what to do.**

```js
export const increase = () => {
  return {
    type: "INCREMENT",
  };
};

export const decrease = () => {
  return {
    type: "DECREMENT",
  };
};
```

---

### Reducer (📄 Reducer.jsx)

**Reducer is a function that updates the state.**

```js
const initialState = {
  count: 0,
};

export const counterReducer = (state = initialState, action) => {
  switch (action.type) {
    case "INCREMENT":
      return { ...state, count: state.count + 1 };
    case "DECREMENT":
      return { ...state, count: state.count - 1 };
    default:
      return state;
  }
};
```

Reducer always returns **a new state**. It never changes the old one directly.

---

### Store (📄 Store.jsx)

**Store holds the state. It connects Redux to React.**

```js
import { createStore } from "redux";
import { counterReducer } from "./Reducer";

export const store = createStore(counterReducer);
```

---

### UI Component (📄 Counter.jsx)

**Use Redux state and dispatch in the component.**

```js
import { useSelector, useDispatch } from 'react-redux';
import { increase, decrease } from '../redux/Action';

const Counter = () => {
  const count = useSelector((state) => state.count);   // Read state
  const dispatch = useDispatch();                      // Send actions

  return (
    <div>
      <h1>Redux Counter</h1>
      <h2>Count : {count}</h2>
      <button onClick={() => dispatch(increase())}>+</button>
      <button onClick={() => dispatch(decrease())}>-</button>
    </div>
  );
};
```

---

### Main App (📄 index.js)

**Wrap App with `<Provider>` so all components can access Redux.**

```js
import { Provider } from 'react-redux';
import { store } from './redux/Store';

<Provider store={store}>
  <App />
</Provider>
```

---

### Summary

| Concept         | Purpose                               |
| --------------- | ------------------------------------- |
| `Action`        | Says what should happen (`type`)      |
| `Reducer`       | Receives action and updates the state |
| `Store`         | Keeps all your state in one place     |
| `dispatch()`    | Sends action to reducer via store     |
| `useSelector()` | Gets the latest state in component    |

---
