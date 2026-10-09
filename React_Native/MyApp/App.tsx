import {
  View,
  Text,
  StyleSheet,
  Image,
  Pressable,
  useColorScheme,
  ScrollView,
  SafeAreaView,
  FlatList,
  TextInput,
  Button
} from 'react-native';

import aizenImg from './assets/aizen.png';
import { useState } from 'react';

// ==================================================
// EXERCISE 1 — PROFILE / BASIC STYLING
// ==================================================

// export default function App() {
//   return (
//     <View style={styles.container}>
//       <Text style={styles.text}>yokoso watashi no soul society!</Text>

//       <Image source={aizenImg} style={styles.image} />

//       <Pressable style={styles.button}>
//         <Text style={styles.buttonText}>Press</Text>
//       </Pressable>
//     </View>
//   );
// }

// ==================================================
// EXERCISE 2 — PHONE-BASED APPEARANCE / COLOR SCHEME
// ==================================================

// export default function App() {
//   const theme = useColorScheme();

//   const isDarkMode = theme === 'dark';

//   const backgroundColor = isDarkMode ? 'black' : 'white';
//   const textColor = isDarkMode ? 'white' : 'black';

//   return (
//     <View style={[styles.container, { backgroundColor }]}>
//       <Text style={{ color: textColor }}>
//         App
//       </Text>
//     </View>
//   );
// }

// ==================================================
// EXERCISE 3 — FLEX IN NATIVE
// ==================================================

// export default function App(){
//   return(
//     <View style={styles.container}>
//       <View style={styles.box1}></View>
//       <View style={styles.box2}></View>
//       <View style={styles.box3}></View>
//     </View>
//   )
// }

// ==================================================
// EXERCISE 4 — SCROLL VIEW (INSTAGRAM STORIES)
// ==================================================

// export default function App(){
//   return(
//     <ScrollView
//     contentContainerStyle = {{gap : 10,}}
//     horizontal
//     style={styles.container}>
//       <View style={styles.box1}></View>
//       <View style={styles.box2}></View>
//       <View style={styles.box3}></View>
//       <View style={styles.box1}></View>
//       <View style={styles.box2}></View>
//       <View style={styles.box3}></View>
//       <View style={styles.box1}></View>
//       <View style={styles.box2}></View>
//       <View style={styles.box3}></View>
//       <View style={styles.box1}></View>
//       <View style={styles.box2}></View>
//       <View style={styles.box3}></View>
//       <View style={styles.box1}></View>
//       <View style={styles.box2}></View>
//       <View style={styles.box3}></View>
//       <View style={styles.box1}></View>
//       <View style={styles.box2}></View>
//       <View style={styles.box3}></View>
//       <View style={styles.box1}></View>
//       <View style={styles.box2}></View>
//       <View style={styles.box3}></View>
//       <View style={styles.box1}></View>
//       <View style={styles.box2}></View>
//       <View style={styles.box3}></View>
//     </ScrollView>
//   )
// }

// ==================================================
// EXERCISE 5 — FlatList
// ==================================================
// const coffees = [
//   { id: '1', name: 'Mocha', price: 500 },
//   { id: '2', name: 'Espresso', price: 300 },
//   { id: '3', name: 'Flat White', price: 420 },
//   { id: '4', name: 'Macchiato', price: 350 },
//   { id: '5', name: 'Cold Brew', price: 380 },
//   { id: '6', name: 'Caramel Latte', price: 550 },
//   { id: '7', name: 'Vanilla Cappuccino', price: 480 },
//   { id: '8', name: 'Irish Coffee', price: 600 },
//   { id: '9', name: 'Affogato', price: 450 },
//   { id: '10', name: 'Iced Americano', price: 320 },
//   { id: '11', name: 'White Mocha', price: 520 },
//   { id: '12', name: 'Hazelnut Latte', price: 530 },
//   { id: '13', name: 'Pumpkin Spice Latte', price: 580 },
//   { id: '14', name: 'Doppio', price: 280 },
//   { id: '15', name: 'Cortado', price: 360 },
//   { id: '16', name: 'Turkish Coffee', price: 400 },
//   { id: '17', name: 'Iced Mocha', price: 490 },
//   { id: '18', name: 'Coconut Latte', price: 540 },
//   { id: '19', name: 'Red Eye', price: 370 },
//   { id: '20', name: 'Dirty Chai Latte', price: 510 },
//   { id: '21', name: 'Honey Latte', price: 460 },
//   { id: '22', name: 'Matcha Latte', price: 560 },
// ];

