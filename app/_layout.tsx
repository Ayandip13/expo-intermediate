import React from 'react'
import { Stack } from "expo-router"

function Rootlayout() {
  return (
    <Stack screenOptions={{headerShown:false}}>
      <Stack.Screen name='index'/>
      <Stack.Screen name='login'/>
      <Stack.Screen name='signup'/>
    </Stack>
  )
}

export default Rootlayout