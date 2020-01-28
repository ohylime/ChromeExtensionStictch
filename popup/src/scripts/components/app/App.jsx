import React, {Component} from 'react';
import {connect} from 'react-redux';

import {ChristmasPopUp} from "./PopUpViews";


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading : false,
      submitted : false
    }
    this.onClickHandler = this.onClickHandler.bind(this)
  }

  onClickHandler(){
    const action  = (this.props.petState) ? 'HIDE_PET' : 'SHOW_PET';
    console.log(action, 'Popup')
    this.props.dispatch({
      type: action
    });
  }


  render() {
    return (
      <div className='textIntent-title2--strong popup'>
       <ChristmasPopUp petStateHandler={this.onClickHandler} />
      </div>
    );
  }
}


const mapStateToProps = (state) => {
  return {
    count: state.count,
    petState: state.petState
  };
};

export default connect(mapStateToProps)(App);
