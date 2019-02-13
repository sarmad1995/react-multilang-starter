import React from 'react'
import { View, StyleSheet } from 'react-native';
import Text from './Text';

export default function Card() {
    return (
        <View style={styles.container}>
            <Text text='homeScreen.hello' />
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white',
        borderRadius: 5,
        padding: 5,
    }
});

