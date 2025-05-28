// =======================================
// Method 1: Using React.Component directly
// =======================================

// import React from "react";

// class ClassComponent extends React.Component {
//   render() {
//     return (
//       <div>
//         <h1>Hello Bhai Log React samjh aa raha hai.</h1>
//       </div>
//     );
//   }
// }

// export default ClassComponent;

/*
🔸 Method 1 : Explanation (React.Component):
------------------------------------------
1. import React from "react"
   → React pura object import karte hain (full import)

2. extends React.Component
   → Class ko React ke Component class se inherit kiya gaya hai

3. render()
   → Is method ke andar UI return hota hai

4. export default
   → Isse hum component ko dusri file me import kar sakte hain

⚠️ Note: Ye method bilkul sahi hai, but thoda lamba syntax hai.
*/

// =======================================
// Method 2: Using destructuring (short way)
// =======================================

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

/*
🔸 Method 2 Explanation (Destructured import):
---------------------------------------------
1. import React, { Component }
   → Yahan humne React se sirf Component ko destructure karke import kiya

2. class ClassComponent extends Component
   → React.Component ke jagah sirf Component likhna padta hai

3. render()
   → Same concept: UI ko return karta hai

4. export default
   → Is component ko dusri file me import karne ke liye

Method 2 short and clean hota hai, mostly preferred by developers
*/
