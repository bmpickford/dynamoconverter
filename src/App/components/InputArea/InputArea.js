import { ReactComponent as Alert } from '../../assets/alert.svg';

import styles from './InputArea.module.css';

export const InputArea = ({ label, value, setValue, error, ...args }) => {
  return (
    <section {...args} className={`${styles['area-input']} ${args.className || ''}`}>
      <label>
        <h3>{label}</h3>
        {error && <div className={styles['error']}><Alert className={styles['alert']} />{error}</div>}
        <textarea
          onChange={(e) => setValue(e.target.value)}
          value={value} />
      </label>
    </section>
  )
}
