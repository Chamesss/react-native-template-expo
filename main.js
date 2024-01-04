import { registerRootComponent } from 'expo'
import React from 'react'
import { AuthProvider } from './src/contexts/AuthContext'
import { AxiosProvider } from './src/contexts/AxiosContext'
import App from './App'
import { ThemeProvider } from './src/contexts/ThemeContext'


const Root = () => {
    return (
        <ThemeProvider>
            <AuthProvider>
                <AxiosProvider>
                    <App />
                </AxiosProvider>
            </AuthProvider>
        </ThemeProvider>
    )
}

registerRootComponent(Root)