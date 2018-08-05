import React from 'react'
import { Route, Switch } from 'react-router-dom'
import AuthRoute from '../components/Authorized/AuthenticatedRoute'
import {login, routes, layout} from './router'
const router = ({ childProps }) => (
  <Switch>
    <Route path="/login" component={login} />
    <AuthRoute path="/" component={layout} props={childProps} />
  </Switch>
)

export default router
