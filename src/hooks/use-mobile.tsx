
import * as React from "react"

const MOBILE_BREAKPOINT = 768

export function useIsMobile() {
  const [isMobile, setIsMobile] = React.useState<boolean>(() => {
    // Use a safe initial value that works server-side
    if (typeof window === 'undefined') return false
    return window.innerWidth < MOBILE_BREAKPOINT
  })

  React.useEffect(() => {
    // Use the more efficient matchMedia API
    const mql = window.matchMedia(`(max-width: ${MOBILE_BREAKPOINT - 1}px)`)
    
    // Set initial state based on media query
    setIsMobile(mql.matches)
    
    // Create a handler that uses the MediaQueryList result directly
    const handleChange = (e: MediaQueryListEvent) => {
      setIsMobile(e.matches)
    }
    
    // Modern browsers support addEventListener on MediaQueryList
    if (mql.addEventListener) {
      mql.addEventListener("change", handleChange)
      return () => mql.removeEventListener("change", handleChange)
    } else {
      // Fallback for older browsers - more efficient than resize event
      mql.addListener(handleChange)
      return () => mql.removeListener(handleChange)
    }
  }, [])

  return isMobile
}
