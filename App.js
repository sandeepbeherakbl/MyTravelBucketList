import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Navbar from './src/components/navbar'
import Welcome from './src/components/welcome'
import Homepage from './src/components/homepage'
import Myplan from './src/components/Myplan'
import Iternary from './src/components/Iternary'

const App = () => {
  return (
    <View>
      <View style={{}}>
        <Navbar/>
      </View>
      <Welcome/>
        {/* <Homepage/> */}
        {/* <Myplan/> */}
        {/* <Iternary/> */}
    </View>
  )
}

export default App

const styles = StyleSheet.create({
 
})