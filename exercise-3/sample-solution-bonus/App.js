import React, { useMemo, useReducer } from "react"
import { StyleSheet, View } from "react-native"
import { Button } from "./components/Button"
import { Divider } from "./components/Divider"
import { AddTodo } from "./views/AddTodo"
import { EditTodo } from "./views/EditTodo"
import { TodoList } from "./views/TodoList"

const initialState = {
  todos: []
}

const appStateReducer = (state, action) => {
  switch (action.type) {
    case "add":
      return {
        ...state,
        todos: [...state.todos, action.payload]
      }

    case "startEdit":
      return {
        ...state,
        editId: action.payload.id
      }

    case "applyEdit":
      return {
        ...state,
        editId: undefined,
        todos: state.todos.map(
          todo => todo.id === state.editId
            ? { id: todo.id, ...action.payload }
            : todo
        )
      }

    case "cancelEdit":
      return {
        ...state,
        editId: undefined
      }

    case "delete":
      return {
        ...state,
        todos: state.todos.filter(todo => todo.id !== action.payload.id)
      }

    case "reset":
      return initialState

    default:
      return state
  }
}

export const App = () => {
  const [state, dispatch] = useReducer(appStateReducer, initialState)

  const { oldTitle, oldBody } = useMemo(
    () => {
      const item = state.todos.find(todo => todo.id === state.editId)

      return {
        oldTitle: item?.title ?? "",
        oldBody: item?.body ?? ""
      }
    },
    [state.todos, state.editId]
  )

  const addTodo = (newTitle, newBody) => dispatch({
    type: "add",
    payload: {
      id: new Date().toISOString(),
      title: newTitle,
      body: newBody.length > 0 ? newBody : undefined
    }
  })

  const editTodo = id => dispatch({
    type: "startEdit",
    payload: {
      id
    }
  })

  const applyEditTodo = (newTitle, newBody) => dispatch({
    type: "applyEdit",
    payload: {
      title: newTitle,
      body: newBody.length > 0 ? newBody : undefined
    }
  })

  const cancelEditTodo = () => dispatch({ type: "cancelEdit" })

  const deleteTodo = id => dispatch({
    type: "delete",
    payload: {
      id
    }
  })

  const resetTodos = () => dispatch({ type: "reset" })

  return (
    <View style={styles.root}>
      {state.editId !== undefined
        ? (
          <EditTodo
            oldTitle={oldTitle}
            oldBody={oldBody}
            onEdit={applyEditTodo}
            onCancel={cancelEditTodo}
            />
        )
        : (
          <>
            <TodoList data={state.todos} onEdit={editTodo} onDelete={deleteTodo} />
            <AddTodo onAdd={addTodo} />
            <Divider />
            <Button title="Reset list" onPress={resetTodos} disabled={state.todos.length === 0} />
          </>
        )}
    </View>
  )
}

export default App

const styles = StyleSheet.create({
  root: {
    flexDirection: "column",
    paddingHorizontal: 20,
    paddingBottom: 20,
    paddingTop: 12,
  },
})
