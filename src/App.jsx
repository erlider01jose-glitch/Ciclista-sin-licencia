import { useState } from 'react'
import LoadingScreen from './components/LoadingScreen/LoadingScreen'
import RegistroOverlay from './components/RegistroOverlay/RegistroOverlay'
import BottomNav from './components/BottomNav/BottomNav'
import StackedTitle from './components/StackedTitle/StackedTitle'
import UpdateBanner from './components/UpdateBanner/UpdateBanner'
import Calculadora from './features/calculadora/Calculadora'
import Historial from './features/historial/Historial'
import Config from './features/config/Config'
import Actualizaciones from './features/actualizaciones/Actualizaciones'
import { useSwUpdate } from './hooks/useSwUpdate'
import { VERSION } from './constants/version'
import styles from './App.module.css'

const TITLE_LINES = [
  { prefixSmall: 'EL', main: 'CICLISTA' },
  { main: 'LICENCIA', suffixSmall: 'SIN' },
]

export default function App() {
  const [loading, setLoading] = useState(true)
  const [registrando, setRegistrando] = useState(false)
  const [tab, setTab] = useState(() => sessionStorage.getItem('tab') || 'calcular')

  const cambiarTab = (t) => {
    sessionStorage.setItem('tab', t)
    setTab(t)
  }
  const { hayUpdate, aplicarUpdate } = useSwUpdate()

  if (loading) return <LoadingScreen onFinish={() => setLoading(false)} />

  return (
    <div className={styles.layout}>
      {hayUpdate && <UpdateBanner onActualizar={aplicarUpdate} />}

      {registrando && (
        <RegistroOverlay onFinish={() => {
          setRegistrando(false)
          cambiarTab('historial')
        }} />
      )}

      <header className={`${styles.header} ${hayUpdate ? styles.headerWithBanner : ''}`}>
        <StackedTitle lines={TITLE_LINES} size="6vw" color="#f0f0f0" align="center" />
        <span className={styles.version}>v{VERSION}</span>
      </header>

      <main className={styles.main}>
        {tab === 'calcular'        && <Calculadora onRegistrar={() => setRegistrando(true)} />}
        {tab === 'historial'       && <Historial />}
        {tab === 'config'          && <Config />}
        {tab === 'actualizaciones' && <Actualizaciones hayUpdate={hayUpdate} onActualizar={aplicarUpdate} />}
      </main>

      <BottomNav active={tab} onChange={cambiarTab} hayUpdate={hayUpdate} />
    </div>
  )
}
