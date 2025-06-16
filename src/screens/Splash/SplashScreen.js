import React, { useEffect } from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

const SplashScreen = ({ navigation }) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      navigation.replace('Login'); // Automatically go to Login
    }, 2000); // 2 seconds

    return () => clearTimeout(timer); // Clean up timer
  }, []);

  return (
    <View style={styles.container}>
      <Image source={require('../../../assets/img/logo.png')} style={styles.logo} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#fff' },
  title: { fontSize: 32, fontWeight: 'bold', marginTop: 20, color: '#2ecc71' },
  logo: { width: "80%", height: "50%" },
});

export default SplashScreen;
