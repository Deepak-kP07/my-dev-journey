exports.getpost = (req,res,next)=>{
    res.status(200).json({
        post : [{"title":"atomic habits" , "author" : " Deepak "}]
    })
}

exports.createPost = (req,res,next)=>{
    const title = req.body.title;
    const author = req.body.author;
    // we'll get this from db i think 
    res.status(201).json(
        {
            message : "Post created successfully",
            postId : new Date().toISOString(),
            post : {
            "id" : new Date().toISOString(), 
            "title" : title ,
            "author" : author
        }
        }
    )
}