import React, { Component } from 'react';
import { connect } from 'react-redux';
import classnames from 'classnames';
import { registerUser } from '../../actions/authActions';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import TextFieldGroup from '../common/TextFieldGroup';
import signupImage from '../../img/signup.jpg';

class Register extends Component {
  constructor() {
    super();
    this.state = {
      name: '',
      email: '',
      password: '',
      password2: '',
      errors: {},
      info: 'This site uses Gravatar. If you want a profile image, use a Gravatar email.',
      agreedToTerms: false,
    };

    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    this.handleCheckboxChange = this.handleCheckboxChange.bind(this);
  }

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  onSubmit(e) {
    e.preventDefault();

    const newUser = {
      name: this.state.name,
      email: this.state.email,
      password: this.state.password,
      password2: this.state.password2,
    };

    this.props.registerUser(newUser, this.props.history);
  }

  handleCheckboxChange(e) {
    this.setState({ agreedToTerms: e.target.checked });
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.errors) {
      this.setState({ errors: nextProps.errors });
    }
  }

  render() {
    const { errors, agreedToTerms } = this.state;
    const { info } = this.state;
    return (
      <div className="register" style={{ overflowY: 'scroll', height: '100vh' }}>
        <div className="container">
          <div className="row">
            <div className="col-md-8 m-auto">
              <h1 className="display-4 text-center">Sign Up</h1>  
              <img
                src={signupImage}
                alt="Signup"
                style={{
                  width: '200px',
                  position: 'absolute',
                  top: '0',
                  left: '0',
                }}
              />
              
              <p className="lead text-center">Create your InstaPix account</p>
              <form noValidate onSubmit={this.onSubmit.bind(this)}>
                <TextFieldGroup
                  placeholder="Name"
                  name="name"
                  type="text"
                  value={this.state.name}
                  onChange={this.onChange.bind(this)}
                  error={errors.name}
                />

                <TextFieldGroup
                  placeholder="Email Address"
                  name="email"
                  type="email"
                  value={this.state.email}
                  onChange={this.onChange.bind(this)}
                  info={info}
                  error={errors.email}
                />

                <TextFieldGroup
                  placeholder="Password"
                  name="password"
                  type="password"
                  value={this.state.password}
                  onChange={this.onChange.bind(this)}
                  error={errors.password}
                />

                <TextFieldGroup
                  placeholder="Confirm Password"
                  name="password2"
                  type="password"
                  value={this.state.password2}
                  onChange={this.onChange.bind(this)}
                  error={errors.password2}
                />

                <div className="form-group">
                  <div className="form-check">
                    <input
                      type="checkbox"
                      className="form-check-input"
                      id="exampleCheck"
                      checked={agreedToTerms}
                      onChange={this.handleCheckboxChange}
                    />
                    <label className="form-check-label" htmlFor="exampleCheck">
                      By checking this box, you are agreeing to our terms of service
                    </label>
                  </div>
                </div>

                <input type="submit" className="btn btn-info btn-block mt-4" />
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

Register.propTypes = {
  registerUser: PropTypes.func.isRequired,
  errors: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  errors: state.errors,
});

export default connect(mapStateToProps, { registerUser })(withRouter(Register));
