import React, {Component} from 'react';
import {connect} from 'react-redux';

const tree = chrome.runtime.getURL('/images/christmas-tree.png');

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
        <div>
          <h2> Merry Christmas</h2>
          <h3>Mr. Yuri P. !!</h3>
          <p className='textIntent-caption2'>Aka : Potato </p>
          <img className="tree" src={tree}/>
          <button className='cx-solidBtn' onClick={this.onClickHandler}>Click Here!</button>
        </div>
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
