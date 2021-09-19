import { useRef } from 'react';
import styles from './SubmitButton.module.css';

export const SubmitButton = ({ label, onSubmit }) => {
    const ref = useRef(null);

    const onSubmitKeyDown = () => {
        if (ref.current) {
            ref.current.click();
        }
        onSubmit();
    }

    return (
        <button
            ref={ref}
            className={styles['btn-submit']}
            type='submit'
            onClick={onSubmit}
            onKeyPress={event => { if (event.key === 'Enter') onSubmitKeyDown() }}
            tabIndex={0}>
            {label}
        </button>
    )
}