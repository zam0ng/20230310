import React from 'react'
import { useState } from 'react';

const Mine = () => {
   const arr = new Array(30).fill("0");
   const [isActive, setActive] = useState(false);
  return (
    <div>
        {isActive ? arr.map((item) => <day>{item}</day>) : <></>}
    </div>
  )
}

export default Mine