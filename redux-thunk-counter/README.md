# Redux Thunk

###  What is Redux Thunk?

* **Redux Thunk is a middleware**.
* Middleware means: a **helper** that works **between** your action and reducer.
* It helps you do **async work** (like fetching data or waiting before updating).

---

### What Can You Do With It?

1. **Write functions inside actions**
   → Normally, actions return objects.
   → With Redux Thunk, actions can return **functions**.

2. **Use async/await or setTimeout**
   → You can write **delayed actions**, **API calls**, or anything that takes time.

3. **Control when to dispatch**
   → You can wait before calling `dispatch()`, like after 2 seconds or after data comes from an API.

---

### How It Works:

1. You write a function like this:

   ```js
   const loadCount = () => {
     return (dispatch) => {
       // async task
       dispatch({ type: "LOADING" });

       setTimeout(() => {
         dispatch({ type: "SET_COUNT", payload: 10 });
       }, 2000);
     };
   };
   ```

2. You call it in your component like this:

   ```js
   dispatch(loadCount());
   ```

3. Redux Thunk will **give you `dispatch` automatically** inside that function.

---

## 1. Project Setup

Install the required packages:

```bash
npx create-react-app redux-thunk-counter
cd redux-thunk-counter
npm install redux react-redux redux-thunk
```

---

## 📁 Folder Structure

```
/src
  /redux
    store.js
    counterSlice.js
    counterThunk.js
  App.js
  index.js
```

---

## 🔹 2. `store.js`

```js
import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { counterReducer } from "./counterSlice";

const store = createStore(counterReducer, applyMiddleware(thunk));

export default store;
```

---

## 🔹 3. `counterSlice.js`

```js
const initialState = {
  count: 0,
  loading: false,
};

// Reducer
export const counterReducer = (state = initialState, action) => {
  switch (action.type) {
    case "LOADING":
      return { ...state, loading: true };
    case "SET_COUNT":
      return { ...state, count: action.payload, loading: false };
    case "INCREMENT":
      return { ...state, count: state.count + 1 };
    case "DECREMENT":
      return { ...state, count: state.count - 1 };
    default:
      return state;
  }
};
```

---

## 🔹 4. `counterThunk.js`

```js

export const loadCount = () => {
  return (dispatch) => {
    dispatch({ type: "LOADING" });

    // Simulate async API call
    setTimeout(() => {
      dispatch({
        type: "SET_COUNT",
        payload: 10, // Imagine server gave you count = 10
      });
    }, 2000);
  };
};
```

---

## 🔹 5. `index.js`

```js
// src/index.js
import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { Provider } from "react-redux";
import store from "./redux/store";

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
```

---

## 🔹 6. `App.js`

```js
// src/App.js
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loadCount } from "./redux/counterThunk";

function App() {
  const dispatch = useDispatch();
  const { count, loading } = useSelector((state) => state);

  useEffect(() => {
    dispatch(loadCount()); // Load counter from "server"
  }, [dispatch]);

  return (
    <div style={{ textAlign: "center", marginTop: "100px" }}>
      <h1>Counter with Redux Thunk</h1>

      {loading ? (
        <p>Loading counter...</p>
      ) : (
        <>
          <h2>{count}</h2>
          <button onClick={() => dispatch({ type: "INCREMENT" })}>+</button>
          <button onClick={() => dispatch({ type: "DECREMENT" })}>-</button>
        </>
      )}
    </div>
  );
}

export default App;
```

---

## What You Learned

| Feature          | How Redux Thunk Helped                    |
| ---------------- | ----------------------------------------- |
| Async loading    | Simulated API call with `setTimeout`      |
| Delayed dispatch | Used function inside action               |
| Regular actions  | Used `INCREMENT` and `DECREMENT` normally |

