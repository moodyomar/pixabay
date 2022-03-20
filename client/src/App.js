import './App.css';
import { Header, Navbar ,Footer,Modal } from './components'
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
        <Modal/>
        <Photos />
      </main>
      <footer>
        <Footer/>
      </footer>
    </div>
  );
}

export default App;
