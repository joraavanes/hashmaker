const crypto = require('crypto');

module.exports = {
    createHash: function(str, algorithm){
        const hash = crypto.createHmac(algorithm, process.env.HASH_SECRET_KEY);
        return hash.update(str).digest('hex');
    }
}