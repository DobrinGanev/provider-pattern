import React from "react"
import "./App.css"
import ParentProvider from "./ParentProvider"
import Child from "./Child"

function App() {
  return (
    <ParentProvider>
      <Child />
    </ParentProvider>
  )
}

export default App
