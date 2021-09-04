import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import TextFieldGroup from '../common/TextFieldGroup';
import TextAreaFieldGroup from '../common/TextAreaFieldGroup';
import InputGroup from '../common/InputGroup';
import SelectListGroup from '../common/SelectListGroup';
import { createProfile } from '../../actions/profileActions';

class CreateProfile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      displaySocialInputs: false,
      handle: '',
      website: '',
      location: '',
      locationState: '',
      bio: '',
      twitter: '',
      facebook: '',
      youtube: '',
      instagram: '',
      errors: {},
    };

    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.errors) {
      this.setState({ errors: nextProps.errors });
    }
  }

  onSubmit(e) {
    e.preventDefault();

    const profileData = {
      handle: this.state.handle,
      website: this.state.website,
      location: this.state.location,
      locationState: this.state.locationState,
      bio: this.state.bio,
      twitter: this.state.twitter,
      facebook: this.state.facebook,
      youtube: this.state.youtube,
      instagram: this.state.instagram,
    };

    this.props.createProfile(profileData, this.props.history);
  }

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  render() {
    const { errors, displaySocialInputs } = this.state;

    let socialInputs;

    if (displaySocialInputs) {
      socialInputs = (
        <div>
          <InputGroup
            placeholder="Twitter Profile URL"
            name="twitter"
            icon="fab fa-twitter"
            value={this.state.twitter}
            onChange={this.onChange}
            error={errors.twitter}
          />

          <InputGroup
            placeholder="Facebook Page URL"
            name="facebook"
            icon="fab fa-facebook"
            value={this.state.facebook}
            onChange={this.onChange}
            error={errors.facebook}
          />

          <InputGroup
            placeholder="YouTube Channel URL"
            name="youtube"
            icon="fab fa-youtube"
            value={this.state.youtube}
            onChange={this.onChange}
            error={errors.youtube}
          />

          <InputGroup
            placeholder="Instagram Page URL"
            name="instagram"
            icon="fab fa-instagram"
            value={this.state.instagram}
            onChange={this.onChange}
            error={errors.instagram}
          />
        </div>
      );
    }

    // Select options for state
    const options = [
      { label: '* Select your state', value: 0 },
      { label: 'ALABAMA', value: 'AL' },
      { label: 'ALASKA', value: 'AK' },
      { label: 'AMERICAN SAMOA', value: 'AS' },
      { label: 'ARIZONA', value: 'AZ' },
      { label: 'ARKANSAS', value: 'AR' },
      { label: 'CALIFORNIA', value: 'CA' },
      { label: 'COLORADO', value: 'CO' },
      { label: 'CONNECTICUT', value: 'CT' },
      { label: 'DELAWARE', value: 'DE' },
      { label: 'DISTRICT OF COLUMBIA', value: 'DC' },
      { label: 'FEDERATED STATES OF MICRONESIA', value: 'FM' },
      { label: 'FLORIDA', value: 'FL' },
      { label: 'GEORGIA', value: 'GA' },
      { label: 'GUAM', value: 'GU' },
      { label: 'HAWAII', value: 'HI' },
      { label: 'IDAHO', value: 'ID' },
      { label: 'ILLINOIS', value: 'IL' },
      { label: 'INDIANA', value: 'IN' },
      { label: 'IOWA', value: 'IA' },
      { label: 'KANSAS', value: 'KS' },
      { label: 'KENTUCKY', value: 'KY' },
      { label: 'LOUISIANA', value: 'LA' },
      { label: 'MAINE', value: 'ME' },
      { label: 'MARSHALL ISLANDS', value: 'MH' },
      { label: 'MARYLAND', value: 'MD' },
      { label: 'MASSACHUSETTS', value: 'MA' },
      { label: 'MICHIGAN', value: 'MI' },
      { label: 'MINNESOTA', value: 'MN' },
      { label: 'MISSISSIPPI', value: 'MS' },
      { label: 'MISSOURI', value: 'MO' },
      { label: 'MONTANA', value: 'MT' },
      { label: 'NEBRASKA', value: 'NE' },
      { label: 'NEVADA', value: 'NV' },
      { label: 'NEW HAMPSHIRE', value: 'NH' },
      { label: 'NEW JERSEY', value: 'NJ' },
      { label: 'NEW MEXICO', value: 'NM' },
      { label: 'NEW YORK', value: 'NY' },
      { label: 'NORTH CAROLINA', value: 'NC' },
      { label: 'NORTH DAKOTA', value: 'ND' },
      { label: 'NORTHERN MARIANA ISLANDS', value: 'MP' },
      { label: 'OHIO', value: 'OH' },
      { label: 'OKLAHOMA', value: 'OK' },
      { label: 'OREGON', value: 'OR' },
      { label: 'PALAU', value: 'PW' },
      { label: 'PENNSYLVANIA', value: 'PA' },
      { label: 'PUERTO RICO', value: 'PR' },
      { label: 'RHODE ISLAND', value: 'RI' },
      { label: 'SOUTH CAROLINA', value: 'SC' },
      { label: 'SOUTH DAKOTA', value: 'SD' },
      { label: 'TENNESSEE', value: 'TN' },
      { label: 'TEXAS', value: 'TX' },
      { label: 'UTAH', value: 'UT' },
      { label: 'VERMONT', value: 'VT' },
      { label: 'VIRGIN ISLANDS', value: 'VI' },
      { label: 'VIRGINIA', value: 'VA' },
      { label: 'WASHINGTON', value: 'WA' },
      { label: 'WEST VIRGINIA', value: 'WV' },
      { label: 'WISCONSIN', value: 'WI' },
      { label: 'WYOMING', value: 'WY' },
    ];

    return (
      <div className="create-profile">
        <div className="container">
          <div className="row">
            <div className="col-md-8 m-auto">
              <h1 className="display-4 text-center">Create Your Profile</h1>
              <p className="lead text-center">
                Let's get some information to make your profile stand out
              </p>
              <small className="d-block pb-3">* = required fields</small>
              <form onSubmit={this.onSubmit}>
                <TextFieldGroup
                  placeholder="* Profile Handle"
                  name="handle"
                  value={this.state.handle}
                  onChange={this.onChange}
                  error={errors.handle}
                  info="A unique handle for your profile URL. Your full name or nickname"
                />
                <TextFieldGroup
                  placeholder="Website"
                  name="website"
                  value={this.state.website}
                  onChange={this.onChange}
                  error={errors.website}
                  info="Could be your own website or a company one"
                />
                <TextFieldGroup
                  placeholder="Location"
                  name="location"
                  value={this.state.location}
                  onChange={this.onChange}
                  error={errors.location}
                  info="City"
                />

                <SelectListGroup
                  placeholder="State"
                  name="locationState"
                  value={this.state.locationState}
                  onChange={this.onChange}
                  options={options}
                  error={errors.locationState}
                  info="State"
                />

                <TextAreaFieldGroup
                  placeholder="Short Bio"
                  name="bio"
                  value={this.state.bio}
                  onChange={this.onChange}
                  error={errors.bio}
                  info="Tell us a little about yourself"
                />

                <div className="mb-3">
                  <button
                    type="button"
                    onClick={() => {
                      this.setState((prevState) => ({
                        displaySocialInputs: !prevState.displaySocialInputs,
                      }));
                    }}
                    className="btn btn-light"
                  >
                    Add Social Network Links
                  </button>
                  <span className="text-muted">Optional</span>
                </div>
                {socialInputs}
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

CreateProfile.propTypes = {
  profile: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  profile: state.profile,
  errors: state.errors,
});

export default connect(mapStateToProps, { createProfile })(
  withRouter(CreateProfile)
);
