import 'bootstrap/dist/css/bootstrap.css';
import {Route, Routes} from 'react-router-dom';

import Login from './components/Login';
import VerifyOTP from './components/verifyOTP';
import CompleteProfile from './components/CompleteProfile';
import Home from './components/Home';
import ViewShop from './components/ViewShop';

function App() {
  return (
    <div className="App">
     <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/view-shop/:id" element={<ViewShop/>}/>
     </Routes>
    </div>
  );
}

export default App;
