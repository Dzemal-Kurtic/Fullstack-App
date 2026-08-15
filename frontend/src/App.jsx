import { useState, useEffect } from "react"

function App() {
  const [ item, setItem] = useState("")

  useEffect(() => {
    async function loadItem() {
      const response = await fetch("http://localhost:3000/")
      const data = await response.json()
      setItem(data)
      console.log(data)
    }

    loadItem()
  }, [])

  return (
    <>
    <div>{item.name}</div>
    </>
  )
}

export default App
