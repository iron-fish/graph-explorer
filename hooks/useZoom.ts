import { useEffect, useState, useCallback } from 'react'
import { curry } from 'ramda'

export function useZoom(initialZoom = 1, maxZoom = 2, minZoom = 0.1) {
  const [$zoom, $setZoom] = useState<number>(initialZoom)
  const zoom = curry((x, direction) => () => {
    const newZoom = direction ? $zoom + x : $zoom - x
    const rounded = Math.round(newZoom * 100) / 100
    if (rounded >= minZoom && rounded <= maxZoom) {
      $setZoom(rounded)
    }
  })
  const zoomIn = zoom(0.1, true)
  const zoomOut = zoom(0.1, false)
  return { zoom: $zoom, zoomIn, zoomOut, setZoom: $setZoom }
}

export default useZoom
