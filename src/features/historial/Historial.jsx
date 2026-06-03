import { useLocalStorage } from '../../hooks/useLocalStorage'
import styles from './Historial.module.css'

export default function Historial() {
  const [rutas, setRutas] = useLocalStorage('rutas', [])

  const eliminar = (id) => setRutas(rutas.filter(r => r.id !== id))

  if (!Array.isArray(rutas) || rutas.length === 0) {
    return (
      <div className={styles.vacio}>
        <span>🚴</span>
        <p>No hay rutas registradas</p>
      </div>
    )
  }

  return (
    <div className={styles.container}>
      {rutas.map(r => (
        <div key={r.id} className={styles.card}>
          <div className={styles.cardHeader}>
            <span className={styles.fecha}>{r.fecha} · {r.hora}</span>
            <button className={styles.eliminar} onClick={() => eliminar(r.id)}>✕</button>
          </div>
          <div className={styles.cardBody}>
            <div className={styles.fila}>
              <span>Km Ruta</span><span>{r.km} km</span>
            </div>
            <div className={styles.fila}>
              <span>Compra</span><span>{r.totalCompra.toFixed(2)} B</span>
            </div>
            <div className={styles.fila}>
              <span>Comisiones</span><span>− {r.totalComisiones.toFixed(2)} km</span>
            </div>
            <div className={styles.fila}>
              <span>Venta</span><span>{r.totalVenta.toFixed(2)} B</span>
            </div>
            <div className={styles.separador} />
            <div className={`${styles.fila} ${styles.ganancia} ${r.ganancia >= 0 ? styles.positiva : styles.negativa}`}>
              <span>Ganancia</span>
              <span>{r.ganancia >= 0 ? '+' : ''}$ {r.ganancia.toFixed(2)}</span>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}
