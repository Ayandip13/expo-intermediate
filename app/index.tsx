import { View, Text, StyleSheet, Button } from 'react-native'
import React, { useState } from 'react'
import ReactNativeModal from 'react-native-modal'

const Home = () => {
  const [visible, setVisible] = useState(false)
  return (
    <View style={styles.container}>
      <Button title='Open Modal' onPress={() => setVisible(true)} />   
      <ReactNativeModal isVisible={visible} onBackdropPress={() => setVisible(false)} onBackButtonPress={() => setVisible(false)} animationIn={'fadeIn'} animationOut={'flash'} style={{justifyContent:"flex-end", margin:0}}>
        <View style={{ backgroundColor: "white", height: 200, borderTopEndRadius:20, borderTopStartRadius:20 }}></View>
      </ReactNativeModal>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  }
})

export default Home