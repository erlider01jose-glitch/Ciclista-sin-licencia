import styles from './StackedTitle.module.css'

/**
 * Título apilado estilo pixel art con palabras pequeñas en las esquinas.
 *
 * @param {Array}  lines    - Cada línea: { main, prefixSmall?, suffixSmall? }
 * @param {string} size     - Tamaño de la fuente principal (ej: "2rem", "5vw")
 * @param {string} color    - Color del texto (default: "currentColor")
 * @param {string} align    - Alineación del bloque: "left" | "center" | "right"
 */
export default function StackedTitle({
  lines = [],
  size = '2rem',
  color = 'currentColor',
  align = 'center',
}) {
  const smallSize = `calc(${size} * 0.32)`

  return (
    <div className={styles.wrapper} style={{ textAlign: align, color }}>
      {lines.map((line, i) => (
        <div key={i} className={styles.line}>
          <span
            className={styles.small}
            style={{ fontSize: smallSize, visibility: line.prefixSmall ? 'visible' : 'hidden' }}
          >
            {line.prefixSmall ?? '·'}
          </span>

          <span className={styles.main} style={{ fontSize: size }}>
            {line.main}
          </span>

          <span
            className={styles.small}
            style={{ fontSize: smallSize, visibility: line.suffixSmall ? 'visible' : 'hidden' }}
          >
            {line.suffixSmall ?? '·'}
          </span>
        </div>
      ))}
    </div>
  )
}
