import React from 'react'
import { Route, Redirect } from 'react-router-dom'

const ProtectedLogin = ({
  redirectingPath,
  isAuthenticated,
  component: LoginPage,
  ...rest
}) => (
  <Route
    {...rest}
    render={(props) =>
      isAuthenticated ? (
        <Redirect to={redirectingPath} />
      ) : (
        <LoginPage {...props} />
      )
    }
  />
)

export default ProtectedLogin
