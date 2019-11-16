import React, {Component} from 'react';
import {View, Text, Image, StyleSheet, TouchableOpacity, StatusBar} from 'react-native';

import {Actions} from 'react-native-router-flux';

import Logo from '../imagens/logo.png';

class TelaInicial extends Component{
  render(){
    return(
      <View style={styles.containerPrincipal}>

        <StatusBar hidden={false} backgroundColor='#359830'/>

        <View style={{alignItems: 'center', justifyContent: 'center', flex: 1}}>

          <View style={styles.containerLogo}>
            <Image source={Logo} style={styles.logo} />
          </View>

          <View style={styles.containerInformacoes}>
            <Text style={styles.titulos}> Glossário Libras </Text>
            <Text style={styles.titulos}> Termos Técnicos </Text>
            <Text style={styles.titulos}> Tecnologia em Alimentos </Text>

            <TouchableOpacity onPress={() => {Actions.glossario()}} style={styles.botao}>
              <Text style={styles.rotulo}> Glossário </Text>
            </TouchableOpacity>

            <TouchableOpacity onPress={() => {Actions.login()}} style={styles.botao}>
              <Text style={styles.rotulo}> Administrador </Text>
            </TouchableOpacity>

            <TouchableOpacity onPress={() => {Actions.saibaMais()}} style={styles.botao}>
              <Text style={styles.rotulo}> Saiba mais </Text>
            </TouchableOpacity>
          </View>

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
    color:"#fff"
  },
  botao: {
    alignItems: "center",
    backgroundColor: "#359830",
    width: 220,
    padding: 15,
    borderRadius: 4,
    marginTop: 15
  },
  containerLogo: {
    alignItems: 'center',
    justifyContent: "flex-end",
    paddingBottom: 25
  },
  containerInformacoes: {
    alignItems: 'center',
    justifyContent: 'flex-start'
  },
  titulos: {
    fontSize: 20,
    marginBottom: 10,
    fontWeight: 'bold',
    color: '#359830',
    textAlign: 'center',
    paddingTop: 10,
    paddingBottom: 10
  }
});

export default TelaInicial;
