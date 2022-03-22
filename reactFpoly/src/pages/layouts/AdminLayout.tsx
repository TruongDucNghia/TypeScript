import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from '../../components/admin/Header'
type Props = {}

const AdminLayout = (props: Props) => {
  return (
    <div>
        <header>
          <Header/>
        </header>
        <main>
          <Outlet />
        </main>
        <footer>
          <h3>Footer</h3>
        </footer>
    </div>
  )
}

export default AdminLayout