import{
    addWallet,
    getWallets,
    getWalletByID,
    deleteWalletByID,
    getOneObjectWallet
} from '../controller/serverCon.js';

const walletRoute = (app) => {
    app.route('/wallet')

    .get(
        getWallets
    )

    .post(
        addWallet
    );

    app.route('/wallet/search')

    .get(
        getOneObjectWallet
    );

    app.route('/wallet/:walletID')

    .get(
        getWalletByID
    )

    .delete(
        deleteWalletByID
    );
}

export default walletRoute;

