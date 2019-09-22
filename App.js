import React, {Component} from 'react';

import {Router, Stack, Scene} from 'react-native-router-flux';
import firebase from 'firebase';

import TelaInicial from './src/components/TelaInicial';
import Glossario from './src/components/Glossario';
import VisualizaTermo from './src/components/VisualizaTermo';
import Login from './src/components/Login';
import InsereTermos from './src/components/InsereTermos';

class App extends Component{

  componentWillMount(){
    var firebaseConfig = {
      apiKey: "AIzaSyCdNUMdpKHtOpijJu5E9liRoPuWk7awiBQ",
      authDomain: "appglossario.firebaseapp.com",
      databaseURL: "https://appglossario.firebaseio.com",
      projectId: "appglossario",
      storageBucket: "",
      messagingSenderId: "116006249933",
      appId: "1:116006249933:web:a557a84263af20c7865084"
    };
    firebase.initializeApp(firebaseConfig);
  }

  render(){

    console.disableYellowBox = true;

    return(
      <Router>
        <Stack key="root">

          <Scene
            key="telaInicial"
            component={TelaInicial}
            title="Login"
            hideNavBar
          />

          <Scene
            key="glossario"
            component={Glossario}
            title="Termos Técnicos"
            navBarButtonColor="#fff"
            navigationBarStyle={{backgroundColor: '#359830'}}
            titleStyle={{color: '#fff'}}
          />

          <Scene
            key="visualizaTermo"
            component={VisualizaTermo}
            title=""
            navBarButtonColor="#fff"
            navigationBarStyle={{backgroundColor: '#359830'}}
            titleStyle={{color: '#fff'}}
          />

          <Scene
            key="login"
            component={Login}
            title="Área do Administrador"
            navBarButtonColor="#fff"
            navigationBarStyle={{backgroundColor: '#359830'}}
            titleStyle={{color: '#fff'}}
          />

          <Scene
            key="insereTermos"
            component={InsereTermos}
            title="Insira um Novo Termo"
            navBarButtonColor="#fff"
            navigationBarStyle={{backgroundColor: '#359830'}}
            titleStyle={{color: '#fff'}}
          />

        </Stack>
      </Router>
    );
  }
}

export default App;
