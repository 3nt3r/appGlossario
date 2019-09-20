import React, {Component} from 'react';

import {Router, Stack, Scene} from 'react-native-router-flux';

import TelaInicial from './src/components/TelaInicial';
import Glossario from './src/components/Glossario';
import VisualizaTermo from './src/components/VisualizaTermo';

class App extends Component{
  render(){

    console.disableYellowBox = true;

    return(
      <Router>
        <Stack key="root">
          <Scene key="telaInicial" component={TelaInicial} title="Login" hideNavBar />

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

        </Stack>
      </Router>
    );
  }
}

export default App;
