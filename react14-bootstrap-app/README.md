# 📘 React JS Notes – Routing and Navigation using Page & Component Folder

---

## 📁 Folder Structure (Used in Our Example)

```
src/
├── components/
│   └── Navbar.jsx      ← Navigation links
└── pages/
    ├── Home.jsx        ← Home page
    ├── About.jsx       ← About page
    ├── Contact.jsx     ← Contact page
    └── Services.jsx    ← Services page
```

---

## 🧠 Goal

Humara goal hai:

* Alag alag pages create karna (Home, About, Contact, Services)
* Navbar se unpe navigate karna using React Router (without reload)

---

## Step-by-Step Setup

### 🔹 Step 1: Install React Router

Open terminal and run:

```bash
npm install react-router-dom
```

---

### 🔹 Step 2: Create Page Components (in `/pages` folder)

📄 **Home.jsx**

```jsx
function Home() {
  return <h2>This is Home Page</h2>;
}

export default Home;
```

📄 **About.jsx**

```jsx
function About() {
  return <h2>This is About Page</h2>;
}

export default About;
```

📄 **Contact.jsx**

```jsx
function Contact() {
  return <h2>This is Contact Page</h2>;
}

export default Contact;
```

📄 **Services.jsx**

```jsx
function Services() {
  return <h2>This is Services Page</h2>;
}

export default Services;
```

---

### 🔹 Step 3: Create Navbar (in `/components` folder)

📄 **Navbar.jsx**

```jsx
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav>
      <Link to="/">Home</Link> | 
      <Link to="/about">About</Link> | 
      <Link to="/services">Services</Link> | 
      <Link to="/contact">Contact</Link>
    </nav>
  );
}

export default Navbar;
```

---

### 🔹 Step 4: Setup Routes in App.js

📄 **App.js**

```jsx
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import Contact from "./pages/Contact";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
```

---

## Key Concepts

| Term               | Simple Meaning                                             |
| ------------------ | ---------------------------------------------------------- |
| **Navbar**         | Reusable navigation links (Link instead of `<a>`)          |
| **Pages**          | Alag alag files where screen content is written            |
| **BrowserRouter**  | App ko routing system se connect karta hai                 |
| **Routes & Route** | Path ke basis pe correct component render karta hai        |
| **Link**           | User ko page change karne ka shortcut deta hai (no reload) |

---

## Why This Structure is Best?

* **`/pages` folder**: Keeps all screens in one place
* **`/components` folder**: Reusable UI blocks (like Navbar)
* **Easy to read and manage**: Even in big apps

---

## Summery:

> React app mein har screen ek component hota hai.
> Routing se hum user ko ek screen se doosri screen par le jaa sakte hain — bina page reload kiye.

---

## 📝 Practice

* Add one more page: `Blog.jsx` in pages folder.
* Add Link in Navbar and Route in App.js.
* Try to style the Navbar.

