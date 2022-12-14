const { Schema, model } = require('mongoose');

const postSchema = new Schema(
  {
    postTitle: {
      type: String,
      required: 'Your post needs a title!',
      minlength: 1,
      maxlength: 500
    },
    postText: {
      type: String,
      required: `You can't make an empty post!`,
      minlength: 1
    },
    username: {
      type: String,
      required: true
    },
    tags: {
      type: String,
      required: `Tag your post so people can find it!`,
      minlength: 1,
    },
  },
  {
    toJSON: {
      getters: true
    }
  }
);

const Post = model('Post', postSchema);

module.exports = Post;
