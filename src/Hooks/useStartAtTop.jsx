import { useState,useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const useStartAtTop = (position) => {
  const location = useLocation();
  const [ paramValue,setParamValue ] = useState(location.pathname);

  useEffect(() => {
    if (paramValue !== location.pathname) {
      setParamValue(location.pathname);
      window.scrollTo({ top: position });
    }
  },[ location.pathname ]);
};

export default useStartAtTop;