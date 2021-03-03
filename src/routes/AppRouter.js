import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import Login from '../components/login/Login'
import DashboardRoutes from './DashboardRoutes'

const AppRouter = () => {
  return (
    <div>
      <Router>
        <div>
          <Switch>
            <Route exact path='/login' component={Login} />
            <Route path='/' component={DashboardRoutes} />
          </Switch>
        </div>
      </Router>
    </div>
  )
}

export default AppRouter
