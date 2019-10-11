import React, {Component} from 'react';
import {View, Text, Image, StyleSheet, TouchableOpacity, StatusBar} from 'react-native';

import {Actions} from 'react-native-router-flux';

import Logo from '../imagens/logo.png';

class TelaInicial extends Component{
  render(){
    return(
      <View style={styles.containerPrincipal}>

        <StatusBar hidden={false} backgroundColor='#359830'/>

        <View style={styles.containerLogo}>
          <Image source={Logo} style={styles.logo} />
        </View>

        <View style={styles.containerInformacoes}>
          <Text style={styles.titulos}> Glossário Libras - Termos Técnicos </Text>
          <TouchableOpacity onPress={() => {Actions.glossario()}} style={styles.botao}><Text style={styles.rotulo}>Glossário</Text></TouchableOpacity>
          <TouchableOpacity onPress={() => {Actions.login()}} style={styles.botao}><Text style={styles.rotulo}>Administrador</Text></TouchableOpacity>
          <TouchableOpacity onPress={() => {Actions.saibaMais()}} style={styles.botao}><Text style={styles.rotulo}>Saiba mais</Text></TouchableOpacity>
        </View>

        
      </View>
    );
  }
}

const styles = StyleSheet.create({
  containerPrincipal: {
    flex: 1,
    backgroundColor: '#ccc',
    justifyContent: "center",
    alignItems: "center"
  },
  logo: {
    width: 263,
    height: 73
  },
  rotulo:{
    color:"#fff",
  },  
  botao: {
    alignItems: "center",
    backgroundColor: "#359830",
    width: 220,
    padding: 10,
    borderRadius: 4,
    marginTop: 10
  },
  containerLogo: {
    flex: 2,
    alignItems: 'center',
    justifyContent: "flex-end",
    paddingTop: 20
  },
  containerInformacoes: {
    flex: 6,
    alignItems: 'center',
    justifyContent: 'flex-start',
    marginTop: 90
  },
  titulos: {
    fontSize: 20,
    marginBottom: 20,
    fontWeight: 'bold',
    color: '#359830',
    textAlign: 'center',
    paddingTop: 10,
    paddingBottom: 10
  },
  nomes: {
    textAlign: 'center',
    paddingTop: 10,
    paddingBottom: 10
  }
});

export default TelaInicial;
