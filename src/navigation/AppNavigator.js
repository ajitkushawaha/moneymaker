import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginScreen from '../screens/Auth/LoginScreen';
import RegisterScreen from '../screens/Auth/RegisterScreen';
import HomeScreen from '../screens/Home/HomeScreen';
import SplashScreen from '../screens/Splash/SplashScreen';
import SpinWheelScreen from '../screens/Game/SpinWheelScreen';
import WithdrawScreen from '../screens/Wallet/WithdrawScreen';
import DragonTigerScreen from '../screens/Game/DragonTigerScreen';
import GuessNumberScreen from '../screens/Game/GuessNumberScreen';
import ScratchCardScreen from '../screens/Game/ScratchCardScreen';
import WalletScreen from '../screens/Wallet/WalletScreen';
import DrawerNavigator from './DrawerNavigator';


const Stack = createNativeStackNavigator();

const AppNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Splash">
        <Stack.Screen name="Splash" component={SplashScreen} options={{ headerShown: false }} />
        <Stack.Screen name="Login" component={LoginScreen} options={{ headerShown: false }} />
        <Stack.Screen name="Register" component={RegisterScreen} options={{ headerShown: false }} />
        <Stack.Screen name="Spin" component={SpinWheelScreen} options={{ headerShown: false }} />
        <Stack.Screen name="GuessNumber" component={GuessNumberScreen} options={{ title: 'Guess the Number' }} />
        <Stack.Screen name="ScratchCard" component={ScratchCardScreen} />
       <Stack.Screen name="Withdraw" component={WithdrawScreen} />
       <Stack.Screen name="Wallet" component={WalletScreen} options={{title:"hero", headerShown: false}}/>
       <Stack.Screen name="DragonTiger" component={DragonTigerScreen} options={{ title: 'Dragon vs Tiger' }} /> 
       <Stack.Screen name="Main" component={DrawerNavigator} options={{ headerShown: false }}  />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;
