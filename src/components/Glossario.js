import React, {Component} from 'react';
import {View, Text, StyleSheet, Image,ScrollView ,SafeAreaView, FlatList, TouchableOpacity, ActivityIndicator, TextInput} from 'react-native';

import {Actions} from 'react-native-router-flux';
import firebase from 'firebase';
import Lupa from "../imagens/lupa.png";
import { bold } from 'colorette';
class Glossario extends Component{

  constructor(props){
    super(props);
    this.state = {
      dados: [],
      termoPesquisado: "",
      listaPesquisada: [],
      carregamento: false,
    }
  }

  componentWillMount(){
    firebase.database().ref("/termos").on("value", snapshot => {
      if(snapshot.val() == null){
        this.setState({dados: [{tipo: 1, mensagem: "Nenhum termo encontrado."}], carregamento: true});
      }else{
        let vetorEmOrdemAlfabetica = Object.values(snapshot.val()).sort((a, b) => { 
          if (a.termo > b.termo)
            return 1
          else if(a.termo < b.termo)
            return -1
          else
            return 0
        });
        this.setState({dados: vetorEmOrdemAlfabetica, carregamento: true});
      }
    });
  }

  renderizaLinhas({item}, index){
    if(item.tipo == 1){
      return(
        <View style={styles.itemVazio}>
          <Text style={styles.titleVazio}> Nenhum termo encontrado. </Text>
        </View>
      );
    }else{
      aux = false
      if(index == 0){
        letra = item.termo[0];
        aux = true
      }else if(item.termo[0] != letra){
        aux = true
        letra = item.termo[0];
      }
      return(
        <View>
          {aux ? <Text style={styles.letra}>{letra}</Text>: <View />}
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
        </View>
      );
    }
  }

  pesquisar(text){
    this.setState({ termoPesquisado: text });
    let textoParaPesquisa = text.toLowerCase()
    let termoParaComparacao = ""
    let resultados = [];
    //percorre o array com todos o dados
    this.state.dados.forEach(elemento => {
      // guarda a quantidade de letras do termo corrente correspodente ao tamanho da string pesquisada
      for(i=0;i<textoParaPesquisa.length;i++){
        termoParaComparacao += elemento.termo[i].toLowerCase();
      }
      if(termoParaComparacao === (textoParaPesquisa)){
        resultados.push(elemento)
      }
      termoParaComparacao = "";
    });
    this.setState({listaPesquisada: resultados});
  }

  renderPrincipal(){
    if(this.state.carregamento){
      letra = "";
      return(
        <ScrollView>
          <View style={styles.viewPesquisa}>
            <TextInput style={styles.input} placeholder="Pesquisar" value={this.state.termoPesquisado} onChangeText={(text) => this.pesquisar(text)}/>
            <Image source={Lupa} style={styles.icone}/>
          </View>
          <FlatList
            data={this.state.termoPesquisado == "" ? this.state.dados : this.state.listaPesquisada}
            extraData={this.state}
            renderItem={({item}, index) => this.renderizaLinhas({item}, index)}
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
        </ScrollView>
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
  letra: {
    marginLeft: 20,
    fontSize: 22,
    fontWeight: "bold"
  },
  viewPesquisa: {
    backgroundColor: '#fff',
    marginVertical: 8,
    marginHorizontal: 16,
    borderRadius: 8,
    flexDirection: "row",
    alignItems: "center"
  },
  input: {
    backgroundColor: '#fff',
    borderRadius: 8,
    flex: 8,
    paddingLeft: 20
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
  },
  icone: {
    width: 24, 
    height: 24,
    marginLeft: 10,
    marginRight: 10,
    resizeMode: "stretch"
  },
});

export default Glossario;
