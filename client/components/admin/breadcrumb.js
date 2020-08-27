import React from 'react'
import PropTypes from 'prop-types'

const Breadcrumb = ({ title, showBreadrumbs = true }) => (
  <div className="page-header">
    <h3 className="page-title">
      <span className="page-title-icon bg-gradient-primary text-white mr-2">
        <i className="mdi mdi-home"></i>
      </span>
      {title}
    </h3>
    {showBreadrumbs ? <ol className="breadcrumb">
      <li className="breadcrumb-item">
        <a href="#">Dashboard</a>
      </li>
      <li className="breadcrumb-item active">{title}</li>
    </ol> : null }
  </div>
)

Breadcrumb.propTypes = {
  title: PropTypes.string.isRequired,
  showBreadrumbs: PropTypes.bool
}

export default Breadcrumb
