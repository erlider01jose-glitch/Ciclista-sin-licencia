import styles from './InputField.module.css'

export default function InputField({ label, value, onChange, placeholder = '0.00', suffix }) {
  return (
    <div className={styles.wrapper}>
      <span className={styles.label}>{label}</span>
      <div className={styles.row}>
        <input
          className={styles.input}
          type="text"
          inputMode="decimal"
          pattern="[0-9]*"
          placeholder={placeholder}
          value={value}
          onChange={e => onChange(e.target.value)}
        />
        {suffix && <span className={styles.suffix}>{suffix}</span>}
      </div>
    </div>
  )
}
