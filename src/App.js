import './App.css';
import Nav from './components/nav/nav';
import Footer from './components/footer/footer'
import MainPage from './components/home/home';

function App() {
  return (
    <div className="App">
      <Nav/>
      <MainPage/>
      <Footer/>
    </div>
  );
}

export default App;
