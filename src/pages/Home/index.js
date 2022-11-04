import React, { Component } from 'react';
import {
  View,
  Image,
  ImageBackground,
  Text,
  TouchableOpacity,
  StatusBar,
  ScrollView,
  Touchable,
  TouchableHighlight,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';

import { styles } from './styles'

export default function Home() {

  const navigation = useNavigation();

  function next() {
    navigation.navigate('Capacitismo')
  }

  return (
    <TouchableHighlight onPress={next}>
      <Image
        style={styles.bckGnd}
        source={require('../../assets/GIF_EST0054NP019-Mub-SP-Quizz-Enem-1080x1920.gif')}
      />
    </TouchableHighlight>
  );

}