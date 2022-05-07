import React from "react"
import { Button, StyleSheet, View } from "react-native"

export const InlineButton = props => (
  <View style={styles.buttonWrapper}>
    <Button {...props} />
  </View>
)

const styles = StyleSheet.create({
  buttonWrapper: {
    marginStart: 4,
  }
})
