import React from 'react'
import { Image, StyleSheet, Text, TouchableOpacity } from 'react-native';

const BackButton = (props) => {
    return (
        <TouchableOpacity style={styles.backBtn} onPress={() => props.navigation.goBack()}>
            <Image
                source={require('../../assets/img/arrrowBack.png')}
                style={styles.backText}
            />
        </TouchableOpacity>
    )
}

export default BackButton
const styles = StyleSheet.create({
    backBtn: {
        position: 'absolute',
        top: 50,
        left: 20,
        zIndex: 1,
        padding: 10,
        borderRadius: 20,
        backgroundColor: '#27ae60',
        width: 100,
        height: 40,

    },
    backText: {
        width:40,
        height: 40,
        fontWeight: '800',
        color: 'white',
    },
});