import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import { adminPrefix } from '../../../constants/route-prefix'
import SearchBox from './search-box'

const profileMenu = [
  { title: 'Account Settings', link: `/${adminPrefix}/account-settings` },
  { title: 'Activity Log', link: `/${adminPrefix}/activity-log` }
]

const messages = [
  { title: 'Mark send you a message', time: '1 Minutes ago', img: '/images/faces/face2.jpg' },
  { title: 'Cregh send you a message', time: '15 Minutes ago', img: '/images/faces/face3.jpg' },
  { title: 'Profile picture updated', time: '18 Minutes ago', img: '/images/faces/face4.jpg' }
]

const notifications = [
  { title: 'Event today', summary: 'Just a reminder that you have an event today', icon: 'mdi mdi-calendar' },
  { title: 'Settings', summary: 'Update dashboard', icon: 'mdi mdi-settings' },
  { title: 'Launch Admin', summary: 'New admin wow!', icon: 'mdi mdi-link-variant' }
]

const Header = ({ toggleDropdownMenu, isMessagesMenuVisible, isProfileMenuVisible, isNotificationsMenuVisible }) => (
  <nav className="navbar default-layout-navbar col-lg-12 col-12 p-0 fixed-top d-flex flex-row">
    <div className="text-center navbar-brand-wrapper d-flex align-items-center justify-content-center">
      <Link className="navbar-brand brand-logo" to={`/${adminPrefix}`}>
        <img src="/images/logo.svg" alt="logo" />
      </Link>
      <Link className="navbar-brand brand-logo-mini" to={`/${adminPrefix}`}>
        <img src="/images/logo-mini.svg" alt="logo" />
      </Link>
    </div>
    <div className="navbar-menu-wrapper d-flex align-items-stretch">
      <SearchBox />
      <ul className="navbar-nav navbar-nav-right">
        <li className={`nav-item nav-profile dropdown${isProfileMenuVisible ? ' show' : ''}`} data-name="Profile">
          <a className="nav-link dropdown-toggle cursor-pointer" data-name="Profile" onClick={toggleDropdownMenu}>
            <UserProfile />
          </a>
          <div className={`dropdown-menu navbar-dropdown${isProfileMenuVisible ? ' show' : ''}`}>
            {profileMenu.map((item, index) => (
              <div key={index}>
                <Link className="dropdown-item" to={item.link}>
                  <i className="mdi mdi-logout mr-2 text-primary"></i>
                  {item.title}
                </Link>
                <div className="dropdown-divider"></div>
              </div>
            ))}
          </div>
        </li>
        <li className={`nav-item nav-profile dropdown${isMessagesMenuVisible ? ' show' : ''}`} data-name='Messages'>
          <a className="nav-link count-indicator dropdown-toggle cursor-pointer" data-name='Messages' onClick={toggleDropdownMenu}>
            <i className="mdi mdi-email-outline" data-name='Messages'></i>
            <span className="count-symbol bg-warning" data-name='Messages'></span>
          </a>
          <div className={`dropdown-menu dropdown-menu-right navbar-dropdown preview-list${isMessagesMenuVisible ? ' show' : ''}`}>
            <h6 className="fs-13 p-3 mb-0">Messages</h6>
            <div className="dropdown-divider"></div>
            {messages.map((item, index) => (
              <div key={index}>
                <Link className="dropdown-item preview-item" to="/">
                  <div className="preview-thumbnail">
                    <img src={item.img} alt="image" className="profile-pic"/>
                  </div>
                  <div className="preview-item-content d-flex align-items-start flex-column justify-content-center">
                    <h6 className="fs-13 preview-subject ellipsis mb-1 font-weight-normal">
                      {item.title}
                    </h6>
                    <p className="text-gray fs-11 mb-0">{item.time}</p>
                  </div>
                </Link>
                <div className="dropdown-divider"></div>
              </div>
            ))}
            <h6 className="fs-13 p-3 mb-0 text-center">3 new messages</h6>
          </div>
        </li>

        <li className={`nav-item nav-profile dropdown${isNotificationsMenuVisible ? ' show' : ''}`} data-name='Notifications'>
          <a className="nav-link count-indicator dropdown-toggle cursor-pointer" onClick={toggleDropdownMenu} data-name='Notifications'>
            <i className="mdi mdi-bell-outline" data-name='Notifications'></i>
            <span className="count-symbol bg-danger" data-name='Notifications'></span>
          </a>
          <div className={`dropdown-menu dropdown-menu-right navbar-dropdown preview-list${isNotificationsMenuVisible ? ' show' : ''}`}>
            <h6 className="fs-13 p-3 mb-0">Notifications</h6>
            <div className="dropdown-divider"></div>
            {notifications.map((item, index) => (
              <div key={index}>
                <Link className="dropdown-item preview-item" to="/">
                  <div className="preview-thumbnail">
                    <div className="preview-icon bg-warning">
                      <i className={item.icon}></i>
                    </div>
                  </div>
                  <div className="preview-item-content d-flex align-items-start flex-column justify-content-center">
                    <h6 className="fs-13 preview-subject font-weight-normal mb-1">
                      {item.title}
                    </h6>
                    <p className="text-gray fs-11 ellipsis mb-0">{item.summary}</p>
                  </div>
                </Link>
                <div className="dropdown-divider"></div>
              </div>
            ))}
            <h6 className="fs-13 p-3 mb-0 text-center">3 new notifications</h6>
          </div>
        </li>

        <li className="nav-item nav-logout d-none d-lg-block">
          <a className="nav-link" href="#">
            <i className="mdi mdi-power"></i>
          </a>
        </li>
      </ul>
      <button className="navbar-toggler navbar-toggler-right d-lg-none align-self-center" type="button" data-toggle="offcanvas">
        <span className="mdi mdi-menu"></span>
      </button>
    </div>
  </nav>
)

const UserProfile = () => (
  <>
    <div className="nav-profile-img" data-name="Profile">
      <img src="/images/faces/face1.jpg" alt="image" />
      <span className="availability-status online" data-name="Profile"></span>
    </div>
    <div className="nav-profile-text" data-name="Profile">
      <p className="mb-1 text-black" data-name="Profile">Varsha</p>
    </div>
  </>
)

Header.propTypes = {
  toggleDropdownMenu: PropTypes.func.isRequired,
  isMessagesMenuVisible: PropTypes.bool,
  isProfileMenuVisible: PropTypes.bool,
  isNotificationsMenuVisible: PropTypes.bool
}

export default Header
