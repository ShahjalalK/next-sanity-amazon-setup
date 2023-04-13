import Header from '@/components/header'
import React from 'react'
type DashboardLayoutProps = {
    children : React.ReactNode
}

const Layout : React.FC <DashboardLayoutProps> = ({children} : DashboardLayoutProps) => {
  return (
    <div>
       
        {children}
    </div>
  )
}

export default Layout