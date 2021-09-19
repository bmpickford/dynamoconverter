import { useState } from 'react';

export const useInputAreaState = () => {
    const [value, setValue] = useState('');
    const [error, setError] = useState(undefined);
    return [
        value,
        setValue,
        error,
        setError,
    ];
}