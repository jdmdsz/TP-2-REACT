import image1 from './image1.png';
import image2 from './image2.png';
import image3 from './image3.png';
import image4 from './image4.png';

export default function App() {
    return (
        <div style={{ display: 'flex', flexDirection: 'row', padding: '20px', justifyContent: 'space-between' }}>
            <div style={{ flex: 1, paddingRight: '20px' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '20px' }}>
                    <img 
                        src={image1} 
                        alt="Produto 1" 
                        style={{ width: '30%', height: 'auto', maxWidth: '50' }}
                    />
                    <img 
                        src={image2} 
                        alt="Produto 2" 
                        style={{ width: '30%', height: 'auto', maxWidth: '50' }}
                    />
                    <img 
                        src={image3} 
                        alt="Produto 3" 
                        style={{ width: '30%', height: 'auto', maxWidth: '50' }}
                    />
                </div>
                <h2>Lorem ipsum</h2>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus luctus, libero quis 
                    ultrices eleifend, diam nisi condimentum augue, quis sagittis nunc lectus ac lacus. Aenean 
                    ornare auctor volutpat. Sed ut ante est. Pellentesque quis leo vel ante ornare mollis mollis 
                    quis lorem. Etiam pharetra congue augue, ut sodales est. Donec massa lectus, ultricies ut 
                    pharetra vel, efficitur eget ipsum. Vestibulum dolor arcu, feugiat id nunc sit amet, efficitur 
                    tincidunt nisi. Suspendisse potenti. Etiam a massa eget leo placerat sollicitudin at id erat. 
                    Nunc tempus, massa quis auctor viverra, urna turpis malesuada ex, vitae mollis erat enim nec massa. 
                    Phasellus vel venenatis velit. Vestibulum condimentum lacus ut quam facilisis aliquam. Donec eu sem 
                    nec sem porttitor laoreet in eget arcu.
                </p>
            </div>

            <div style={{ flex: 1 }}>
                <img 
                    src={image4} 
                    alt="Produto 4" 
                    style={{ width: '100%', height: 'auto' }}
                />
            </div>
        </div>
    )
}