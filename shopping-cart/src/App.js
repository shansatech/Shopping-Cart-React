import React from 'react';
import Home from './Home/Home';
import { Routes, Route, Navigate } from 'react-router-dom'
import LoginForm from './ReactLogin/LoginForm';
import { AuthProvider } from './components/auth';
import { RequireAuth } from './components/RequireAuth';

const ProtectedRoute = ({ component: Comp, loggedIn, path, ...rest }) => {
  return (
    <Route
      path={path}
      {...rest}
      render={(props) => {
        return loggedIn ? <Comp {...props} /> : <Navigate to='/signin' />
      }}
    />
  )
}

function App() {
  return (
    <AuthProvider>
      <Routes>
        <Route path='/signin' element={<LoginForm />}></Route>
        {/* <Route exact path='/' element={<Home />} /> */}
        <Route path='/' element={<RequireAuth><Home /></RequireAuth>} />
      </Routes>
    </AuthProvider>

  )
}

export default App;
