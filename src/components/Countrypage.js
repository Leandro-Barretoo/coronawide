import { useSelector } from 'react-redux';
import './Countrypage.css';
import europe from '../assets/europeblue.png';
import Continent from './Continent';
import CountryCard from './CountryCard';

const Countrypage = () => {
  const { pathname } = window.location;

  const countriesToDisplay = (pathname) => {
    switch (pathname) {
      case '/':
        return 'No path found';
      case '/europe':
        return useSelector((state) => state.europeReducer);
      case '/africa':
        return useSelector((state) => state.africaReducer);
      case '/asia':
        return useSelector((state) => state.asiaReducer);
      case '/northamerica':
        return useSelector((state) => state.northAmericaReducer);
      case '/southamerica':
        return useSelector((state) => state.southAmericaReducer);
      default:
        return 'No path found';
    }
  };

  const display = countriesToDisplay(pathname).map((country) => (
    <CountryCard key={country.id} name={country.name} />
  ));

  return (
    <div>
      <Continent image={europe} name="EUROPE" />
      <div className="Stats">
        <span className="Stats-Title">STATS BY COUNTRY</span>
      </div>
      <div className="GridContainer">
        {display}
      </div>
    </div>
  );
};

export default Countrypage;
