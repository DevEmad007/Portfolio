import React from 'react';
import Home from './Pages/Home';
import { BrowserRouter,Route,Routes } from 'react-router-dom';
import About from './Pages/About';
import Blogs from './Pages/Blogs';
import SharedLayout from './SharedLayout';
import BlogeDetails from './Pages/BlogeDetails';

const App = () => {

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<SharedLayout />} >
          <Route index element={<Home />} />
          <Route path='about' element={<About />} />
          <Route path='blogs' element={<Blogs />} />
          <Route path='blogs/:id' element={<BlogeDetails />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
