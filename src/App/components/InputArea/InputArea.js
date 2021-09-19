import { ReactComponent as Alert } from '../../assets/alert.svg';
import { useEffect } from 'react';

import styles from './InputArea.module.css';

export const InputArea = ({ label, value, setValue, error, canEdit, ...args }) => {
  useEffect(() => {
    console.log('rehightlighting')
    window.Prism?.highlightAll();
  }, [value]);

  return (
    <section {...args} className={`${styles['area-input']} ${args.className || ''}`}>
      <label>
        <h3>{label}</h3>
        {error && <div className={styles['error']}><Alert className={styles['alert']} />{error}</div>}
        <textarea
          data-active={canEdit}
          placeholder={'Enter you JSON here..'}
          className={styles['code-display']}
          onChange={(e) => setValue(e.target.value)}
          value={value} />
        <pre data-active={!canEdit} className={styles['code-display']}>
          <code className='language-json'>
            {value}
          </code>
        </pre>
      </label>
    </section>
  )
}
