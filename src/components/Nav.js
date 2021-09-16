import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import './Nav.css';

const Nav = (props) => {
  const { route, display } = props;
  return (
    <div className="Navigation">
      <span className={display}><Link to={route} className="Back">&lt; Back</Link></span>
      <span className="Logo">CoronaWide</span>
    </div>
  );
};

Nav.defaultProps = {
  route: '',
  display: '',
};

Nav.propTypes = {
  route: PropTypes.string,
  display: PropTypes.string,
};

export default Nav;
