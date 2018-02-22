module.exports = {
    orderComplete: (req, res, next) => {
        const db = req.app.get('db');
        db.order_complete()
        console.log('asdlkfjalskdfjlasjdflkasjdflakjsdflk')
    }
}