//1 import
import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

//2 create component that return JSX / simple function
const App = () => {
  return (
    <View style={StyleSheet.container}>
      <Text style={styles.textStyle}> Hello Shashank </Text>
    </View>
  );
}

//3 create styleSheet
const styles = StyleSheet.create({
    textStyle: {
      color:'green',
    },
});

//4 export the file
export default App;