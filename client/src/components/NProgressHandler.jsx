import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import NProgress from 'nprogress'

NProgress.configure({ showSpinner: false })

const NProgressHandler = () => {
  const location = useLocation()

  useEffect(() => {
    NProgress.start()

    const timeout = setTimeout(() => {
      NProgress.done()
    }, 300) // Simulate loading delay

    return () => {
      clearTimeout(timeout)
      NProgress.done()
    }
  }, [location.pathname])

  return null
}

export default NProgressHandler
