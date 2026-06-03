import { useState, useEffect } from 'react'
import styles from './LoadingScreen.module.css'
import StackedTitle from '../StackedTitle/StackedTitle'

import frame1 from '../../assets/sprites/ciclista_1.png'
import frame2 from '../../assets/sprites/ciclista_2.png'
import frame3 from '../../assets/sprites/ciclista_3.png'
import frame4 from '../../assets/sprites/ciclista_4.png'
import frame5 from '../../assets/sprites/ciclista_5.png'
import frame6 from '../../assets/sprites/ciclista_6.png'

const FRAMES = [frame1, frame2, frame3, frame4, frame5, frame6]
const FRAME_DURATION = 120
const LOADING_DURATION = 2500

const TITLE_LINES = [
  { prefixSmall: 'EL', main: 'CICLISTA' },
  { main: 'LICENCIA', suffixSmall: 'SIN' },
]

export default function LoadingScreen({ onFinish }) {
  const [frameIndex, setFrameIndex] = useState(0)
  const [fading, setFading] = useState(false)

  useEffect(() => {
    const frameTimer = setInterval(() => {
      setFrameIndex(i => (i + 1) % FRAMES.length)
    }, FRAME_DURATION)

    const finishTimer = setTimeout(() => {
      setFading(true)
      setTimeout(onFinish, 600)
    }, LOADING_DURATION)

    return () => {
      clearInterval(frameTimer)
      clearTimeout(finishTimer)
    }
  }, [onFinish])

  return (
    <div className={`${styles.container} ${fading ? styles.fadeOut : ''}`}>
      <img
        src={FRAMES[frameIndex]}
        alt="ciclista"
        className={styles.sprite}
      />
      <StackedTitle
        lines={TITLE_LINES}
        size="8vw"
        color="#f0f0f0"
        align="center"
      />
      <div className={styles.dots}>
        <span /><span /><span />
      </div>
    </div>
  )
}
