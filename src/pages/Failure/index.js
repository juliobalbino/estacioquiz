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
import Timer from '../components/Timer';


export default function Failure() {

  const navigation = useNavigation();


  function next() {
    navigation.navigate('Home')
  }

  return (
    <>
      <Timer tempo={10} />
      <ImageBackground
        style={styles.bckGnd}
        source={require('../../assets/leve.png')}
      >
        <Image
          source={require('../../assets/EST0054NP019-Mub-SP-Quizz-Enem-1080x1920_0006_T_Errou.png')}
        />

        <TouchableOpacity onPress={next}
          style={styles.tcpresethd
          }>
        </TouchableOpacity>
      </ImageBackground>
    </>
  );

}