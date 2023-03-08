import mongoose from 'mongoose';

const schema = mongoose.Schema;

export const WalletSchema = new schema ({
    hashwallet: {
        type: String
    },

    creation_date: {
        type: Date,
        default: Date.now
    },

    type: {
        type: String
    }
})