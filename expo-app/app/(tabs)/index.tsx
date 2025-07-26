import { Text, View, StyleSheet } from "react-native";
import { Link } from "expo-router";
import { Image } from "expo-image";

const PlaceholderImage = require('@/assets/images/background-image.png');

const Index = () => {
  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <Image source={PlaceholderImage} style={styles.image}/>
      </View>
    </View>
  );
}

export default Index;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    alignContent: 'center',
  },
  Text: {
    color: '#fff',
  },
  button:{
    fontSize: 20,
    textDecorationLine: 'underline',
    color: '#67f',
  },
  imageContainer: {
    flex: 1,
    marginTop: 30,
  },
  image: {
    width: 250,
    height: 400,
    borderRadius: 18,
  },
})