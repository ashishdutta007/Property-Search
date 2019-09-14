import React, { Component } from 'react';
import { connect } from 'react-redux';
import SlideFilters from './SlideFilters';
import { filterProperties, sortProperties } from '../actions/propertyActions';

class PropertyFilters extends Component {
  constructor(props) {
    super(props);
    this.state = {
      withPicEnabled: false,
      sortOrder: true,
    };
  }

  resetFilters() {
    this.props.filterProperties({ type: '' });
  }

  handleCheckbox() {
    this.setState({
      withPicEnabled: !this.state.withPicEnabled,
    }, () => {
      this.props.filterProperties({ type: this.state.withPicEnabled ? 'withphotos' : '', properties: this.props.properties });
    });
  }

  sortByRent() {
    this.setState({
      sortOrder: !this.state.sortOrder,
    }, () => {
      this.props.sortProperties(this.state.sortOrder);
    });
  }

  render() {
    return (
      <div className="filter-container flex-1 display-flex">
        <div className="rent-slider">
          <span>Rent filter</span>
          <SlideFilters type="rent" min={0} max={50000} properties={this.props.properties} />
        </div>
        <div className="area-slider">
          <span>Area(sq ft.) filter</span>
          <SlideFilters type="area" min={0} max={4000} properties={this.props.properties} />
        </div>
        <div className="photo-checkbox">
          <label for="photoAvailable">With Photos</label>
          <input id="photoAvailable" onChange={this.handleCheckbox.bind(this)} name="photoAvailable" type="checkbox" />
        </div>
        <div className="reset-btn-wrapper">
          <label for="reset">Clear Filters</label>
          <button id="reset" className="reset-btn" onClick={this.resetFilters.bind(this)}>Reset</button>
        </div>
        <div className="reset-btn-wrapper">
          <label for="sort">Sort by rent</label>
          <button id="reset" className="reset-btn" onClick={this.sortByRent.bind(this)}>{this.state.sortOrder ? 'High to Low' : 'Low to High'}</button>
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    properties: state.properties.properties,
  }
}

export default connect(mapStateToProps, { filterProperties, sortProperties })(PropertyFilters);