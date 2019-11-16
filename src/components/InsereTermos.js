import React, {Component} from 'react';
import {View, Text, Image, StyleSheet, TextInput, ScrollView, TouchableOpacity, ActivityIndicator, Alert} from 'react-native';

import {Actions} from 'react-native-router-flux';
import firebase from 'firebase';

import Logo from '../imagens/logo.png';

class InsereTermos extends Component{

  constructor(props){
    super(props);
    this.state = {
      erro: '',
      termo: '',
      video: '',
      descricao: '',
      pessoaVideo: '',
      carregamento: false
    }
  }

  armazenaTermo(){
    const {termo, video, descricao, pessoaVideo} = this.state;

    if(termo == '' || video == '' || descricao == '' || pessoaVideo == ''){
      this.setState({erro: "Todos os campos são obrigatórios!"});
    }else{
      this.setState({carregamento: true});
      firebase.database().ref('/termos/').push({termo, video, descricao, pessoaVideo})
        .then(response => {
          this.setState({erro: '', carregamento: false});
          Alert.alert("Termo cadastrado com sucesso.");
          Actions.glossario();
        })
        .catch(erro => {
          this.setState({erro: "Erro inesperado. Tente novamente mais tarde!", carregamento: false});
        })
    }
  }

  renderBotaoEnviar(){
    if(this.state.carregamento){
      return(
        <ActivityIndicator size="large" color="#359830" />
      );
    }else{
      return(
        <TouchableOpacity
          style={styles.botaoEnviar}
          onPress={() => this.armazenaTermo()}
          underlayColor='#fff'>
            <Text style={styles.textoEnviar}> Enviar </Text>
        </TouchableOpacity>
      );
    }
  }

  render(){
    return(
      <View style={styles.containerPrincipal}>
        <ScrollView>

          <View style={styles.containerLogo}>
            <Image source={Logo} style={styles.logo} />
          </View>

          <View style={styles.containerInformacoes}>
            <Text style={styles.titulos}> Preencha Todos os Campos! </Text>
          </View>

          <View style={styles.containerInputs}>

            <View style={styles.containerInputsEspaco}>
              <TextInput
                placeholder="Nome do Termo"
                style={styles.inputs}
                value={this.props.termo}
                onChangeText={texto => {this.setState({termo: texto})}}
              />
            </View>

            <View style={styles.containerInputsEspaco}>
              <TextInput
                placeholder="Link do Vídeo (Youtube)"
                style={styles.inputs}
                value={this.props.video}
                autoCapitalize='none'
                onChangeText={texto => {this.setState({video: texto})}}
              />
            </View>

            <View style={styles.containerInputsEspaco}>
              <TextInput
                placeholder="Descrição"
                style={styles.inputs}
                value={this.props.descricao}
                onChangeText={texto => {this.setState({descricao: texto})}}
              />
            </View>

            <View style={styles.containerInputsEspaco}>
              <TextInput
                placeholder="Intérprete"
                style={styles.inputs}
                value={this.props.pessoaVideo}
                onChangeText={texto => {this.setState({pessoaVideo: texto})}}
              />
            </View>

          </View>

          <View>
            {this.renderBotaoEnviar()}
          </View>

          <Text style={styles.erro}> {this.state.erro} </Text>

        </ScrollView>
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
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 30
  },
  containerInformacoes: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 20,
    paddingBottom: 10
  },
  titulos: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#359830',
    textAlign: 'center',
    paddingTop: 10,
    paddingBottom: 10
  },
  inputs: {
    fontSize: 18,
    height: 45
  },
  containerInputs: {
    paddingLeft: 50,
    flex: 1
  },
  erro: {
    paddingTop: 10,
    color: '#CD0000',
    fontWeight: 'bold',
    textAlign:'center'
  },
  containerInputsEspaco: {
    paddingBottom: 15
  },
  botaoEnviar: {
    marginRight: 40,
    marginLeft: 40,
    marginTop: 10,
    paddingTop: 10,
    paddingBottom: 10,
    backgroundColor: '#359830',
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#359830'
  },
  textoEnviar: {
    color:'#fff',
    textAlign:'center',
    paddingLeft : 10,
    paddingRight : 10
  },
});

export default InsereTermos;
