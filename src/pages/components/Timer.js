import { useFocusEffect, useNavigation } from '@react-navigation/native';
import React, { Component, useState, useEffect } from 'react';

const Timer = ({tempo}) => {

    var oneSec;
    const navigation = useNavigation();

    const [counter, setCounter] = useState(tempo);

    useFocusEffect(
        React.useCallback(() => {
            if (counter < 0) {
                clearTimeout(oneSec)
                return navigation.navigate('Home');
            }

            oneSec = setTimeout(() => {
                setCounter(counter - 1);
            }, 1000);

        }, [counter])
    );
}

export default Timer