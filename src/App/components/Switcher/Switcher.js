import { ReactComponent as Arrow } from '../../assets/arrow.svg';
import { ReactComponent as Switch } from '../../assets/switch.svg';

import './Switcher.css';

export const Switcher = ({ ltr, toggleDirection }) => {
    return (
        <div 
            className='icons'
            data-active={ltr}
            onClick={toggleDirection} >
            <Arrow title={'directional arrow'} />
            <Switch
                role='img'
                onKeyPress={event => { if (event.key === 'Enter') toggleDirection() }}
                tabIndex={0}
                title={'direction toggle button'}/>
        </div>
    );
}