import React from 'react';
import {View, Text, TextInput, TouchableOpacity, StyleSheet} from 'react-native';

export default App = () => {
  return (
    <View style={styles.container}>
      <Text>Login</Text>
      <View>
        <TouchableOpacity>
          <TextInput
            style={styles.textInput}
            placeholder='Expediente'
          />
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles =StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#B5C0D0',
    alignItems: 'center',
    justifyContent: 'center'
  },
});