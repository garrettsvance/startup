import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './app.css';
import { BrowserRouter, NavLink, Route, Routes } from 'react-router-dom';
import { Login } from './login/login';
import { WaterStatus } from './waterstatus/waterstatus';
import { Recommendations } from './recommendations/recommendations';


function App() {
    const [userName, setUserName] = React.useState(localStorage.getItem('userName') || '');
    const currentAuthState = userName ? AuthState.Authenticated : AuthState.Unauthenticated;
    const [authState, setAuthState] = React.useState(currentAuthState);

    return (
        <BrowserRouter>
            <div className='body bg-dark text-light'>
            <header className='container-fluid'>
                <nav className='navbar fixed-top navbar-dark'>
                <div className='navbar-brand'>
                    My Pool Manager<sup>&reg;</sup>
                </div>
                <menu className='navbar-nav'>
                    <li className='nav-item'>
                    <NavLink className='nav-link' to='index.html'>
                        Home
                    </NavLink>
                    </li>
                    <li className='nav-item'>
                    <NavLink className='nav-link' to='waterstatus.html'>
                        Check Status
                    </NavLink>
                    </li>
                    <li className='nav-item'>
                    <NavLink className='nav-link' to='recommendations.html'>
                        Recommendations
                    </NavLink>
                    </li>
                </menu>
                </nav>
            </header>

            <Routes>
                <Route path='/' element={<Login />} exact />
                <Route path='/waterstatus' element={<WaterStatus />} />
                <Route path='/recommendations' element={<Recommendations />} />
                <Route path='*' element={<NotFound />} />
            </Routes>

            <footer className='bg-dark text-white-50'>
                <div className='container-fluid'>
                <span className='text-reset'>Garrett Vance</span>
                <NavLink className='text-reset' to='https://github.com/garrettsvance/startup'>
                    Source
                </NavLink>
                </div>
            </footer>
            </div>
        </BrowserRouter>
    );
  }

  function NotFound() {
    return <main className='container-fluid bg-secondary text-center'>404: Return to sender. Address unknown.</main>
  }

  export default App;