import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { SlideNumberPad, FadeNumberPad} from './Component/NumberPad';

export default function App() {

  const [slidenumPadValue, setSlideNumPadValue] = useState(0);
  const [fadeNumPadValue, setFadeNumPadValue] = useState(0);

  return (
    <View style={styles.container}>
      <View style={{padding: 10 }}>
        <Text>Enter your grade (out of 5) </Text>
        <SlideNumberPad 
          initialValue={slidenumPadValue}
          label={`your grade (out of 5)`}
          onDone={(v) => setSlideNumPadValue(v)}
        />
      </View>
      <View style={{padding: 10 }}>
        <Text>Enter your grade (in percentage) </Text>
        <FadeNumberPad 
          initialValue={fadeNumPadValue}
          label={`your grade (in percentage)`}
          onDone={(v) => setFadeNumPadValue(v)}
        />
      </View>
    </View>
  );

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
});
