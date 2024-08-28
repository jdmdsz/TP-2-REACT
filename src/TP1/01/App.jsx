import image from './image.jpg';

export default function App() {
    return (
        <div>
            
             <div style={{ textAlign: 'center', padding: '20px' }}>
                <img 
                    src={image} 
                    alt="bichinho" 
                    style={{ width: '40%'}}
                />
                
                <h2>Lorem ipsum dolor sit amet</h2>
                
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus luctus, libero quis ultrices eleifend, 
                    diam nisi condimentum augue, quis sagittis nunc lectus ac lacus. Aenean ornare auctor volutpat. 
                    Sed ut ante est. Pellentesque quis leo vel ante ornare mollis mollis quis lorem. Etiam pharetra congue 
                    augue, ut sodales est. Donec massa lectus, ultricies ut pharetra vel, efficitur eget ipsum. Vestibulum 
                    dolor arcu, feugiat id nunc sit amet, efficitur tincidunt nisi. Suspendisse potenti. Etiam a massa eget 
                    leo placerat sollicitudin at id erat. Nunc tempus, massa quis auctor viverra, urna turpis malesuada ex, 
                    vitae mollis erat enim nec massa. Phasellus vel venenatis velit. Vestibulum condimentum lacus ut quam 
                    facilisis aliquam. Donec eu sem nec sem porttitor laoreet in eget arcu.
                </p>
            </div>
        </div>
    )
}