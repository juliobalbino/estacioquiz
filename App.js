import React from 'react';

import { createStackNavigator } from '@react-navigation/stack';
import Home from './src/pages/Home';
import { NavigationContainer } from '@react-navigation/native';
import Success from './src/pages/Success';


  const Stack = createStackNavigator();

  export default function App({ navigation }) {


    return (
        <NavigationContainer>
          <Stack.Navigator
            initialRouteName="Success"
            screenOptions={{
              headerShown:false,
              gestureEnabled:true,
              cardStyle: {
                backgroundColor: '#EBEEF8',
              },
            }}
          >
            <Stack.Screen name='Success' component={Success} />
            <Stack.Screen name='Home' component={Home} />
          </Stack.Navigator>
        </NavigationContainer>
    );
  }