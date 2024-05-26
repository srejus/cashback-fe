import 'bootstrap/dist/css/bootstrap.css';

import Login from './components/Login';
import VerifyOTP from './components/verifyOTP';
import CompleteProfile from './components/CompleteProfile';
import Home from './components/Home';
import ViewShop from './components/ViewShop';

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <ViewShop/>
      </header>
    </div>
  );
}

export default App;
