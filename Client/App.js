import { StyleSheet, View, Text, SafeAreaView, TouchableOpacity } from 'react-native'
import Navigator from './Navigator'
import React from 'react'

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <Navigator />
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    backgroundColor: "#fff"
  }
})
