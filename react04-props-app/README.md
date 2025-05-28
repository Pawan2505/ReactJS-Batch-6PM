## ReactJS Props Notes

---

### 1. What are Props?

**Props** stands for **properties**.
In React, props are used to **pass data from Parent to Child Components**. They work just like **function arguments**. Props allow us to send values from a parent component to its child, making the component **dynamic and reusable**.

---

### 2. Destructuring Props

In React, we can extract values from props using **destructuring**. Instead of writing `props.name`, we can directly extract the required properties:

```jsx
const UserData = ({ name, age }) => {
  return (
    <div>
      <h1>Name : {name}</h1>
      <h1>Age : {age}</h1>
    </div>
  );
}
```

---

### 3. Passing Array as Props

Arrays can also be passed as props, and we can use them in the child component:

```jsx
<ArrayData even={[2, 4, 6, 8]} />
```

```jsx
const ArrayData = ({ even }) => {
  return (
    <ul>
      {even.map((num, index) => (
        <li key={index}>{num}</li>
      ))}
    </ul>
  );
}
```

---

### 4. Passing Boolean as Props

**Booleans** are often used to toggle certain UI elements (like showing or hiding a component).

```jsx
<ShowDetails show={true} />
```

```jsx
const ShowDetails = ({ show }) => {
  return show ? <p>Details are shown!</p> : <p>No details to show.</p>;
}
```

---

### 5. Passing Functions as Props

Functions can be passed as props to handle events or trigger actions in the parent component:

```jsx
<HandleClick onClick={handleClick} />
```

```jsx
const HandleClick = ({ onClick }) => {
  return <button onClick={onClick}>Click me!</button>;
}
```

In this example, `onClick` is a **function prop** passed from the parent.

---

### 6. Passing Numbers as Props

Props can be passed with simple **numbers** for calculations or counters:

```jsx
<Counter count={5} />
```

```jsx
const Counter = ({ count }) => {
  return <h1>Current Count: {count}</h1>;
}
```

---

### 7. Passing Objects as Props

Objects can be passed as props, which allows us to send structured data like user info, settings, etc.

```jsx
<UserInfo user={{ name: "Pawan", age: 25 }} />
```

```jsx
const UserInfo = ({ user }) => {
  return (
    <div>
      <h1>Name: {user.name}</h1>
      <h1>Age: {user.age}</h1>
    </div>
  );
}
```

---

### 8. Passing Strings as Props

Strings are one of the most common types of props. We use them for names, titles, labels, etc.

```jsx
<Title text="Welcome to React!" />
```

```jsx
const Title = ({ text }) => {
  return <h1>{text}</h1>;
}
```

---

### 9. Passing Symbols as Props

Though symbols are not used very often, they are a primitive data type in JavaScript and can also be passed as props.

```jsx
const uniqueId = Symbol("id");
<ComponentWithSymbol id={uniqueId} />
```

```jsx
const ComponentWithSymbol = ({ id }) => {
  return <h1>{id.toString()}</h1>;
}
```

---

### 10. PropTypes for Validation

React allows us to validate props using **PropTypes**. This is helpful in ensuring that the props passed to a component are of the correct type.

```jsx
import PropTypes from "prop-types";

const ProtoTypeComponent = ({ username, salary }) => {
  return (
    <div>
      <h1>Username: {username}</h1>
      <h1>Salary: {salary}</h1>
    </div>
  );
};

ProtoTypeComponent.propTypes = {
  username: PropTypes.string,
  salary: PropTypes.number
};

ProtoTypeComponent.defaultProps = {
  username: "John Doe",
  salary: 50000
};

export default ProtoTypeComponent;
```

---

### Prop Types

| Prop Type    | Example                     | Explanation                                    |
| ------------ | --------------------------- | ---------------------------------------------- |
| **Array**    | `[1, 2, 3]`                 | Array of values passed as prop.                |
| **Boolean**  | `true` / `false`            | Use to toggle visibility or states.            |
| **Function** | `onClick={handleClick}`     | Passing functions to handle events or actions. |
| **Number**   | `100`                       | Numbers used for calculations, counts, etc.    |
| **Object**   | `{ name: "Pawan", age: 28 }` | Passing structured data.                       |
| **String**   | `"Hello World"`             | Simple text or labels.                         |
| **Symbol**   | `Symbol("id")`              | Rarely used, unique identifier.                |

---

### Note:

* Props are a powerful feature in React, allowing data to be shared between components.
* Destructuring props makes code more concise and readable.
* Use **PropTypes** for validation to ensure your components receive the correct types of data.
* Practice passing different data types like arrays, booleans, numbers, and objects to fully understand how props work.

---

### Video : [ReactJS Props Tutorial](https://drive.google.com/file/d/1MAaZhCEubcZEHFB2-LOUdgIsifvxW3-M/view?usp=sharing)
