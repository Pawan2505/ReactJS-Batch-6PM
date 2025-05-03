// import React, { Component } from 'react'

// export default class Greet extends Component {
//   render() {
//     return (
//       <div>
//         <h1>Hello {this.props.name}!</h1>
//         <p>My age is : {this.props.age}</p>
//         <ul>
//           {this.props.arr.map((item, index) => (
//             <li key={index}>{item}</li>
//           ))}
//         </ul>
//         <div>
//           <p>{this.props.obj.id}</p>
//           <p>{this.props.obj.name}</p>
//         </div>
//       </div>
//     );
//   }
// }



import React, { Component } from 'react'

export default class Greet extends Component {


    render() {
        const { name, age, arr,obj } = this.props;
    return (
      <div>
        <h1>Hello {name}!</h1>
        <p>My age is : {age}</p>
        <ul>
          {arr.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
        <div>
          <p>{obj.id}</p>
          <p>{obj.name}</p>
        </div>
      </div>
    );
  }
}

