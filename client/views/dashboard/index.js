import React, { Component } from 'react'
import Breadcrumb from '../../components/admin/breadcrumb'

class Dashboard extends Component {
  render() {
    return (
      <div className="main-panel">
        <div className="content-wrapper">
          <Breadcrumb title="Dashboard" showBreadrumbs={false} />
          <div className="row">
            <div className="col-md-4 stretch-card grid-margin">
              <div className="card bg-gradient-danger card-img-holder text-white">
                <div className="card-body">
                  <img src="/images/dashboard/circle.svg" className="card-img-absolute" alt="circle-image" />
                  <h4 className="font-weight-normal mb-3">
                    Weekly Sales
                    <i className="mdi mdi-chart-line mdi-24px float-right"></i>
                  </h4>
                  <h2 className="mb-5">$ 15,0000</h2>
                  <h6 className="card-text">Increased by 60%</h6>
                </div>
              </div>
            </div>
            <div className="col-md-4 stretch-card grid-margin">
              <div className="card bg-gradient-info card-img-holder text-white">
                <div className="card-body">
                  <img src="/images/dashboard/circle.svg" className="card-img-absolute" alt="circle-image" />
                  <h4 className="font-weight-normal mb-3">
                    Weekly Orders
                    <i className="mdi mdi-bookmark-outline mdi-24px float-right"></i>
                  </h4>
                  <h2 className="mb-5">45,6334</h2>
                  <h6 className="card-text">Decreased by 10%</h6>
                </div>
              </div>
            </div>
            <div className="col-md-4 stretch-card grid-margin">
              <div className="card bg-gradient-success card-img-holder text-white">
                <div className="card-body">
                  <img src="/images/dashboard/circle.svg" className="card-img-absolute" alt="circle-image" />
                  <h4 className="font-weight-normal mb-3">
                    Visitors Online
                    <i className="mdi mdi-diamond mdi-24px float-right"></i>
                  </h4>
                  <h2 className="mb-5">95,5741</h2>
                  <h6 className="card-text">Increased by 5%</h6>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-7 grid-margin stretch-card">
              <div className="card">
                <div className="card-body">
                  <div className="clearfix">
                    <h4 className="card-title float-left">Visit And Sales Statistics</h4>
                    <div id="visit-sale-chart-legend" className="rounded-legend legend-horizontal legend-top-right float-right"></div>
                  </div>
                  <canvas id="visit-sale-chart" className="mt-4"></canvas>
                </div>
              </div>
            </div>
            <div className="col-md-5 grid-margin stretch-card">
              <div className="card">
                <div className="card-body">
                  <h4 className="card-title">Traffic Sources</h4>
                  <canvas id="traffic-chart"></canvas>
                  <div id="traffic-chart-legend" className="rounded-legend legend-vertical legend-bottom-left pt-4"></div>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-12 grid-margin">
              <div className="card">
                <div className="card-body">
                  <h4 className="card-title">Recent Job Posting</h4>
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
                          <td>
                            <span className="tag tag-success">FULL TIME</span>
                          </td>
                          <td>30</td>
                          <td>
                            <label className="badge badge-gradient-success">APPROVED</label>
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
                          <td>
                            <span className="tag tag-success">FULL TIME</span>
                          </td>
                          <td>30</td>
                          <td>
                            <label className="badge badge-gradient-success">APPROVED</label>
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
                          <td>
                            <span className="tag tag-success">FULL TIME</span>
                          </td>
                          <td>30</td>
                          <td>
                            <label className="badge badge-gradient-success">APPROVED</label>
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
                          <td>
                            <span className="tag tag-success">FULL TIME</span>
                          </td>
                          <td>30</td>
                          <td>
                            <label className="badge badge-gradient-success">APPROVED</label>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-12 grid-margin stretch-card">
              <div className="card">
                <div className="card-body">
                  <h4 className="card-title">Project Status</h4>
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
                          <td>
                            <span className="tag tag-success">FULL TIME</span>
                          </td>
                          <td>30</td>
                          <td>
                            <label className="badge badge-gradient-success">APPROVED</label>
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
                          <td>
                            <span className="tag tag-success">FULL TIME</span>
                          </td>
                          <td>30</td>
                          <td>
                            <label className="badge badge-gradient-success">APPROVED</label>
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
                          <td>
                            <span className="tag tag-success">FULL TIME</span>
                          </td>
                          <td>30</td>
                          <td>
                            <label className="badge badge-gradient-success">APPROVED</label>
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
                          <td>
                            <span className="tag tag-success">FULL TIME</span>
                          </td>
                          <td>30</td>
                          <td>
                            <label className="badge badge-gradient-success">APPROVED</label>
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

export default Dashboard
