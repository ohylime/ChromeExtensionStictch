import React, {Component} from 'react';
import {connect} from 'react-redux';

const Spinner = <div className="cx-animDotShift cx-animDotShift--xs"></div>;
const DisableButton = <span><button className="cx-solidBtn cx-solidBtn--sm" disabled>Import Listing</button></span>

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading : false,
      submitted : false
    }
    this.onClickHandler = this.onClickHandler.bind(this)
  }

  componentDidMount() {
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
      <div className='textIntent-title2--strong'>
        <div>
        <h2> Merry Christmas Yuri!</h2>
          <button className='cx-dangerBtn--sm' onClick={this.onClickHandler}>Click Here!</button>
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
