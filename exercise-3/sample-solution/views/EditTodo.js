import React, { useState } from "react"
import { Button } from "../components/Button"
import { TextInput } from "../components/TextInput"

export const EditTodo = ({ oldTitle, onEdit, onCancel }) => {
  const [newTitle, setNewTitle] = useState(oldTitle)

  return (
    <>
      <TextInput value={newTitle} onChangeText={setNewTitle} />
      <Button title="Apply changes" onPress={() => onEdit(newTitle)} disabled={newTitle.length === 0} />
      <Button title="Cancel" onPress={onCancel} />
    </>
  )
}
