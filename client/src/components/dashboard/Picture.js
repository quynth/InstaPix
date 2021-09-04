import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Moment from 'react-moment';
import { deletePicture } from '../../actions/profileActions';

class Picture extends Component {
  onDeleteClick(id) {
    this.props.deletePicture(id);
  }

  render() {
    const picture = this.props.picture.map((pix) => (
      <tr key={pix._id}>
        <td>{pix.title}</td>
        <td>
          <img src={pix.url} width="250" height="350" overflow="hidden" />
          </td>
          <td>
          <Moment format="YYYY/MM/DD">{pix.taken}</Moment>
          </td> 
        <td>
          <button
            onClick={this.onDeleteClick.bind(this, pix._id)}
            className="btn btn-danger"
          >
            Delete
          </button>
        </td>
      </tr>
    ));
    return (
      <div>
        <h4 className="mb-4">Pictures</h4>
        <table className="table">
          <thead>
            <tr>
              <th>Caption</th>
              <th>Picture</th>
              <th>Date Taken</th> 
              <th>Delete</th>
              <th />
            </tr>
            {picture}
          </thead>
        </table>
      </div>
    );
  }
}

Picture.propTypes = {
  deletePicture: PropTypes.func.isRequired,
};

export default connect(null, { deletePicture })(Picture);
