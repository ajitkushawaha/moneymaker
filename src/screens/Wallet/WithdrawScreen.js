import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { addReward } from '../../redux/balanceSlice';

const WithdrawScreen = ({ navigation }) => {
  const dispatch = useDispatch();
  const currentBalance = useSelector(state => state.balance.amount);
  const [amount, setAmount] = useState('');
  const [upi, setUpi] = useState('');

  const handleWithdraw = () => {
    const amt = parseFloat(amount);

    if (!upi || !upi.includes('@') || upi.length < 5) {
      Alert.alert('❌ Invalid UPI ID');
      return;
    }

    if (isNaN(amt) || amt < 10) {
      Alert.alert('❌ Minimum withdraw amount is ₹10');
      return;
    }

    if (amt > currentBalance) {
      Alert.alert('❌ Insufficient balance');
      return;
    }

    // Simulate sending withdraw request
    Alert.alert('✅ Request Submitted', `₹${amt} will be sent to ${upi}`);
    dispatch(addReward(-amt)); // subtract from wallet

    // Optionally: navigate home
    navigation.goBack();
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Withdraw Funds</Text>

      <Text style={styles.label}>Current Balance: ₹{currentBalance}</Text>

      <TextInput
        style={styles.input}
        placeholder="Enter amount (₹)"
        keyboardType="numeric"
        value={amount}
        onChangeText={setAmount}
      />

      <TextInput
        style={styles.input}
        placeholder="Enter UPI ID (e.g. name@bank)"
        value={upi}
        onChangeText={setUpi}
        autoCapitalize="none"
      />

      <TouchableOpacity style={styles.button} onPress={handleWithdraw}>
        <Text style={styles.buttonText}>Submit Request</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, justifyContent: 'center' },
  title: { fontSize: 26, fontWeight: 'bold', marginBottom: 30 },
  label: { fontSize: 16, marginBottom: 10, color: '#27ae60' },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 12,
    marginBottom: 16,
    borderRadius: 8,
  },
  button: {
    backgroundColor: '#27ae60',
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
    marginTop: 10,
  },
  buttonText: { color: '#fff', fontWeight: 'bold', fontSize: 16 },
});

export default WithdrawScreen;
