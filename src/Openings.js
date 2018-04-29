import React, {Component} from 'react'
import PropTypes from 'prop-types'

class Openings extends Component {
  static propTypes = {
    isOpening: PropTypes.bool.isRequired
  }

  constructor(props) {
    super(props)
  }

  render() {
    return (
      // {(this.props.isOpening) ? 'Closed' : 'Opening'}
      <div>
        {(this.props.isOpening)
          ? (<div class='opening__wrapper opening__wrapper--open'><p>Opening</p></div>)
          : (<div class='opening__wrapper opening__wrapper--closed'><p>Closed</p></div>)
        }
      </div>
    )
  }
}

export default Openings
