const { createHash } = require('../lib/crypto');

module.exports = {
    generateHash: (req, res, next) => {
        const {str, algorithm} = req.body;
        const hash = createHash(str, algorithm);
        res.send({
            plainText: str,
            algorithm,
            hash
        });
    }
};

