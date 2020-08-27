import React, { Component } from 'react'
import Breadcrumb from '../../components/admin/breadcrumb'

class AddJob extends Component {
  render () {
    return (
      <div className="main-panel">
        <div className="content-wrapper">
          <Breadcrumb title="Add Job" />
          <div className="row">
            <div className="col-md-12 grid-margin stretch-card">
              <div className="card">
                <div className="card-body p-4">
                  <form className="forms-sample">
                    <div className="row">
                      <div className="col-md-6">
                        <div className="form-group">
                          <label htmlFor="exampleInputUsername1">title</label>
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
                          <label htmlFor="exampleInputUsername1">Expire On</label>
                          <input type="date" className="form-control" id="exampleInputUsername1" placeholder="" />
                        </div>
                        <div className="form-group">
                          <label htmlFor="exampleInputUsername1">Summary</label>
                          <textarea className="form-control" rows={6} />
                        </div>
                        <div className="form-group">
                          <label htmlFor="exampleInputUsername1">Description</label>
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
                        <div className="form-group row">
                          <label className="col-sm-4 col-form-label">Job Type</label>
                          <div className="col-sm-4">
                            <div className="form-check">
                              <label className="form-check-label">
                                <input type="radio" className="form-check-input" name="membershipRadios" id="membershipRadios1" value="" checked /> Full Time <i className="input-helper"></i></label>
                            </div>
                          </div>
                          <div className="col-sm-4">
                            <div className="form-check">
                              <label className="form-check-label">
                                <input type="radio" className="form-check-input" name="membershipRadios" id="membershipRadios2" value="option2" /> Part Time <i className="input-helper"></i></label>
                            </div>
                          </div>
                        </div>
                        <div className="form-group">
                          <label htmlFor="exampleInputUsername1">Salary</label>
                          <div className="input-group">
                            <div className="input-group-prepend">
                              <button className="btn btn-sm btn-outline-primary dropdown-toggle" type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Options</button>
                              <div className="dropdown-menu" x-placement="top-start">
                                <a className="dropdown-item" href="#">Per Moth</a>
                                <a className="dropdown-item" href="#">Per Anum</a>
                              </div>
                            </div>
                            <input type="text" className="form-control" aria-label="Text input with dropdown button" />
                          </div>
                        </div>
                        <div className="input-group mb-3">
                          <div className="custom-file">
                            <input type="file" className="custom-file-input fs-13" id="inputGroupFile02" />
                            <label className="custom-file-label fs-13" htmlFor="inputGroupFile02">Cover Image</label>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="form-group">
                          <label htmlFor="exampleInputUsername1">Contact Person Name</label>
                          <input type="text" className="form-control" id="exampleInputUsername1" placeholder="" />
                        </div>
                        <div className="form-group">
                          <label htmlFor="exampleInputUsername1">Contact Person Phone Number</label>
                          <input type="text" className="form-control" id="exampleInputUsername1" placeholder="" />
                        </div>
                        <div className="form-group">
                          <label htmlFor="exampleInputUsername1">Keywords</label>
                          <input type="text" className="form-control" id="exampleInputUsername1" placeholder="" />
                        </div>
                        <div className="form-group">
                          <label htmlFor="exampleInputUsername1">Education</label>
                          <input type="text" className="form-control" id="exampleInputUsername1" placeholder="" />
                        </div>
                        <div className="form-group">
                          <label htmlFor="exampleInputUsername1">Key Skills</label>
                          <input type="text" className="form-control" id="exampleInputUsername1" placeholder="" />
                        </div>
                        <div className="form-group">
                          <label htmlFor="exampleInputUsername1">Experience Required</label>
                          <input type="text" className="form-control" id="exampleInputUsername1" placeholder="" />
                        </div>
                        <div className="form-group">
                          <label htmlFor="exampleFormControlSelect3">Industry</label>
                          <select className="form-control" id="exampleFormControlSelect3">
                            <option>IT/Software</option>
                            <option>Marketing</option>
                            <option>HR</option>
                          </select>
                        </div>
                        <div className="form-group">
                          <label htmlFor="exampleInputUsername1">Application URL</label>
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
                        <div className="form-group">
                          <label htmlFor="exampleInputUsername1">Benefits</label>
                          <input type="text" className="form-control" id="exampleInputUsername1" placeholder="" />
                        </div>
                        <div className="form-group row">
                          <label className="col-sm-4 col-form-label">Remote Work Available ?</label>
                          <div className="col-sm-4">
                            <div className="form-check">
                              <label className="form-check-label">
                                <input type="radio" className="form-check-input" name="membershipRadios" id="membershipRadios5" value="" /> Yes <i className="input-helper"></i></label>
                            </div>
                          </div>
                          <div className="col-sm-4">
                            <div className="form-check">
                              <label className="form-check-label">
                                <input type="radio" className="form-check-input" name="membershipRadios" id="membershipRadios6" value="option2" checke={true} /> No <i className="input-helper"></i></label>
                            </div>
                          </div>
                        </div>
                        <div className="form-group row">
                          <label className="col-sm-4 col-form-label">Hiring Urgent ?</label>
                          <div className="col-sm-4">
                            <div className="form-check">
                              <label className="form-check-label">
                                <input type="radio" className="form-check-input" name="membershipRadios" id="membershipRadios1" value="" checked /> Yes <i className="input-helper"></i></label>
                            </div>
                          </div>
                          <div className="col-sm-4">
                            <div className="form-check">
                              <label className="form-check-label">
                                <input type="radio" className="form-check-input" name="membershipRadios" id="membershipRadios2" value="option2" /> No <i className="input-helper"></i></label>
                            </div>
                          </div>
                        </div>
                        <div className="form-group row">
                          <label className="col-sm-4 col-form-label">Status</label>
                          <div className="col-sm-4">
                            <div className="form-check">
                              <label className="form-check-label">
                                <input type="radio" className="form-check-input" name="membershipRadios" id="membershipRadios1" value="" checked /> Active <i className="input-helper"></i></label>
                            </div>
                          </div>
                          <div className="col-sm-4">
                            <div className="form-check">
                              <label className="form-check-label">
                                <input type="radio" className="form-check-input" name="membershipRadios" id="membershipRadios2" value="option2" /> Inactive <i className="input-helper"></i></label>
                            </div>
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

export default AddJob
