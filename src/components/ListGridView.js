import React, { Component } from 'react';

export default class ListGridView extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  setImage(item) {
    // TODO : proper image fallback logic
    const imgArr = item.photos.filter(pic => pic.displayPic);
    const imgUri = imgArr[0] ? imgArr[0].imagesMap.medium : '';
    return imgUri ? `https://images.nobroker.in/images/${item.id}/${imgUri}` : 'https://images.nobroker.in/static/img/resale/1bhk.jpg';
  }

  handleImageError(e) {
    e.target.src = 'https://images.nobroker.in/static/img/resale/1bhk.jpg';
  }

  render() {
    return (
      <div className="grid-container" onScroll={this.props.handleInfiniteScroll}>
        {
          this.props.filteredProperties.map((item, index) => {
            return (
              <div className="grid-item" key={index}>
                <div className="image-container">
                  <img className="prop-image" onError={this.handleImageError} src={this.setImage(item)} alt="property" />
                </div>
                <div className="details-container">
                  <h4>{item.propertyTitle}</h4>
                </div>
              </div>
            )
          })
        }
      </div>
    );
  }
}