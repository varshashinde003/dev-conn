import React from 'react'
import { BrowserRouter as Router, Switch } from 'react-router-dom'
import routes from './router'
import { createBrowserHistory } from 'history'

import { renderRoutes } from 'react-router-config'

const history = createBrowserHistory({})

const app = () => {
  return (
    <Router history={history}>
      <Switch>
        {renderRoutes(routes)}
      </Switch>
    </Router>
  )
}
export default app
