import React from 'react';
import Home from './Home/Home';
import { Routes, Route, useNavigate } from 'react-router-dom'
import LoginForm from './ReactLogin/LoginForm';
import { AuthProvider } from './components/auth';
import { RequireAuth } from './components/RequireAuth';
import { useEffect, useLocation, Navigate, useState } from 'react';
import { useAuth } from './components/auth'

// const ProtectedRoute = ({ component: Comp, loggedIn, path, ...rest }) => {
//   return (
//     <Route
//       path={path}
//       {...rest}
//       render={(props) => {
//         return loggedIn ? <Comp {...props} /> : <Navigate to='/signin' />
//       }}
//     />
//   )
// }



function App() {
  const navigate = useNavigate();
  const auth = useAuth()

  // const location = useLocation()

  // const RequireAuth = () => {
  //   const location = useLocation()
  //   const auth = useAuth()
  //   if (!auth.user) {
  //     return <Navigate to='/' />

  //   }
  //   return <Navigate to='/signin' state={{ path: location.pathname }} />
  // }

  // console.log("getLoggedIn", getLoggedIn)
  // console.log('RequireAuth', RequireAuth)
  // getEmail === 'admin@admin.com' && getPassword === "admin@123" && getLoggedIn === true ? navigate('/') : navigate('/signin')
  // console.log('getlogin::', getLoggedIn, location)
  // (getLoggedIn === true) ? navigate('/') : navigate('/signin')

  const getLoggedIn = localStorage.getItem('isLoggedIn');
  const getEmail = localStorage.getItem('getEmail');
  const getPassword = localStorage.getItem('passwordData');

  return (
    <AuthProvider>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/signin' element={<LoginForm />}></Route>
        {/* <Route exact path='/' element={<Home />} /> */}
      </Routes>
    </AuthProvider>
  )
}

export default App;
