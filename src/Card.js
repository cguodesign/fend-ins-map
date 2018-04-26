import React, {Component} from 'react'
import PropTypes from 'prop-types'

class Card extends Component {
  static propTypes = {
    isSelected: PropTypes.bool.isRequired,
    cardData: PropTypes.object.isRequired
  }
  render() {
    return (
      <li class='ramen-card'>
        <div class='ramen-card__wrapper'>
          <h3 class='ramen-card__title'>
            {this.props.cardData.Name}
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
