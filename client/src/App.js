import './App.css';
import Navbar from './Component/NavBar';
import 'bootstrap/dist/css/bootstrap.min.css';
import UserList from './Component/UserList';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <UserList/>
    </div>
  );
}

export default App;
