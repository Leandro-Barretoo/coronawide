import './Homepage.css';
import Continent from './Continent';
import africa from '../assets/africa.png';
import europe from '../assets/europe.png';
import asia from '../assets/asia.png';
import northAmerica from '../assets/americanorte.png';
import southAmerica from '../assets/americasul.png';
import australia from '../assets/australia.png';

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
