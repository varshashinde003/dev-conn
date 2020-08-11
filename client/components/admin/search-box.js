import React from 'react'

const SearchBox = () => (
  <div className="search-field d-none d-md-block">
    <div className="d-flex align-items-center h-100">
      <div className="input-group">
        <div className="input-group-prepend bg-transparent">
          <i className="input-group-text border-0 mdi mdi-magnify"></i>
        </div>
        <input type="text" className="form-control bg-transparent border-0" placeholder="Search projects" />
      </div>
    </div>
  </div>
)

export default SearchBox
