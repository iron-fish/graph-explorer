import { useEffect, useState, useCallback } from 'react'

export function useZoom(initialZoom = 1) {
  const [$zoom, $setZoom] = useState<number>(initialZoom)
  console.log($zoom)
  const zoomIn = (x = 0.1) => $setZoom(Math.round(($zoom + x) * 100) / 100)
  const zoomOut = (x = 0.1) => $setZoom(Math.round(($zoom - x) * 100) / 100)
  return { zoom: $zoom, zoomIn, zoomOut, setZoom: $setZoom }
}

export default useZoom
