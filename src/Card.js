import React, {Component} from 'react'
import PropTypes from 'prop-types'

class Card extends Component {
  static propTypes = {
    isSelected: PropTypes.bool.isRequired,
    cardInfo: PropTypes.object.isRequired
  }
  render() {
    return (
      <li class='ramen-card'>
        <div>
          <h3>
            Ramen
          </h3>
          <div class="ramen-card__image--wrapper">
            <div class="ramen-card__image"></div>
          </div>
          <div>
            <ul>
              <li>Shuffle Image</li>
              <li>Lyft there</li>
            </ul>
          </div>
        </div>
      </li>
    )
  }
}

export default Card
