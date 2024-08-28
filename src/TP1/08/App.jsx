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
          <li>Home</li>
          <li>Quem Somos</li>
          <li>Produtos</li>
          <li>Contato</li>
        </ul>
      </nav>
      <Home />
      <QuemSomos />
      <Produtos />
      <Contato />
    </div>
  );
}