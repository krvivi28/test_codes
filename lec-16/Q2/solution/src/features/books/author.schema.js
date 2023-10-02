import mongoose from 'mongoose';

export const authorSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true,
    },
    // Create an array of book ObjectIds to represent the many-to-many relationship with books
    books: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Book',
    }],
});
