import React from 'react';
import Home from './Home/Home';
import { Routes, Route, useNavigate } from 'react-router-dom'
import LoginForm from './ReactLogin/LoginForm';
import { AuthProvider } from './components/auth';
import { RequireAuth } from './components/RequireAuth';
import { useEffect } from 'react';

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

const getLoggedIn = localStorage.getItem('isLoggedIn');

function App() {
  const navigate = useNavigate();

  useEffect(() => {
    console.log("getLoggedIn", getLoggedIn)
    if (getLoggedIn) {
      navigate('/')
    }
    else {
      navigate('/signin')
    }
  }, [getLoggedIn])
  console.log('getlogin::', getLoggedIn)
  // (getLoggedIn === true) ? navigate('/') : navigate('/signin')

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
