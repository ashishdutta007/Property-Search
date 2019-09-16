import React, { Component } from 'react';
import { connect } from 'react-redux';
import ListGridView from '../components/ListGridView';
import { fetchAllProperties } from '../actions/propertyActions';

class ListingPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  componentWillMount() {
    this.props.fetchAllProperties();
  }

  handleInfiniteScroll(e) {
    console.log(e);
    const targetEl = e.target;
    if (targetEl.scrollTop + targetEl.clientHeight >= targetEl.scrollHeight) {
      this.props.fetchAllProperties();
    }
  }

  render() {
    return (
      <div>
        <ListGridView properties={this.props.properties} filteredProperties={this.props.filteredProperties}
          handleInfiniteScroll={this.handleInfiniteScroll.bind(this)} />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    properties: state.properties.properties,
    filteredProperties: state.properties.filteredProperties
  }
}


export default connect(mapStateToProps, { fetchAllProperties })(ListingPage);