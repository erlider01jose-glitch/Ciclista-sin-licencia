import styles from './UpdateBanner.module.css'

export default function UpdateBanner({ onActualizar }) {
  return (
    <div className={styles.banner}>
      <span className={styles.texto}>☁️ Hay una actualización disponible</span>
      <button className={styles.btn} onClick={onActualizar}>
        Actualizar
      </button>
    </div>
  )
}
