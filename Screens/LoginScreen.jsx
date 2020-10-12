import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Input from '../components/Input'
import ButtonInput from '../components/ButtonInput'

export default function LoginScreen({navigation}) {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <Text>MiRecetario.cl</Text>
      <Input placeholder="Usuario"/>
      <Input placeholder="Password"/>
      <ButtonInput title="Ingresar" onPress={() =>  navigation.navigate('Home')} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
