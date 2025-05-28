### **React Class Components (Various Methods)**

---

### **Method 1: Using `React.Component` directly**

```javascript
import React from "react";

class ClassComponent extends React.Component {
  render() {
    return (
      <div>
        <h1>Hello Bhai Log React samjh aa raha hai.</h1>
      </div>
    );
  }
}

export default ClassComponent;
```

---

### **Explanation for Method 1:**

1. **`import React from "react"`**

   * React ka pura object import kiya hai (full import).

2. **`extends React.Component`**

   * Yeh class React ke `Component` class se inherit karti hai.

3. **`render()`**

   * `render()` method ke andar UI return hota hai.

4. **`export default`**

   * Isse hum component ko dusri file me import kar sakte hain.

⚠️ **Note**: Yeh method bilkul sahi hai, par thoda lamba syntax hai.

---

### **Method 2: Using Destructuring for Shorter Code**

```javascript
import React, { Component } from "react";

class ClassComponent extends Component {
  render() {
    return (
      <div>
        <h1>Hello Bhai Log React samjh aa raha hai.</h1>
      </div>
    );
  }
}

export default ClassComponent;
```

---

### **Explanation for Method 2:**

1. **`import React, { Component }`**

   * Humne `React` se sirf `Component` ko destructure karke import kiya.

2. **`class ClassComponent extends Component`**

   * React.Component ke jagah sirf `Component` likha gaya hai.

3. **`render()`**

   * Same concept: UI ko return karta hai.

4. **`export default`**

   * Is component ko dusri file mein import karne ke liye.

**Method 2** short aur clean hota hai, aur yeh mostly developers dwara prefer kiya jata hai.

---

### **Method 1: Direct `this.props` Access**

```javascript
import React, { Component } from 'react';

export default class Greet extends Component {
  render() {
    return (
      <div>
        <h1>Hello {this.props.name}!</h1>  {/* Direct access of props */}
        <p>My age is: {this.props.age}</p>  {/* Accessing number */}
        <ul>
          {this.props.arr.map((item, index) => (
            <li key={index}>{item}</li>  {/* Mapping array to list */}
          ))}
        </ul>
        <div>
          <p>{this.props.obj.id}</p>  {/* Accessing object values */}
          <p>{this.props.obj.name}</p>
        </div>
      </div>
    );
  }
}
```

---

### **Explanation for Method 1:**

1. **Direct `this.props`**

   * `this.props` ka use karke har value ko directly access kiya gaya hai.
2. **Repetitive `this.props`**

   * Har jagah `this.props` likhna padta hai, jo thoda repetitive ho jata hai.

**Note**: Jab chhoti files ho ya beginner ho, toh Method 1 samajhne me easy hota hai.

---

### **Method 2: Destructuring `this.props` for Cleaner Code**

```javascript
import React, { Component } from 'react';

export default class Greet extends Component {
  render() {
    const { name, age, arr, obj } = this.props;  {/* Destructuring props */}
    return (
      <div>
        <h1>Hello {name}!</h1>             {/* String props */}
        <p>My age is : {age}</p>           {/* Number props */}
        <ul>
          {arr.map((item, index) => (
            <li key={index}>{item}</li>    {/* Array mapped */}
          ))}
        </ul>
        <div>
          <p>{obj.id}</p>                  {/* Object values */}
          <p>{obj.name}</p>
        </div>
      </div>
    );
  }
}
```

---

### **Explanation for Method 2:**

1. **Destructuring `this.props`**

   * `this.props` ko destructure karke, hum code ko clean aur readable bana sakte hain.

2. **Best Practice**

   * Jab multiple props ho, tab destructuring ka use karna best practice hai.

---

### **Named Export Example**

```javascript
import React, { Component } from "react";

// Named export component
export class NamedComponent extends Component {
  render() {
    return (
      <div>
        <h1>Named Export</h1>
      </div>
    );
  }
}
```

---

### **Explanation for Named Export:**

* **`Named Export`**

  * Jab aap multiple components ko ek file se export karna chahte ho, toh `Named Export` use karte hain.
* **Import Syntax**

  * `import { NamedComponent } from './components/NamedComponent';`

---

### **Default Export Example**

```javascript
import React, { Component } from "react";

// Default export component
export default class PropsInClassComponent extends Component {
  render() {
    return (
      <div>
        <h1>PropsInClassComponent : default export Component</h1>
      </div>
    );
  }
}
```

---

### **Explanation for Default Export:**

* **`Default Export`**

  * Jab ek file se sirf ek main component export karna ho, tab `Default Export` use kiya jata hai.

* **Import Syntax**

  * `import PropsInClassComponent from './components/PropsInClassComponent';`

---

### **Class Component with State Example**

```javascript
import React, { Component } from 'react';

class StateInClassComponent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 0,
    };
  }

  render() {
    return (
      <React.Fragment>
        <h1>Count : {this.state.count}</h1>
        <button onClick={() => this.setState({ count: this.state.count + 1 })}>
          Increment
        </button>
      </React.Fragment>
    );
  }
}

export default StateInClassComponent;
```

---

### **Explanation for State in Class Component:**

1. **`constructor()`**

   * State initialize karte hain constructor mein, `count: 0` ke saath.

2. **`this.state`**

   * State ko `this.state` ke through access kiya jata hai.

3. **`setState()`**

   * `this.setState()` ke through state update hota hai.

---

### **Video Explanation**

You can watch the video for more details:

[Watch the Video Here](https://drive.google.com/file/d/15dUvQ591RSndlSbws_aSbv35FFVIBn7A/view?usp=sharing)

