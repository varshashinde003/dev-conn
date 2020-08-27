import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import Breadcrumb from '../../components/admin/breadcrumb'
import { adminPrefix } from '../../../constants/route-prefix'

class StatesAndCities extends Component {
  render () {
    return (
      <div className="main-panel">
        <div className="content-wrapper">
          <Breadcrumb title="States and Cities" />
          <div className="row">
            <div className="col-12">
              <span className="d-flex align-items-center purchase-popup">
                <p>Like what you see? Check out our premium version for more.</p>
                <Link to={`/${adminPrefix}/add-state`} className="btn ml-auto purchase-button">
                  Add State
                </Link>
                <Link to={`/${adminPrefix}/add-city`} className="btn purchase-button">
                  Add City
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
                          <th>Actions</th>
                          <th>Title</th>
                          <th>Description</th>
                          <th>Status</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>
                            <i className="mdi mdi-grease-pencil"></i>
                          </td>
                          <td>Information Technology</td>
                          <td>Some description about the category</td>
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
            <div className="col-12 grid-margin">
              <div className="card">
                <div className="card-body">
                  <div className="table-responsive">
                    <table className="table">
                      <thead>
                        <tr>
                          <th>Actions</th>
                          <th>Title</th>
                          <th>Description</th>
                          <th>Status</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>
                            <i className="mdi mdi-grease-pencil"></i>
                          </td>
                          <td>Information Technology</td>
                          <td>Some description about the category</td>
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

export default StatesAndCities
