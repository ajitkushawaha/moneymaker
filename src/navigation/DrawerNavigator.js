import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { TouchableOpacity, Text, View, Image } from 'react-native';
import LottieView from 'lottie-react-native';
import HomeScreen from '../screens/Home/HomeScreen';
import WalletScreen from '../screens/Wallet/WalletScreen';
import CustomDrawer from './CustomDrawer';
import { useSelector } from 'react-redux';

const Drawer = createDrawerNavigator();
const Stack = createNativeStackNavigator();

function HomeStack() {
  const balance = useSelector(state => state.balance.amount);
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Home"
        component={HomeScreen}
        options={({ navigation }) => ({
          title: '',
          headerShown: true,
          headerLeft: () => (
            <TouchableOpacity onPress={() => navigation.openDrawer()} style={{ marginLeft: 15 }}>
              <Image
                source={require('../../assets/img/hamburger.png')} // local image
                style={{ width: 30, height: 30 }}
              />
            </TouchableOpacity>
          ),
          headerRight: () => (
            <TouchableOpacity onPress={() => navigation.navigate('Wallet')} style={{ marginRight: 15 }}>
              {
                balance > 0 ? (
                  <LottieView
                    source={require('../../assets/json/wallet.json')} // local JSON animation
                    autoPlay
                    loop
                    style={{ width: 40, height: 40 }}
                  />
                ) :
                  (
                    <Image
                      source={require('../../assets/img/wallet.png')} // local image
                      style={{ width: 30, height: 30 }}
                    />
                  )
              }


            </TouchableOpacity>
          ),
        })}
      />
    </Stack.Navigator>
  );
}

const DrawerNavigator = () => {
  return (
    <Drawer.Navigator
      drawerContent={(props) => <CustomDrawer {...props} />}
      screenOptions={{
        headerShown: false,
        drawerStyle: {
          width: '100%',
          backgroundColor: 'gray',
        },
        drawerItemStyle: {
          width: '100%',
        },
        drawerLabelStyle: {
          color: '#black', // example
          fontSize: 16,
        },
      }}
    >
      <Drawer.Screen name="HomeStack" component={HomeStack} />
      <Drawer.Screen name="Wallet" component={WalletScreen} />
    </Drawer.Navigator>
  );
};


export default DrawerNavigator;
