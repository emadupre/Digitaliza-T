
import * as React from "react"

const MOBILE_BREAKPOINT = 768

export function useIsMobile() {
  const [isMobile, setIsMobile] = React.useState<boolean>(() => {
    // Usar un valor inicial seguro que funcione del lado del servidor
    if (typeof window === 'undefined') return false
    return window.innerWidth < MOBILE_BREAKPOINT
  })

  React.useEffect(() => {
    // Usar una función que se ejecute menos veces para mejorar el rendimiento
    const mql = window.matchMedia(`(max-width: ${MOBILE_BREAKPOINT - 1}px)`)
    
    // Establecer el estado inicial basado en la media query
    setIsMobile(mql.matches)
    
    // Crear un manejador que use el resultado de MediaQueryList directamente
    const handleChange = (e: MediaQueryListEvent) => {
      setIsMobile(e.matches)
    }
    
    // Los navegadores modernos admiten addEventListener en MediaQueryList
    if (mql.addEventListener) {
      mql.addEventListener("change", handleChange)
      return () => mql.removeEventListener("change", handleChange)
    } else {
      // Fallback para navegadores más antiguos - más eficiente que el evento resize
      mql.addListener(handleChange)
      return () => mql.removeListener(handleChange)
    }
  }, [])

  return isMobile
}
