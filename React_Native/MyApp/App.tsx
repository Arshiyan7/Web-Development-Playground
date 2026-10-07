import {
  View,
  Text,
  StyleSheet,
  Image,
  Pressable,
  useColorScheme,
  ScrollView,
} from 'react-native';

import aizenImg from './assets/aizen.png';


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

export default function App(){
  return(
    <ScrollView 
    contentContainerStyle = {{gap : 10,}}
    horizontal
    style={styles.container}>
      <View style={styles.box1}></View>
      <View style={styles.box2}></View>
      <View style={styles.box3}></View>
      <View style={styles.box1}></View>
      <View style={styles.box2}></View>
      <View style={styles.box3}></View>
      <View style={styles.box1}></View>
      <View style={styles.box2}></View>
      <View style={styles.box3}></View>
      <View style={styles.box1}></View>
      <View style={styles.box2}></View>
      <View style={styles.box3}></View>
      <View style={styles.box1}></View>
      <View style={styles.box2}></View>
      <View style={styles.box3}></View>
      <View style={styles.box1}></View>
      <View style={styles.box2}></View>
      <View style={styles.box3}></View>
      <View style={styles.box1}></View>
      <View style={styles.box2}></View>
      <View style={styles.box3}></View>
      <View style={styles.box1}></View>
      <View style={styles.box2}></View>
      <View style={styles.box3}></View>
    </ScrollView>
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

const styles = StyleSheet.create({
  container : {
    flex : 1,
    backgroundColor : 'black',
    paddingTop : 35, // NOTE : set according to your own phone (35 suits my phone)
    //gap : 10, cannot be applied in Scroll view, for changes in scroll view it has it's own property (code above!) 
  },

  box1 : {
    borderRadius : 50,
    width : 80,
    height : 80,
    backgroundColor : 'red'
  },

  box2 : {
    borderRadius : 50,
    width : 80,
    height : 80,
    backgroundColor : 'yellow'
  },

  box3 : {
    borderRadius : 50,
    width : 80,
    height : 80,
    backgroundColor : 'white'
  },
});