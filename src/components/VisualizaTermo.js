import React, {Component} from 'react';
import {View, Text, StyleSheet, Button} from 'react-native';

import YouTube from 'react-native-youtube';
import {Actions} from 'react-native-router-flux';

class VisualizaTermo extends Component{
  render(){

    const link = this.props.linkVideo;
    const video = link.split("=");

    return(
      <View style={styles.containerPrincipal}>
        <View style={styles.containerVideo}>

          <YouTube
            videoId={video[1]}
            play
            apiKey="AIzaSyCl8plPNRCkljn0qphfdxMltbBbesPY2kU"
            onReady={e => this.setState({ isReady: true })}
            onChangeState={e => this.setState({ status: e.state })}
            onChangeQuality={e => this.setState({ quality: e.quality })}
            onError={e => this.setState({ error: e.error })}
            style={styles.blocoYoutube}
          />

        </View>

        <View style={styles.containerInformacoes}>
          <Text style={styles.titulos}> Produzido por: </Text>
          <Text style={styles.nomes}> Maria Patricia Lourenço Barros </Text>

          <Text style={styles.titulos}> Termo apresentado: </Text>
          <Text style={styles.nomes}> {this.props.title} </Text>

          <Text style={styles.titulos}> Descrição: </Text>
          <Text style={styles.nomes}>
            Texto é um conjunto de palavras e frases encadeadas que permitem interpretação e transmitem uma mensagem.
            É qualquer obra escrita em versão original e que constitui um livro ou um documento escrito.
            Um texto é uma unidade linguística de extensão superior à frase.
          </Text>
        </View>

        <Button title="Voltar" onPress={() => {Actions.pop()}} color="#359830" />

      </View>
    );
  }
}

const styles = StyleSheet.create({
  containerPrincipal: {
    flex: 1
  },
  containerVideo: {
    flex: 3
  },
  blocoYoutube: {
    alignSelf: 'stretch',
    height: 200
  },
  containerInformacoes: {
    flex: 5
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

export default VisualizaTermo;
