import React, { useState } from "react"
import { Button } from "../components/Button"
import { TextInput } from "../components/TextInput"

export const AddTodo = ({ onAdd }) => {
  const [newTitle, setNewTitle] = useState("")
  const [newBody, setNewBody] = useState("")

  const addTodo = () => {
    onAdd(newTitle, newBody)
    setNewTitle("")
    setNewBody("")
  }

  return (
    <>
      <TextInput value={newTitle} onChangeText={setNewTitle} placeholder="New Todo Title …" />
      <TextInput value={newBody} onChangeText={setNewBody} placeholder="New Todo Body …" />
      <Button title="Add Todo" onPress={addTodo} disabled={newTitle.length === 0} />
    </>
  )
}
