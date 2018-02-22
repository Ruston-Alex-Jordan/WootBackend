module.exports = {
    orderComplete: (req, res, next) => {
        const db = req.app.get('db');
        db.order_complete().then()
        .then( () => { res.status(200).send('cats hobbes'); })
        .catch( err => {
            res.status(500).send(err);
        });
    }
}