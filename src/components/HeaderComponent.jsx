import React from 'react'
import { Link } from 'react-router-dom'

const HeaderComponent = () => {
  return (
    <div>
      <header>
        <nav className='navbar navbar-dark bg-dark px-3'>
          <Link to="/" className="navbar-brand">
            Employee Management System
          </Link>
        </nav>
      </header>
    </div>
  )
}

export default HeaderComponent