// export default function App() {
//   return (
//     <View style={styles.container}>
//       <FlatList
//         data={coffees}
//         keyExtractor={item => item.id}
//         numColumns={2}
//         renderItem={({ item }) => (
//           <View style={styles.card}>
//             <Text>{item.name}</Text>
//             <Text>{item.price}$</Text>
//           </View>
//         )}
//       />
//     </View>
//   );
// }

// ==================================================
// EXERCISE 6 - Handling User Input
// ==================================================

export default function App(){

  const [name, setName] = useState('')
  const [submittedText, setSubmittedText] = useState('')

  const handleSubmit = () => {
    setSubmittedText(name)
    setName('')
  }

  return(
    <View style={styles.container}>
      <Text style={styles.text}>Welcome Back!</Text>
      <TextInput
      placeholder='Enter your name...'
      value={name}
      style = {styles.input}
      onChangeText={(name) => setName(name)}
      />    
      <Button title='Submit' onPress={handleSubmit}></Button>
      {submittedText ? (<Text style={{color : 'white'}}>Name : {submittedText}</Text>) : null}
      </View>
  )
}

// ==================================================
// EXERCISE 1 STYLES
// ==================================================

// const styles = StyleSheet.create({
//   container: {
//     backgroundColor: '#FFFFFF',
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     gap: 10,
//   },

//   text: {
//     color: 'purple',
//     fontWeight: 'bold',
//     fontSize: 24,
//   },

//   image: {
//     width: 200,
//     height: 300,
//     borderRadius: 100,
//   },

//   button: {
//     backgroundColor: 'purple',
//     padding: 10,
//     borderRadius: 15,
//     width: 200,
//     alignItems: 'center',
//     borderWidth: 3,
//     borderColor: '#ca2d2d',
//   },

//   buttonText: {
//     color: 'white',
//     fontWeight: 'bold',
//   },
// });

// ==================================================
// EXERCISE 2 — STYLES
// ==================================================

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
// });

// ==================================================
// EXERCISE 3 — STYLES (FLEXBOX)
// ==================================================

// const styles = StyleSheet.create({
//   container : {
//     flex : 1,
//     flexDirection : 'column',
//     justifyContent : 'center',
//     alignItems : 'center',
//     backgroundColor : 'black',
//   },

//   box1 : {
//     width : 80,
//     height : 80,
//     backgroundColor : 'red'
//   },

//   box2 : {
//     width : 80,
//     height : 80,
//     backgroundColor : 'yellow'
//   },

//   box3 : {
//     width : 80,
//     height : 80,
//     backgroundColor : 'white'
//   },
// });

// ==================================================
// EXERCISE 4 — STYLES (SCROLL VIEW)
// ==================================================

// const styles = StyleSheet.create({
//   container : {
//     flex : 1,
//     backgroundColor : 'black',
//     paddingTop : 35, // NOTE : set according to your own phone (35 suits my phone)
//     //gap : 10, cannot be applied in Scroll view, for changes in scroll view it has it's own property (code above!)
//   },

//   box1 : {
//     borderRadius : 50,
//     width : 80,
//     height : 80,
//     backgroundColor : 'red'
//   },

//   box2 : {
//     borderRadius : 50,
//     width : 80,
//     height : 80,
//     backgroundColor : 'yellow'
//   },

//   box3 : {
//     borderRadius : 50,
//     width : 80,
//     height : 80,
//     backgroundColor : 'white'
//   },
// });


// ==================================================
// EXERCISE 5 — STYLES (Flatlist)
// ==================================================
// const styles = StyleSheet.create({

//   container : {
//     padding : 20,
//     borderWidth : 20,
//     borderColor : 'white'
//   },

//   card: {
//     flex: 1,
//     backgroundColor: '#f2f2f2',
//     padding: 20,
//     margin: 8,
//     borderRadius: 12,
//     alignItems: 'center',
//     justifyContent: 'center',
//     minHeight: 100,
//   },
// });

// ==================================================
// EXERCISE 6 — STYLES (Handling User Input)
// ==================================================

const styles = StyleSheet.create({
  container : {
    flex : 1,
    justifyContent : 'center',
    alignItems : 'center',
    padding : 20,
    gap : 8
  },
  text :{
    color : 'white',
    fontWeight : 'bold',
    fontSize : 20
  },
  input : {
    color : 'white',
    borderWidth : 1,
    borderColor : 'white',
    width : '100%',
    borderRadius : 5,
    paddingVertical : 10
  }
})