import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { Button, ScrollView, StyleSheet, Text, TextInput, View } from 'react-native';
import SectionListBasics from './components/SectionListBasics';
import FlatListBasics from './components/FlatListBasics';

export default function App() {

 

  return (
    <View style={styles.container}>
      <SectionListBasics/>
      <FlatListBasics/>

    </View>

  );}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },

  boxStyle: {
    width: 50, height: 50, backgroundColor: 'powderblue'
  },
  input: {
    border: '1px solid',
    borderColor: 'blue',
    padding: 8,
  },
  item: {
    marginTop: 24, 
    padding: 30, 
    height: 30 ,
    backgroundColor: 'pink',
    fontSize: 24,
  }
});
