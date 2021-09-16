import './Continent.css';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const Continent = (props) => {
  const { image, name, route } = props;
  return (
    <div className="Continent-Card">
      <div className="Img-Cont">
        <img className="Cont-Img" src={image} alt="" />
      </div>
      <div className="Name-Cont">
        <span className="Continent-Name"><Link className="Continent-Name" to={route}>{name}</Link></span>
      </div>
    </div>
  );
};

Continent.defaultProps = {
  image: '',
  name: '',
  route: '',
};

Continent.propTypes = {
  image: PropTypes.string,
  name: PropTypes.string,
  route: PropTypes.string,
};

export default Continent;
