import React from 'react'
import Signup from './Signup'
import Dashboard from './Dashboard'
import Login from './Login'
import NotFound from '../pages/NotFound'
import Test from '../pages/Test'
import ForgetPassword from './ForgetPassword'
import { Container } from 'react-bootstrap'
import { AuthProvider } from '../contexts/AuthContext'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import PrivateRoute from './PrivateRoute'

function App() {
  return (
    <Container
      className='d-flex align-items-center justify-content-center'
      style={{ minHeight: '100vh' }}
    >
      <div className='w-100' style={{ maxWidth: '400px' }}>
        <Router>
          <AuthProvider>
            <Switch>
              <PrivateRoute exact path='/' component={Dashboard}></PrivateRoute>
              <Route path='/signup' component={Signup}></Route>
              <Route path='/login' component={Login}></Route>

              <Route path='/test/:id' component={Test} />
              <Route path='/forget-password' component={ForgetPassword} />
              <Route path='*' component={NotFound} />
            </Switch>
          </AuthProvider>
        </Router>
      </div>
    </Container>
  )
}

export default App
