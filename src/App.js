import './App.css';
import Sidebar from './comp/SideNav';
import { BrowserRouter as Router } from 'react-router-dom';
import Header from './comp/header';

function App() {
  return (
    <Router>
      <div className="App">
        <Header/>
        <Sidebar/>
        
      </div>
    </Router>
  );
}

export default App;