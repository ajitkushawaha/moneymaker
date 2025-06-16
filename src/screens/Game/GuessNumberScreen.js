import React, { useState } from 'react';
import { View, Text, TextInput, Button, Alert, StyleSheet } from 'react-native';
import { useDispatch } from 'react-redux';
import { addToWallet } from '../../redux/walletSlice'; // Adjust the import path as necessary

const GuessNumberScreen = () => {
  const [number, setNumber] = useState('');
  const [randomNumber, setRandomNumber] = useState(generateRandomNumber());
  const dispatch = useDispatch();

  function generateRandomNumber() {
    return Math.floor(Math.random() * 10) + 1;
  }

  const handleGuess = () => {
    const guess = parseInt(number);
    if (guess === randomNumber) {
      dispatch(addToWallet(10)); // +10 coins
      Alert.alert('🎉 You Win!', 'You guessed it right! +10 coins');
    } else {
      Alert.alert('❌ Try Again', `Wrong guess. The number was ${randomNumber}`);
    }
    setRandomNumber(generateRandomNumber());
    setNumber('');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Guess a number between 1 and 10</Text>
      <TextInput
        value={number}
        onChangeText={setNumber}
        keyboardType="numeric"
        style={styles.input}
        placeholder="Enter your guess"
        maxLength={2}
      />
      <Button title="Submit Guess" onPress={handleGuess} disabled={!number} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 24,
    alignItems: 'center',
    backgroundColor: '#f9f9f9',
    flex: 1,
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: '600',
    marginBottom: 16,
  },
  input: {
    width: '60%',
    height: 50,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 12,
    marginBottom: 20,
    paddingHorizontal: 10,
    fontSize: 18,
    backgroundColor: '#fff',
  },
});

export default GuessNumberScreen;
