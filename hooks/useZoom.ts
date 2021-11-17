import { useEffect, useState, useCallback } from 'react'

export function useZoom(initialZoom = 1) {
  const [$zoom, $setZoom] = useState<number>(initialZoom)
  console.log($zoom)
  const zoomIn = useCallback(
    (x = 0.1) => $setZoom(Math.round(($zoom + x) * 100) / 100),
    [$zoom, $setZoom]
  )
  const zoomOut = useCallback(
    (x = 0.1) => $setZoom(Math.round(($zoom - x) * 100) / 100),
    [$zoom, $setZoom]
  )
  return { zoom: $zoom, zoomIn, zoomOut, setZoom: $setZoom }
}

export default useZoom
