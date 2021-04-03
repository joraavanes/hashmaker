const crypto = require('crypto');

module.exports = {
    createHash: function(str, algorithm){
        const hash = crypto.createHmac(algorithm, 'SUPERSECRETKEY');
        return hash.update(str).digest('hex');
    }
}