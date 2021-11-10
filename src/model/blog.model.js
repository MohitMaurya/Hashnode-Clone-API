const mongoose = require("mongoose");

const { Schema } = mongoose;

const blogSchema = new Schema(
    {
        title: { type: String, required: true },
        subTitle: { type: String },
        body: { type: String, required: true },
        tags:[ { type: String, required: true }],
        coverImage: { type: String },
    },
    {
        versionKey: false,
        timestamps: true,
    }
);

const Blog = mongoose.model("blog", blogSchema);
module.exports = Blog;
