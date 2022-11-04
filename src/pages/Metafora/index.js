import React, { useState } from 'react';
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
  const [color, setColor] = useState('transparent');
  const [color2, setColor2] = useState('transparent');
  const [color3, setColor3] = useState('transparent');
  const [ doubleTouch, setDoubleTouch] = useState(1)
  const [ doubleTouch2, setDoubleTouch2] = useState(1)
  const [ doubleTouch3, setDoubleTouch3] = useState(1)

  function next() {
    setDoubleTouch(doubleTouch + 1)
    if (doubleTouch == 1) {
      setColor('yellow')
      setColor2('transparent')
      setColor3('transparent')
      setDoubleTouch2(1)
      setDoubleTouch3(1)
    }
    if (doubleTouch == 2) {
      navigation.navigate('Congratulations')
    }
  }

  function failure2() {
    setDoubleTouch2(doubleTouch2 + 1)
    if (doubleTouch2 == 1) {
      setColor('transparent')
      setColor2('yellow')
      setColor3('transparent')
      setDoubleTouch(1)
      setDoubleTouch3(1)
    }
    if (doubleTouch2 == 2) {
      navigation.navigate('Failure')
    }
  }

  function failure3() {
    setDoubleTouch3(doubleTouch3 + 1)
    if (doubleTouch3 == 1) {
      setColor('transparent')
      setColor2('transparent')
      setColor3('yellow')
      setDoubleTouch2(1)
      setDoubleTouch(1)
    }
    if (doubleTouch3 == 2) {
      navigation.navigate('Failure')
    }
  }

  return (
    <ImageBackground
      style={styles.bckGnd}
      source={require('../../assets/background.png')}
    >
     <Image
          source={require('../../assets/EST0054NP019-Mub-SP-Quizz-Enem-1080x1920_0004_T_Perguntas_1.png')}
          style={{ marginTop: 90, width: "72%", height: "45.5%" }}
        />
        <TouchableOpacity onPress={() => { failure2()}}
          style={{
            width: "63%", height: "4%",
            position: 'relative',
            top: -750,
            borderRadius: 15,
            borderColor: color2,
            borderWidth: 4,
          }}>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => next()}
          style={{
            width: "63%", height: "4%",
            position: 'relative',
            top: -780,
            borderRadius: 15,
            borderColor: color,
            borderWidth: 4,

          }}>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => failure3()}
          style={{
            width: "63%", height: "4%",
            position: 'relative',
            top: -810,
            borderRadius: 15,
            borderColor: color3,
            borderWidth: 4,
          }}>
        </TouchableOpacity>
    </ImageBackground>
  );

}