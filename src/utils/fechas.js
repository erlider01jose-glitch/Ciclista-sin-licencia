export function getRangoSemana() {
  const hoy = new Date()
  const dia = hoy.getDay()
  const offsetLunes = dia === 0 ? -6 : 1 - dia
  const lunes = new Date(hoy)
  lunes.setDate(hoy.getDate() + offsetLunes)
  lunes.setHours(0, 0, 0, 0)
  const viernes = new Date(lunes)
  viernes.setDate(lunes.getDate() + 4)
  viernes.setHours(23, 59, 59, 999)
  return { start: lunes.getTime(), end: viernes.getTime() }
}

export function getRangoQuincena() {
  const hoy = new Date()
  const y = hoy.getFullYear()
  const m = hoy.getMonth()
  const d = hoy.getDate()
  if (d <= 15) {
    return {
      start: new Date(y, m, 1, 0, 0, 0).getTime(),
      end:   new Date(y, m, 15, 23, 59, 59).getTime(),
    }
  }
  return {
    start: new Date(y, m, 16, 0, 0, 0).getTime(),
    end:   new Date(y, m + 1, 0, 23, 59, 59).getTime(),
  }
}

export function getRangoMes() {
  const hoy = new Date()
  const y = hoy.getFullYear()
  const m = hoy.getMonth()
  return {
    start: new Date(y, m, 1, 0, 0, 0).getTime(),
    end:   new Date(y, m + 1, 0, 23, 59, 59).getTime(),
  }
}

const DIAS   = ['Domingo','Lunes','Martes','Miércoles','Jueves','Viernes','Sábado']
const MESES  = ['enero','febrero','marzo','abril','mayo','junio','julio','agosto','septiembre','octubre','noviembre','diciembre']

export function formatearFechaRuta(id) {
  const diff    = Date.now() - id
  const minutos = Math.floor(diff / 60000)
  const horas   = Math.floor(diff / 3600000)

  const diaNombre = DIAS[new Date(id).getDay()]

  if (minutos < 1)  return `${diaNombre} · hace un momento`
  if (minutos < 60) return `${diaNombre} · hace ${minutos} minuto${minutos === 1 ? '' : 's'}`
  if (horas   < 24) return `${diaNombre} · hace ${horas} hora${horas === 1 ? '' : 's'}`

  const d    = new Date(id)
  const hh   = d.getHours()
  const mm   = String(d.getMinutes()).padStart(2, '0')
  const ampm = hh >= 12 ? 'pm' : 'am'
  const h12  = hh % 12 || 12

  return `${DIAS[d.getDay()]} ${d.getDate()} de ${MESES[d.getMonth()]} ${d.getFullYear()} · ${h12}:${mm} ${ampm}`
}

export function filtrarPorRango(rutas, filtro) {
  if (filtro === 'todas') return rutas
  const rango = filtro === 'semana'
    ? getRangoSemana()
    : filtro === 'quincena'
    ? getRangoQuincena()
    : getRangoMes()
  return rutas.filter(r => r.id >= rango.start && r.id <= rango.end)
}
