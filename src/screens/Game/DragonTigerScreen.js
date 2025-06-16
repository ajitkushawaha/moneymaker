import React, { useState } from 'react';
import { View, Text, TouchableOpacity, TextInput, StyleSheet, Alert } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { addReward } from '../../redux/balanceSlice';

const getRandomCard = () => Math.floor(Math.random() * 13) + 1; // 1 to 13

const DragonTigerScreen = () => {
  const [bet, setBet] = useState('');
  const [choice, setChoice] = useState(null);
  const [dragonCard, setDragonCard] = useState(null);
  const [tigerCard, setTigerCard] = useState(null);
  const [result, setResult] = useState('');

  const balance = useSelector(state => state.balance.amount);
  const dispatch = useDispatch();

  const handlePlay = () => {
    const betAmount = parseInt(bet);

    if (!choice) return Alert.alert('❌ Please choose Dragon, Tiger, or Tie');
    if (!bet || betAmount <= 0) return Alert.alert('❌ Invalid bet');
    if (betAmount > balance) return Alert.alert('❌ Insufficient balance');

    const dragon = getRandomCard();
    const tiger = getRandomCard();

    setDragonCard(dragon);
    setTigerCard(tiger);

    dispatch(addReward(-betAmount));

    if (dragon > tiger && choice === 'Dragon') {
      dispatch(addReward(betAmount * 2));
      setResult('🎉 Dragon Wins!');
    } else if (tiger > dragon && choice === 'Tiger') {
      dispatch(addReward(betAmount * 2));
      setResult('🎉 Tiger Wins!');
    } else if (dragon === tiger && choice === 'Tie') {
      dispatch(addReward(betAmount * 5));
      setResult('🎉 It\'s a Tie! Big Win!');
    } else {
      setResult('😢 You Lost');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>🐉 Dragon vs 🐅 Tiger</Text>

      <Text style={styles.balance}>Wallet: ₹{balance}</Text>

      <View style={styles.choiceRow}>
        {['Dragon', 'Tiger', 'Tie'].map(opt => (
          <TouchableOpacity
            key={opt}
            style={[styles.choiceBtn, choice === opt && styles.selected]}
            onPress={() => setChoice(opt)}
          >
            <Text style={styles.choiceText}>{opt}</Text>
          </TouchableOpacity>
        ))}
      </View>

      <TextInput
        style={styles.input}
        placeholder="Enter bet amount"
        keyboardType="numeric"
        value={bet}
        onChangeText={setBet}
      />

      <TouchableOpacity style={styles.playBtn} onPress={handlePlay}>
        <Text style={styles.playText}>Play</Text>
      </TouchableOpacity>

      {dragonCard !== null && tigerCard !== null && (
        <View style={styles.cardsRow}>
          <Text style={styles.card}>🐉 {dragonCard}</Text>
          <Text style={styles.card}>🐅 {tigerCard}</Text>
        </View>
      )}

      {result ? <Text style={styles.result}>{result}</Text> : null}
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, alignItems: 'center', backgroundColor: '#fff' },
  title: { fontSize: 24, fontWeight: 'bold', marginVertical: 20 },
  balance: { fontSize: 16, marginBottom: 10 },
  choiceRow: { flexDirection: 'row', marginBottom: 15 },
  choiceBtn: {
    padding: 10,
    borderRadius: 10,
    borderWidth: 2,
    borderColor: '#ccc',
    marginHorizontal: 8,
  },
  selected: { borderColor: '#27ae60', backgroundColor: '#eaffea' },
  choiceText: { fontSize: 16 },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    width: '80%',
    padding: 12,
    borderRadius: 10,
    marginVertical: 10,
    textAlign: 'center',
  },
  playBtn: {
    backgroundColor: '#27ae60',
    padding: 15,
    borderRadius: 10,
    marginTop: 10,
  },
  playText: { color: '#fff', fontSize: 16, fontWeight: 'bold' },
  cardsRow: { flexDirection: 'row', marginTop: 30 },
  card: {
    fontSize: 30,
    fontWeight: 'bold',
    marginHorizontal: 20,
    color: '#2c3e50',
  },
  result: { marginTop: 20, fontSize: 20, fontWeight: 'bold', color: '#27ae60' },
});

export default DragonTigerScreen;
