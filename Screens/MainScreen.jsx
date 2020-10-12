import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import ButtonInput from '../components/ButtonInput'

export default function Home({navigation}) {
  return(
    <View style={styles.container}>
      <Text>
        Home para las recetas
      </Text>
      <ButtonInput title="Lista de recetas" onPress={() => navigation.navigate('Recetas')} />
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
});