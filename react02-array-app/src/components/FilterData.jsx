import React from 'react'

const FilterData = () => {
    const arr = [12, 34, 56, 67];
 const even = arr.filter((num) => num%2 === 0)
  return (
      <div>
          <h1>Even Number : </h1>
          <ul>
              {
                even.map((num, index) => (
                    <li key={index}>{num}</li>
              ))
              }
          </ul>
    </div>
  )
}

export default FilterData