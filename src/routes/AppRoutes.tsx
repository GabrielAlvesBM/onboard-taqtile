import { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import Spinner from '../components/Spinner';
import Login from '../pages/Login';
import Users from '../pages/Users';

const AppRoutes: React.FC = () => {
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    setIsLoading(true)
    const disableLoading = () => setIsLoading(false);

    if (document.readyState === 'complete') {
      setIsLoading(false);
    } else {
      window.addEventListener('load', disableLoading);
    }

    return () => {
      window.removeEventListener('load', disableLoading);
    };
  }, []);

  return (
    <>
      {isLoading && <Spinner />}
      <Routes>
        <Route path='/' element={<Login />} />
        <Route path='/users' element={<Users />} />
      </Routes>
    </>
  );
};

export default AppRoutes;
