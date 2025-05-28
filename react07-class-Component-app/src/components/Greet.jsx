// =======================================
// Method 1: Direct props access using this.props
// =======================================

// import React, { Component } from 'react'

// export default class Greet extends Component {
//   render() {
//     return (
//       <div>
//         <h1>Hello {this.props.name}!</h1>  // 🔹 Direct access of props
//         <p>My age is : {this.props.age}</p> // 🔹 this.props se number access
//         <ul>
//           {this.props.arr.map((item, index) => (
//             <li key={index}>{item}</li>     // 🔹 Array map karke list banayi
//           ))}
//         </ul>
//         <div>
//           <p>{this.props.obj.id}</p>        // 🔹 Object ke values access ki
//           <p>{this.props.obj.name}</p>
//         </div>
//       </div>
//     );
//   }
// }

/*
🔸 Method 1 Explanation:
------------------------
this.props ka use karke har value directly access ki gayi
Har jagah pe this.props likhna padta hai — thoda repetitive ho jata hai
Ye method simple hai, but code lamba ho sakta hai

🔁 jab chhoti file ho ya beginner ho to Method 1 samajhne me easy hota hai
*/




// =======================================
// Method 2: Destructuring this.props for clean code
// =======================================

// import React, { Component } from 'react'

// export default class Greet extends Component {
//   render() {
//     // props destructuring for cleaner code
//     const { name, age, arr, obj } = this.props;

//     return (
//       <div>
//         <h1>Hello {name}!</h1>             {/* 🔹 String props */}
//         <p>My age is : {age}</p>           {/* 🔹 Number props */}
//         <ul>
//           {arr.map((item, index) => (
//             <li key={index}>{item}</li>    {/* 🔹 Array mapped */}
//           ))}
//         </ul>
//         <div>
//           <p>{obj.id}</p>                  {/* 🔹 Object values */}
//           <p>{obj.name}</p>
//         </div>
//       </div>
//     );
//   }
// }

/*
🔸 Method 2 Explanation:
------------------------
this.props ko destructure kar liya, taaki baar-baar na likhna pade
Code clean aur readable ban jata hai
Mostly used by professional developers

🟢 Best practice: props ko destructure karo jab multiple props ho
*/
