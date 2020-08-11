import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import Breadcrumb from '../../components/admin/breadcrumb'

class Employers extends Component {
  render () {
    return (
      <div className="main-panel">
        <div className="content-wrapper">
          <Breadcrumb />
          <div className="row">
            <div className="col-12">
              <span className="d-flex align-items-center purchase-popup">
                <p>
                  Like what you see? Check out our premium version for more.
                </p>
                <a
                  href="https://github.com/BootstrapDash/PurpleAdmin-Free-Admin-Template"
                  className="btn ml-auto download-button"
                >
                  Download Free Version
                </a>
                <Link to="/" className="btn purchase-button">
                  Add Employer
                </Link>
              </span>
            </div>
          </div>
          <div className="row">
            <div className="col-12 grid-margin">
              <div className="card">
                <div className="card-body">
                  <div className="table-responsive">
                    <table className="table">
                      <thead>
                        <tr>
                          <th>Name</th>
                          <th>Email</th>
                          <th>Contact</th>
                          <th>Contact Person</th>
                          <th>Website</th>
                          <th>Status</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>
                            <img
                              src="https://diylogodesigns.com/wp-content/uploads/2016/04/google-logo-icon-PNG-Transparent-Background-768x768.png"
                              className="mr-2"
                              alt="image"
                            />
                            <strong>Google Inc.</strong>
                          </td>
                          <td>support@google.com</td>
                          <td>+65 89765</td>
                          <td>John Doe</td>
                          <td>www.google.com</td>
                          <td>
                            <label className="badge badge-gradient-success">
                              APPROVED
                            </label>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <img
                              src="https://www.pinclipart.com/picdir/middle/7-78756_microsoft-art-gallery-windows-7-logo-transparent-background.png"
                              className="mr-2"
                              alt="image"
                            />
                            <strong>Microsoft Inc.</strong>
                          </td>
                          <td>sales@microsoft.com</td>
                          <td>+65 16519861</td>
                          <td>Ben Wisely</td>
                          <td>www.microsoft.com</td>
                          <td>
                            <label className="badge badge-gradient-success">
                            APPROVED
                            </label>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <img
                              src="https://sdtimes.com/wp-content/uploads/2018/08/logo-glyph.png"
                              className="mr-2"
                              alt="image"
                            />
                            <strong>Postman Inc.</strong>
                          </td>
                          <td>hr@postman.com</td>
                          <td>+65 87923232</td>
                          <td>Linda Ray</td>
                          <td>www.postman.com</td>
                          <td>
                            <label className="badge badge-gradient-info">
                              PENDING
                            </label>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <img
                              src="https://th.bing.com/th/id/OIP.c0sJoX-vCnLniixSPaAHmwHaHa?pid=Api&rs=1"
                              className="mr-2"
                              alt="image"
                            />
                            <strong>Slack Inc.</strong>
                          </td>
                          <td>job@slack.com</td>
                          <td>+65 7987654</td>
                          <td>Grey Thomas</td>
                          <td>www.slack.com</td>
                          <td>
                            <label className="badge badge-gradient-danger">
                              REJECTED
                            </label>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <footer className="footer">
          <div className="d-sm-flex justify-content-center justify-content-sm-between">
            <span className="text-muted text-center text-sm-left d-block d-sm-inline-block">
              Copyright © 2017{' '}
              <a href="https://www.bootstrapdash.com/">Bootstrap Dash</a>. All
              rights reserved.
            </span>
            <span className="float-none float-sm-right d-block mt-1 mt-sm-0 text-center">
              Hand-crafted and made with{' '}
              <i className="mdi mdi-heart text-danger"></i>
            </span>
          </div>
        </footer>
      </div>
    )
  }
}

export default Employers
