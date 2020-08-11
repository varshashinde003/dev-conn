import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Header from '../../components/admin/header'
import Sidebar from '../../components/admin/sidebar'

class Dashboard extends Component {
  constructor (props) {
    super(props)
    this.state = {
      currentMenuItemIndex: null,
      isProfileMenuVisible: false,
      isNotificationsMenuVisible: false,
      isMessagesMenuVisible: false
    }
    this.setCurrentMenu = this.setCurrentMenu.bind(this)
    this.toggleDropdownMenu = this.toggleDropdownMenu.bind(this)
  }

  setCurrentMenu (event) {
    this.setState({
      currentMenuItemIndex: parseInt(event.target.dataset.menuindex)
    })
  }

  toggleDropdownMenu (event) {
    this.setState(
      {
        [`is${event.target.dataset.name}MenuVisible`]: !this.state[`is${event.target.dataset.name}MenuVisible`]
      })
  }

  render () {
    const { isMessagesMenuVisible, isProfileMenuVisible, isNotificationsMenuVisible, currentMenuItemIndex } = this.state
    const { children } = this.props
    return (
      <div className="container-scroller">
        <Header toggleDropdownMenu={this.toggleDropdownMenu} isMessagesMenuVisible={isMessagesMenuVisible} isProfileMenuVisible={isProfileMenuVisible}isNotificationsMenuVisible={isNotificationsMenuVisible} />
        <div className="container-fluid page-body-wrapper">
          <Sidebar setCurrentMenu={this.setCurrentMenu} currentMenuItemIndex={currentMenuItemIndex} />
          {children}
        </div>
      </div>
    )
  }
}

Dashboard.propTypes = {
  children: PropTypes.object.isRequired
}

export default Dashboard
