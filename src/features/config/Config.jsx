import { useLocalStorage } from '../../hooks/useLocalStorage'
import InputField from '../../components/InputField/InputField'
import styles from './Config.module.css'

export default function Config() {
  const [compra, setCompra] = useLocalStorage('tasa_compra', '')
  const [venta, setVenta] = useLocalStorage('tasa_venta', '')
  const [peaje, setPeaje] = useLocalStorage('comision_peaje', '')
  const [delivery, setDelivery] = useLocalStorage('comision_delivery', '')

  return (
    <div className={styles.container}>
      <section className={styles.section}>
        <h3 className={styles.sectionTitle}>Tasas del día</h3>
        <div className={styles.grid}>
          <InputField label="Compra" value={compra} onChange={setCompra} />
          <InputField label="Venta"  value={venta}  onChange={setVenta}  />
        </div>
      </section>

      <section className={styles.section}>
        <h3 className={styles.sectionTitle}>Comisiones</h3>
        <div className={styles.grid}>
          <InputField label="Peaje %"    value={peaje}    onChange={setPeaje}    suffix="%" />
          <InputField label="Delivery %" value={delivery} onChange={setDelivery} suffix="%" />
        </div>
      </section>
    </div>
  )
}
