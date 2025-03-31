
import * as React from "react"

const MOBILE_BREAKPOINT = 768

export function useIsMobile() {
  const [isMobile, setIsMobile] = React.useState<boolean>(() => {
    // Use a safe initial value that works server-side
    if (typeof window === 'undefined') return false
    return window.innerWidth < MOBILE_BREAKPOINT
  })

  React.useEffect(() => {
    // Optimization: Use a debounced handler for resize events
    let timeoutId: number | null = null
    
    const handleResize = () => {
      if (timeoutId) {
        window.clearTimeout(timeoutId)
      }
      
      timeoutId = window.setTimeout(() => {
        setIsMobile(window.innerWidth < MOBILE_BREAKPOINT)
      }, 100) // Debounce delay
    }

    // Check initial size
    setIsMobile(window.innerWidth < MOBILE_BREAKPOINT)
    
    // Use the more efficient matchMedia API when available
    const mql = window.matchMedia(`(max-width: ${MOBILE_BREAKPOINT - 1}px)`)
    
    // Modern browsers support addEventListener on MediaQueryList
    if (mql.addEventListener) {
      mql.addEventListener("change", handleResize)
      return () => mql.removeEventListener("change", handleResize)
    } else {
      // Fallback for older browsers
      window.addEventListener('resize', handleResize)
      return () => window.removeEventListener('resize', handleResize)
    }
  }, [])

  return isMobile
}
