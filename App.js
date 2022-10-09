import * as React from 'react';
import { useState } from 'react';
import { View, StyleSheet, Button, TextInput } from 'react-native';
import * as Speech from 'expo-speech';

export default function App() {

  const [text, setText] = useState('');

  const speak = () => {
    const thingToSay = text;
    Speech.speak(thingToSay);
  };

  return (
    <View style={styles.container}>
      <TextInput placeholder='...type something' style={{ marginTop: 5, marginBottom: 5,  fontSize:12, width: 200, borderColor: 'gray', borderWidth: 1}}
      onChangeText={text => setText(text)}
      />
      <Button title="Press to hear text" onPress={speak} />
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 60,
  },
 
});

