import React, {Component} from 'react';
import PropTypes from 'prop-types';

class Openings extends Component {
  static propTypes = {
    isOpening: PropTypes.bool.isRequired
  }

  render() {
    return (
      <div>
        {(this.props.isOpening)
          ? (<div className='opening__wrapper opening__wrapper--open'><p>Opening</p></div>)
          : (<div className='opening__wrapper opening__wrapper--closed'><p>Closed</p></div>)
        }
      </div>
    )
  }
}

export default Openings
