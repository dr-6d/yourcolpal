// import logo from './logo.svg';
import "./App.css";
import "bootstrap/dist/css/bootstrap.css";
import "react-bootstrap";
import Navbar from "./components/Navbar/Navbar";
import Colpal from "./components/Colpal/Colpal";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Colpal />
    </div>
  );
}

export default App;
