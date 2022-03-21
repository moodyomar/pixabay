import './App.css';
import { Header, Navbar ,Footer } from './components'
import { Buttons,Photos } from './containers'

function App() {
  return (
    <div className="App">
      <header>
        <Navbar />
        <Header />
      </header>
      <main>
        <Buttons/>
        <Photos />
        <Buttons/>
      </main>
      <footer>
        <Footer/>
      </footer>
    </div>
  );
}

export default App;
