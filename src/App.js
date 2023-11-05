import "./style/App.css";
import Sidebar from "./comp/SideNav";
import { BrowserRouter as Router } from "react-router-dom";
import Header from "./comp/header";
import Footer from "./comp/footer";
import Body from "./comp/body";
{
  /* TODO: the nav being on absolute top is preventing shit in the body */
}

function App() {
  return (
    <Router>
      <div className="App" data-theme="dark">
        <Header />
        <div className="body">
          <Sidebar />
          <Body />
        </div>
      </div>
    </Router>
  );
}

export default App;
