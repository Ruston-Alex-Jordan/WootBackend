module.exports = {
    getProducts: (req, res, next) => {
        const db = req.app.get('db');
        db.get_product()
            .then( products => { res.status(200).send(products); })
            .catch( err => {
                res.status(500).send(err);
            });
    }
}