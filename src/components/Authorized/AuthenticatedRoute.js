import React from 'react'
import {Route, Redirect} from 'react-router-dom'

export default({
  component: Component,
  props,
  ...rest
}) => (
  <Route
    {...rest}
    render={Props => props.isAuthenticated
    ? (<Component {...Props} {...props}/>)
    : (<Redirect
      to={{
      pathname: '/login',
      state: {
        from: Props.location
      }
    }}/>)}/>
)
