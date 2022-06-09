const PostModel = require("../models/post.model");
const UserModel = require("../models/user.model");
const ObjectID = require("mongoose").Types.ObjectId;

// Création d'un post
module.exports.createPost = async (req, res) => {
  const newPost = new PostModel({
    posterId: req.body.posterId,
    message: req.body.message,
    video: req.body.video,
    likers: [],
    comments: [],
  });

  try {
    const post = await newPost.save();
    return res.status(201).json(post);
  } catch (err) {
    return res.status(400).send(err);
  }
};

// Lecture d'un post
module.exports.readPost = (req, res) => {
  PostModel.find((err, docs) => {
    if (!err) res.send(docs);
    else console.log("Error to get data : " + err);
  });
};

// Mise à jour d'un post
module.exports.updatePost = (req, res) => {
    
};

// Suppression d'un post
module.exports.deletePost = (req, res) => {};
