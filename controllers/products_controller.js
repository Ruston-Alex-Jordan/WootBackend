module.exports = {
    getProducts: (req, res, next) => {
        db.get_products()
            .then( products => { res.status(200).send(products); })
            .catch( err => {
                res.status(500).send(err);
            });
    }
}