import { View, Text, TextInput } from 'react-native'
import React from 'react'
import { useState } from 'react';

export default function CounterCustomSet({setCustomValParentState}) {
    const [customVal, setCustomVal] = useState(1);

    const applyChangesInState = (text) => {
        setCustomVal(text);
        setCustomValParentState(text);
    };
    return (
        <View style={{
            flex: 1,
            alignItems: 'center',
        }}>
            <TextInput value={customVal}
                style={{
                    borderWidth: 1,
                    width: '80%',
                }}
                onChangeText={(text) => applyChangesInState(text)}
            />
        </View>
    )
}