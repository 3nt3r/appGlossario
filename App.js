import React, {Component} from 'react';
import {View, Text} from 'react-native';

import TelaInicial from './src/components/TelaInicial';
import Glossario from './src/components/Glossario';

class App extends Component{
  render(){

    console.disableYellowBox = true;

    return(
        <View>
          <Text> Tela Inicial </Text>
        </View>
    );
  }
}

export default App;
