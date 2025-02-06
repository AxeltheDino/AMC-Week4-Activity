import React from 'react';
import {View, FlatList, StyleSheet, Text, StatusBar, ScrollView, TouchableOpacity} from 'react-native';
import {SafeAreaView, SafeAreaProvider} from 'react-native-safe-area-context';

const DATA = [
  {
    id: 'morning1',
    title: 'Fix my Bedsheets',
  },
  {
    id: 'morning2',
    title: 'Eat my Breakfast',
  },
  {
    id: 'morning3',
    title: 'Stretching',
  },
    {
    id: 'morning4',
    title: 'Take A Shower',
  },
    {
    id: 'morning5',
    title: 'Social Media',
  }

];
  const DATA1 = [
    {
    id: 'afternoon1',
    title: 'Eat Lunch',
  },
    {
    id: 'afternoon2',
    title: 'Read A Book',
  },
    {
    id: 'afternoon3',
    title: 'Play Online Games',
  },
    {
    id: 'afternoon4',
    title: 'Practice singing',
  },
    {
    id: 'afternoon5',
    title: 'Take a nap',
  },

  ];
  const DATA2 = [
    {
    id: 'evening1',
    title: 'Eat pre-workout meal',
  },
    {
    id: 'evening2',
    title: 'Go to the Gym',
  },
    {
    id: 'evening3',
    title: 'Eat Dinner',
  },
    {
    id: 'evening4',
    title: 'Read a Book',
  },
    {
    id: 'evening5',
    title: 'Sleep',
  },

];

type ItemProps = {title: string};

const Item = ({title}: ItemProps) => (
  <View style={styles.item}>
    <TouchableOpacity>
    <Text style={styles.title}>{title}</Text>
    </TouchableOpacity>
  </View>
);

const App = () => (
  <SafeAreaProvider>
  <ScrollView>
    <SafeAreaView style={styles.container}>
      <Text style = {{fontSize: 50, textAlign: 'center'}}> <b>Morning</b></Text>
      <FlatList
        data={DATA}
        renderItem={({item}) => <Item title={item.title} />}
        keyExtractor={item => item.id}
      />

      <Text style = {{fontSize: 50, textAlign: 'center'}}> <b>Afternoon</b></Text>
      <FlatList
        data={DATA1}
        renderItem={({item}) => <Item title={item.title} />}
        keyExtractor={item => item.id}
      />

      <Text style = {{fontSize: 50, textAlign: 'center'}}> <b>Evening</b></Text>
      <FlatList
        data={DATA2}
        renderItem={({item}) => <Item title={item.title} />}
        keyExtractor={item => item.id}
      />
    </SafeAreaView>
    </ScrollView>
  </SafeAreaProvider>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
  },
  item: {
    backgroundColor: '#B1F0F7',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  title: {
    fontSize: 32,
  },
});

export default App;