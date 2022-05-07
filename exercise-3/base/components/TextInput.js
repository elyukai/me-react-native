import React from "react"
import { StyleSheet, TextInput } from "react-native"

const CustomTextInput = props => <TextInput style={styles.input} {...props} />

export { CustomTextInput as TextInput }

const styles = StyleSheet.create({
  input: {
    padding: 8,
    marginTop: 8,
    borderWidth: 1,
    borderStyle: "solid",
    borderColor: "#cecece",
  }
})
