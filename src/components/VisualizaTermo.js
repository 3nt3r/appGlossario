import React, {Component} from 'react';
import {View, Text, StyleSheet, Button} from 'react-native';

import YouTube from 'react-native-youtube';
import {Actions} from 'react-native-router-flux';

class VisualizaTermo extends Component{
  render(){

    const link = this.props.video;
    const video = link.replace("https://youtu.be/", '');

    return(
      <View style={styles.containerPrincipal}>

        <View style={styles.containerVideo}>
          <YouTube
            videoId={video}
            play
            loop
            apiKey="AIzaSyCl8plPNRCkljn0qphfdxMltbBbesPY2kU"
            onReady={e => this.setState({ isReady: true })}
            onChangeState={e => this.setState({ status: e.state })}
            onChangeQuality={e => this.setState({ quality: e.quality })}
            onError={e => this.setState({ error: e.error })}
            style={{ alignSelf: 'stretch', height: 200 }}
          />
        </View>

        <View style={styles.containerInformacoes}>
          <Text style={styles.titulos}> Produzido por: </Text>
          <Text style={styles.nomes}> {this.props.pessoa} </Text>

          <Text style={styles.titulos}> Termo apresentado: </Text>
          <Text style={styles.nomes}> {this.props.termo} </Text>

          <Text style={styles.titulos}> Descrição: </Text>
          <Text style={styles.nomes}> {this.props.descricao} </Text>
        </View>

        <Button title="Voltar" onPress={() => {Actions.pop()}} color="#359830" />

      </View>
    );
  }
}

const styles = StyleSheet.create({
  containerPrincipal: {
    flex: 1,
    backgroundColor: '#ccc'
  },
  containerVideo: {
    flex: 3
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
