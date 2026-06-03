import { useState, useEffect } from 'react'

const EVENT = 'ls-change'

export function useLocalStorage(key, initialValue) {
  const [value, setValue] = useState(() => {
    try {
      const stored = localStorage.getItem(key)
      return stored !== null ? JSON.parse(stored) : initialValue
    } catch {
      return initialValue
    }
  })

  useEffect(() => {
    const handler = (e) => {
      if (e.detail.key === key) setValue(e.detail.value)
    }
    window.addEventListener(EVENT, handler)
    return () => window.removeEventListener(EVENT, handler)
  }, [key])

  const set = (newValue) => {
    setValue(newValue)
    localStorage.setItem(key, JSON.stringify(newValue))
    window.dispatchEvent(new CustomEvent(EVENT, { detail: { key, value: newValue } }))
  }

  return [value, set]
}
