import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import ProductAll from './page/ProductAll';
import Login from './page/Login';
import Nav from './Component/Nav';
import { CssBaseline, GlobalStyles} from '@mui/material';
import Footer from './Component/Footer';
import { Route, Routes } from 'react-router-dom';
import { useEffect, useState } from 'react';
import PrivateRoute from './route/PrivateRoute';
import TopButton from './Component/TopButton';

function App() {
  const [authenticate, setAuthenticate] = useState(false);


  useEffect(() => {
  }, [authenticate]);

  return (
    <div className="app-wrapper">
      <CssBaseline />
      <GlobalStyles styles={{
        '@font-face': [{
          fontFamily: 'GowunDodum-Regular',
          src: "url('https://fastly.jsdelivr.net/gh/projectnoonnu/noonfonts_2108@1.1/GowunDodum-Regular.woff') format('woff')",
          fontWeight: 'normal',
          fontStyle: 'normal',
        }],
        body: { fontFamily: 'GowunDodum-Regular, sans-serif' },
      }} />
      
      <Nav authenticated={authenticate} setAuthenticated={setAuthenticate} />
        
      
      <div className="main-content">
        <Routes>
          <Route path='/' element={<ProductAll />} />
          <Route path='/login' element={<Login setAuthenticate={setAuthenticate} />} />
          <Route path='/product/:id' element={<PrivateRoute authenticate={authenticate} />} />
        </Routes>
      </div>
      <Footer />
      <TopButton />
    </div>
  );
}

export default App;
