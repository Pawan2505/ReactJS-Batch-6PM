// Method 1:
// export const NamedComponent1 = () => {
//   return (
//     <div>NamedComponent1</div>
//   )
// }


// export const NamedComponent2 = () => {
//   return <div>NamedComponent2</div>;
// };


// Method 2:
const NamedComponent1 = () => {
  return <div>NamedComponent1</div>;
};

const NamedComponent2 = () => {
  return <div>NamedComponent2</div>;
};

// You can export multiple named components from the same file.
export { NamedComponent1, NamedComponent2 };  // Exporting both components as named exports

