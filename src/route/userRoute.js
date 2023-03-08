import{
    addUser,
    getUsers,
    getUserByID,
    deleteUserByID,
    getOneObjectUser
} from '../controller/serverCon.js';

const userRoute = (app) => {
    app.route('/user')

    .get(
        getUsers
    )

    .post(
        addUser
    )

    app.route('/user/search')

    .get(
        getOneObjectUser
    );

    app.route('/user/:userID')
        
    .get(
        getUserByID
    )
    
    .delete(
        deleteUserByID
    );
}

/*app.get('/search/:query', (req, res) => {
    const query = req.params.query.toLowerCase();
    const results = user.filter(firstname => firstname.toLowerCase().indexOf(query) !== -1);
    res.send(results);
});
*/

/* app.get('/search', async (req, res) => {
    const query = req.params.query.q;
    try {
        const user = await
        user.findOne({ firstname: query });
        res.json(user);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
}); */

export default userRoute;
