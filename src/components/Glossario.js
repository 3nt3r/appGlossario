import React, {Component} from 'react';
import {View, Text, StyleSheet, SafeAreaView, FlatList, TouchableOpacity, ActivityIndicator} from 'react-native';

import {Actions} from 'react-native-router-flux';
import firebase from 'firebase';

class Glossario extends Component{

  constructor(props){
    super(props);
    this.state = {
      dados: [],
      carregamento: false
    }
  }

  componentWillMount(){
    firebase.database().ref("/termos").on("value", snapshot => {
      if(snapshot.val() == null){
        this.setState({dados: [{tipo: 1, mensagem: "Nenhum termo encontrado."}], carregamento: true});
      }else{
        let vetorInvertido = Object.values(snapshot.val()).slice(0).reverse();
        this.setState({dados: vetorInvertido, carregamento: true});
      }
    });
  }

  renderizaLinhas({item}){

    if(item.tipo == 1){
      return(
        <View style={styles.itemVazio}>
          <Text style={styles.titleVazio}> Nenhum termo encontrado. </Text>
        </View>
      );
    }else{
      return(
        <View style={styles.item}>
          <TouchableOpacity
            onPress={() => {
              Actions.visualizaTermo({
                video: item.video,
                termo: item.termo,
                descricao: item.descricao,
                pessoa: item.pessoaVideo,
                title: item.termo
            })
          }}
            underlayColor="white"
          >
            <Text style={styles.title}>{item.termo}</Text>
          </TouchableOpacity>
        </View>
      );
    }
  }

  renderPrincipal(){
    if(this.state.carregamento){
      return(
        <View>
          <FlatList
            data={this.state.dados}
            extraData={this.state}
            renderItem={({item}) => this.renderizaLinhas({item}) }
            keyExtractor={item => item.video}
          />

          <View style={styles.itemAdministrador}>
            <TouchableOpacity
              onPress={() => {Actions.login()}}
              underlayColor="white"
            >
              <Text style={styles.title}> Administrador </Text>
            </TouchableOpacity>
          </View>
        </View>
      );
    }else{
      return(
        <View style={styles.indicador}>
          <ActivityIndicator size="large" color="#359830" style={styles.indicador} />
        </View>
      );
    }
  }

  render(){
    return(
      <View style={styles.containerPrincipal}>
        <SafeAreaView style={styles.container}>

          <View>
            {this.renderPrincipal()}
          </View>

        </SafeAreaView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  containerPrincipal: {
    flex: 1,
    backgroundColor: '#ccc'
  },
  container: {
    flex: 1,
    marginTop: 10
  },
  item: {
    backgroundColor: '#C90C0F',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
    borderRadius: 8
  },
  title: {
    fontSize: 20,
    textAlign: 'center',
    color: '#fff'
  },
  itemAdministrador: {
    backgroundColor: '#359830',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
    borderRadius: 8
  },
  indicador: {
    paddingTop: 20,
    paddingBottom: 20
  },
  itemVazio: {
    backgroundColor: '#C90C0F',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
    borderRadius: 8
  },
  titleVazio: {
    fontSize: 20,
    textAlign: 'center',
    color: '#fff',
    fontStyle: 'italic'
  }
});

export default Glossario;
