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

export default function Metafora({ }) {

  const navigation = useNavigation();

  function next() {
    navigation.navigate('Congratulations')
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
        source={require('../../assets/EST0054NP019-Mub-SP-Quizz-Enem-1080x1920_0004_T_Perguntas_1.png')}
        style={{marginTop: 80}}
      />
      <TouchableOpacity onPress={next}
        style={{
          width: 800, height: 70,
          position: 'relative',
          top: -430,
          borderRadius: 15,
          // borderColor: 'yellow',
          // borderWidth: 4
          
        }}>
      </TouchableOpacity>

      <TouchableOpacity onPress={failure}
        style={{
          width: 800, height: 70,
          position: 'relative',
          top: -428,
          borderRadius: 15,
          // borderColor: 'yellow',
          // borderWidth: 4
          
        }}>
      </TouchableOpacity>
      <TouchableOpacity onPress={failure}
        style={{
          width: 800, height: 70,
          position: 'relative',
          top: -425,
          borderRadius: 15,
          // borderColor: 'yellow',
          // borderWidth: 4
          
        }}>
      </TouchableOpacity>
    </ImageBackground>
  );

}