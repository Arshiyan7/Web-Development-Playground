import { View, Text, StyleSheet, Button } from 'react-native'
import React from 'react'

export default function Search({navigation}){
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Serach</Text>
      <Button title='Home' onPress={()=>navigation.navigate('Home')}></Button>
    </View>
  )
}

const styles = StyleSheet.create ({

  container : {
    flex : 1,
    justifyContent : 'center',
    alignItems : 'center'
  },
  text : {
    color : 'black',
    fontSize : 20,
    marginBottom : 5
  }
})

