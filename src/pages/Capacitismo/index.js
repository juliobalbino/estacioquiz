import React, { useState, useEffect, useRef , useContext } from 'react';
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
import CountDown from 'react-native-countdown-component';
import Timer from '../../component/Timer';

export default function Capacitismo() {

  const navigation = useNavigation();
  const [color, setColor] = useState('transparent');
  const [color2, setColor2] = useState('transparent');
  const [color3, setColor3] = useState('transparent');
  const [doubleTouch, setDoubleTouch] = useState(1)
  const [doubleTouch2, setDoubleTouch2] = useState(1)
  const [doubleTouch3, setDoubleTouch3] = useState(1)
  const [stop, setStop] = useState(false)
  let count = 0
  let stop2 = false
  const timerRef = useRef(null);

  const [counter, setCounter] = useState(10);
  const [timerState, setTimerState] = useState(null);
  let timer = null;
  let oneSec = null

  useEffect(() => {
    
    // if (counter < 0 && stop2 == true) {
    // //clearTimeout(oneSec)
    // navigation.navigate('Home');
    // }
    // oneSec = setTimeout(() => {
    //   console.log(counter);
    //   setCounter(counter - 1);
    // }, 1000);
    //   // console.log(counter);
    if(counter > 0){
      console.log("teste");
      console.log(counter);
      oneSec = setTimeout(()=>setCounter(counter - 1), 1000);
  }
  // else{
  //     if(stop == true){
  //    // console.log(click);
  //         navigation.navigate('Home');
  //     }
  //    // console.log(click);
  // }

  },[counter]);

  // useEffect( () => () => { 
  //   if (oneSec) {
  //     clearTimeout(oneSec)    
  //   } 
  // }, []);

//   useEffect( () =>{
//     console.log("aqui o stop");
//     console.log(stop);
// },[  stop]);

 
 async function next() {
    setDoubleTouch(doubleTouch + 1)
    if (doubleTouch == 1) {
      setColor('yellow')
      setColor2('transparent')
      setColor3('transparent')
      setDoubleTouch2(1)
      setDoubleTouch3(1)
    }
    if (doubleTouch == 2) {
      await setStop(true)
      count++
      //clearInterval(intervalId)
      //intervalId =40 
      //setCounter(40)
      stop2 = true
      //teste()
      //navigation.navigate('Success', { count: count })
      // navigation.navigate('Success', { count: count })
      //clearInterval(counter)
      teste()
      clearTimeout(oneSec)
    }
  }

  function teste() {
    //clearTimeout(oneSec)
    navigation.navigate('Success')

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
    <>
      <ImageBackground
        style={styles.bckGnd}
        source={require('../../assets/leve.png')}
      >
        <Image
          source={require('../../assets/EST0054NP019-Mub-SP-Quizz-Enem-1080x1920_0001_T_Perguntas_4.png')}
          style={{ marginTop: 150, width: "72%", height: "45.5%" }}
        />
        <TouchableOpacity onPress={() => { next() }}
          style={{
            width: "62%", height: "5%",
            position: 'relative',
            top: -780,
            borderRadius: 15,
            borderColor: color,
            borderWidth: 4,
          }}>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => failure2()}
          style={{
            width: "62%", height: "5%",
            position: 'relative',
            top: -790,
            borderRadius: 15,
            borderColor: color2,
            borderWidth: 4,

          }}>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => failure3()}
          style={{
            width: "62%", height: "5%",
            position: 'relative',

            top: -810,
            borderRadius: 15,
            borderColor: color3,
            borderWidth: 4,
          }}>
        </TouchableOpacity>
        
         {/* <Timer  max={10} click={stop}/> */}
        <TouchableOpacity onPress={() => teste()}>
          <Text style={{fontSize : 100}}>Oieee</Text>
        </TouchableOpacity>
       
      </ImageBackground>
    </>
  );
}
