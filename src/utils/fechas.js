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

export function filtrarPorRango(rutas, filtro) {
  if (filtro === 'todas') return rutas
  const rango = filtro === 'semana'
    ? getRangoSemana()
    : filtro === 'quincena'
    ? getRangoQuincena()
    : getRangoMes()
  return rutas.filter(r => r.id >= rango.start && r.id <= rango.end)
}
