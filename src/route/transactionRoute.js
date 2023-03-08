import{
    addTransaction,
    getTransactions,
    getTransactionByID,
    deleteTransactionByID,
    getOneObjectTransaction
} from '../controller/serverCon.js';

const transactionRoute = (app) => {
    app.route('/transaction')

    .get(
        getTransactions
    )

    .post(
        addTransaction
    );

    app.route('/transaction/search')

    .get(
        getOneObjectTransaction
    );

    app.route('/transaction/:transactionID')

    .get(
        getTransactionByID
    )

    .delete(
        deleteTransactionByID
    );
    
}

export default transactionRoute;
