import { useState, useEffect } from 'react'

export function useSwUpdate() {
  const [waitingSW, setWaitingSW] = useState(null)

  useEffect(() => {
    if (!('serviceWorker' in navigator)) return

    navigator.serviceWorker.ready.then(reg => {
      if (reg.waiting) setWaitingSW(reg.waiting)

      reg.addEventListener('updatefound', () => {
        const newSW = reg.installing
        newSW.addEventListener('statechange', () => {
          if (newSW.state === 'installed' && navigator.serviceWorker.controller) {
            setWaitingSW(newSW)
          }
        })
      })
    })

    // Detecta cuando el SW activado cambia (otro tab actualizó)
    navigator.serviceWorker.addEventListener('controllerchange', () => {
      window.location.reload()
    })
  }, [])

  const aplicarUpdate = () => {
    if (!waitingSW) return
    waitingSW.postMessage({ type: 'SKIP_WAITING' })
  }

  return { hayUpdate: !!waitingSW, aplicarUpdate }
}
