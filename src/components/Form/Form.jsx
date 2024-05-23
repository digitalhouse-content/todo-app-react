import { useState } from "react"

export const Form = ({ handleAddTodo }) => {
  
  const [value, setValue] = useState('')

  const handleSubmit = (event) => {

    if (value.trim() === "") {
      // Lanzar un mensaje de error
      return
    }

    event.preventDefault()

    if (!value) return
    handleAddTodo(value)
    setValue('')
  }

  return (
    <form className="w-full" onSubmit={handleSubmit}>
      <input
        type="text"
        className="w-full px-6 h-16 rounded-md bg-primary text-white focus::outline-none focus:ring-2 focus:ring-primary"
        placeholder="Crear una nueva tarea"
        value={value}
        onChange={(event) => setValue(event.target.value)}
      />
    </form>
  )
}