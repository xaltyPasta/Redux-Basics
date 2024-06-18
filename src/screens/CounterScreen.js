import { View, Text } from 'react-native'
import React from 'react'
import CounterController from '../components/CounterController';
import CounterView from '../components/CounterView';
import { useState } from 'react';
import { useSelector } from 'react-redux';

export default function CounterScreen({customValParentState}) {
    const counter =useSelector(state=>state.counter);
    return (
        <View style={{
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
        }}>
            <CounterView CounterVal={counter.count} />
            <CounterController />

            
        </View>
    )
}