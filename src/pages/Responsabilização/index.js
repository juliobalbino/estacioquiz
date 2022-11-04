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

export default function Responsabilizacao({ route }) {

  const navigation = useNavigation();
  const [color, setColor] = useState('transparent');
  const [color2, setColor2] = useState('transparent');
  const [color3, setColor3] = useState('transparent');
  const [ doubleTouch, setDoubleTouch] = useState(1)
  const [ doubleTouch2, setDoubleTouch2] = useState(1)
  const [ doubleTouch3, setDoubleTouch3] = useState(1)

  const {
    count
} = route.params;

let countb = count

  function next() {
    setDoubleTouch(doubleTouch + 1)
    if (doubleTouch == 1 ) {
      setColor('yellow')
      setColor2('transparent')
      setColor3('transparent')
      setDoubleTouch2(1)
      setDoubleTouch3(1)
    }
    if (doubleTouch == 2) {
      countb++
    navigation.navigate('Success',{ count: countb } )
    }
    
  }

  function failure2() {
    setDoubleTouch2(doubleTouch2 + 1)
    if (doubleTouch2 == 1 ) {
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
    if (doubleTouch3 == 1 ) {
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
      source={require('../../assets/leve.png')}
    >
      <Image
        source={require('../../assets/EST0054NP019-Mub-SP-Quizz-Enem-1080x1920_0002_T_Perguntas_3.png')}
        style={{ marginTop: 80, width: "72%", height: "45.5%" }}
      />
      <TouchableOpacity  onPress={() => { next(1)}}
        style={{
          width: "62%", height: "5%",
          position: 'relative',
          top: -740,
          borderRadius: 15,
          borderColor: color,
          borderWidth: 4,
        }}>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => failure2(1)}
          style={{
            width: "62%", height: "5%",
            position: 'relative',
            top: -750,
            borderRadius: 15,
            borderColor: color2,
            borderWidth: 4,

          }}>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => failure3(1)}
          style={{
            width: "62%", height: "5%",
            position: 'relative',
            top: -765,
            borderRadius: 15,
            borderColor: color3,
            borderWidth: 4,
          }}>
        </TouchableOpacity>
    </ImageBackground>
  );

}