import React from "react"
import { Button, StyleSheet, View } from "react-native"

const CustomButton = props => (
  <View style={styles.buttonWrapper}>
    <Button {...props} style={styles.button} />
  </View>
)

export { CustomButton as Button }

const styles = StyleSheet.create({
  buttonWrapper: {
    marginTop: 8,
  }
})
