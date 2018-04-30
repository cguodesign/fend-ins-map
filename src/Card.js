import React, {Component} from 'react';
import PropTypes from 'prop-types';
import Openings from './Openings';

class Card extends Component {
  static propTypes = {
    isSelected: PropTypes.bool.isRequired,
    cardData: PropTypes.object.isRequired
  }

  constructor(props) {
    super(props);

    this.state = {
      cardPhotoURL: '',
      currentSeed: 0,
      isShowingThumbnail: true
    }
  }

  // Randomly change the images of the restaurant, due to the limitation of the API, only 3 images are available.
  handleShuffleImage = () => {
    let randomSeed = Math.floor(Math.random() * 3);
    if (this.state.currentSeed === randomSeed) {
      //
      if (randomSeed === 2) {
        randomSeed = 0;
      } else if (randomSeed === 0) {
        randomSeed = 1;
      } else {
        randomSeed = 2;
      }
    };
    this.setState({
      cardPhotoURL: this.props.cardData.photos[randomSeed],
      currentSeed: randomSeed,
      isShowingThumbnail: false
    })
  }

  changeSelectedRamen = (e) => {
    // Move the map
    this.props.onCardSelect(this.props.cardData.location, this.props.cardData.Name);
    // 1. remove all the ramen-card--selected class
    let allSelectedCards = document.getElementsByClassName('ramen-card--selected');
    if (allSelectedCards.length > 0) {
      for (let card of allSelectedCards) {
        card.classList.remove('ramen-card--selected')
      }
    }
    // 2. add a ramen-card--selected class
    let currentRamenCard = e.target.closest('.ramen-card');
    currentRamenCard.classList.toggle('ramen-card--selected');
  }

  render() {
    return (
      <li className='ramen-card' onClick={((e) => this.changeSelectedRamen(e))} role="button">
        <div className='ramen-card__wrapper'>
          <div className='ramen-card__title--wrapper'>
            <div className='ramen-card__title'>
              <h3>{this.props.cardData.Name}</h3>
            </div>
            <Openings isOpening={this.props.cardData.isOpen === undefined ? false : this.props.cardData.isOpen}/>
          </div>
          <div className='ramen-card__image--wrapper'>
            {this.state.isShowingThumbnail
              ? (
                <div className='ramen-card__image' style={{ backgroundImage: `url(${this.props.cardData.thumbnail})` }}>
                </div>
              )
              : (
                <div className='ramen-card__image' style={{ backgroundImage: `url(${this.state.cardPhotoURL})` }}>
                </div>
              )
            }
            <button className='ramen-card__button' onClick={this.handleShuffleImage}>Shuffle Image</button>
          </div>
        </div>
      </li>
    )
  }
}

export default Card
