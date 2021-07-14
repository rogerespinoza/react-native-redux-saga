// import React from 'react'
// import { View, Text } from 'react-native'
// import { styles } from '../styles'

// export default function Tab1() {
//   return (
//     <View style={styles.center}>
//       <Text style={styles.title}>Tab 1</Text>
//     </View>
//   )
// }
// // 

import React from "react";
import { StyleSheet, Text, View, SafeAreaView, Image } from "react-native";

export default function ScreenTab() {
  return (
    <SafeAreaView style={styles.screen}>
      <View style={styles.container}>
        <Text style={styles.title}>Hola, bienvenido</Text>
        <View style={styles.containerImage}>
          <Image
            style={styles.img}
            source={require("../images/background-blue.png")}
            resizeMode='cover'
          />
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: "#5259de",
  },
  container: {
    flex: 1,
    backgroundColor: "#5259de",
    color: "white",
    // margin: 8,
    marginBottom: 0,
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8
  },
  title: {
    color: "white",
    fontWeight: "bold",
    fontSize: 32,
    margin: 20
  },
  text: {
    color: "white",
    fontSize: 22,
    marginLeft: 16,
    margin: 8
  },
  containerImage: {
    // flex: 1,
    // justifyContent: "flex-end"
  },
  img: {
    // width: "110%",
    // height: "100%"
  },
  logo: {
    width: "auto",
    height: 50,
    margin: 16
  }
});
