import './Homepage.css';
import Continent from './Continent';
import africa from '../assets/africablue.png';
import europe from '../assets/europeblue.png';
import asia from '../assets/asiablue.png';
import northAmerica from '../assets/northamericablue.png';
import southAmerica from '../assets/southamericablue.png';
import australia from '../assets/australiablue.png';

const Homepage = () => (
  <div className="Continents-Container">
    <Continent image={africa} name="AFRICA" />
    <Continent image={europe} name="EUROPE" />
    <Continent image={asia} name="ASIA" />
    <Continent image={australia} name="AUSTRALIA" />
    <Continent image={northAmerica} name="NORTH AMERICA" />
    <Continent image={southAmerica} name="SOUTH AMERICA" />
  </div>
);

export default Homepage;
