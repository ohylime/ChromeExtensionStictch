import React, {Component} from 'react';
import {connect} from 'react-redux';
import Draggable from 'react-draggable'
import {gsap} from 'gsap';
const normal = chrome.runtime.getURL('/images/stitch.png');
const stitchStomp = chrome.runtime.getURL('/images/stitch-stomp.gif');
const stitchTatrum = chrome.runtime.getURL('/images/stitch-tantrum.gif');

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      move : false
    };
    this.onClickHandler = this.onClickHandler.bind(this);
  }

  componentDidMount() {
  }

  petFollowMouse(e){
    const petElement = document.getElementById('pet');
    gsap.to(petElement, {duration: 0.7, ease: 0.7, rotation: 360, x: e.pageX, y: e.pageY});
  }



  onClickHandler(){
    let petElement = document.getElementById('pet');
    function moveCircle(e) {
          gsap.to(petElement, {duration: 0.7, ease: 0.5, rotation: 360, x: e.pageX, y: e.pageY});
    }

    if(!this.state.move) {
      document.onmousemove = null;
      this.setState({move:true});
    }else{
     document.onmousemove = moveCircle;
      this.setState({move:false});
    }
  }



  render(){
    return (
        <span className='playground'>
          <Draggable>
            <img className={(this.props.petState) ? 'show' : 'hide'} id="pet" onClick={this.onClickHandler} src={this.state.move ? stitchTatrum : stitchStomp}/>
          </Draggable>
        </span>
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