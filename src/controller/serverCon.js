import mongoose from 'mongoose';

import { UserSchema } from '../model/userModel.js';
import { WalletSchema } from '../model/walletModel.js';
import { TransactionSchema } from '../model/transactionModel.js';

const User = mongoose.model('User', UserSchema);
const Wallet = mongoose.model('Wallet', WalletSchema);
const Transaction = mongoose.model('Transaction', TransactionSchema);

//Export Users
export const addUser = (req, res) => {
    let newUser = new User(req.body);

    newUser.save((err, user) => {
        if(err) {
            res.send(err);
        }
        res.json(user)
    });
}

export const getUsers = (req, res) => {
    User.find({}, (err, user) => {
        if(err) {
            res.send(err);
        }
        res.json(user);
    });
}

export const getUserByID = (req, res) => {
    User.findById(req.params.userID), (err, user) => {
        if(err) {
            res.send(err);
        }
        res.json(user);
    }
}

export const deleteUserByID = (req, res) => {

    User.remove({_id: req.params.userID},
        (err, user) => {
            if (err) {
                res.send(err);
            }

            res.json({ message: "The user was deleted." });
        });
}

export const getOneObjectUser = async (req, res) => {
    const query = req.query.q;
    try {
        const user = await User.findOne({ username: query });
        res.json(user);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
}


//Export Wallets
export const addWallet = (req, res) => {
    let newWallet = new Wallet(req.body);

    newWallet.save((err, wallet) => {
        if(err) {
            res.send(err);
        }
        res.json(wallet)
    });
}

export const getWallets = (req, res) => {
    Wallet.find({}, (err, wallet) => {
        if(err) {
            res.send(err);
        }
        res.json(wallet);
    });
}

export const getWalletByID = (req, res) => {
    Wallet.findById(req.params.walletID), (err, wallet) => {
        if(err) {
            res.send(err);
        }
        res.json(wallet);
    }
}

export const deleteWalletByID = (req, res) => {

    Wallet.remove({_id: req.params.walletID},
        (err, wallet) => {
            if (err) {
                res.send(err);
            }

            res.json({ message: "The wallet was deleted." });
        });
}

export const getOneObjectWallet = async (req, res) => {
    const query = req.query.q;
    try {
        const wallet = await Wallet.findOne({ hashwallet: query });
        res.json(wallet);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
}


//Export Transactions
export const addTransaction = (req, res) => {
    let newTransaction = new Transaction(req.body);

    newTransaction.save((err, transaction) => {
        if(err) {
            res.send(err);
        }
        res.json(transaction)
    });
}

export const getTransactions = (req, res) => {
    Transaction.find({}, (err, transaction) => {
        if(err) {
            res.send(err);
        }
        res.json(transaction);
    });
}

export const getTransactionByID = (req, res) => {
    Transaction.findById(req.params.transactionID), (err, transaction) => {
        if(err) {
            res.send(err);
        }
        res.json(transaction);
    }
}

export const deleteTransactionByID = (req, res) => {

    Transaction.remove({_id: req.params.transactionID},
        (err, transaction) => {
            if (err) {
                res.send(err);
            }

            res.json({ message: "The transaction was deleted." });
        });
}

export const getOneObjectTransaction = async (req, res) => {
    const query = req.query.q;
    try {
        const transaction = await Transaction.findOne({ transaction_type: query });
        res.json(transaction);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
}