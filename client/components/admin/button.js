import React from 'react'
import PropTypes from 'prop-types'

const Button = ({ label, type, onClick }) => {
  if (type === 'submit') {
    return (
      <button type="submit" className="btn btn-block btn-gradient-primary btn-lg font-weight-medium auth-form-btn">
        {label}
      </button>
    )
  } else {
    return (
      <button onClick={onClick} type="button" className="btn btn-block btn-gradient-primary btn-lg font-weight-medium auth-form-btn">
        {label}
      </button>
    )
  }
}

Button.propTypes = {
  label: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  onClick: PropTypes.func
}

export default Button
