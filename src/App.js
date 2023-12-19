import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import MyNavbar from './components/MyNavbar';
import MyFooter from './components/MyFooter';
import Welcome from './components/Welcome';
import Books from './components/AllTheBooks';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <MyNavbar />
        <div className='Header-Div-Welcome'>
          <Welcome />
        </div>
      </header>
      <div>
        <Books />e' 
      </div>
      <footer className='App-footer'>
        <MyFooter />
      </footer>
    </div>
  );
}

export default App;
