import './Continent.css';
import PropTypes from 'prop-types';

const Continent = (props) => {
  const { image, name } = props;
  return (
    <div className="Continent-Card">
      <div className="Img-Cont">
        <img className="Cont-Img" src={image} alt="africa continent" />
      </div>
      <div className="Name-Cont">
        <span className="Continent-Name">{name}</span>
      </div>
    </div>
  );
};

Continent.defaultProps = {
  image: '',
  name: '',
};

Continent.propTypes = {
  image: PropTypes.string,
  name: PropTypes.string,
};

export default Continent;
