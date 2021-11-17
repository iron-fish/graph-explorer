import React from 'react'
import useZoom from 'hooks/useZoom'

export const ZoomContext = React.createContext<ReturnType<typeof useZoom>>({
  zoom: 1,
  setZoom: () => {},
  zoomIn: () => {},
  zoomOut: () => {},
})

export default ZoomContext
