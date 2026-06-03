import { useState } from 'react'
import { useLocalStorage } from '../../hooks/useLocalStorage'
import InputField from '../../components/InputField/InputField'
import styles from './Calculadora.module.css'

export default function Calculadora({ onRegistrar }) {
  const [kmRuta, setKmRuta] = useState('')
  const [tasaCompra] = useLocalStorage('tasa_compra', '')
  const [tasaVenta]  = useLocalStorage('tasa_venta', '')
  const [peaje]      = useLocalStorage('comision_peaje', '')
  const [delivery]   = useLocalStorage('comision_delivery', '')
  const [rutas, setRutas] = useLocalStorage('rutas', [])

  const calcular = () => {
    const km     = parseFloat(kmRuta)
    const compra = parseFloat(tasaCompra)
    const venta  = parseFloat(tasaVenta)
    const pctPeaje    = parseFloat(peaje)    || 0
    const pctDelivery = parseFloat(delivery) || 0

    if (!km || !compra || !venta) return null

    const totalComisiones = km * ((pctPeaje + pctDelivery) / 100)
    const totalCompra     = km * compra
    const totalVenta      = (km - totalComisiones) * venta
    const ganancia        = (totalVenta - totalCompra) / venta

    return { km, compra, venta, pctPeaje, pctDelivery, totalComisiones, totalCompra, totalVenta, ganancia }
  }

  const r = calcular()

  const registrar = () => {
    if (!r) return
    const nueva = {
      id: Date.now(),
      fecha: new Date().toLocaleDateString('es-VE'),
      hora: new Date().toLocaleTimeString('es-VE', { hour: '2-digit', minute: '2-digit' }),
      km: r.km,
      tasaCompra: r.compra,
      tasaVenta: r.venta,
      peaje: r.pctPeaje,
      delivery: r.pctDelivery,
      totalCompra: r.totalCompra,
      totalVenta: r.totalVenta,
      totalComisiones: r.totalComisiones,
      ganancia: r.ganancia,
    }
    const listaActual = Array.isArray(rutas) ? rutas : []
    setRutas([nueva, ...listaActual])
    onRegistrar()
  }

  return (
    <div className={styles.container}>
      <InputField
        label="Km Ruta"
        value={kmRuta}
        onChange={setKmRuta}
        placeholder="0.00"
      />

      <div className={styles.card}>
        <div className={styles.fila}>
          <span>Compra</span>
          <span>{r ? `${r.totalCompra.toFixed(2)} B` : '—'}</span>
        </div>
        <div className={styles.fila}>
          <span>Comisiones</span>
          <span>{r ? `− ${r.totalComisiones.toFixed(2)} km` : '—'}</span>
        </div>
        <div className={styles.fila}>
          <span>Venta</span>
          <span>{r ? `${r.totalVenta.toFixed(2)} B` : '—'}</span>
        </div>
        <div className={styles.separador} />
        <div className={`${styles.fila} ${styles.gananciaFila} ${r ? (r.ganancia >= 0 ? styles.positiva : styles.negativa) : ''}`}>
          <span>Ganancia</span>
          <span>{r ? `${r.ganancia >= 0 ? '+' : ''}$ ${r.ganancia.toFixed(2)}` : '—'}</span>
        </div>
      </div>

      <button
        className={`${styles.btn} ${!r ? styles.btnDisabled : ''}`}
        onClick={registrar}
        disabled={!r}
      >
        Registrar ruta
      </button>
    </div>
  )
}
