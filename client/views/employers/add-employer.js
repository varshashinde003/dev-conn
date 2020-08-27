import React, { Component } from 'react'
import Breadcrumb from '../../components/admin/breadcrumb'

class AddEmployer extends Component {
  render () {
    return (
      <div className="main-panel">
        <div className="content-wrapper">
          <Breadcrumb title="Add Employer" />
          <div className="row">
            <div className="col-md-12 grid-margin stretch-card">
              <div className="card">
                <div className="card-body p-4">
                  <form className="forms-sample">
                    <div className="row">
                      <div className="col-md-6">
                        <div className="form-group">
                          <label htmlFor="exampleInputUsername1">Company Name</label>
                          <input type="text" className="form-control" id="exampleInputUsername1" placeholder="" />
                        </div>
                        <div className="form-group">
                          <label htmlFor="exampleInputEmail1">Company Email</label>
                          <input type="email" className="form-control" id="exampleInputEmail1" placeholder="" />
                        </div>
                        <div className="form-group">
                          <label htmlFor="exampleInputUsername1">Company Phone Number</label>
                          <input type="text" className="form-control" id="exampleInputUsername1" placeholder="" />
                        </div>
                        <div className="form-group">
                          <label htmlFor="exampleInputUsername1">Company Address</label>
                          <textarea className="form-control" rows={3} />
                        </div>
                        <div className="form-group">
                          <label htmlFor="exampleInputUsername1">Company City</label>
                          <input type="text" className="form-control" id="exampleInputUsername1" placeholder="" />
                        </div>
                        <div className="form-group">
                          <label htmlFor="exampleInputUsername1">Company State</label>
                          <input type="text" className="form-control" id="exampleInputUsername1" placeholder="" />
                        </div>
                        <div className="form-group">
                          <label htmlFor="exampleInputUsername1">Company Country</label>
                          <input type="text" className="form-control" id="exampleInputUsername1" placeholder="" />
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="form-group">
                          <label htmlFor="exampleInputUsername1">Contact Person Name</label>
                          <input type="text" className="form-control" id="exampleInputUsername1" placeholder="" />
                        </div>
                        <div className="form-group">
                          <label htmlFor="exampleInputUsername1">Conatct Person Email</label>
                          <input type="text" className="form-control" id="exampleInputUsername1" placeholder="" />
                        </div>
                        <div className="form-group">
                          <label htmlFor="exampleInputUsername1">Conatct Person Phone Number</label>
                          <input type="text" className="form-control" id="exampleInputUsername1" placeholder="" />
                        </div>
                        <div className="form-group">
                          <label htmlFor="exampleInputUsername1">Contact Person Designation</label>
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

export default AddEmployer
