import { useNavigation } from "@react-navigation/native";
import { useEffect, useState } from "react";
import { Text } from "react-native";

function Timer({max, click}){
    const [counter, setCounter] = useState(max);
    const navigation = useNavigation();

    useEffect(() =>{
        
        if(counter > 0){
            console.log("teste");
            console.log(counter);
            //console.log(click);
            setTimeout(()=>setCounter(counter - 1), 1000);
        }else{
            if(click == true){
           // console.log(click);
                navigation.navigate('Home');
            }
           // console.log(click);
        }
    },[counter]);

    return(
        <Text style={{fontSize:100}}>
            {counter}
        </Text>
    )
}

export default Timer;