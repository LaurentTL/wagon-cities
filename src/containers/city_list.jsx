import React, { Component } from 'react';
import City from '../containers/city';

class CityList extends Component {
  renderList() {
    return this.props.map((city) => {
      return <City key={city.name} city={city} />;
    });
  }

  render() {
    return (
      <div className="cities">
        {this.renderList()}
      </div>
    );
  }
}

export default CityList;
