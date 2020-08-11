import React from 'react'
import PropTypes from 'prop-types'
import { renderRoutes } from 'react-router-config'
import { adminPrefix } from '../constants/route-prefix'
import Login from './views/login'
import Dashboard from './views/dashboard'
import AdminLayout from './layouts/admin'
import Employers from './views/employers'
import Candidates from './views/candidates'
import Jobs from './views/jobs'

const Root = ({ route }) => <>{renderRoutes(route.routes)}</>
const AdminRoot = ({ route }) => {
  return <AdminLayout>{renderRoutes(route.routes)}</AdminLayout>
}

const routes = [
  {
    component: Root,
    routes: [
      {
        path: `/${adminPrefix}/:id`,
        component: AdminRoot,
        routes: [
          {
            path: `/${adminPrefix}/login`,
            component: Login,
            exact: true
          },
          {
            path: `/${adminPrefix}/employers`,
            component: Employers,
            exact: true
          },
          {
            path: `/${adminPrefix}/candidates`,
            component: Candidates,
            exact: true
          },
          {
            path: `/${adminPrefix}/jobs`,
            component: Jobs,
            exact: true
          }
        ]
      },

      {
        path: `/${adminPrefix}`,
        component: AdminRoot,

        routes: [
          {
            path: `/${adminPrefix}`,
            component: Dashboard,
            exact: true
          }
        ]
      }
    ]
  }
]

AdminRoot.propTypes = {
  route: PropTypes.object.isRequired
}

Root.propTypes = {
  route: PropTypes.object.isRequired
}

export default routes
