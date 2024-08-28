import Header from './header.jsx';
import Footer from './footer.jsx';
import Card from './card.jsx';
import './App.css';

export default function App() {
    return (
        <div className="app">
            <Header />
            <div className="content">
                <Card title="Lorem Ipsum" text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris id nisl sed purus." />
                <Card title="Lorem Ipsum" text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris id nisl sed purus." />
            </div>
            <Footer />
        </div>
    );
}
