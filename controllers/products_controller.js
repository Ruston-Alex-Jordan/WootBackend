module.exports = {
    getProducts: (req, res, next) => {
        const db = req.app.get('db');
        db.get_product()
            .then( products => { res.status(200).send(products); })
            .catch( err => {
                res.status(500).send(err);
            });
    },

    updateProducts: (req, res, next) => {
        const db = req.app.get('db');
        const cart = req.body
        return cart.map(e => {
            let newQuantity = e.quantity - 1
            db.update_quantity([newQuantity, e.productid])
            .then( quantity => { res.status(200).send( quantity )})
        })
        
    }
}