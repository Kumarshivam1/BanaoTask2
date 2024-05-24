const mongoose = require("mongoose");

const post = mongoose.Schema({
    username:{
        type:String,
        required:true
    },
    description:{
        type:String,
        required:true
    },
    comments:[
        {
            type:mongoose.Schema.Types.ObjectId,
            ref:"Comment"
        }
    ],
    likes:[
        {
            type:mongoose.Schema.Types.ObjectId,
            ref:"Like"
        }
    ]
})
module.exports = mongoose.model("Post",post);