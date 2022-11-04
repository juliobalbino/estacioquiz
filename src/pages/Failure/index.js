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


export default function Failure() {

  const navigation = useNavigation();


  function next() {
    navigation.navigate('Home')
  }

  return (
    <ImageBackground
      style={styles.bckGnd}
      source={require('../../assets/background.png')}
    >
      <Image
        source={require('../../assets/EST0054NP019-Mub-SP-Quizz-Enem-1080x1920_0006_T_Errou.png')}
        style={{ width: "64%", height: "20%" }}
      />
      <TouchableOpacity onPress={next}
        style={{
          width: "44%", height: "5%",
          position: 'relative',
          top: -180
        }}>
      </TouchableOpacity>
    </ImageBackground>

  );

}