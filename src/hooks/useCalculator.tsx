import { useRef, useState } from 'react'

enum Operators {
    add,
    subtract,
    multiply,
    divide
}

export const useCalculator = () => {

    const [number, setNumber] = useState('0');
    const [previousNumber, setPreviousNumber] = useState('0')

    const lastOperator = useRef<Operators>()

    const clean = () => {
        setNumber('0');
        setPreviousNumber('0');
    }

    const buildNumber = (textNumber: string) => {

        /* Not allow double decimal point (.) */
        if (textNumber === '.' && number.includes('.')) return;

        if (number.startsWith('0') || number.startsWith('-0')) {
            /* Decimal point */
            if (textNumber === '.') {
                setNumber(number + textNumber);
            }
            /* if is another zero or there is a decimal point */
            else if (textNumber === '0' && number.includes('.')) {
                setNumber(number + textNumber);
            }
            /* if is different to zero and there is a decimal point */
            else if (textNumber !== '0' && !number.includes('.')) {
                setNumber(textNumber);
            }
            /* Not allow 00000.00*/
            else if (textNumber === '0' && !number.includes('.')) {
                setNumber(number);
            }
            else {
                setNumber(number + textNumber);
            }

        } else {
            setNumber(number + textNumber);
        }
    }

    const btnDelete = () => {
        (number.length === 1) || (number.length === 2 && number.startsWith('-'))
            ? setNumber('0')
            : setNumber(number.slice(0, -1));
    }

    const positiveNegative = () => {
        number.includes('-')
            ? setNumber(number.replace('-', ''))
            : setNumber('-' + number);
    }

    const interchangeNumber = () => {
        number.endsWith('.')
            ? setPreviousNumber(number.slice(0, -1))
            : setPreviousNumber(number);
        setNumber('0');
    }

    const btnDivide = () => {
        interchangeNumber();
        lastOperator.current = Operators.divide;
    }

    const btnMultiply = () => {
        interchangeNumber();
        lastOperator.current = Operators.multiply;
    }

    const btnSubtract = () => {
        interchangeNumber();
        lastOperator.current = Operators.subtract;
    }

    const btnAdd = () => {
        interchangeNumber();
        lastOperator.current = Operators.add;
    }

    const calculate = () => {
        const num1 = Number(number);
        const num2 = Number(previousNumber);

        switch (lastOperator.current) {
            case Operators.add:
                setNumber(`${num1 + num2}`);
                break;

            case Operators.subtract:
                setNumber(`${num2 - num1}`);
                break;

            case Operators.multiply:
                setNumber(`${num1 * num2}`);
                break;

            case Operators.divide:
                setNumber(`${num2 / num1}`);
                break;

            default:
                break;
        }

        setPreviousNumber('0');
    }

    return {
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
    }
}
