import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import Breadcrumb from '../../components/admin/breadcrumb'

class Jobs extends Component {
  render () {
    return (
      <div className="main-panel">
        <div className="content-wrapper">
          <Breadcrumb />
          <div className="row">
            <div className="col-12">
              <span className="d-flex align-items-center purchase-popup">
                <p>Like what you see? Check out our premium version for more.</p>
                <a href="https://github.com/BootstrapDash/PurpleAdmin-Free-Admin-Template" className="btn ml-auto download-button">
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
                          <th>Job ID</th>
                          <th>Title</th>
                          <th>Experience</th>
                          <th>Key Skills</th>
                          <th>Job Type</th>
                          <th>Applicants</th>
                          <th>Status</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>JD-2546</td>
                          <td>
                            <img src="https://diylogodesigns.com/wp-content/uploads/2016/04/google-logo-icon-PNG-Transparent-Background-768x768.png" className="mr-2" alt="image" />
                            <div className="job-listing-title">
                              <strong>Google Inc.</strong>
                              <br />
                              <span>Full-stack Developer</span>
                            </div>
                          </td>
                          <td>3 Years</td>
                          <td>Full Stack, React, Javascript</td>
                          <td><span className="tag tag-success">FULL TIME</span></td>
                          <td>30</td>
                          <td>
                            <label className="badge badge-gradient-success">
                              APPROVED
                            </label>
                          </td>
                        </tr>
                        <tr>
                          <td>JD-2546</td>
                          <td>
                            <img src="https://diylogodesigns.com/wp-content/uploads/2016/04/google-logo-icon-PNG-Transparent-Background-768x768.png" className="mr-2" alt="image" />
                            <div className="job-listing-title">
                              <strong>Google Inc.</strong>
                              <br />
                              <span>Marketing</span>
                            </div>
                          </td>
                          <td>3 Years</td>
                          <td>Full Stack, React, Javascript</td>
                          <td><span className="tag tag-success">FULL TIME</span></td>
                          <td>30</td>
                          <td>
                            <label className="badge badge-gradient-success">
                              APPROVED
                            </label>
                          </td>
                        </tr>
                        <tr>
                          <td>JD-2546</td>
                          <td>
                            <img src="https://diylogodesigns.com/wp-content/uploads/2016/04/google-logo-icon-PNG-Transparent-Background-768x768.png" className="mr-2" alt="image" />
                            <div className="job-listing-title">
                              <strong>Google Inc.</strong>
                              <br />
                              <span>Web Application Developer</span>
                            </div>
                          </td>
                          <td>3 Years</td>
                          <td>Full Stack, React, Javascript</td>
                          <td><span className="tag tag-success">FULL TIME</span></td>
                          <td>30</td>
                          <td>
                            <label className="badge badge-gradient-success">
                              APPROVED
                            </label>
                          </td>
                        </tr>
                        <tr>
                          <td>JD-2546</td>
                          <td>
                            <img src="https://diylogodesigns.com/wp-content/uploads/2016/04/google-logo-icon-PNG-Transparent-Background-768x768.png" className="mr-2" alt="image" />
                            <div className="job-listing-title">
                              <strong>Google Inc.</strong>
                              <br />
                              <span>Designer</span>
                            </div>
                          </td>
                          <td>3 Years</td>
                          <td>Full Stack, React, Javascript</td>
                          <td><span className="tag tag-success">FULL TIME</span></td>
                          <td>30</td>
                          <td>
                            <label className="badge badge-gradient-success">
                              APPROVED
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
              Copyright © 2017 <a href="https://www.bootstrapdash.com/">Bootstrap Dash</a>. All rights reserved.
            </span>
            <span className="float-none float-sm-right d-block mt-1 mt-sm-0 text-center">
              Hand-crafted and made with <i className="mdi mdi-heart text-danger"></i>
            </span>
          </div>
        </footer>
      </div>
    )
  }
}

export default Jobs
