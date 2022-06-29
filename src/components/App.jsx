import { Navigate, Route, Routes } from 'react-router-dom';
import AppBar from './views/AppBar';
import HomeView from './views/HomeView';
import ContactsWievs from './views/ContactsWievs';
import RegistView from './views/RegistView';
import LoginView from './views/LoginView';
import { useDispatch, useSelector } from 'react-redux';
import { getIsFetching } from 'redax/auth/auth-selector';
import {  Suspense, useEffect } from 'react';
import { refresh } from 'redax/auth/auth-operation';
import PrivatRout from './PrivatRout/PrivatRout';
import PublicRout from './PublicRoute/PublicRout';


function App() {
    const dispatch = useDispatch();
  const isFetching = useSelector(getIsFetching);

  useEffect(() => {
    dispatch(refresh());
  }, [dispatch]);

  return (
      !isFetching &&
    (<>
      <Suspense fallback={<div>Загрузка...</div>}></Suspense>
      <AppBar />
      <Routes>
        <Route path='/' element={<PublicRout>
            <HomeView/>
        </PublicRout>} />
        <Route path='register' element={<PublicRout restricted>
            <RegistView/>
        </PublicRout>} />
        <Route path='login' element={<PublicRout restricted>
            <LoginView/>
        </PublicRout>} />      
        <Route path="contacts" element={<PrivatRout>
                <ContactsWievs />
        </PrivatRout>}/>
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes></>)    
  );
}

export default App;
