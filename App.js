import React from 'react';
import { StyleSheet, View } from 'react-native';
import CalendarTracker from './components/CalendarTracker';

export default function App() {
  return (
    <View style={styles.container}>
      <CalendarTracker />   
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 0,
    margin: 0,
    height: '100%',
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
