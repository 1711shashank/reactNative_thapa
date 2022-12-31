import { StyleSheet, Text, View, Image } from 'react-native';
import Home from './src/screens/Home';

export default function App() {
  const description = 'A paragraph is a self-contained unit of discourse in writing dealing with a particular point or idea.'
  return (
    <View style={styles.mainContainer}>
      <View style={styles.homeTop}>
        <Image
          style={styles.headerImage} 
          resizeMode="contain"
          source={require("./assets/Photo.jpg")}
        />
        <Text style={styles.mainHeader}>  Welcome  </Text>
        <Text style={[styles.mainHeader,{fontSize:33, color:'4c5dab', marginTop:0}]}>
          Kumar Shashank 
        </Text>
        <Text style={styles.paraStyle}> {description} </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    height:"100%",
    display:"flex",
    justifyContent: "space-between",
    paddingHorizontal:"20",
    backgroundColor:"#fff",
    textAlign:"center",
  },
  homeTop:{
    display:"flex",
    justifyContent:"center",
    alignItems:"center",
    paddingHorizontal:10,
  },
  headerImage:{
    height: undefined,
    width:"100%",
    aspectRatio: 1,
    display:"flex",
    alignItems:"stretch",
    marginTop:50,
    borderRadius:20,
  },
  mainHeader:{
    fontSize:30,
    color:"#344055",
    textTransform:"uppercase",
  },
  paraStyle:{
    textAlign:"left",
    fontSize:19,
    color:"#7d7d7d",
    marginTop:30,
    paddingBottom:50,
    lineHeight:26,
  }

});
