import React, {createContext, useState} from "react"

export const ParentContext = createContext(null)
const ParentProvider = props => {
  const [inputValue, setInputValue] = useState(0)

  const handleOnChange = event => {
    setInputValue(event.target.value)
  }
  return (
    <ParentContext.Provider
      value={{
        inputValue,
        handleOnChange: handleOnChange
      }}
    >
      {props.children}
    </ParentContext.Provider>
  )
}

export default ParentProvider
