import { Themed } from 'styles/Global'
import type { AppProps } from 'next/app'
import { ZoomContext } from 'contexts/ZoomContext'
import useZoom from 'hooks/useZoom'

function MyApp({ Component, pageProps }: AppProps) {
  const zoomContext = useZoom()
  return (
    <ZoomContext.Provider value={zoomContext}>
      <Themed>
        <Component {...pageProps} />
      </Themed>
    </ZoomContext.Provider>
  )
}

export default MyApp
