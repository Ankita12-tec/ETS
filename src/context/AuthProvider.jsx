import React, { createContext, useEffect, useState } from 'react'
import { getLocalStorage, setLocalStorage } from '../utils/localStorage'

export const AuthContext = createContext()

const AuthProvider = ({ children }) => {
  const [userData, setUserData] = useState(() => {
    try {
      const { employees } = getLocalStorage()
      return employees || []
    } catch (error) {
      console.error('Failed to load user data from localStorage:', error)
      return []
    }
  })

  useEffect(() => {
    try {
      setLocalStorage(userData)
    } catch (error) {
      console.error('Failed to save user data to localStorage:', error)
    }
  }, [userData])

  return (
    <AuthContext.Provider value={[userData, setUserData]}>
      {children}
    </AuthContext.Provider>
  )
}

export default AuthProvider
