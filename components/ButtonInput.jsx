import React from 'react'
import { Button,View } from 'react-native';

export default function ButtonInput(props) {
  return (
    <View style={{ margin: 10 }}>
      <Button {...props} />
    </View>
  )
}