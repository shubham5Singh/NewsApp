import React from 'react';
import { connect } from 'react-redux';
import { News } from '../components/News';
import { getPost } from '../actions/newsAction';
import Loader from 'react-loader-spinner'
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { value: false }
  }
  componentDidMount() {
    this.props.getPost();

  }
  componentWillReceiveProps() {
    this.setState({
      value: true
    });
  }
  render() {
    if (this.state.value) {
      return (
        <div className="container">
          <News posts={this.props.news} />
        </div>
      );
    }
    else {
      return (
        <div className="loader">
          <Loader
            type="Circles"
            color="#0F7CF0"
            height="100"
            width="100"
          />
        </div>
      );
    }
  }
}

const mapStateToProps = (state) => {
  return {
    news: state.articles
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getPost: () => {
      dispatch(getPost());
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);    