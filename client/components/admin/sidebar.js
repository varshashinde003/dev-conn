import React from 'react'
import PropTypes from 'prop-types'
import { adminPrefix } from '../../../constants/route-prefix'
import NavLinks from './navlink'

const menus = [
  {
    title: 'Dashboard',
    link: `/${adminPrefix}/`,
    hasSubMenu: false
  },
  {
    title: 'Master',
    hasSubMenu: true,
    submenu: [
      {
        title: 'Industries',
        link: `/${adminPrefix}/industries`
      },
      {
        title: 'States & Cities',
        link: `/${adminPrefix}/states-and-cities`
      }
    ]
  },
  {
    title: 'Employers',
    link: `/${adminPrefix}/employers`,
    hasSubMenu: false
  },
  {
    title: 'Candidates',
    link: `/${adminPrefix}/candidates`,
    hasSubMenu: false
  },
  {
    title: 'Jobs',
    link: `/${adminPrefix}/jobs`,
    hasSubMenu: false
  }
]

const sidebar = ({ setCurrentMenu, currentMenuItemIndex }) => (
  <nav className="sidebar sidebar-offcanvas" id="sidebar">
    <ul className="nav">
      {menus.map((item, index) => (
        <NavLinks
          menuItem={item}
          onClick={setCurrentMenu}
          key={index}
          menuIndex={index}
          currentMenuItemIndex={currentMenuItemIndex}
        />
      ))}
    </ul>
  </nav>
)

sidebar.propTypes = {
  setCurrentMenu: PropTypes.func.isRequired,
  currentMenuItemIndex: PropTypes.number
}

export default sidebar
