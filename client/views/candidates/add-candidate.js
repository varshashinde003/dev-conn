import React, { Component } from 'react'
import Breadcrumb from '../../components/admin/breadcrumb'

class AddCandidate extends Component {
  render () {
    return (
      <div className="main-panel">
        <div className="content-wrapper">
          <Breadcrumb title="Add Candidate" />
          <div className="row">
            <div className="col-md-12 grid-margin stretch-card">
              <div className="card">
                <div className="card-body p-4">
                  <form className="forms-sample">
                    <div className="row">
                      <div className="col-md-6">
                        <div className="form-group">
                          <label htmlFor="exampleInputUsername1">Name</label>
                          <input type="text" className="form-control" id="exampleInputUsername1" placeholder="" />
                        </div>
                        <div className="form-group">
                          <label htmlFor="exampleInputEmail1">Email</label>
                          <input type="email" className="form-control" id="exampleInputEmail1" placeholder="" />
                        </div>
                        <div className="form-group">
                          <label htmlFor="exampleInputUsername1">Phone Number</label>
                          <input type="text" className="form-control" id="exampleInputUsername1" placeholder="" />
                        </div>
                        <div className="form-group">
                          <label htmlFor="exampleInputUsername1">Date Of Birth</label>
                          <input type="date" className="form-control" id="exampleInputUsername1" placeholder="" />
                        </div>
                        <div className="form-group">
                          <label htmlFor="exampleInputUsername1">Address</label>
                          <textarea className="form-control" rows={6} />
                        </div>
                        <div className="form-group">
                          <label htmlFor="exampleInputUsername1">City</label>
                          <input type="text" className="form-control" id="exampleInputUsername1" placeholder="" />
                        </div>
                        <div className="form-group">
                          <label htmlFor="exampleInputUsername1">State</label>
                          <input type="text" className="form-control" id="exampleInputUsername1" placeholder="" />
                        </div>
                        <div className="form-group">
                          <label htmlFor="exampleInputUsername1">Country</label>
                          <input type="text" className="form-control" id="exampleInputUsername1" placeholder="" />
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="form-group">
                          <label htmlFor="exampleInputUsername1">Website</label>
                          <input type="text" className="form-control" id="exampleInputUsername1" placeholder="" />
                        </div>
                        <div className="form-group">
                          <label htmlFor="exampleInputUsername1">Bio</label>
                          <input type="text" className="form-control" id="exampleInputUsername1" placeholder="" />
                        </div>
                        <div className="form-group">
                          <label htmlFor="exampleInputUsername1">Github Username</label>
                          <input type="text" className="form-control" id="exampleInputUsername1" placeholder="" />
                        </div>
                        <div className="form-group">
                          <label htmlFor="exampleInputUsername1">Education</label>
                          <input type="text" className="form-control" id="exampleInputUsername1" placeholder="" />
                        </div>
                        <div className="form-group">
                          <label htmlFor="exampleInputUsername1">Skills</label>
                          <input type="text" className="form-control" id="exampleInputUsername1" placeholder="" />
                        </div>
                        <div className="form-group">
                          <label htmlFor="exampleInputUsername1">Experience</label>
                          <input type="text" className="form-control" id="exampleInputUsername1" placeholder="" />
                        </div>
                        <div className="form-group">
                          <label htmlFor="exampleInputPassword1">Password</label>
                          <input type="password" className="form-control" id="exampleInputPassword1" placeholder="" />
                        </div>
                        <div className="form-group">
                          <label htmlFor="exampleInputConfirmPassword1">Confirm Password</label>
                          <input type="password" className="form-control" id="exampleInputConfirmPassword1" placeholder="" />
                        </div>
                        <div className="input-group mb-3">
                          <div className="custom-file">
                            <input type="file" className="custom-file-input fs-13" id="inputGroupFile02" />
                            <label className="custom-file-label fs-13" htmlFor="inputGroupFile02">Choose file</label>
                          </div>
                        </div>
                      </div>
                    </div>

                    <button type="submit" className="btn btn-gradient-primary mr-2">
                      Submit
                    </button>
                    <button className="btn btn-light">Cancel</button>
                  </form>
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

export default AddCandidate
