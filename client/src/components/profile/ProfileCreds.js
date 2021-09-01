import React, { Component } from 'react';
import Moment from 'react-moment';

class ProfileCreds extends Component {
  render() {
    const { picture } = this.props;

    const pixItems = picture.map((pix) => (
      <li key={pix._id} className="list-group-item">
        <p>
          <Moment format="YYYY/MM/DD">{pix.taken}</Moment>
        </p>
        <p>
          <strong>Caption:</strong> {pix.title}
        </p>
        <p>
          <strong>URL:</strong> {pix.url}
        </p>
      </li>
    ));

    return (
      <div className="row">
        <div className="col-md-12">
          <h3 className="text-center text-info">Pictures</h3>
          {pixItems.length > 0 ? (
            <ul className="list-group">{pixItems}</ul>
          ) : (
            <p className="lead">No Pictures Posted</p>
          )}
        </div>
      </div>
    );
  }
}

export default ProfileCreds;
