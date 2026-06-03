import { useState, useEffect } from 'react'
import StackedTitle from '../StackedTitle/StackedTitle'
import styles from './RegistroOverlay.module.css'

import frame1 from '../../assets/sprites/ciclista_1.png'
import frame2 from '../../assets/sprites/ciclista_2.png'
import frame3 from '../../assets/sprites/ciclista_3.png'
import frame4 from '../../assets/sprites/ciclista_4.png'
import frame5 from '../../assets/sprites/ciclista_5.png'
import frame6 from '../../assets/sprites/ciclista_6.png'

const FRAMES = [frame1, frame2, frame3, frame4, frame5, frame6]

const FASE_CARGANDO    = [{ main: 'CARGANDO'  }, { main: 'REGISTRO'  }]
const FASE_REGISTRADA  = [{ main: 'RUTA'      }, { main: 'REGISTRADA', suffixSmall: '✓' }]

export default function RegistroOverlay({ onFinish }) {
  const [frameIndex, setFrameIndex] = useState(0)
  const [fase, setFase] = useState('cargando')
  const [fading, setFading] = useState(false)

  useEffect(() => {
    const frameTimer = setInterval(() => {
      setFrameIndex(i => (i + 1) % FRAMES.length)
    }, 120)

    const cambioFase = setTimeout(() => setFase('registrada'), 1800)

    const salida = setTimeout(() => {
      setFading(true)
      setTimeout(onFinish, 500)
    }, 3200)

    return () => {
      clearInterval(frameTimer)
      clearTimeout(cambioFase)
      clearTimeout(salida)
    }
  }, [onFinish])

  return (
    <div className={`${styles.overlay} ${fading ? styles.fadeOut : ''}`}>
      <img
        src={FRAMES[frameIndex]}
        alt="ciclista"
        className={styles.sprite}
      />
      <StackedTitle
        lines={fase === 'cargando' ? FASE_CARGANDO : FASE_REGISTRADA}
        size="7vw"
        color={fase === 'registrada' ? '#22c55e' : '#f0f0f0'}
        align="center"
      />
      <div className={styles.dots}>
        {fase === 'cargando'
          ? <><span /><span /><span /></>
          : <span className={styles.check}>✓</span>
        }
      </div>
    </div>
  )
}
