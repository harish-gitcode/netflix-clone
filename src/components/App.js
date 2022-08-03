import React, { useEffect } from 'react';
import './App.css';
import Home from './Home';
import Login from './Login';
import Profile from './Profile';
import { auth } from '../firebase';
import { useDispatch, useSelector } from 'react-redux';
import { logout, login, selectUser } from '../features/userSlice';
import Footer from './Footer';

import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";


function App() {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(userAuth => {
      if (userAuth) {
        dispatch(
          login({
            uid: userAuth.uid,
            email: userAuth.email,
          })
        );
      } else {
        dispatch(logout());
      }
    })
    return unsubscribe;
  }, [dispatch]);
  return (
    <div className="app">
      <Router>
        {!user ? (
          <Login />
        ) : (
          <Routes>
            <Route path="/profile" element={<Profile />} />
            <Route path="/" element={<Home />} />
          </Routes>
        )}
      </Router>
      <Footer />
    </div>
  );
}

export default App;
