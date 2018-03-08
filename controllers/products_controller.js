module.exports = {
    getProducts: (req, res, next) => {
        const db = req.app.get('db');
        db.get_product()
            .then( products => { let product = products.map( e => {
                e.cartQuantity = 0
                return e
            }) 
            res.status(200).send(product)
        })
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
        })
        res.status(200).send('quantity!')
    },

    getOutdoor: (req, res, next) => {
        const db = req.app.get('db');
        db.get_outdoor().then( products => { let product = products.map( e => {
            e.cartQuantity = 0
            return e
        }) 
        res.status(200).send(product)
    }).catch ( err => {
            res.status(500).send(err)
        });
    },
    
    getElectronic: (req, res, next) => {
        const db = req.app.get('db');
        db.get_electronic().then( products => { let product = products.map( e => {
            e.cartQuantity = 0
            return e
        }) 
        res.status(200).send(product)
    }).catch ( err => {
            res.status(500).send(err)
        });
    }
}