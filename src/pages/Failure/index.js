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
    navigation.navigate('Home')
  }

  return (
    <ImageBackground
      style={styles.bckGnd}
      source={require('../../assets/background.png')}
    >
      <Image
        source={require('../../assets/EST0054NP019-Mub-SP-Quizz-Enem-1080x1920_0006_T_Errou.png')}
      />

      <TouchableOpacity onPress={next}
        style={styles.tcpresethd 
        }>
      </TouchableOpacity>
    </ImageBackground>

  );

}