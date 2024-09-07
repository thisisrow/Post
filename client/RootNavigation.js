import React from 'react'
import { AuthProvider } from './context/authContext'
import ScreenMenu from './Menus/ScreenMenu'

const RootNavigation = () => {
  return (
    <AuthProvider>
        <ScreenMenu>
        </ScreenMenu>
    </AuthProvider>
  )
}

export default RootNavigation