import React from 'react';

import { createStackNavigator } from '@react-navigation/stack';
import Home from './src/pages/Home';
import { NavigationContainer } from '@react-navigation/native';


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
          </Stack.Navigator>
        </NavigationContainer>
    );
  }