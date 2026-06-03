import styles from './BottomNav.module.css'

const TABS = [
  { id: 'calcular',       label: 'Calcular',  icon: '🧮' },
  { id: 'historial',      label: 'Rutas',     icon: '🚴' },
  { id: 'config',         label: 'Config',    icon: '⚙️' },
  { id: 'actualizaciones',label: 'Novedades', icon: '📋' },
]

export default function BottomNav({ active, onChange }) {
  return (
    <nav className={styles.nav}>
      {TABS.map(tab => (
        <button
          key={tab.id}
          className={`${styles.tab} ${active === tab.id ? styles.active : ''}`}
          onClick={() => onChange(tab.id)}
        >
          <span className={styles.icon}>{tab.icon}</span>
          <span className={styles.label}>{tab.label}</span>
        </button>
      ))}
    </nav>
  )
}
