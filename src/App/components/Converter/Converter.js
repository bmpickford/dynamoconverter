import { useState, useEffect } from 'react';
import { SubmitButton } from '../Button';
import { InputArea, useInputAreaState } from '../InputArea';
import { Switcher } from '../Switcher';

import styles from './Converter.module.css';

const Direction = {
    TO: 1,
    FROM: 2,
}

/**
 * Converter
 * @typedef Coverter
 * @property {string} value - The input value for conversion
 * @returns {string} The output value from the conversion
 * @throws {Error}
 */

/**
 * 
 * @param {Coverter} fromConverter - One way conversion, usually from left to right as default 
 * @param {Coverter} toConverter - One way conversion, usually from left to right as default 
 * @param {Coverter} fromTitle - The title for the first input field 
 * @param {Coverter} toTitle - The title fro the second input field
 */
export const Converter = ({ fromConverter, toConverter, fromTitle, toTitle }) => {
    const [direction, setDirection] = useState(Direction.TO);
    const [error, setError] = useState(undefined);
    const [valOne, setValOne, errOne, setErrOne] = useInputAreaState();
    const [valTwo, setValTwo, errTwo, setErrTwo] = useInputAreaState();

    useEffect(() => {
        setErrOne(undefined);
        setErrTwo(undefined);
        if (error) {
            if (direction === Direction.TO) setErrOne(error.message);
            else setErrTwo(error.message);
        }
    }, [direction, error, setErrOne, setErrTwo]);

    const toggleDirection = () => {
        setError(undefined);
        const _direction = (direction % 2) + 1;
        setDirection(_direction);
    }

    const onSubmit = () => {
        setError(undefined);
        if (direction === Direction.TO) {
            const output = convert(fromConverter, valOne);
            setValTwo(output);
        } else {
            const output = convert(toConverter, valTwo);
            setValOne(output);
        }
    }

    const convert = (converter, inValue) => {
        try {
            return converter(inValue);
        } catch (e) {
            setError(e);
        }
    }

    return (
        <div className={styles['converter-container']}>
            <div className={styles['textareas']}>
                <InputArea canEdit={direction === 1} label={fromTitle} value={valOne} setValue={setValOne} error={errOne} />
                <Switcher ltr={direction === Direction.TO} toggleDirection={toggleDirection} />
                <InputArea canEdit={direction === 2} label={toTitle} value={valTwo} setValue={setValTwo} error={errTwo} />
            </div>
            <SubmitButton label={'Submit'} onSubmit={onSubmit} />
        </div>
    );
}