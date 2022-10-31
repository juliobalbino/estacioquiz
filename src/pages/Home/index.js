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

import {styles} from './styles'

export default function Home() {

    return (
       
      <ImageBackground
      style={styles.bckGnd}
      source={require('../../assets/EST0054NP019-Mub-SP-Quizz-Enem-1080x1920_0011_FundoEstrelas.png')}
      resizeMode='stretch'
    >


    </ImageBackground>
    
    );

}