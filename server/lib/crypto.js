const crypto = require('crypto');

module.exports = {
    createHash: function(str, algorithm){
        const hash = crypto.createHmac(algorithm, process.env.HASH_SECRET_KEY);
        return hash.update(str).digest('hex');
    },
    PBKDF2: function(password, iterations, keylen, digestAlgorithm){
        const salt = crypto.randomBytes(256).toString('hex');
        const hashedPassword = crypto.pbkdf2Sync(password, salt, iterations, keylen, digestAlgorithm);
        return hashedPassword.toString('hex');
    }
};