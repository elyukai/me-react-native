import React from "react"
import { StyleSheet, View } from "react-native"

export const Divider = props => (
  <View style={styles.divider} />
)

const styles = StyleSheet.create({
  divider: {
    marginTop: 16,
    marginBottom: 8,
    height: 1,
    background: "#cecece"
  }
})
