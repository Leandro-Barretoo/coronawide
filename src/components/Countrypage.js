import './Countrypage.css';
import europe from '../assets/europeblue.png';
import Continent from './Continent';
import CountryCard from './CountryCard';

const Countrypage = () => (
  <div>
    <Continent image={europe} name="EUROPE" />
    <div className="Stats">
      <span className="Stats-Title">STATS BY COUNTRY</span>
    </div>
    <div className="GridContainer">
      <CountryCard />
      <CountryCard />
      <CountryCard />
      <CountryCard />
    </div>
  </div>
);

export default Countrypage;
