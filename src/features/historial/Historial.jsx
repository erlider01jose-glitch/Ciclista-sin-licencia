import { useState } from 'react'
import { useLocalStorage } from '../../hooks/useLocalStorage'
import { filtrarPorRango } from '../../utils/fechas'
import styles from './Historial.module.css'

const FILTROS = [
  { id: 'semana',   label: 'Semana'   },
  { id: 'quincena', label: 'Quincena' },
  { id: 'mes',      label: 'Mes'      },
  { id: 'todas',    label: 'Todas'    },
]

export default function Historial() {
  const [rutas, setRutas] = useLocalStorage('rutas', [])
  const [kmExtra, setKmExtra] = useLocalStorage('km_extra', '')
  const [filtro, setFiltro] = useState('semana')
  const [editandoKmExtra, setEditandoKmExtra] = useState(false)
  const [kmExtraInput, setKmExtraInput] = useState('')

  const lista = Array.isArray(rutas) ? rutas : []

  // Compatibilidad: rutas sin nota reciben nota vacía
  const listaConNota = lista.map(r => ({ nota: '', ...r }))

  const rutasFiltradas = filtrarPorRango(listaConNota, filtro)

  const kmExtraNum = parseFloat(kmExtra) || 0
  const totalGanancias = lista.reduce((acc, r) => acc + (r.ganancia || 0), 0)
  const activos = kmExtraNum + totalGanancias

  const eliminar = (id) => setRutas(lista.filter(r => r.id !== id))

  const guardarKmExtra = () => {
    const val = parseFloat(kmExtraInput)
    if (!isNaN(val) && val >= 0) setKmExtra(String(val))
    setEditandoKmExtra(false)
    setKmExtraInput('')
  }

  return (
    <div className={styles.container}>

      {/* Total km — siempre visible */}
      <div className={styles.kmCard}>
        <div className={styles.kmInfo}>
          <span className={styles.kmLabel}>Kilometraje total</span>
          <span className={styles.kmValor}>
            {activos.toFixed(1)} <span className={styles.kmUnit}>km</span>
          </span>
          {(kmExtraNum > 0 || totalGanancias !== 0) && (
            <span className={styles.kmDetalle}>
              {kmExtraNum > 0 ? `${kmExtraNum} extra` : ''}
              {kmExtraNum > 0 && totalGanancias !== 0 ? ' + ' : ''}
              {totalGanancias !== 0 ? `$${totalGanancias.toFixed(2)} gan.` : ''}
            </span>
          )}
        </div>
        <div className={styles.kmBtns}>
          <button
            className={styles.kmExtraBtn}
            onClick={() => { setEditandoKmExtra(true); setKmExtraInput('') }}
          >
            +
          </button>
          {kmExtraNum > 0 && (
            <button
              className={styles.kmEditBtn}
              onClick={() => { setEditandoKmExtra(true); setKmExtraInput(String(kmExtraNum)) }}
            >
              ✏️
            </button>
          )}
        </div>
      </div>

      {/* Input km extra */}
      {editandoKmExtra && (
        <div className={styles.kmExtraRow}>
          <input
            className={styles.kmExtraInput}
            type="text"
            inputMode="decimal"
            placeholder="Km anteriores o extra"
            value={kmExtraInput}
            onChange={e => setKmExtraInput(e.target.value)}
            autoFocus
          />
          <button className={styles.kmExtraGuardar} onClick={guardarKmExtra}>OK</button>
          <button className={styles.kmExtraCancelar} onClick={() => setEditandoKmExtra(false)}>✕</button>
        </div>
      )}

      {/* Sin rutas */}
      {lista.length === 0 ? (
        <div className={styles.vacio}>
          <span>🚴</span>
          <p>No hay rutas registradas</p>
        </div>
      ) : (
        <>
          {/* Filtros */}
          <div className={styles.filtros}>
            {FILTROS.map(f => (
              <button
                key={f.id}
                className={`${styles.filtroBtn} ${filtro === f.id ? styles.filtroActivo : ''}`}
                onClick={() => setFiltro(f.id)}
              >
                {f.label}
              </button>
            ))}
          </div>

          {/* Lista */}
          {rutasFiltradas.length === 0 ? (
            <div className={styles.sinResultados}>No hay rutas en este período</div>
          ) : (
            rutasFiltradas.map(r => (
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
                  {r.nota ? (
                    <div className={styles.nota}>📝 {r.nota}</div>
                  ) : null}
                </div>
              </div>
            ))
          )}
        </>
      )}
    </div>
  )
}
