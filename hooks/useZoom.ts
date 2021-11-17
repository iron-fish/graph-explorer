import { useEffect, useState } from 'react'

export function useZoom(initialZoom = 1) {
  const [$zoom, $setZoom] = useState<number>(initialZoom)
  const zoomIn = (x = 0.1) => $setZoom($zoom + x)
  const zoomOut = (x = 0.1) => $setZoom($zoom - x)
  return { zoom: $zoom, zoomIn, zoomOut }
}

export default useZoom
