import './App.css';
import { Column1 } from './components/styles/Column1';
import { Column2 } from './components/styles/Column2';
import { Column3 } from './components/styles/Column3';
import { Container } from './components/styles/Container.styled';

function App() {
  return (
    <div className="App">
    <Container>
      <Column1>
        <div id="content">
          <img src="images/icon-sedans.svg" alt="sedans" />
          <h2>SEDANS</h2>
          <p>
            Choose a sedan for its affordability and excellent fuel economy.
            Ideal for cruising in the city or an your next road trip.
          </p>
          <button className='column1'>Learn More</button>
        </div>
      </Column1>
      <Column2>
        <div id="content">
          <img src="images/icon-suvs.svg" alt="suvs" />
          <h2>SUVS</h2>
          <p>
            Take an SUV for it's spacious interior, power, and versatility.
            Perfect for your next family vacation and off-road adventures.
          </p>
          <button>Learn More</button>
        </div>
      </Column2>
      <Column3>
        <div id="content">
            <img src="./images/icon-luxury.svg" alt="luxury" />
            <h2>LUXURY</h2>
            <p>
              Cruise in the best car brands without the bloated prices. Enjoy the
              enhanced comfort of a luxury rental and arrive in style.
            </p>
            <button>Learn More</button>
        </div>
      </Column3>
    </Container>

    </div>
  );
}

export default App;
