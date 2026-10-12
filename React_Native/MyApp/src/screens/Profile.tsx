import { View, Text, StyleSheet, Button } from 'react-native'
import React from 'react'

export default function Profile({navigation, route}){
  const user  = route.params?.user
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Profile</Text>
      <Text>Id : {user?.id}</Text>
      <Text>Name : {user?.name}</Text>
      <Button title='Search' onPress={()=>navigation.navigate('Search')}></Button>
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
  },
  UserData : {
    fontWeight : 'bold',
    fontSize : 20
  }
})
