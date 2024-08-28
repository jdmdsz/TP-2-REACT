import Contatos from "./components/Contatos"
import Depoimentos from "./components/Depoimentos"
import Habilidades from "./components/Habilidades"
import Projetos from "./components/Projetos"
import SobreMim from "./components/SobreMim"
import './styles/App.css';

export default function App() {
    return (
        <div>
            <SobreMim/>
            <Habilidades/>
            <Projetos/>
            <Depoimentos/>
            <Contatos/>
        </div>
    )
}