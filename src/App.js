import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import MyNavbar from './components/MyNavbar';
import MyFooter from './components/MyFooter';
import Welcome from './components/Welcome';
/* import SingleBook from './components/SingleBook'; */
/* import Books from './components/AllTheBooks'; */
/* import BookList from './components/BookList'; */

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
        {/* <Books />  */}
        {/* <SingleBook asin="0316438960" title="The Last Wish: Introducing the Witcher" img="https://images-na.ssl-images-amazon.com/images/I/51eHtkVLL5L.jpg"
          price="9.59"
          category="fantasy" /> */}
          {/* <BookList /> */}
      </div>
      <footer className='App-footer'>
        <MyFooter />
      </footer>
    </div>
  );
}

export default App;
