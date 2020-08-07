import React, { Component } from 'react';
import cities from '../components/app';


class City extends Component {
  render() {
    return (
      <div className="cities">
        <h1>{this.props.city.name}</h1>
      </div>
    );
  }
}

export default City;
