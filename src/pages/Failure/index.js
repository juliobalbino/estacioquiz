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


export default function Failure() {

  const navigation = useNavigation();
  
  function next(){
    navigation.navigate('Success')
  }

  return (
    <ImageBackground
      style={styles.bckGnd}
      source={require('../../assets/comBaixo.png')}
    >
      <Image
      source={require('../../assets/EST0054NP019-Mub-SP-Quizz-Enem-1080x1920_0006_T_Errou.png')}
      />
      <TouchableOpacity onPress={next}
      style={{
      width: 700, height: 150,
      position: 'relative',
      top: -140}}>
      </TouchableOpacity>
    </ImageBackground>

  );

}