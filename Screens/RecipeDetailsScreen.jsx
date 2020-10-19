import React, { useEffect } from 'react';
import { StyleSheet, View, Text,Image } from 'react-native';
import ButtonInput from '../components/ButtonInput'

export default function RecipeDetailsScreen({route}) {
  const {title,img_url} = route.params;
  return(
    <View style={styles.container}>
      <Text style={styles.text}>  
        {title}
      </Text>
      <Image
        source={img_url}
        style={styles.image}
      />
    </View>
  )
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    color: '#000'
  },
  image: {
    display:'flex',
    width: 100,
    height: 100
  }
});