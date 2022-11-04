import React, { Component , useEffect , useState} from 'react';
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

export default function Success({ route }) {

  const {
    count
  } = route.params;

  const navigation = useNavigation();

  function next() {
    if (count == 1) {
      navigation.navigate('Responsabilizacao', { count: count })
    } else if (count == 2) {
      navigation.navigate('Estrategia', { count: count })
    } else {
      navigation.navigate('Metafora')
    }
  }

  return (
    <ImageBackground
      style={styles.bckGnd}
      source={require('../../assets/background.png')}
    >
      <Image
        source={require('../../assets/EST0054NP019-Mub-SP-Quizz-Enem-1080x1920_0005_T_Acertou.png')}
        style={{ width: "62%", height: "20%" }}
      />
      <TouchableOpacity onPress={next}
        style={{
          width: "52%", height: "5%",
          position: 'relative',
          top: -204
        }}>
      </TouchableOpacity>
    </ImageBackground>
  );

}