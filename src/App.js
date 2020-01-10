import './App.scss'

import React from 'react'
import { connect } from 'react-redux'
import { BrowserRouter as Router, Switch } from 'react-router-dom'
import routeMap from './routes'

import PrivateRoute from './shared/components/PrivateRoute'
import ProtectedLogin from './shared/components/ProtectedLogin'

const App = ({ isAuthenticated }) => {
  const generateComponentProps = (route) => ({
    content: route.component,
    disableHeader: route.disableHeader,
    disableFooter: route.disableFooter,
  })
  const routes = Object.values(routeMap)
  return (
    <Router>
      <Switch>
        <ProtectedLogin
          exact
          path={routeMap.login.path}
          isAuthenticated={isAuthenticated}
          component={routeMap.login.component}
          redirectingPath={routeMap.homePage.path}
        />
        {routes
          .filter((route) => route.private === true)
          .map((route, index) => (
            <PrivateRoute
              key={`${index}-${route.path}`}
              exact
              path={route.path}
              isAuthenticated={isAuthenticated}
              componentProps={generateComponentProps(route)}
            />
          ))}
      </Switch>
    </Router>
  )
}

const mapStateToProps = (state) => ({
  isAuthenticated: state.authReducer.isAuthenticated,
})

export default connect(mapStateToProps)(App)
