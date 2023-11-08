import mongoose, { SchemaTypes } from "mongoose";
const { Schema, model } = mongoose;


const blogSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    content: {
        type: String,
        required: true,
    },
    slug: {
        type: String,
        required: true,
        lowercase: true,
    },
    author: {
        type: SchemaTypes.ObjectId,
        ref: 'User',
        required: true,
    },
    created_at: {
        type: Date,
        default: () => new Date(),
        immutable: true,
    },
    updated_at: Date,
    comments: [{
        user: SchemaTypes.ObjectId,
        content: String,
        likes: Number,
    }],
});

const Blog = model('Blog', blogSchema)

export default Blog


