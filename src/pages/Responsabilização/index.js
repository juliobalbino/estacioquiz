import React, { Component } from 'react';
import {
  View,
  Image,
  ImageBackground,
  Text,
  TouchableOpacity,
  StatusBar,
  ScrollView,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';

import { styles } from './styles'

export default function Responsabilizacao({ route }) {

  const navigation = useNavigation();

  const {
    count
} = route.params;

let countb = count

  function next() {
    countb++
    navigation.navigate('Success',{ count: countb } )
  }

  function failure() {
    navigation.navigate('Failure')
  }

  function failure() {
    navigation.navigate('Failure')
  }

  return (
    <ImageBackground
      style={styles.bckGnd}
      source={require('../../assets/comBaixo.png')}
    >
      <Image
        source={require('../../assets/EST0054NP019-Mub-SP-Quizz-Enem-1080x1920_0002_T_Perguntas_3.png')}
        style={{marginTop: 80}}
      />
      <TouchableOpacity onPress={next}
        style={{
          width: 780, height: 90,
          position: 'relative',
          top: -420,
          borderRadius: 15,
          // borderColor: 'yellow',
          // borderWidth: 4    
        }}>
      </TouchableOpacity>

      <TouchableOpacity onPress={failure}
        style={{
          width: 780, height: 90,
          position: 'relative',
          top: -410,
          borderRadius: 15,
          // borderColor: 'yellow',
          // borderWidth: 4   
          
        }}>
      </TouchableOpacity>
      <TouchableOpacity onPress={failure}
        style={{
          width: 780, height: 90,
          position: 'relative',
          top: -400,
          borderRadius: 15,
          // borderColor: 'yellow',
          // borderWidth: 4 
          
        }}>
      </TouchableOpacity>
      
    </ImageBackground>
  );

}