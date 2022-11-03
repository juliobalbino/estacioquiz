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

import { styles } from './styles';

export default function Congratulations() {

  const navigation = useNavigation();

  function next() {
    navigation.navigate('Home')
  }

  return (
    <TouchableOpacity onPress={next}>
      <ImageBackground
        style={styles.bckGnd}
        source={require('../../assets/background.png')}
      >
        <Image
          source={require('../../assets/EST0054NP019-Mub-SP-Quizz-Enem-1080x1920_0000s_0000_Texto.png')}
          style={{ marginTop: 20, width: "91%", height: "9%" }}
        />
        <Image
          source={require('../../assets/EST0054NP019-Mub-SP-Quizz-Enem-1080x1920_0000s_0001_Escaneie-o-QR-Code--e-aproveite-mais-do--ENEMVERSO.png')}
          style={{ marginVertical: 60, width: "51%", height: "9%" }}
        />
        <Image
          source={require('../../assets/EST0054NP019-Mub-SP-Quizz-Enem-1080x1920_0000s_0002_qrcode_link_2.png')}
          style={{ width: "25%", height: "15%" }}
        />
      </ImageBackground>
    </TouchableOpacity>
  );

}