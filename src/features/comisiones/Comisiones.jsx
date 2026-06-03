import { useLocalStorage } from '../../hooks/useLocalStorage'
import styles from './Comisiones.module.css'

export default function Comisiones() {
  const [peaje, setPeaje] = useLocalStorage('comision_peaje', '')
  const [delivery, setDelivery] = useLocalStorage('comision_delivery', '')

  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Comisiones</h2>

      <div className={styles.field}>
        <label className={styles.label}>Peaje</label>
        <input
          className={styles.input}
          type="text"
          inputMode="decimal"
          pattern="[0-9]*"
          placeholder="0.00"
          value={peaje}
          onChange={e => setPeaje(e.target.value)}
        />
      </div>

      <div className={styles.field}>
        <label className={styles.label}>Delivery</label>
        <input
          className={styles.input}
          type="text"
          inputMode="decimal"
          pattern="[0-9]*"
          placeholder="0.00"
          value={delivery}
          onChange={e => setDelivery(e.target.value)}
        />
      </div>
    </div>
  )
}
