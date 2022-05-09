import React from "react"
import { Divider } from "../components/Divider"
import { TodoListItem } from "./TodoListItem"

export const TodoList = ({ data, onEdit, onDelete }) => (
  <>
    {data.map(item => (
      <TodoListItem
        key={item.id}
        data={item}
        onEdit={onEdit}
        onDelete={onDelete}
        />
    ))}
    {data.length > 0 && <Divider />}
  </>
)
