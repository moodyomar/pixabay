import './App.css';
import { Header, Navbar } from './components'
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
      </main>
    </div>
  );
}

export default App;
