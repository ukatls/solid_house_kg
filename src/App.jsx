import "./App.css";
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import Homepage from "./pages/Homepage";
import {
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom";
import Detail from "./pages/Detail";
import AllAds from "./pages/AllAds";
import ContactsUs from "./pages/ContactsUs";

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<Homepage />} />

          <Route path="/all" element={<AllAds/>} />

          <Route path="/house/:id" element={<Detail/>} />

          <Route path="/ContactsUs" element={<ContactsUs/>}/>

        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
