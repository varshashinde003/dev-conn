import React, { Component } from 'react'
import PropTypes from 'prop-types'

import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import { adminPrefix } from '../../constants/route-prefix'
import { login } from '../actions/admin/login-actions'
import Textbox from '../components/textbox'
import Button from '../components/admin/button'

class Login extends Component {
  constructor(props) {
    super(props)
    this.state = {
      email: '',
      password: ''
    }
    this.handleInputChange = this.handleInputChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
    this.loginCallback = this.loginCallback.bind(this)
  }

  handleInputChange(event) {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  handleSubmit(event) {
    event.preventDefault()
    const { onLogin, history } = this.props
    const data = {
      email: this.state.email,
      password: this.state.password
    }
    onLogin(data, this.loginCallback, history)
  }

  loginCallback() {
    const redirectTo = _URLSearchParams('redirectTo') || `/${adminPrefix}/`
    this.props.history.replace(redirectTo)
  }

  render() {
    const { email, password } = this.state
    return (
      <div className="container-scroller">
        <div className="container-fluid page-body-wrapper full-page-wrapper">
          <div className="content-wrapper d-flex align-items-center auth">
            <div className="row w-100">
              <div className="col-lg-4 mx-auto">
                <div className="auth-form-light text-left p-5">
                  <div className="brand-logo">
                    <img src="/images/logo.svg" />
                  </div>
                  <h4>Hello! lets get started</h4>
                  <h6 className="font-weight-light">Sign in to continue.</h6>
                  <form className="pt-3" onSubmit={this.handleSubmit}>
                    <div className="form-group">
                      <Textbox type="email" name="email" value={email} placeholder="email" onChange={this.handleInputChange} />
                    </div>
                    <div className="form-group">
                      <Textbox type="password" name="password" value={password} placeholder="Password" onChange={this.handleInputChange} />
                    </div>
                    <div className="mt-3">
                      <Button type="submit" label="SIGN IN" />
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

const _URLSearchParams = (name) => {
  var results = new RegExp('[?&]' + name + '=([^&#]*)').exec(window.location.href)
  if (results == null) {
    return null
  } else {
    return decodeURI(results[1]) || 0
  }
}

const mapStateToProps = (state) => ({
  Common: state.CommonReducer
})

const mapDispatchToProps = (dispatch) =>
  bindActionCreators(
    {
      onLogin: login
    },
    dispatch
  )

Login.propTypes = {
  history: PropTypes.object.isRequired,
  onLogin: PropTypes.func.isRequired
}

export default connect(mapStateToProps, mapDispatchToProps)(Login)
