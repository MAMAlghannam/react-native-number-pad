# react-native-number-pad
A light weight solution for keyboard avoiding issues when you just need numbers :)

![IPhone](https://i.imgur.com/vlnAg6G.gif)  ![IPhone](https://i.imgur.com/IMOIYXB.gif)

**Clone:**
> ` git clone https://github.com/MAMAlghannam/react-native-number-pad.git `

**Usage:**
```
import React, { useState } from 'react';
import { SlideNumberPad, FadeNumberPad} from './Component/NumberPad';

  const [slidenumPadValue, setSlideNumPadValue] = useState(0);
  const [fadeNumPadValue, setFadeNumPadValue] = useState(0);
  
  // slide 
  <View style={{padding: 10 }}>
    <Text>Enter your grade (out of 5) </Text>
      <SlideNumberPad 
        initialValue={slidenumPadValue}
        label={"your grade (out of 5)"}
        onDone={(v) => setSlideNumPadValue(v)}
      />
  </View>
  
  // fade
  <View style={{padding: 10 }}>
    <Text>Enter your grade (in percentage) </Text>
    <FadeNumberPad 
      initialValue={fadeNumPadValue}
      label={"your grade (in percentage)"}
      onDone={(v) => setFadeNumPadValue(v)}
    />
  </View>
```
**Props:**
| name | type | Default | Description |
| ---- | ---- | ------- | ----------- |
| label | string | empty | a label on the above |
| initialValue | number | 0 | initial value of this field |
| onDone | function | null | after hidding the modal it'll receive the final value |
| disablePoint | boolean | false | to disable the point button |
