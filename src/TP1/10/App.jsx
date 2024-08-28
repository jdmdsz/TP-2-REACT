import Home from './components/Home';
import QuemSomos from './components/QuemSomos';
import Produtos from './components/Produtos';
import Contato from './components/Contato';
import './styles.css';

export default function App() {
  return (
    <div className="App">
      <nav className='header'>
        <div className='logo'>
            <img src='./images/logo.png' alt='logo'></img>
        </div>
        <ul>
          <li><a href="#home">Home</a></li>
          <li><a href="#quem-somos">Quem Somos</a></li>
          <li><a href="#produtos">Produtos</a></li>
          <li><a href="#contato">Contato</a></li>
        </ul>
      </nav>
      <section id="home">
        <Home />
      </section>
      <section id="quem-somos">
        <QuemSomos />
      </section>
      <section id="produtos">
        <Produtos />
      </section>
      <section id="contato">
        <Contato />
      </section>
    </div>
  );
}