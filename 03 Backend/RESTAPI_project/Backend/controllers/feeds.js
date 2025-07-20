exports.getpost = (req, res, next) => {
  res.status(200).json({
    post: [
            {
             title: "atomic habits",
              author: " Deepak " ,
              imgurl: "https://images-na.ssl-images-amazon.com/images/I/41b1k2d8J6L._SX331_BO1,204,203,200_.jpg",
              content: "Atomic Habits is a self-help book by James Clear that focuses on the "
            }
        ],
  });
};

exports.createPost = (req, res, next) => {
  const title = req.body.title;
  const author = req.body.author;
  // we'll get this from db i think
  res.status(201).json({
    message: "Post created successfully",
    postId: new Date().toISOString(),
    post: {
      id: new Date().toISOString(),
      title: title,
      author: author,
    },
  });
};
