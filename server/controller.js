module.exports={
    
    getAll: (req, res, next) => {
        const dbInstance = req.app.get('db');

        dbInstance.read_houses()
        .then( houses => res.status(200).send(houses))
        .catch( err => {
            res.status(500).send({errorMessage: 'Oops! Something went wrong!'})
        });
    }
};