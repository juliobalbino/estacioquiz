import React, { Component, useState, useEffect } from 'react';
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

export default function Capacitismo() {

  const navigation = useNavigation();
  const [color, setColor] = useState('transparent');
  const [color2, setColor2] = useState('transparent');
  const [color3, setColor3] = useState('transparent');
  var doubleTouch = 0
  var doubleTouch2 = 0
  var doubleTouch3 = 0
  let count = 0
  var perg1 = false
  var perg2 = false
  var perg3 = false
  var oneSec

  const [counter, setCounter] = useState(40);
  useEffect(() => {
    if (counter < 0) {
      clearTimeout(oneSec)

      return navigation.navigate('Home');
    }
    oneSec = setTimeout(() => {
      setCounter(counter - 1);
    }, 1000);

  }, [counter]);


  function next(quantity) {
    doubleTouch = doubleTouch + quantity
    perg1 = true
    if (doubleTouch == 1 && perg1 == true) {
      setColor('yellow')
      setColor2('transparent')
      setColor3('transparent')
    }
    if (doubleTouch == 2) {
      count++
      setCounter(0)
      navigation.navigate('Success', { count: count })
    }
  }

  function failure2(quantity) {
    doubleTouch2 = doubleTouch2 + quantity
    perg2 = true
    if (doubleTouch2 == 1 && perg2 == true) {
      setColor('transparent')
      setColor2('yellow')
      setColor3('transparent')
    }
    if (doubleTouch2 == 2) {
      navigation.navigate('Failure')
    }
  }

  function failure3(quantity) {
    doubleTouch3 = doubleTouch3 + quantity
    perg3 = true
    if (doubleTouch3 == 1 && perg3 == true) {
      setColor('transparent')
      setColor2('transparent')
      setColor3('yellow')
    }
    if (doubleTouch3 == 2) {
      navigation.navigate('Failure')
    }
  }

  return (
    <>
      <ImageBackground
        style={styles.bckGnd}
        source={require('../../assets/background.png')}
      >
        <Image
          source={require('../../assets/EST0054NP019-Mub-SP-Quizz-Enem-1080x1920_0001_T_Perguntas_4.png')}
          style={styles.imgpresethd}
        />
        <TouchableOpacity onPress={() => { next(1) }}
          style={[styles.apresethd, { borderColor: color }]}>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => failure2(1)}
          style={[styles.bpresethd, { borderColor: color2 }]}>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => failure3(1)}
          style={[styles.cpresethd, { borderColor: color3 }]}>
        </TouchableOpacity>

        <View style={styles.timerpresethd}>
          <Text style={{ fontSize: 90, color: 'white' }}>{counter} s</Text>
        </View>

      </ImageBackground>
    </>
  );
}
