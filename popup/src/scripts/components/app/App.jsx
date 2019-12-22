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
    document.addEventListener('click', () => {
      this.props.dispatch({
        type: 'ADD_COUNT',
        payload: 20
      });

      this.props.dispatch({
        type: 'COMMAND_STANDBY'
      });
      this.props.dispatch({
        type: 'COMMAND_SCRAPE_LISTING'
      });
    });


  }


  onClickHandler(){
    this.setState({loading :true});
    setTimeout(this.setState({loading:false, submitted :true}),3000)
  }


  render() {
    return (
      <div className='textIntent-title2--strong'>
        <div>
        <h2> Compass MLS Extension</h2>
          {
            this.state.loading === true ? <Spinner/> : this.state.submitted === true ? <DisableButton/> :
                <span><button className="cx-solidBtn cx-solidBtn--sm">Import Listing</button>
      <p className="textIntent-micro"> Note this will create a draft </p></span>
          }
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    count: state.count,
    command: state.command,
    listing: state.listing
  };
};

export default connect(mapStateToProps)(App);
