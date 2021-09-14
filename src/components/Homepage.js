import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './Homepage.css';
import Continent from './Continent';
import africa from '../assets/africablue.png';
import europe from '../assets/europeblue.png';
import asia from '../assets/asiablue.png';
import northAmerica from '../assets/northamericablue.png';
import southAmerica from '../assets/southamericablue.png';
import europeArr from '../countriesArrays/europeArr';
import africaArr from '../countriesArrays/africaArr';
import asiaArr from '../countriesArrays/asiaArr';
import northAmericaArr from '../countriesArrays/northAmericaArr';
import southAmericaArr from '../countriesArrays/southAmericaArr';
import { addEurope } from '../redux/covid/europe';
import { addAfrica } from '../redux/covid/africa';
import { addAsia } from '../redux/covid/asia';
import { addNorthAmerica } from '../redux/covid/northAmerica';
import { addSouthAmerica } from '../redux/covid/southAmerica';

const Homepage = () => {
  const dispatch = useDispatch();
  const africaCountries = useSelector((state) => state.africaReducer);

  const getCountries = () => (dispatch) => {
    fetch('https://api.covid19tracking.narrativa.com/api/countries')
      .then((response) => response.json())
      .then((data) => data.countries.forEach((country) => {
        if (europeArr.includes(country.id)) {
          dispatch(addEurope(country));
        } else if (africaArr.includes(country.id)) {
          dispatch(addAfrica(country));
        } else if (asiaArr.includes(country.id)) {
          dispatch(addAsia(country));
        } else if (northAmericaArr.includes(country.id)) {
          dispatch(addNorthAmerica(country));
        } else if (southAmericaArr.includes(country.id)) {
          dispatch(addSouthAmerica(country));
        }
      }));
  };

  useEffect(() => {
    if (!africaCountries.length) {
      dispatch(getCountries());
    }
  }, []);

  return (
    <div className="Continents-Container">
      <Continent image={africa} name="AFRICA" />
      <Continent image={europe} name="EUROPE" />
      <Continent image={asia} name="ASIA" />
      <Continent image={northAmerica} name="NORTH AMERICA" />
      <Continent image={southAmerica} name="SOUTH AMERICA" />
    </div>
  );
};

export default Homepage;
