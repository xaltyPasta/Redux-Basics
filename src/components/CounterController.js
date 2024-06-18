import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { useDispatch } from 'react-redux';

export default function CounterController({}) {
    const dispatch = useDispatch();

    const incrementValue = () => {
        console.log('Increment button pressed')
        dispatch({ type: 'increment' });
    };

    const decrementValue = () => {
        console.log('Decrement button pressed');
        dispatch({ type: 'decrement' });
    };

    return (
        <View style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-around',
            width: '70%',
        }}>
            <TouchableOpacity style={{
                backgroundColor: 'blue',
                padding: 10,
            }}
            onPress={decrementValue}>
                <Text style={{
                    fontSize: 20,
                }}>DECREMENT</Text>
            </TouchableOpacity>
            <TouchableOpacity
                style={{
                    backgroundColor: 'blue',
                    padding: 10,
                }}
                onPress={incrementValue}
            >
                <Text style={{
                    fontSize: 20,
                }}>INCREMENT</Text>
            </TouchableOpacity>
        </View>
    )
}
