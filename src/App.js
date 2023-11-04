import "./App.css";
import Sidebar from "./comp/SideNav";
import { BrowserRouter as Router } from "react-router-dom";
import Header from "./comp/header";
import Footer from "./comp/footer";

function App() {
  return (
    <Router>
      <div className="App" data-theme="dark">
        <nav>
          <Header />
          <Sidebar />
        </nav>
        <div className="body">
        <h1>
          Hello
        </h1>
          
        </div>
      </div>
    </Router>
  );
}

export default App;
