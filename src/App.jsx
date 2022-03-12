import './App.css';
import Footer from './components/footer/Footer';
import Header from './components/header/Header';
import Homepage from './pages/Homepage';

function App() {
  return (
    <div className="App">
      <Header/>
      <Homepage/>
      <Footer/>
    </div>
  );
}

export default App;
