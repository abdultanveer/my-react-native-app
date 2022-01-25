import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { Button, ScrollView, StyleSheet, Text, TextInput, View } from 'react-native';

export default function App() {

  const [people, setPeople] = useState(
    [
      { name: 'abdul', key: '1' },
      { name: 'ansari', key: '2' },
      { name: 'abhinav', key: '3' },
      { name: 'niket', key: '4' },
      { name: 'harshit', key: '5' },
      { name: 'abdul', key: '6' },
      { name: 'ansari', key: '7' },
      { name: 'abhinav', key: '8' },
      { name: 'niket', key: '9' },
      { name: 'harshit', key: '10' },
      { name: 'abdul', key: '11' },
      { name: 'ansari', key: '12' },
      { name: 'abhinav', key: '13' },
      { name: 'niket', key: '14' },
      { name: 'harshit', key: '15' },

    ]
  )

  return (
    <View style={styles.container}>
    <ScrollView>
      {
        people.map((item) => {
          return (
            <View key={item.key}>
              <Text style = {styles.item}>{item.name}</Text>
            </View>
          )
        }
        )}
        </ScrollView>

    </View>

  );
}

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
