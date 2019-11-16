
import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';

class SaibaMais extends Component{
  render(){
    return(
      <View style={styles.containerPrincipal}>

        <Text style={styles.titulos}> Desenvolvido no Curso: </Text>
        <Text style={styles.nomes}>Tecnologia em Sistemas para Internet</Text>

        <Text style={styles.titulos}>Desenvolvedores:</Text>
        <Text style={styles.nomes}>Jefferson Barros dos Santos</Text>
        <Text style={styles.nomes}>Rúben José Mendes Alves</Text>
        <Text style={styles.nomes}>Marllyl Bruno Angelim Soares</Text>

        <Text style={styles.titulos}>Professores Responsáveis:</Text>
        <Text style={styles.nomes}>Joabis Nobre Martins</Text>
        <Text style={styles.nomes}>Maria Patrícia Lourenço Barros</Text>

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
  titulos: {
    fontSize: 20,
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

export default SaibaMais;
