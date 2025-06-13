import React, { memo } from 'react';

const MyButton = ({ increase }) => {
  console.log("rendering button");

  return (
    <div>
      <button onClick={increase}>Custom Button</button>
    </div>
  );
};

export default memo(MyButton);
