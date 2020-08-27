import React from 'react'
import { adminPrefix } from '../../constants/route-prefix'
import { renderRoutes } from 'react-router-config'
import PropTypes from 'prop-types'
import Login from '../views/login'
import Dashboard from '../views/dashboard'
import Employers from '../views/employers'
import Candidates from '../views/candidates'
import Jobs from '../views/jobs'
import AddEmployer from '../views/employers/add-employer'
import AddCandidate from '../views/candidates/add-candidate'
import AddJob from '../views/jobs/add-job'
import Industries from '../views/industries'
import AddIndustry from '../views/industries/add-industry'
import StatesCities from '../views/states-cities'
import AddState from '../views/states-cities/add-state'
import AddCity from '../views/states-cities/add-city'
import AdminLayout from '../layouts/admin'

const AdminRoot = ({ route, history }) => {
  return <AdminLayout history={history}>{renderRoutes(route.routes)}</AdminLayout>
}

const AdminRoutes = [
  {
    path: `/${adminPrefix}/login`,
    component: Login
  },
  {
    path: `/${adminPrefix}/:id`,
    component: AdminRoot,
    routes: [
      {
        path: `/${adminPrefix}/employers`,
        component: Employers,
        exact: true
      },
      {
        path: `/${adminPrefix}/add-employer`,
        component: AddEmployer,
        exact: true
      },
      {
        path: `/${adminPrefix}/candidates`,
        component: Candidates,
        exact: true
      },
      {
        path: `/${adminPrefix}/add-candidate`,
        component: AddCandidate,
        exact: true
      },
      {
        path: `/${adminPrefix}/jobs`,
        component: Jobs,
        exact: true
      },
      {
        path: `/${adminPrefix}/add-job`,
        component: AddJob,
        exact: true
      },
      {
        path: `/${adminPrefix}/industries`,
        component: Industries,
        exact: true
      },
      {
        path: `/${adminPrefix}/add-industry`,
        component: AddIndustry,
        exact: true
      },
      {
        path: `/${adminPrefix}/states-and-cities`,
        component: StatesCities,
        exact: true
      },
      {
        path: `/${adminPrefix}/add-state`,
        component: AddState,
        exact: true
      },
      {
        path: `/${adminPrefix}/add-city`,
        component: AddCity,
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

AdminRoot.propTypes = {
  route: PropTypes.object.isRequired,
  history: PropTypes.object
}

export default AdminRoutes
