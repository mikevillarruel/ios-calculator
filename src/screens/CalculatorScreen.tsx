import React, { useEffect } from 'react'
import { Text, View } from 'react-native'
import { styles } from '../theme/appTheme';
import { CalculatorButton, Color } from '../components/CalculatorButton';
import { useCalculator } from '../hooks/useCalculator';
import SplashScreen from 'react-native-splash-screen';

export const CalculatorScreen = () => {

    const {
        number,
        previousNumber,
        buildNumber,
        clean,
        positiveNegative,
        btnDelete,
        btnAdd,
        btnSubtract,
        btnMultiply,
        btnDivide,
        calculate,
    } = useCalculator();

    useEffect(() => {
        SplashScreen.hide();
    }, [])

    return (
        <View style={styles.calculadoraContainer}>

            {
                (previousNumber !== '0') && (
                    <Text style={styles.littleResult}>{previousNumber}</Text>
                )
            }

            <Text
                style={styles.result}
                numberOfLines={1}
                adjustsFontSizeToFit={true}
            >
                {number}
            </Text>

            <View style={styles.row}>
                <CalculatorButton text="C" color={Color.gray} action={clean} />
                <CalculatorButton text="+/-" color={Color.gray} action={positiveNegative} />
                <CalculatorButton text="del" color={Color.gray} action={btnDelete} />
                <CalculatorButton text="/" color={Color.orange} action={btnDivide} />
            </View>

            <View style={styles.row}>
                <CalculatorButton text="7" action={buildNumber} />
                <CalculatorButton text="8" action={buildNumber} />
                <CalculatorButton text="9" action={buildNumber} />
                <CalculatorButton text="X" color={Color.orange} action={btnMultiply} />
            </View>

            <View style={styles.row}>
                <CalculatorButton text="4" action={buildNumber} />
                <CalculatorButton text="5" action={buildNumber} />
                <CalculatorButton text="6" action={buildNumber} />
                <CalculatorButton text="-" color={Color.orange} action={btnSubtract} />
            </View>

            <View style={styles.row}>
                <CalculatorButton text="1" action={buildNumber} />
                <CalculatorButton text="2" action={buildNumber} />
                <CalculatorButton text="3" action={buildNumber} />
                <CalculatorButton text="+" color={Color.orange} action={btnAdd} />
            </View>

            <View style={styles.row}>
                <CalculatorButton text="0" width /* same as width={true} */ action={buildNumber} />
                <CalculatorButton text="." action={buildNumber} />
                <CalculatorButton text="=" color={Color.orange} action={calculate} />
            </View>

        </View>
    )
}
