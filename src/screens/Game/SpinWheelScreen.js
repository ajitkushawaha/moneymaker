import React, { useRef, useState } from 'react';
import {
  View, Text, TouchableOpacity, StyleSheet, Animated, Alert,
} from 'react-native';
import Svg, { G, Path, Text as SvgText } from 'react-native-svg';
import { useDispatch } from 'react-redux';
import { addReward } from '../../redux/balanceSlice';
import { useNavigation } from '@react-navigation/native';
import SoundPlayer from "react-native-sound-player";

const rewards = ['₹10', '₹50', '₹5', '₹0', '₹20', '₹100', '₹0', '₹500'];
const colors = ['#f39c12', '#3498db', '#e74c3c', '#1abc9c', '#9b59b6', '#2ecc71', '#34495e', '#e67e22'];

const SpinWheelScreen = () => {
  const spinAnim = useRef(new Animated.Value(0)).current;
  const [spinning, setSpinning] = useState(false);
  const dispatch = useDispatch();
  const navigation = useNavigation();

  const spinWheel = () => {
    if (spinning) return;

    setSpinning(true);

    const spins = Math.floor(Math.random() * 360) + 1440;
    const rewardIndex = Math.floor(((spins % 360) / 360) * rewards.length);
    const reward = rewards[rewards.length - 1 - rewardIndex];
    const numericReward = parseInt(reward.replace('₹', '')) || 0;

    Animated.timing(spinAnim, {
      toValue: spins,
      duration: 3000,
      useNativeDriver: true,
    }).start(() => {
      spinAnim.setValue(0);
      setSpinning(false);

      if (numericReward > 0) {
        SoundPlayer.playAsset(require("../../../assets/sound/win.mp3"))
        dispatch(addReward(numericReward));
      } else {
        SoundPlayer.playAsset(require("../../../assets/sound/wrong.mp3"))
      }

      Alert.alert('🎉 You won!', `${reward}`);
    });
  };

  const createWheelSegments = () => {
    const angle = 360 / rewards.length;
    const radius = 150;
    const segments = [];

    for (let i = 0; i < rewards.length; i++) {
      const startAngle = angle * i;
      const endAngle = angle * (i + 1);
      const largeArc = endAngle - startAngle > 180 ? 1 : 0;

      const x1 = radius + radius * Math.cos((Math.PI * startAngle) / 180);
      const y1 = radius + radius * Math.sin((Math.PI * startAngle) / 180);
      const x2 = radius + radius * Math.cos((Math.PI * endAngle) / 180);
      const y2 = radius + radius * Math.sin((Math.PI * endAngle) / 180);

      const d = `
        M ${radius},${radius}
        L ${x1},${y1}
        A ${radius},${radius} 0 ${largeArc} 1 ${x2},${y2}
        Z
      `;

      segments.push(
        <G key={i}>
          <Path d={d} fill={colors[i % colors.length]} />
          <SvgText
            fill="#fff"
            fontSize="14"
            fontWeight="bold"
            x={radius + (radius / 2) * Math.cos((Math.PI * (startAngle + angle / 2)) / 180)}
            y={radius + (radius / 2) * Math.sin((Math.PI * (startAngle + angle / 2)) / 180)}
            textAnchor="middle"
            alignmentBaseline="middle"
          >
            {rewards[i]}
          </SvgText>
        </G>
      );
    }

    return segments;
  };

  const rotateInterpolate = spinAnim.interpolate({
    inputRange: [0, 360],
    outputRange: ['0deg', '360deg'],
  });

  return (
    <View style={styles.container}>
      <Text style={styles.title}>🎯 Spin & Win</Text>

      <View style={styles.wheelContainer}>
        <Animated.View style={{ transform: [{ rotate: rotateInterpolate }] }}>
          <Svg width={300} height={300} viewBox="0 0 300 300">
            {createWheelSegments()}
          </Svg>
        </Animated.View>
        <View style={styles.pointer}></View>
      </View>

      <TouchableOpacity style={styles.button} onPress={spinWheel} disabled={spinning}>
        <Text style={styles.buttonText}>{spinning ? 'Spinning...' : 'SPIN'}</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.backBtn} onPress={() => navigation.goBack()}>
        <Text style={styles.backText}>← Back</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: '#fff' },
  title: { fontSize: 30, fontWeight: 'bold', marginBottom: 30, color: '#2ecc71' },
  wheelContainer: {
    width: 300,
    height: 300,
    alignItems: 'center',
    justifyContent: 'center',
  },
  pointer: {
    position: 'absolute',
    top: -10,
    width: 0,
    height: 0,
    borderLeftWidth: 15,
    borderRightWidth: 15,
    borderBottomWidth: 30,
    borderStyle: 'solid',
    backgroundColor: 'transparent',
    borderLeftColor: 'transparent',
    borderRightColor: 'transparent',
    borderBottomColor: '#e74c3c',
    zIndex: 10,
  },
  button: {
    backgroundColor: '#27ae60',
    paddingVertical: 15,
    paddingHorizontal: 40,
    borderRadius: 30,
    marginTop: 30,
  },
  buttonText: { color: '#fff', fontSize: 18, fontWeight: 'bold' },
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
  },
});

export default SpinWheelScreen;
