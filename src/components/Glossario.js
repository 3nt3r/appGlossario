import React, {Component} from 'react';
import {View, Text, StyleSheet, SafeAreaView, FlatList, TouchableOpacity} from 'react-native';

import {Actions} from 'react-native-router-flux';

const DATA = [
  {
    id: '1',
    title: 'Link do Vídeo 1',
  },
  {
    id: '2',
    title: 'Link do Vídeo 2',
  },
  {
    id: '3',
    title: 'Link do Vídeo 3',
  },
  {
    id: '4',
    title: 'Link do Vídeo 4',
  },
  {
    id: '5',
    title: 'Link do Vídeo 5',
  },
  {
    id: '6',
    title: 'Link do Vídeo 6',
  },
];

function Item({title}) {
  return (
    <View style={styles.item}>
      <TouchableOpacity onPress={() => {Actions.visualizaTermo()}} underlayColor="white">
        <Text style={styles.title}>{title}</Text>
      </TouchableOpacity>
    </View>
  );
}

class Glossario extends Component{
  render(){
    return(
      <SafeAreaView style={styles.container}>
        <FlatList
          data={DATA}
          renderItem={({item}) => <Item title={item.title} />}
          keyExtractor={item => item.id}
        />
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 10,
  },
  item: {
    backgroundColor: '#C90C0F',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  title: {
    fontSize: 30,
    textAlign: 'center',
    color: '#fff'
  },
});

export default Glossario;
