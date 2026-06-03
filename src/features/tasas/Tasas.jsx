import { useLocalStorage } from '../../hooks/useLocalStorage'
import BikeIcon from '../../components/BikeIcon/BikeIcon'
import StackedTitle from '../../components/StackedTitle/StackedTitle'
import styles from './Tasas.module.css'

const TITLE_LINES = [
  { prefixSmall: 'EL', main: 'CICLISTA' },
  { main: 'LICENCIA', suffixSmall: 'SIN' },
]

export default function Tasas() {
  const [compra, setCompra] = useLocalStorage('tasa_compra', '')
  const [venta, setVenta] = useLocalStorage('tasa_venta', '')

  return (
    <div className={styles.container}>
      <StackedTitle
        lines={TITLE_LINES}
        size="7vw"
        color="#f0f0f0"
        align="center"
      />
      <h2 className={styles.title}>Tasas del día</h2>

      <div className={styles.field}>
        <label className={styles.label}>
          <BikeIcon size={28} /> Tasa de compra
        </label>
        <input
          className={styles.input}
          type="text"
          inputMode="decimal"
          pattern="[0-9]*"
          placeholder="0.00"
          value={compra}
          onChange={e => setCompra(e.target.value)}
        />
      </div>

      <div className={styles.field}>
        <label className={styles.label}>
          <BikeIcon size={28} /> Tasa de venta
        </label>
        <input
          className={styles.input}
          type="text"
          inputMode="decimal"
          pattern="[0-9]*"
          placeholder="0.00"
          value={venta}
          onChange={e => setVenta(e.target.value)}
        />
      </div>
    </div>
  )
}
