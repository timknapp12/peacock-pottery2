module.exports = {
    read: (req, res, next) => {
        const db = req.app.get('db');

        db.read_products()
        .then(products => res.status(200).send(products))
        .catch(() => res.status(500).send());
    }
}