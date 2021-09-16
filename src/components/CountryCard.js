import PropTypes from 'prop-types';
import './CountryCard.css';

const CountryCard = (props) => {
  const { name } = props;
  return (
    <div className="CountryCard-Container">
      <span className="CountryCard-Name">{name}</span>
    </div>
  );
};

CountryCard.defaultProps = {
  name: '',
};

CountryCard.propTypes = {
  name: PropTypes.string,
};

export default CountryCard;
