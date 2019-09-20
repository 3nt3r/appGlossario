import React, {Component} from 'react';
import {View, Text, StyleSheet, SafeAreaView, FlatList, TouchableOpacity} from 'react-native';

import {Actions} from 'react-native-router-flux';

const DATA = [
  {
    id: '1',
    title: 'Homenagem Pais e Estudantes 2017',
    link: 'https://www.youtube.com/watch?v=kq8xXOHNX1E'
  },
  {
    id: '2',
    title: 'Institucional',
    link: 'https://www.youtube.com/watch?v=I0iG0ktdCgU'
  }
];

class Glossario extends Component{

  renderizaLinhas({item}){
    return(
      <View style={styles.item}>
        <TouchableOpacity
          onPress={() => {Actions.visualizaTermo({linkVideo: item.link, title: item.title})}}
          underlayColor="white"
        >
          <Text style={styles.title}>{item.title}</Text>
        </TouchableOpacity>
      </View>
    );
  }

  render(){
    return(
      <SafeAreaView style={styles.container}>
        <FlatList
          data={DATA}
          renderItem={({item}) => this.renderizaLinhas({item}) }
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
    borderRadius: 8
  },
  title: {
    fontSize: 22,
    textAlign: 'center',
    color: '#fff'
  },
});

export default Glossario;
