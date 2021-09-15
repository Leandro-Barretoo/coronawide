import { useSelector } from 'react-redux';
import './Countrypage.css';
import europe from '../assets/europeblue.png';
import africa from '../assets/africablue.png';
import asia from '../assets/asiablue.png';
import northAmerica from '../assets/northamericablue.png';
import southAmerica from '../assets/southamericablue.png';
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

  const continent = (pathname) => {
    switch (pathname) {
      case '/':
        return 'No path found';
      case '/europe':
        return <Continent image={europe} name="EUROPE" />;
      case '/africa':
        return <Continent image={africa} name="AFRICA" />;
      case '/asia':
        return <Continent image={asia} name="ASIA" />;
      case '/northamerica':
        return <Continent image={northAmerica} name="NORTH AMERICA" />;
      case '/southamerica':
        return <Continent image={southAmerica} name="SOUTH AMERICA" />;
      default:
        return 'No path found';
    }
  };

  const continentToDisplay = continent(pathname);

  return (
    <div>
      {continentToDisplay}
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
