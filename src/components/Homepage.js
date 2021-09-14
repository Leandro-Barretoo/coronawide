import './Homepage.css';
import Continent from './Continent';
import africa from '../assets/africablue.png';
import europe from '../assets/europeblue.png';
import asia from '../assets/asiablue.png';
import northAmerica from '../assets/northamericablue.png';
import southAmerica from '../assets/southamericablue.png';

const Homepage = () => (
  <div className="Continents-Container">
    <Continent image={africa} name="AFRICA" route="/africa" />
    <Continent image={europe} name="EUROPE" route="/europe" />
    <Continent image={asia} name="ASIA" route="/asia" />
    <Continent image={northAmerica} name="NORTH AMERICA" route="/northamerica" />
    <Continent image={southAmerica} name="SOUTH AMERICA" route="/southamerica" />
  </div>
);

export default Homepage;
