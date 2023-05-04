import { View, Text } from 'react-native'
import Button from 'react-native-button';
import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { decreaseAction, increaseAction } from '../actions';

export default function CounterComponent() {
  const dispatch = useDispatch();
  const times = useSelector(state => state.counter)
  return (
    <View style={{ flex: 1, marginTop: 30, backgroundColor: "beige" }}>
      <Text style={{ margin: 20, fontWeight: 'bold', color: 'forestgreen', fontSize: 20 }}>Redux Saga</Text>
      <View style={{ height: 50, margin: 10, flexDirection: 'row' }}>
        <Button
          containerStyle={{ padding: 10, height: 45, borderRadius: 10, backgroundColor: 'darkviolet' }}
          style={{ fontSize: 18, color: 'white' }}
          // onPress={dispatch(decreaseAction(step))}
          onPress={() => dispatch(decreaseAction(1))}
        >
          Decrement -
        </Button>
        <Button
          containerStyle={{ padding: 10, height: 45, borderRadius: 10, backgroundColor: 'darkviolet', marginLeft: 30 }}
          style={{ fontSize: 18, color: 'white' }}
          onPress={() => dispatch(increaseAction(1))}
        >
          Increment +
        </Button>
      </View>
      <Text style={{ margin: 10, fontWeight: 'bold', color: 'darkblue', fontSize: 17 }}>
        Counts: {times}
      </Text>

    </View>
  )
}
