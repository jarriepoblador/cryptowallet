import mongoose from 'mongoose';

const schema = mongoose.Schema;

export const TransactionSchema = new schema ({
    amount: {
        type: Number,
        required: 'Please enter amount.'
    },

    transaction_type: {
        type: String,
        required: 'Please enter your transaction type.'
    },

    transaction_date: {
        type: Date,
        default: Date.now
    },

    hashkey: {
        type: String
    }
})
