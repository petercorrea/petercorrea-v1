const SCROLL_UP = "up"
const SCROLL_DOWN = "down"

import { useEffect, useState } from "react"

const useScrollDirection = ({ initialDirection, thresholdPixels, off }) => {
  const [scrollDir, setScrollDir] = useState(initialDirection)

  useEffect(() => {
    const threshold = thresholdPixels || 0
    let lastScrollY = window.pageYOffset

    // get scroll direction
    const updateScrollDir = () => {
      const scrollY = window.pageYOffset

      // reach threshold
      if (Math.abs(scrollY - lastScrollY) > threshold) {
        // determine direction
        setScrollDir(scrollY > lastScrollY ? SCROLL_DOWN : SCROLL_UP)
        // set last scroll position
        lastScrollY = scrollY > 0 ? scrollY : 0
      }
    }

    // declare event listener, runs updateScrollDir before next repaint
    const onScroll = () => {
      window.requestAnimationFrame(updateScrollDir)
    }

    // attach event handler
    off
      ? setScrollDir(initialDirection)
      : window.addEventListener("scroll", onScroll)

    // clean up and dependencies
    return () => window.removeEventListener("scroll", onScroll)
  }, [initialDirection, thresholdPixels, off])

  return scrollDir
}

export default useScrollDirection
