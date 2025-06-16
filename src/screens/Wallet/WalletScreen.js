import React from 'react';
import { View, Text, StyleSheet, Button , TouchableOpacity} from 'react-native';
import { useSelector } from 'react-redux';

const WalletScreen = ({navigation}) => {
  const balance = useSelector(state => state.balance.amount || 0);
  console.log('Wallet balance:', balance);
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.backBtn} onPress={() => navigation.goBack()}>
        <Text style={styles.backText}>← Back</Text>
      </TouchableOpacity >
      <Text style={styles.title}>💰 My Wallet</Text>
      <Text style={styles.balance}>Balance: ₹{balance}</Text>
      <Button title="Request Withdrawal" onPress={() => alert('Withdrawal Flow Coming Soon')} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 24,
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 26,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  balance: {
    fontSize: 22,
    marginBottom: 30,
    color: '#2ecc71',
  },
  backBtn: {
  position: 'absolute',
  top: 50,
  left: 20,
  zIndex: 1,
  padding: 10,
  backgroundColor: '#fff',
  borderRadius: 20,
  elevation: 4,
},
backText: {
  fontSize: 16,
  fontWeight: 'bold',
  color: '#27ae60',
}
});

export default WalletScreen;
