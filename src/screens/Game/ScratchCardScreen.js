import React, { useState } from 'react';
import { View, Text, Button, Alert, StyleSheet } from 'react-native';
import { useDispatch } from 'react-redux';
import { addToWallet } from '../../redux/walletSlice';

const ScratchCardScreen = () => {
  const [scratched, setScratched] = useState(false);
  const [reward, setReward] = useState(0);
  const dispatch = useDispatch();

  const handleScratch = () => {
    const prize = Math.floor(Math.random() * 20) + 1; // 1–20 coins
    setReward(prize);
    setScratched(true);
    dispatch(addToWallet(prize));
    Alert.alert('🎉 You Won!', `You've won ${prize} coins!`);
  };

  const resetScratch = () => {
    setScratched(false);
    setReward(0);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Scratch & Win 🎉</Text>

      {!scratched ? (
        <Button title="Scratch Now" onPress={handleScratch} />
      ) : (
        <View style={styles.resultBox}>
          <Text style={styles.rewardText}>You won: 💰 {reward} coins</Text>
          <Button title="Scratch Again" onPress={resetScratch} />
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 24,
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 30,
  },
  resultBox: {
    alignItems: 'center',
    marginTop: 20,
  },
  rewardText: {
    fontSize: 20,
    fontWeight: '600',
    marginBottom: 15,
    color: '#27ae60',
  },
});

export default ScratchCardScreen;
