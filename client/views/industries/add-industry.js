import React, { Component } from 'react'
import Breadcrumb from '../../components/admin/breadcrumb'

class AddIndustry extends Component {
  render () {
    return (
      <div className="main-panel">
        <div className="content-wrapper">
          <Breadcrumb title="Add Industry" />
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
                      </div>
                      <div className="col-md-6">
                        <div className="form-group">
                          <label htmlFor="exampleInputUsername1">Description</label>
                          <textarea className="form-control" rows={1} />
                        </div>
                      </div>
                      <div className='col-md-12'>
                        <div className="form-group row">
                          <label className="col-sm-2 col-form-label">Enabled</label>
                          <div className="col-sm-2">
                            <div className="form-check">
                              <label className="form-check-label">
                                <input type="radio" className="form-check-input" name="membershipRadios" id="membershipRadios1" value="" checked /> Yes <i className="input-helper"></i></label>
                            </div>
                          </div>
                          <div className="col-sm-2">
                            <div className="form-check">
                              <label className="form-check-label">
                                <input type="radio" className="form-check-input" name="membershipRadios" id="membershipRadios2" value="option2" /> No <i className="input-helper"></i></label>
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

export default AddIndustry
