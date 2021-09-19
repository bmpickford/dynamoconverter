import './InputArea.css';
import { ReactComponent as Alert } from '../../assets/alert.svg';


export const InputArea = ({ label, value, setValue, error, ...args }) => {
  return (
    <section {...args} className={`area-input ${args.className || ''}`}>
      <label>
        <h3>{label}</h3>
        {error && <div className="error"><Alert />{error}</div>}
        <textarea
          onChange={(e) => setValue(e.target.value)}
          value={value} />
      </label>
    </section>
  )
}
