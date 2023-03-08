import mongoose from 'mongoose';

const schema = mongoose.Schema;

export const UserSchema = new schema ({
    username: {
        type: String,
        required: 'Please enter your username.'
    },

    email: {
        type: String,
        required: 'Please enter your Email.'
    },

    password: {
        type: String,
        required: 'Enter your password.'
    },

    firstname: {
        type: String,
        required: 'Please enter your first name.'
    },

    lastname: {
        type: String,
        required: 'Please enter your last name.'
    }
})
