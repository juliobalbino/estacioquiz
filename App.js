import React from 'react';

import { createStackNavigator } from '@react-navigation/stack';
import Home from './src/pages/Home';
import { NavigationContainer } from '@react-navigation/native';
import Success from './src/pages/Success';
import Failure from './src/pages/Failure';
import Congratulations from './src/pages/Congratulations';


  const Stack = createStackNavigator();

  export default function App({ navigation }) {


    return (
        <NavigationContainer>
          <Stack.Navigator
            initialRouteName="Home"
            screenOptions={{
              headerShown:false,
              gestureEnabled:true,
              cardStyle: {
                backgroundColor: '#EBEEF8',
              },
            }}
          >
            <Stack.Screen name='Home' component={Home} />
            <Stack.Screen name='Failure' component={Failure} />
            <Stack.Screen name='Success' component={Success} />
            <Stack.Screen name='Congratulations' component={Congratulations} />


          </Stack.Navigator>
        </NavigationContainer>
    );
  }