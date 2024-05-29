import { useEffect, useState } from 'react'

export const HandleScroll = () => {
  const [distanceFromBottom, setDistanceFromBottom] = useState(0)

  const handleScroll = () => {
    const scrollTop = window.scrollY
    const windowHeight = window.innerHeight
    const documentHeight = document.documentElement.scrollHeight
    const distance = documentHeight - (scrollTop + windowHeight)
    setDistanceFromBottom(distance)
  }

  useEffect(() => {
    window.addEventListener('scroll', handleScroll, { passive: true })

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  return distanceFromBottom
}
