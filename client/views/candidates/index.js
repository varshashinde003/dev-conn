import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import Breadcrumb from '../../components/admin/breadcrumb'

class Candidates extends Component {
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
                          <th>Name</th>
                          <th>Email</th>
                          <th>Contact</th>
                          <th>Social Profile</th>
                          <th>Status</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>
                            <img src="/images/faces/face1.jpg" className="mr-2" alt="image" />
                            <strong>Jim Kimberly</strong>
                          </td>
                          <td>jim@gmail.com</td>
                          <td>13215498</td>
                          <td>
                            <img src="https://img.icons8.com/ios-filled/300/039BE5/facebook-new.png" />
                            <img src="https://img.icons8.com/color/300/039BE5/linkedin.png" />
                            <img src="https://img.icons8.com/material-sharp/300/039BE5/github.png" />
                          </td>
                          <td>
                            <label className="badge badge-gradient-success">APPROVED</label>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <img src="/images/faces/face2.jpg" className="mr-2" alt="image" />
                            <strong>Stella Johnson</strong>
                          </td>
                          <td>stella@gmail.com</td>
                          <td>631321646</td>
                          <td>
                            <img src="https://img.icons8.com/ios-filled/300/039BE5/facebook-new.png" />
                            <img src="https://img.icons8.com/color/300/039BE5/linkedin.png" />
                            <img src="https://img.icons8.com/material-sharp/300/039BE5/github.png" />
                          </td>
                          <td>
                            <label className="badge badge-gradient-danger">REJECTED</label>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <img src="/images/faces/face3.jpg" className="mr-2" alt="image" />
                            <strong>Marina Michel</strong>
                          </td>
                          <td>marina@gmail.com</td>
                          <td>89765123</td>
                          <td>
                            <img src="https://img.icons8.com/ios-filled/300/039BE5/facebook-new.png" />
                            <img src="https://img.icons8.com/color/300/039BE5/linkedin.png" />
                            <img src="https://img.icons8.com/material-sharp/300/039BE5/github.png" />
                          </td>
                          <td>
                            <label className="badge badge-gradient-info">PENDING</label>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <img src="/images/faces/face4.jpg" className="mr-2" alt="image" />
                            <strong>John Doe</strong>
                          </td>
                          <td>john@gmail.com</td>
                          <td>9798646132</td>
                          <td>
                            <img src="https://img.icons8.com/ios-filled/300/039BE5/facebook-new.png" />
                            <img src="https://img.icons8.com/color/300/039BE5/linkedin.png" />
                            <img src="https://img.icons8.com/material-sharp/300/039BE5/github.png" />
                          </td>
                          <td>
                            <label className="badge badge-gradient-danger">REJECTED</label>
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

export default Candidates
