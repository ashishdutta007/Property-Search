import React, { Component } from 'react';
import { connect } from 'react-redux';
import Slider from 'rc-slider';
import { filterProperties } from '../actions/propertyActions';

const createSliderWithTooltip = Slider.createSliderWithTooltip;
const Range = createSliderWithTooltip(Slider.Range);

class SlideFilters extends Component {
  constructor(props) {
    super(props);
    this.state = {
      sliderValues: [this.props.min, this.props.max]
    };
  }
  handleChange(sliderValues) {
    const { type, properties } = this.props;
    this.setState({ sliderValues }, () => {
      this.props.filterProperties({ type: type, criteria: sliderValues, properties: this.props.properties });
    });
  }
  render() {
    const { sliderValues } = this.state;
    const { min, max, type } = this.props;
    return (
      <div>
        <Range
          min={min}
          max={max}
          onChange={this.handleChange.bind(this)}
          defaultValue={sliderValues}
        // tipFormatter={value => <span className="tooltip">{value}</span>}
        />
        <span>{sliderValues[0]} - {sliderValues[1]}</span>
      </div>
    );
  }
}



export default connect(null, { filterProperties })(SlideFilters);