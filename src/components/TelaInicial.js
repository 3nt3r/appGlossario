import React, {Component} from 'react';
import {View, Text, Image, StyleSheet, Button, StatusBar} from 'react-native';

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

          <Text style={styles.nomes}> Curso Tecnológico em Sistemas para Internet </Text>
          <Text style={styles.titulos}> Aplicativo Desenvolvido por: </Text>

          <Text style={styles.nomes}> Jefferson Barros </Text>
          <Text style={styles.nomes}> Rúben José </Text>
          <Text style={styles.nomes}> Bruno Angelim </Text>

          <Text style={styles.titulos}> Professores Responsáveis: </Text>
          <Text style={styles.nomes}> Maria Patricia Lourenço Barros </Text>
          <Text style={styles.nomes}> Joabis Nobre Martins </Text>
        </View>

        <Button onPress={() => {Actions.glossario()}} title="Glossário" color="#359830" />

      </View>
    );
  }
}

const styles = StyleSheet.create({
  containerPrincipal: {
    flex: 1,
    backgroundColor: '#ccc'
  },
  logo: {
    width: 263,
    height: 73
  },
  containerLogo: {
    flex: 2,
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 20
  },
  containerInformacoes: {
    flex: 6,
    alignItems: 'center',
    justifyContent: 'center'
  },
  titulos: {
    fontSize: 18,
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
