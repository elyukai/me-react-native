import React, { useState } from "react"
import { Button } from "../components/Button"
import { TextInput } from "../components/TextInput"

export const EditTodo = ({ oldTitle, oldBody, onEdit, onCancel }) => {
  const [newTitle, setNewTitle] = useState(oldTitle)
  const [newBody, setNewBody] = useState(oldBody)

  return (
    <>
      <TextInput value={newTitle} onChangeText={setNewTitle} placeholder="New Todo Title …" />
      <TextInput value={newBody} onChangeText={setNewBody} placeholder="New Todo Body …" />
      <Button title="Apply changes" onPress={() => onEdit(newTitle, newBody)} disabled={newTitle.length === 0} />
      <Button title="Cancel" onPress={onCancel} />
    </>
  )
}
