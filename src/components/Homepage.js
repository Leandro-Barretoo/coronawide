import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './Homepage.css';
import Continent from './Continent';
import africa from '../assets/africablue.png';
import europe from '../assets/europeblue.png';
import asia from '../assets/asiablue.png';
import northAmerica from '../assets/northamericablue.png';
import southAmerica from '../assets/southamericablue.png';

const Homepage = () => {
  const dispatch = useDispatch();

  const getCountries = () => (dispatch) => {
    fetch('')
  }

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
