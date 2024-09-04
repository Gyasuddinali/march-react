import React, { createContext } from 'react'
import Takecontext from './Takecontext';
import ButtonCount from './ButtonCount';

const name=createContext();
export default function Context() {
  return (
    <div>
<name.Provider value={"context passed"}>
    <Takecontext/ >
</name.Provider>


<ButtonCount></ButtonCount>
    </div>
  );
}
export {name};