import React from 'react'
import PropTypes from 'prop-types'
import { renderRoutes } from 'react-router-config'
import AdminRoutes from './routes/admin-routes'

const Root = ({ route }) => <>{renderRoutes(route.routes)}</>

const routes = [
  {
    component: Root,
    routes: [
      ...AdminRoutes
    ]
  }
]

Root.propTypes = {
  route: PropTypes.object.isRequired
}

export default routes
