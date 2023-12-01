import React,{ useEffect,useState } from 'react';
import Home from './Pages/Home';
import { Route,Routes,useLocation } from 'react-router-dom';
import About from './Pages/About';
import Blogs from './Pages/Blogs';
import SharedLayout from './SharedLayout';
import BlogeDetails from './Pages/BlogeDetails';
import useStartAtTop from './Hooks/useStartAtTop';

const App = () => {
  useStartAtTop(0);
  return (
    <Routes>
      <Route path='/' element={<SharedLayout />} >
        <Route index element={<Home />} />
        <Route path='about' element={<About />} />
        <Route path='blogs' element={<Blogs />} />
        <Route path='blogs/:id' element={<BlogeDetails />} />
      </Route>
    </Routes>
  );
};

export default App;
