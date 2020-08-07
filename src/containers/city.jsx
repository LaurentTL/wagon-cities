import React, { Component } from 'react';
import cities from '../components/app';


class City extends Component {
  render() {
    return (
      <div className="cities">
        <p>{this.props.city.name}</p>
      </div>
    );
  }
}

export default City;
