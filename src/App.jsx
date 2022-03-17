import "./App.css";
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import Homepage from "./pages/Homepage";
import {
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<Homepage />} />

          <Route path="/all" element={<h1>fdhfhhkdf</h1>} />

          <Route path="/house/:id" element={<h1>House</h1>} />

        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
