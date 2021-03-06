import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
import TextFieldGroup from '../common/TextFieldGroup';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { addPicture } from '../../actions/profileActions';
//import moment from 'moment';

class AddPicture extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      url: '',
      taken: '',
      errors: {},
      disabled: false,
    };

    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    this.onCheck = this.onCheck.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.errors) {
      this.setState({ errors: nextProps.errors });
    }
  }

  onSubmit(e) {
    e.preventDefault();

    const pixData = {
      title: this.state.title,
      url: this.state.url,
      taken: this.state.taken,
    };
    this.props.addPicture(pixData, this.props.history);
  }

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  onCheck(e) {
    this.setState({
      disabled: !this.state.disabled,
      current: !this.state.current,
    });
  }

  render() {
    const { errors } = this.state;

    return (
      <div className="add-picture">
        <div className="container">
          <div className="row">
            <div className="col-md-8 m-auto">
              <Link to="/dashboard" className="btn btn-light">
                Go Back
              </Link>
              <h1 className="display-4 text-center">Add Picture</h1>
              <p className="lead text-center">
                Fill in the following text fields to add your photo
              </p>
              <small className="d-block pb-3">* = required fields</small>
              <form onSubmit={this.onSubmit}>
                <TextFieldGroup
                  placeholder="* Caption"
                  name="title"
                  value={this.state.title}
                  onChange={this.onChange}
                  error={errors.title}
                />
                <TextFieldGroup
                  placeholder="Photo URL"
                  name="url"
                  value={this.state.url}
                  onChange={this.onChange}
                  error={errors.url}
                />


                {/*<input  name="taken"  type="date" 
                 disabled={ this.state.mode } 
                value={ moment(this.state.taken).format("YYYY-MM-DD") } 
                 className="form-control"  onChange={ this.onChange } />
                <script src="https://cdnjs.cloudflare.com/ajax/libs/moment.js/2.18.1/moment.min.js"></script>
                */}
                

                <h6>When was this photo taken?</h6>
                <TextFieldGroup
                  name="taken"
                  type="date"
                  value={this.state.taken}
                  onChange={this.onChange}
                  error={errors.taken}
                /> 

                <input
                  type="submit"
                  value="Submit"
                  className="btn btn-info btn-block mt-4"
                />
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

AddPicture.propTypes = {
  addPicture: PropTypes.func.isRequired,
  profile: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  profile: state.profile,
  errors: state.errors,
});

export default connect(mapStateToProps, { addPicture })(withRouter(AddPicture));
