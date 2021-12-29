import {
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom";
import Login from "./pages/login";
import Regist from "./pages/register";
// import Register from "./pages/regist";

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Regist />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
