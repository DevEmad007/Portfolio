import React,{ useEffect,useState } from 'react';
import Home from './Pages/Home';
import { Route,Routes,useLocation } from 'react-router-dom';
import About from './Pages/About';
import Blogs from './Pages/Blogs';
import SharedLayout from './SharedLayout';
import BlogeDetails from './Pages/BlogeDetails';

const App = () => {
  const location = useLocation();
  const [ paramValue,setParamValue ] = useState(location.pathname);

  useEffect(() => {
    if (paramValue !== location.pathname) {
      setParamValue(location.pathname);
      window.scrollTo({ top: '0' });
    }
  },[ location.pathname ]);

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
