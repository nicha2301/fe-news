import { useEffect, useState } from 'react'

export const HandleScroll = () => {
  const [distanceFromTop, setDistanceFromTop] = useState(0)
  const [distanceFromBottom, setDistanceFromBottom] = useState(0)

  const handleScroll = () => {
    const scrollTop = window.scrollY
    const windowHeight = window.innerHeight
    const documentHeight = document.documentElement.scrollHeight

    const distanceTop = scrollTop
    const distanceBottom = documentHeight - (scrollTop + windowHeight)

    setDistanceFromTop(distanceTop)
    setDistanceFromBottom(distanceBottom)
  }

  useEffect(() => {
    window.addEventListener('scroll', handleScroll, { passive: true })

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  return { distanceFromTop, distanceFromBottom }
}
