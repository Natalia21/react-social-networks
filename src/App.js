import React, { Component } from 'react';
import Select from 'react-select';
import { connect } from 'react-redux';
import logo from './logo.svg';
import './App.css';
import { getPosts } from './actions';
import Posts from './components/posts';

import 'react-select/dist/react-select.css';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      options: [{
        label: 'Stack Overflow',
        value: 'SO'
      }, {
        label: 'Facebook',
        value: 'FB'
      }, {
        label: 'VK',
        value: 'VK'
      }],
      selectedNetwork: 'SO',
      userId: '5169404'
    };
  }

  handleSelectChange = selectedNetwork => {
    this.setState({ selectedNetwork });
  }

  handleInputChange = event => {
    this.setState({
      userId: event.target.value
    });
  }

  handleSubmit = event => {
    event.preventDefault();
    this.props.dispatch(getPosts(this.state.userId));
  }

  render() {
    const { posts } = this.props;

    console.log('posts', posts);

    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
        </header>
        <div className="col-md-6 container">
          <form onSubmit={this.handleSubmit}>
            <Select
                options={this.state.options}
                value={this.state.selectedNetwork}
                onChange={this.handleSelectChange}
            />
            <input type="text" className="form-control m-20" value={this.state.userId} onChange={this.handleInputChange} placeholder="Enter user id"/>
            <button type="submit" className="btn btn-primary">Get my posts</button>
          </form>
        </div>
        <Posts posts={posts}/>
      </div>
    );
  }
}

export default connect(state => state)(App);
