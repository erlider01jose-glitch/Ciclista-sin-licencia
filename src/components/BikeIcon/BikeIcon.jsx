import { useState } from 'react'
import styles from './BikeIcon.module.css'

export default function BikeIcon({ size = 28 }) {
  const [visible, setVisible] = useState(false)

  return (
    <span className={styles.wrapper}>
      <button
        className={styles.coin}
        onClick={() => setVisible(v => !v)}
        type="button"
        aria-label="Bikecoins"
        style={{ width: size, height: size, fontSize: size * 0.5 }}
      >
        $
      </button>
      {visible && (
        <span className={styles.bubble}>Bikecoins 🚴</span>
      )}
    </span>
  )
}
