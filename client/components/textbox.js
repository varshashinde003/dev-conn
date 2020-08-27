import React from 'react'
import PropTypes from 'prop-types'

const Textbox = ({ type, name, placeholder, value, onChange }) => <input type={type} name={name} value={value} className="form-control form-control-lg" placeholder={placeholder} onChange={onChange} />

Textbox.propTypes = {
  type: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired
}

export default Textbox
