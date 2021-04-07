const crypto = require('crypto');

module.exports = {
    createHash: function(str, algorithm){
        try {
            const hash = crypto.createHmac(algorithm, process.env.HASH_SECRET_KEY);
            return hash.update(str).digest('hex');
        } catch (err) {
            return err.message;
        };
    },
    PBKDF2: function(password, iterations, keylen, digestAlgorithm){
        try {
            const salt = crypto.randomBytes(256).toString('hex');
            const hashedPassword = crypto.pbkdf2Sync(password, salt, iterations, keylen, digestAlgorithm);
            return hashedPassword.toString('hex');
        } catch (err) {
            return err.message;
        }
    },
    encrypt: function(algorithm, keyPassword, data){
        try {
            const salt = crypto.randomBytes(32);
            const key = crypto.scryptSync(keyPassword, salt, 32);
            const iv = crypto.randomBytes(16);

            const cipher = crypto.createCipheriv(algorithm, key, iv);

            let encryptedData = cipher.update(data, 'utf-8', 'hex');
            encryptedData += cipher.final('hex');
            
            return {
                encryptedData,
                key: key.toString('hex'),
                iv: iv.toString('hex')
            };
        } catch (err) {
            return err.message;
        }
    }
};