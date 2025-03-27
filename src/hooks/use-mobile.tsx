
import * as React from "react"

const MOBILE_BREAKPOINT = 768

export function useIsMobile() {
  const [isMobile, setIsMobile] = React.useState<boolean | undefined>(undefined)

  React.useEffect(() => {
    const mql = window.matchMedia(`(max-width: ${MOBILE_BREAKPOINT - 1}px)`)
    const onChange = () => {
      setIsMobile(window.innerWidth < MOBILE_BREAKPOINT)
    }
    mql.addEventListener("change", onChange)
    setIsMobile(window.innerWidth < MOBILE_BREAKPOINT)
    return () => mql.removeEventListener("change", onChange)
  }, [])

  return !!isMobile
}

// Helper hook to get viewport height for mobile-friendly layouts
export function useViewportHeight() {
  const [height, setHeight] = React.useState(window.innerHeight)
  
  React.useEffect(() => {
    const handleResize = () => {
      setHeight(window.innerHeight)
    }
    
    window.addEventListener('resize', handleResize)
    
    // Initial call on iOS sometimes needs a timeout
    setTimeout(handleResize, 100)
    
    return () => window.removeEventListener('resize', handleResize)
  }, [])
  
  return height
}
