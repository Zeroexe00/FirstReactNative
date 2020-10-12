import React from 'react'
import { Text, TextInput, View } from 'react-native';


export default function Input(props){
  
  return (
    <View>
      <Text>
        Usuario
      </Text>
      <TextInput
        {...props}
        style={{
          height: 40,
          width: 300,
          borderColor: 'gray',
          borderWidth: 1
        }}
      />
    </View>
  )
}