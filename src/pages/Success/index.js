import React, { Component, useEffect, useState } from 'react';
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
  const [counter, setCounter] = useState(40);
  useEffect(() => {
    if (counter < 0) {
      return navigation.navigate('Home');
    }
    setTimeout(() => {
      setCounter(counter - 1);
      console.log(counter);
    }, 1000);
  }, [counter]);

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
      />

      <TouchableOpacity onPress={next}
        style={styles.tcpresethd}>
      </TouchableOpacity>

    </ImageBackground>
  );

}