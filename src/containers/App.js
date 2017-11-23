import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { fetchCategories } from '../actions/categoryActions';
import { fetchPosts } from '../actions/postActions';
import HomePageWrapper from '../components/HomePageWrapper';
import CategoryRoutingContainer from './CategoryRoutingContainer';
import NoMatch from '../components/NoMatch';

class App extends Component {
  componentWillMount() {
    this.props.getCategories();
    this.props.getPosts();
  }

  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={HomePageWrapper} />
          <Route path="/:categoryUrl" component={CategoryRoutingContainer} />
          <Route component={NoMatch} />
        </Switch>
      </BrowserRouter>
    );
  }
}

App.propTypes = {
  getCategories: PropTypes.func.isRequired,
  getPosts: PropTypes.func.isRequired,
};

const mapDispatchToProps = dispatch => ({
  getCategories: () => dispatch(fetchCategories()),
  getPosts: () => dispatch(fetchPosts()),
});

export default connect(null, mapDispatchToProps)(App);
