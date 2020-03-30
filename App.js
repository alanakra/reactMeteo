import React from 'react';
import { StyleSheet, Text, View} from 'react-native';
import Home from './components/Home';
import Previsions from './components/Previsions';

export default function App() {
  return (
    <View style={styles.container}>
      <Home/>
      <Previsions/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#2196F3',
    height: '100%',
  },
});
