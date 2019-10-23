import React from 'react'
import { Switch } from 'react-router-dom'
import Route from './Route'

import Login from '../pages/Login'

import Dashboard from '../pages/Dashboard'
import Profile from '../pages/Profile'

export default function Routes () {
  return (
    <Switch>
      <Route path='/' exact component={Login} />

      <Route path='/dashboard' component={Dashboard} isPrivate />
      <Route path='/profile' component={Profile} isPrivate />

      {/* redirect user to Login page if route does not exist and user is not authenticated */}
      <Route component={Login} />
    </Switch>
  )
}
