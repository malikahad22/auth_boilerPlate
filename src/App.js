import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import PrivateRoutes from './utlis/privateRoutes';
import Home from './pages/home/page'
import About from './pages/about/page';
import Contact from './pages/contact/page';
import Services from './pages/services/page'
import Login from './pages/login/page';
import Signup from './pages/signup/page';
import PageNotFound from './pages/pageNotFound/page';

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Login />} />
          <Route path='/signup' element={<Signup />} />

          <Route element={<PrivateRoutes />}>

            <Route path='/home' element={<Home />} />
            <Route path='/about' element={<About />} />
            <Route path='/contact' element={<Contact />} />
            <Route path='/services' element={<Services />} />
            <Route path='*' element={<PageNotFound />} />

          </Route>
        </Routes>
      </BrowserRouter>

    </>
  );
}

export default App;
