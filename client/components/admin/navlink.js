import React from 'react'
import PropTypes from 'prop-types'
import { NavLink } from 'react-router-dom'

const NavLinks = ({ menuItem, onClick, menuIndex, currentMenuItemIndex }) => {
  if (menuItem.hasSubMenu) {
    return (
      <li
        className={`nav-item${
          currentMenuItemIndex === menuIndex ? ' collapsed' : ''
        }`}
        data-menuindex={menuIndex}
        onClick={onClick}
      >
        <a
          className="nav-link cursor-pointer"
          onClick={onClick}
          data-menuindex={menuIndex}
        >
          <span
            className="menu-title"
            onClick={onClick}
            data-menuindex={menuIndex}
          >
            {menuItem.title}
          </span>
          <i className="menu-arrow" data-menuindex={menuIndex}></i>
          <i
            className="mdi mdi-crosshairs-gps menu-icon"
            data-menuindex={menuIndex}
          ></i>
        </a>
        <div
          className={`collapse${
            currentMenuItemIndex === menuIndex ? ' show' : ''
          }`}
        >
          <ul className="nav flex-column sub-menu">
            {menuItem.submenu.map((menuItem, index) => (
              <li className="nav-item" key={index} onClick={onClick}>
                <NavLink className="nav-link cursor-pointer" to={menuItem.link}>
                  {menuItem.title}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>
      </li>
    )
  } else {
    return (
      <li className="nav-item">
        <NavLink className="nav-link" to={menuItem.link}>
          <span className="menu-title">{menuItem.title}</span>
          <i className="mdi mdi-home menu-icon"></i>
        </NavLink>
      </li>
    )
  }
}

NavLinks.propTypes = {
  menuItem: PropTypes.object.isRequired,
  onClick: PropTypes.func.isRequired,
  currentMenuItemIndex: PropTypes.number
}

export default NavLinks
