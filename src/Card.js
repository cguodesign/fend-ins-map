import React, {Component} from 'react'
import PropTypes from 'prop-types'
import axios from 'axios'

class Card extends Component {
  static propTypes = {
    isSelected: PropTypes.bool.isRequired,
    cardData: PropTypes.object.isRequired
  }

  constructor(props) {
    super(props);

    this.state = {
      cardInfo: {}
    }
  }

  handleYelpIDLookup = (address) => {
    const config = {
      headers: {'Authorization': "bearer" + "WToWsPf8PSK9Vdj0g0bRWTLhnIZRsQqyYvWJmpWzWDgQXLJbe_7eaO8S9K-EndVT02ZR5XHCZwwD8BC4OQKOgNUbpXVCYabITWw0Dz0KAZdrTjd2ZYh49ZTsXAviWnYx"}
    }

    const splitAddress = this.props.cardData.Address.split(',')

    const address1 = splitAddress[0]
    const city = splitAddress[splitAddress.length - 2].replace(/^[ ]+|[ ]+$/g,'')

    const name = this.props.cardData.Name

    axios.get('http://localhost:5000/yelp_business_match', {params: {address1: address1, city:city, name:name}})
      .then(res => {
        const business_id = res.data.businesses[0].id
        console.log(res.data.businesses[0].id)
        axios.get('http://localhost:5000/yelp_business_detail', {params: {business_id: business_id}})
          .then(res => {
            console.log(res);
            let cardInfo = {
              isOpen: res.data.hours[0].is_open_now,
              thumbnail: res.data.image_url,
              imageUrl1: res.data.photos[0],
              imageUrl2: res.data.photos[1],
              imageUrl3: res.data.photos[2],
            }
            this.setState({
              cardInfo: cardInfo
            })
            console.log(this.state.cardInfo);
          })
          .catch(err => {
            console.log(err.message);
          })
      })
      .catch(err => {
        console.log(err);
      })
  }

  componentDidMount() {
    this.handleYelpIDLookup(this.props.cardData.Address);
  }

  render() {
    return (
      <li class='ramen-card'>
        <div class='ramen-card__wrapper'>
          <h3 class='ramen-card__title'>
            {this.props.cardData.Name}
          </h3>
          <div class="ramen-card__image--wrapper">
            <div class="ramen-card__image">
              <img src={this.state.cardInfo.thumbnail} alt={this.props.cardData.Name} />
            </div>
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
