import { CHANGELOG, VERSION } from '../../constants/version'
import styles from './Actualizaciones.module.css'

export default function Actualizaciones() {
  return (
    <div className={styles.container}>
      <div className={styles.versionBadge}>
        <span>Versión actual</span>
        <span className={styles.version}>v{VERSION}</span>
      </div>

      <div className={styles.estado}>
        <span className={styles.estadoDot} />
        No hay actualizaciones disponibles
      </div>

      <div className={styles.historialTitulo}>Historial de cambios</div>

      {CHANGELOG.map(entry => (
        <div key={entry.version} className={styles.entry}>
          <div className={styles.entryHeader}>
            <span className={styles.entryVersion}>v{entry.version}</span>
            <span className={styles.entryFecha}>{entry.fecha}</span>
          </div>
          <ul className={styles.lista}>
            {entry.cambios.map((c, i) => (
              <li key={i} className={styles.item}>
                <span className={styles.bullet}>·</span> {c}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  )
}
