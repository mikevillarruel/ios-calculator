import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

interface Props {
    text: string;
    color?: Color;
    width?: boolean;
    action: (textNumber: string) => void;
}

export enum Color {
    gray = '#9B9B9B',
    darkGray = '#2D2D2D',
    orange = '#FF9427',
}

export const CalculatorButton = ({ text, color = Color.darkGray, width = false, action }: Props) => {
    return (
        <TouchableOpacity
            onPress={() => action(text)}
        >
            <View style={{
                ...styles.button,
                backgroundColor: color,
                width: width ? 180 : 80,
            }}>
                <Text style={{
                    ...styles.textButton,
                    color: color == Color.gray ? 'black' : 'white',
                    right: width ? 50 : 0,
                }}>
                    {text}
                </Text>
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    button: {
        height: 80,
        width: 80,
        backgroundColor: Color.darkGray,
        borderRadius: 100,
        justifyContent: 'center',
        marginHorizontal: 10,
    },
    textButton: {
        textAlign: 'center',
        color: 'white',
        fontSize: 30,
        padding: 10,
        fontWeight: '300',
    }
});