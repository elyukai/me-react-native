import React, { useState } from "react"
import { Button } from "../components/Button"
import { TextInput } from "../components/TextInput"

export const AddTodo = ({ onAdd }) => {
  const [newTitle, setNewTitle] = useState("")

  const addTodo = () => {
    onAdd(newTitle)
    setNewTitle("")
  }

  return (
    <>
      <TextInput value={newTitle} onChangeText={setNewTitle} placeholder="New Todo Title …" />
      <Button title="Add Todo" onPress={addTodo} disabled={newTitle.length === 0} />
    </>
  )
}
