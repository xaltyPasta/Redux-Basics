import { View, Text } from 'react-native'
import React from 'react'

export default function CounterView({CounterVal}) {
  return (
    <View style={{
      marginBottom:20,
  }}>
      <Text style={{
                fontSize:50,
                fontWeight:'bold',
            }}
            >{CounterVal}</Text>
    </View>
  )
}