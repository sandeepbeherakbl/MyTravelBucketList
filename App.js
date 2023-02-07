import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Navbar from './src/components/navbar'
import Welcome from './src/components/welcome'
import Homepage from './src/components/homepage'
import Myplan from './src/components/Myplan'
import Iternary from './src/components/Iternary'
import AppNavigator from './src/Navigation/AppNavigator'
import { NavigationContainer } from '@react-navigation/native'

const App = () => {
  return (
    <>
    <NavigationContainer>
      <AppNavigator/>
    </NavigationContainer>
    </>
  )
}

export default App

const styles = StyleSheet.create({

})