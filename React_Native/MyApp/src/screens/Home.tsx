import { View, Text, StyleSheet, Button } from 'react-native';
import React from 'react';

export default function Home({ navigation }) {
  const myData = { id: 1, name: 'flex' };
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Home</Text>
      <Button
        title="Profile"
        onPress={() => navigation.navigate('Profile', { user: myData })}
      />
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    color: 'black',
    fontSize: 20,
    marginBottom: 5,
  },
});
