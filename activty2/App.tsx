import React from 'react';
import { Text, StyleSheet} from 'react-native';
import {SafeAreaView, SafeAreaProvider} from 'react-native-safe-area-context';

const ViewBoxesWithColorAndText = () => (
    <SafeAreaProvider>
      <SafeAreaView style={styles.container}>
      <Text style = {styles.title}>
        <text style = {styles.boldText}>Dan Axel</text>
        <text style = {styles.italicText}>Torren</text>
      </Text>
      </SafeAreaView>
    </SafeAreaProvider>
  );

const styles = StyleSheet.create({
  container: {
    flex:1,
    padding:24,
    backgroundColor: '#eaeaea',
  },
  title:{
    borderWidth: 4,
    borderColor: '#20232a',
    borderRadius: 6,
    backGroundColor: 'blue',
    color: '20232a',
    textAlign: 'center',
    fontSize: 30,
    fontWeight: 'bold',
  },
  boldText: {
    fontWeight: 'bold',
  },
  italicText: {
    fontStyle: 'italic'
  }
  }
)

export default ViewBoxesWithColorAndText;