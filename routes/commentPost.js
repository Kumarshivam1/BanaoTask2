const express = require("express");
const router = express.Router();

const {createPost,updatePost,deletePost,getPost} = require("../controller/postController");
const {addComment} = require("../controller/commentController.js");
const { unlike, addLike } = require("../controller/likeContoller.js");

router.post("/createPost",createPost);
router.put("/updatePost/:id",updatePost);
router.get("/getPost/:id",getPost);
router.delete("/deletePost/:id",deletePost);

router.post("/createComment",addComment);

router.post("/likePost",addLike);
router.post("/unLikePost",unlike);

module.exports = router;

