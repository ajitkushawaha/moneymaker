import React,{}from 'react';
import { ScrollView, View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { useSelector } from 'react-redux';

const HomeScreen = ({ navigation }) => {


  const balance = useSelector(state => state.balance.amount);

  return (
    <ScrollView contentContainerStyle={{ paddingVertical: 20, backgroundColor: '#f5f5f5' }}>
     
      <View style={styles.container}>
        <Text style={styles.welcome}>👋 Welcome to Money Maker</Text>

        <View style={styles.card}>
          <Text style={styles.label}>Your Wallet</Text>
          <Text style={styles.balance}>₹ {balance}</Text>

          <TouchableOpacity style={styles.btnOutline} onPress={() => navigation.navigate('Withdraw')}>
            <Text style={styles.btnText}>Withdraw Funds</Text>
          </TouchableOpacity>
        </View>
        <View>
          <Text style={styles.gameTitle}>Games</Text>
        </View>
        <View style={{ flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'center' }}>

          {/* Dragon vs Tiger */}
          <TouchableOpacity
            style={styles.gameCard}
            onPress={() => navigation.navigate('DragonTiger')}
          >
            <Text style={styles.gameEmoji}>🐉🐅</Text>
            <Text style={styles.gameTitle}>Dragon vs Tiger</Text>
          </TouchableOpacity>

          {/* Spin & Win */}
          <TouchableOpacity
            style={styles.gameCard}
            onPress={() => navigation.navigate('Spin')}
          >
            <Text style={styles.gameEmoji}>🎡</Text>
            <Text style={styles.gameTitle}>Spin & Win</Text>
          </TouchableOpacity>

          {/* Guess the Number */}
          <TouchableOpacity
            style={styles.gameCard}
            onPress={() => navigation.navigate('GuessNumber')}
          >
            <Text style={styles.gameEmoji}>🔢</Text>
            <Text style={styles.gameTitle}>Guess Number</Text>
          </TouchableOpacity>

          {/* Card High or Low */}
          <TouchableOpacity
            style={styles.gameCard}
            onPress={() => navigation.navigate('HighLow')}
          >
            <Text style={styles.gameEmoji}>🃏</Text>
            <Text style={styles.gameTitle}>High or Low</Text>
          </TouchableOpacity>

          {/* Scratch Card */}
          <TouchableOpacity
            style={styles.gameCard}
            onPress={() => navigation.navigate('ScratchCard')}
          >
            <Text style={styles.gameEmoji}>🎉</Text>
            <Text style={styles.gameTitle}>Scratch & Win</Text>
          </TouchableOpacity>

          {/* Dice Duel */}
          <TouchableOpacity
            style={styles.gameCard}
            onPress={() => navigation.navigate('DiceDuel')}
          >
            <Text style={styles.gameEmoji}>🎲</Text>
            <Text style={styles.gameTitle}>Dice Duel</Text>
          </TouchableOpacity>

          {/* Quick Math */}
          <TouchableOpacity
            style={styles.gameCard}
            onPress={() => navigation.navigate('QuickMath')}
          >
            <Text style={styles.gameEmoji}>➕</Text>
            <Text style={styles.gameTitle}>Quick Math</Text>
          </TouchableOpacity>

          {/* Coin Toss */}
          <TouchableOpacity
            style={styles.gameCard}
            onPress={() => navigation.navigate('CoinToss')}
          >
            <Text style={styles.gameEmoji}>🪙</Text>
            <Text style={styles.gameTitle}>Head or Tail</Text>
          </TouchableOpacity>

        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, backgroundColor: '#fff' },
  welcome: { fontSize: 22, fontWeight: '600', marginBottom: 20 },
  card: {
    padding: 20,
    borderRadius: 15,
    backgroundColor: '#f9f9f9',
    marginBottom: 20,
    shadowColor: '#ccc',
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 5,
  },
  label: { fontSize: 18, fontWeight: 'bold', marginBottom: 10 },
  balance: { fontSize: 30, fontWeight: 'bold', color: '#27ae60', marginBottom: 10 },
  btnPrimary: {
    backgroundColor: '#27ae60',
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
  },
  btnOutline: {
    borderColor: '#27ae60',
    borderWidth: 2,
    padding: 12,
    borderRadius: 10,
    alignItems: 'center',
  },
  btnText: { color: '#27ae60', fontWeight: 'bold', fontSize: 16 },
  gameCard: {
    width: 150,
    height: 150,
    backgroundColor: '#fff',
    borderRadius: 16,
    justifyContent: 'center',
    alignItems: 'center',
    margin: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 5,
    borderWidth: 1,
    borderColor: '#eee',
  },

  gameEmoji: {
    fontSize: 40,
    marginBottom: 10,
  },

  gameTitle: {
    fontSize: 16,
    fontWeight: '600',
    textAlign: 'center',
    color: '#2c3e50',
  },

});

export default HomeScreen;
