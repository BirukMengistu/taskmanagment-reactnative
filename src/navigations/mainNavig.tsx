import React, { FC } from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import {View , Text} from 'react-native'
import {TailwindProvider}  from 'tailwindcss-react-native'
import { Dashboard, Login, SignUp } from '../screens'
import { NavigationContainer } from '@react-navigation/native';

/**
 * @author
 * @function  MainNavigation
 * import {TailwindProvider}  from 'tailwindcss-react-native'
**/
const Stack = createNativeStackNavigator();
export const MainNavigation: FC= () => {

  return (
    <TailwindProvider>
      <NavigationContainer>
    <Stack.Navigator>
      <Stack.Screen name='home' component={Dashboard}/>
      <Stack.Screen name='signup' component={SignUp}/>
      <Stack.Screen name='login' component={Login}/>
    </Stack.Navigator>
  </NavigationContainer>
    </TailwindProvider>
  )
 }

