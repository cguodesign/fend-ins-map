import React, {Component} from 'react';
import onClickOutside from 'react-onclickoutside';

class Dropdown extends Component {
  constructor(props) {
    super(props)

    this.state = {
      displayDropdown: false
    };
  }

  // initiate the dropdown menu
  handleDropdownToggle = () => {
    document.getElementById('dropdown-menu').classList.toggle('show');
  }

  // close the dropdown if the user clicks outside of the dropdown area.
  handleClickOutside = evt => {
    var dropdownButton = document.getElementById('dropdown-menu');
    if (dropdownButton.classList.contains('show')) {
      dropdownButton.classList.remove('show');
    }
  }

  // notify the app.js about the change of the data scope
  changeDataScope = (e) => {
    this.props.onSelectDataScope(e);
    this.handleClickOutside();
  }

  changeDataScopeToAll = () => {
    this.changeDataScope('all');
  }

  changeDataScopeToOpening = () => {
    this.changeDataScope('opening');
  }

  render() {
    return (
      <div className='dropdown'>
        <button className='dropbtn' onClick={this.handleDropdownToggle} id="dropdownMenuButton" aria-haspopup="true">
          Options <i className='fa fa-caret-down'></i>
        </button>
        <div className='dropdown-content' id='dropdown-menu' aria-labelledby="dropdownMenuButton">
          <button onClick={this.changeDataScopeToAll} href='#'>All Places</button>
          <button onClick={this.changeDataScopeToOpening} href='#'>Opening now</button>
        </div>
      </div>
    )
  }
}

export default onClickOutside(Dropdown);
