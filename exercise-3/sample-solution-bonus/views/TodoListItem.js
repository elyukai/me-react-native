import React from "react"
import { StyleSheet, Text, View } from "react-native"
import { InlineButton } from "../components/InlineButton"

export const TodoListItem = ({ data, onEdit, onDelete }) => (
  <View style={styles.item}>
    <View style={styles.itemTextWrapper}>
      <Text style={styles.title}>{data.title}</Text>
      {data.body?.length > 0 && <Text>{data.body}</Text>}
    </View>
    <InlineButton onPress={() => onEdit(data.id)} title="Edit" />
    <InlineButton onPress={() => onDelete(data.id)} title="Delete" />
  </View>
)

const styles = StyleSheet.create({
  item: {
    flexDirection: "row",
    marginTop: 8,
  },
  itemTextWrapper: {
    flex: 1,
    justifyContent: "center",
  },
  title: {
    fontWeight: 700
  }
})
