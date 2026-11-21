import React from 'react';
import { StyleSheet, Text, View, FlatList } from 'react-native';

const App = () => {
  return (
      <View style={styles.container}>
        <FlatList
            data={datasource}
            renderItem={renderItem}
        />
      </View>
  );
};

export default App;

const datasource = [
  { key: 'a' },
  { key: 'b' },
  { key: 'c' },
  { key: 'd' },
  { key: 'e' },
  { key: 'f' },
  { key: 'g' },
  { key: 'h' },
  { key: 'i' },
  { key: 'j' },
  { key: 'k' },
  { key: 'l' },
  { key: 'm' },
  { key: 'n' },
  { key: 'o' },
  { key: 'p' },
  { key: 'q' },
  { key: 'r' },
  { key: 's' },
  { key: 't' },
];

const renderItem = ({ item }) => {
  return (
      <View style={styles.letter}>
        <Text style={styles.textStyle}>{item.key}</Text>
      </View>
  );
};



const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 50,
  },
  letter: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 10,
  },
  textStyle: {
    fontSize: 15,
    margin: 10,
    textAlign: 'left',
  },
});




