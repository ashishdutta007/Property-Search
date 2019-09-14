import React, { Component } from 'react';
import { connect } from 'react-redux';
import Slider from 'rc-slider';
import { filterProperties, sortProperties } from '../actions/propertyActions';

const createSliderWithTooltip = Slider.createSliderWithTooltip;
const Range = createSliderWithTooltip(Slider.Range);

class PropertyFilters extends Component {
  constructor(props) {
    super(props);
    this.state = {
      sliderValues: [this.props.min, this.props.max]
    };
  }
  handleChange(sliderValues) {
    const { type, properties } = this.props;
    this.setState({ sliderValues }, () => {
      this.props.filterProperties({ type: type, criteria: sliderValues, properties: properties });
    });
  }
  render() {
    const { sliderValues } = this.state;
    const { min, max, type } = this.props;
    return (
      <div>
        {sliderValues[0]} - {sliderValues[1]}
        <Range
          min={min}
          max={max}
          onChange={this.handleChange.bind(this)}
          defaultValue={sliderValues}
        // tipFormatter={value => <span className="tooltip">{value}</span>}
        />
      </div>
    );
  }
}


const mapStateToProps = (state) => {
  return {
    properties: state.properties.properties,
  }
}
export default connect(mapStateToProps, { filterProperties, sortProperties })(PropertyFilters);