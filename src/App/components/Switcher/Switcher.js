import { ReactComponent as Arrow } from '../../assets/arrow.svg';
import { ReactComponent as Switch } from '../../assets/switch.svg';

import styles from './Switcher.module.css';

export const Switcher = ({ ltr, toggleDirection }) => {
    return (
        <div 
            className={styles['icons']}
            data-active={ltr}
            onClick={toggleDirection} >
            <Arrow title={'directional arrow'} className={styles['icon-arrow-right']}/>
            <Switch
                role='img'
                className={styles['icon-arrows-switch']}
                onKeyPress={event => { if (event.key === 'Enter') toggleDirection() }}
                tabIndex={0}
                title={'direction toggle button'}/>
        </div>
    );
}