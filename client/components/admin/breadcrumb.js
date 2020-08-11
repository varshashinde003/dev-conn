import React from 'react'

const Breadcrumb = () => (
  <div className="page-header">
    <h3 className="page-title">
      <span className="page-title-icon bg-gradient-primary text-white mr-2">
        <i className="mdi mdi-home"></i>
      </span>
      Candidates
    </h3>
    <ol className="breadcrumb">
      <li className="breadcrumb-item">
        <a href="#">Dashboard</a>
      </li>
      <li className="breadcrumb-item active" aria-current="page">
        Candidates
      </li>
    </ol>
  </div>
)

export default Breadcrumb
