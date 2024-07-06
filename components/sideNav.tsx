import React from 'react'
import NavLink from './navLink'
function SideNav() {
  return (
    <nav className='fixed'>
      <NavLink href='/home' label='Home'/>
      <NavLink href='/home' label='Home'/>
      <NavLink href='/home' label='Home'/>
      <NavLink href='/home' label='Home'/>
    </nav>
  )
}

export default SideNav