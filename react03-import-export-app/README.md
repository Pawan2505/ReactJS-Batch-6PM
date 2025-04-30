## 📘 **React Component with Export / Import**

### What is a Component in React?
- Component is like a **reusable function**.
- It returns **UI (HTML-like JSX)** to be shown on the web page.
- React components make our code **modular, clean, and maintainable**.

---

### **Types of Component Export in React**

#### 1. **Default Export**
- Only **one default export** is allowed in a file.
- Import it using **any name** (no curly braces).

```js
// File: MyComponent.js
const MyComponent = () => {
  return <h1>Hello from Default Component</h1>;
};

export default MyComponent;
```

```js
// File: App.js
import MyComponent from './MyComponent';  // No curly braces
<MyComponent />
```

---

#### 2. **Named Export**
- You can export **multiple components or functions** from one file.
- Import them using **curly braces** `{}` with **exact same name**.

```js
// File: NamedComponent.js
const NamedComponent1 = () => {
  return <h1>Component 1</h1>;
};

const NamedComponent2 = () => {
  return <h2>Component 2</h2>;
};

export { NamedComponent1, NamedComponent2 };
```

```js
// File: App.js
import { NamedComponent1, NamedComponent2 } from './NamedComponent';
<NamedComponent1 />
<NamedComponent2 />
```

---

### **Mixing Export Types**
You can have one **default export** and many **named exports** in a single file:

```js
const DefaultComponent = () => <h1>Default</h1>;
const ExtraComponent = () => <p>Extra</p>;

export default DefaultComponent;
export { ExtraComponent };
```

---

### 📝**Key Points**
- One file = one **default export allowed**, but many **named exports** possible.
- **Default Export** is common for **main components**.
- **Named Export** is used for **supporting/helper components**.
- Use **`import x from`** for default and **`import { x } from`** for named.
