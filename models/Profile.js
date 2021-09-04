const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ProfileSchema = new Schema({
  user: {
    type: Schema.Types.ObjectId,
    ref: 'users',
  },
  handle: {
    type: String,
    required: true,
    max: 40,
  },
  website: {
    type: String,
  },
  location: {
    type: String,
  },
  bio: {
    type: String,
  },
  picture: [
    {
      title: {
        type: String,
        required: true,
      },
      url: {
        type: String,
        default: true,
      },
      // taken: {
      //   type: Date,
      //   default: true,
      // },
    },
  ],
  social: {
    youtube: {
      type: String,
    },
    twitter: {
      type: String,
    },
    facebook: {
      type: String,
    },
    instagram: {
      type: String,
    },
  },
});

module.exports = Profile = mongoose.model('profile', ProfileSchema);
