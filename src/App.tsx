import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import React from 'react';
import AuthRoute from './components/auth/AuthRoute';
import AuthState from './context/auth/AuthState';
import Login from './pages/Login';
import { setAuthToken } from './utils/authUtils';
import Home from './pages/Home';
import { Layout } from 'antd';
import ThemeState from './context/theme/ThemeState';
import AppHeader from './components/common/AppHeader';
import './styles/common/app.scss';
import {
  ACCOUNT_SETTINGS_URL,
  COMPANY_URL,
  DASHBOARD_URL,
  LOGIN_URL,
  PEOPLE_URL,
  POLICIES_URL,
  PROCESSES_URL,
  REPORTS_URL,
  ROOT_URL
} from './components/routes/routes';

const App = () => {
  const token = localStorage.token;
  React.useEffect(() => {
    setAuthToken(localStorage.token);
  }, [token]);

  return (
    <AuthState>
      <ThemeState>
        <Router>
          <Layout className='app-layout'>
            <AppHeader />
            <Routes>
              <Route path={LOGIN_URL} element={<Login />} />
              <Route
                path={ROOT_URL}
                element={
                  <AuthRoute redirectTo={LOGIN_URL}>
                    <Home />
                  </AuthRoute>
                }
              >
                {/* dashboard routes */}
                <Route path={DASHBOARD_URL} element={<></>} />
                {/* company routes */}
                <Route path={COMPANY_URL} element={<></>} />
                {/* people routes */}
                <Route path={PEOPLE_URL} element={<></>} />
                {/* policies routes */}
                <Route path={POLICIES_URL} element={<></>} />
                {/* processes routes */}
                <Route path={PROCESSES_URL} element={<></>} />
                {/* report routes */}
                <Route path={REPORTS_URL} element={<></>} />
                {/* accounts routes */}
                <Route path={ACCOUNT_SETTINGS_URL} element={<></>} />
              </Route>
            </Routes>
          </Layout>
        </Router>
      </ThemeState>
    </AuthState>
  );
};

export default App;
