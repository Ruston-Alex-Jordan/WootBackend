module.exports = {
    orderComplete: (req, res, next) => {
        const db = req.app.get('db');
        let config = req.body;
        console.log(config);

        let productID = config.cart.map( (e) => {
            return e.productid
        });
        let total = function () {
            let subtotal = 0;
            for(let i = 0; i < config.cart.length; i++){
                subtotal += config.cart[i].saleprice
            }
            return subtotal;
        };
        let email = config.token.card.email;
        let cardLastFour = config.token.card.last4;
        let addressCity = config.token.card.address_city;
        let addressLine1 = config.token.card.address_line1;
        let addressState = config.token.card.address_state;
        let addressZip = config.token.card.address_zip;

        db.order_complete([ productID, total, email, cardLastFour, addressCity, addressLine1, addressState, addressZip ])
            .then( () => { res.status(200).send('success'); })
            .catch( err => { res.status(500).send(err);
        });
    }
}