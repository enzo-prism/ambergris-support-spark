
import * as React from "react"

const MOBILE_BREAKPOINT = 768

export function useIsMobile() {
  // Keep the first client render identical to the server render.
  const [isMobile, setIsMobile] = React.useState(false)

  React.useEffect(() => {
    const updateIsMobile = () => {
      setIsMobile(window.innerWidth < MOBILE_BREAKPOINT)
    }
    
    // Add resize event listener
    window.addEventListener("resize", updateIsMobile)
    
    // Initial check
    updateIsMobile()
    
    // Clean up
    return () => window.removeEventListener("resize", updateIsMobile)
  }, [])

  return isMobile
}

// Helper hook to get viewport height for mobile-friendly layouts
export function useViewportHeight() {
  const [height, setHeight] = React.useState(900)
  
  React.useEffect(() => {
    const handleResize = () => {
      setHeight(window.innerHeight)
    }
    
    window.addEventListener('resize', handleResize)
    
    // Initial call on iOS sometimes needs a timeout
    const timeoutId = window.setTimeout(handleResize, 100)
    
    return () => {
      window.clearTimeout(timeoutId)
      window.removeEventListener('resize', handleResize)
    }
  }, [])
  
  return height
}
