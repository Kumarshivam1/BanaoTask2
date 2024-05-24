const Post = require("../Model/postSchema");
const Like = require("../Model/likeSchema");

exports.addLike = async(req,res)=>{
    try{
    const {post,user} = req.body;
    const response = await Like.create({post,user});
    const updatedPost = await Post.findByIdAndUpdate(
        post,
        {$push:{likes:response._id}},
        {new:true}
    );
    return res.status(200).json({
        data:updatedPost
    })
    }
    catch(err){
        res.send(400).json({
            success:false,
            data:err.message
        })
    }
    
}

//Unlike a post
exports.unlike = async (req,res)=>{
    try{
        const {post,like}= req.body;
        //delete in like
        const deletedLike = await Like.findOneAndDelete({post:post,_id:like});

        //update Post collection
        const updatedPost = await Post.findByIdAndUpdate(post,{$pull:{likes:deletedLike._id}},{new:true});

        res.json({
            post:updatedPost
        });

    }
    catch(error){
        return res.status(400).json({
            error:"Error while Unliking post",
            data:error.message
        });
    }
}