const { createHash, PBKDF2 } = require('../lib/crypto');

module.exports = {
    generateHash: (req, res, next) => {
        const {str, algorithm} = req.body;
        const hash = createHash(str, algorithm);
        res.send({
            plainText: str,
            algorithm,
            hash
        });
    },
    pbkdf2: (req, res, next) => {
        const {password, iterations, keylen, algorithm} = req.body;
        const hashedPassword = PBKDF2(password,iterations,keylen, algorithm);
        res.send({
            pbkdf2Password: hashedPassword,
            plainStr: password,
            iterations,
            keylen,
            algorithm
        });
    }
};

