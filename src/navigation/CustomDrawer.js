import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity , SafeAreaView} from 'react-native';
import { DrawerContentScrollView, DrawerItemList } from '@react-navigation/drawer';
import BackButton from '../uttils/BackButton';

const CustomDrawer = (props) => {
  return (
    <SafeAreaView style={{ flex: 1, width: '100%' }}>
      <DrawerContentScrollView
        {...props}
        contentContainerStyle={{ flex: 1 }}
        style={{ backgroundColor: '#27ae60', width: '100%' , color: 'black' } }
      >
        {/* Back Button */}
        <BackButton {...props} />

        {/* Profile Section */}
        <View style={styles.profileSection}>
          <Image
            source={require('../../assets/img/profileImage.png')}
            style={styles.profileImage}
          />
          <Text style={styles.profileName}>Ajit Kushwaha</Text>
        </View>

        {/* Drawer Items */}
        <View style={[{ paddingHorizontal: 10, width: '100%' }, styles.drawerItem]}>
          <DrawerItemList {...props} />
        </View>

        {/* Footer/Logout */}
        <View style={styles.footer}>
          <TouchableOpacity onPress={() => {}}>
            <Text style={styles.logoutText}>Logout</Text>
          </TouchableOpacity>
        </View>
      </DrawerContentScrollView>
    </SafeAreaView>
  );
};


const styles = StyleSheet.create({
    profileSection: {
        padding: 10,
        alignItems: 'center',
        borderBottomWidth: 1,
        borderBottomColor: '#ccc',
        borderRadius: 50,
    },
    profileImage: {
        width: 70,
        height: 70,
        borderRadius: 35,
        marginBottom: 10,
    },
    profileName: {
        color: '#fff',
        fontSize: 18,
        fontWeight: 'bold',
    },
    drawerItem:{
       flex: 1, 
       backgroundColor: '#fff',
       width:"100%", 
       paddingTop: 10,
       borderRadius: 10,
       color: '#000',
      
    },
    footer: {
        padding: 20,
        borderTopWidth: 1,
        borderTopColor: '#ccc',
        backgroundColor: '#fff',
    },
    logoutText: {
        color: 'red',
        fontWeight: 'bold',
    },
    drawerItemStyle: {
        width: 'black',
    },
});

export default CustomDrawer;