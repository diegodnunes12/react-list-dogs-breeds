import { Route, BrowserRouter as Router, Routes,
} from "react-router-dom";
import Home from "./pages/home";
import Details from "./pages/details";

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/details">
            <Route path=":breed" element={<Details />} />
          </Route>
          <Route exact path="/" element={<Home />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
