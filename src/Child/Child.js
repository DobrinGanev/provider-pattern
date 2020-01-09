import React, {useContext} from "react"
import {ParentContext} from "../ParentProvider"
const Child = () => {
  const {inputValue, handleOnChange} = useContext(ParentContext)

  return (
    <>
      <input onChange={handleOnChange} value={inputValue}></input>
      entered: {inputValue}
    </>
  )
}
export default Child
