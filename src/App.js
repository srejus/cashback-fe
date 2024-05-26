import 'bootstrap/dist/css/bootstrap.css';

import Login from './components/Login';
import VerifyOTP from './components/verifyOTP';
import CompleteProfile from './components/CompleteProfile';

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <CompleteProfile/>
      </header>
    </div>
  );
}

export default App;
