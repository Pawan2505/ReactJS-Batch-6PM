import React, { useState } from "react";

const App = () => {
  const [isLogin, setIsLogin] = useState(true); // state to track login/logout

  return (
    <div>
      {/* One-line version of conditional rendering */}
      <button onClick={() => setIsLogin(!isLogin)}>
        {isLogin ? "Logout" : "Login"}
      </button>

      {/* Alternate version (commented) using if-else style rendering
      {isLogin ? (
        <button onClick={() => setIsLogin(!isLogin)}>Logout</button>
      ) : (
        <button onClick={() => setIsLogin(!isLogin)}>Login</button>
      )} */}
    </div>
  );
};

export default App;

/*
=========================
📝 Conditional Rendering + useState
=========================

1. useState(true) → creates a state `isLogin` to check login status.

2. When button is clicked, `setIsLogin(!isLogin)` toggles the value:
   - true becomes false
   - false becomes true

3. Ternary operator `{isLogin ? "Logout" : "Login"}` changes the button text.

4. This is called **conditional rendering** — based on state, UI changes.

5. You can write condition in two ways:
   - Ternary operator (used here)
   - if-else style using JSX blocks (also shown in comment)

6. Great for building login/logout UI, show/hide menus, toggle themes, etc.
*/
