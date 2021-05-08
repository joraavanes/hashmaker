const { createHash, PBKDF2, encrypt, decrypt } = require('../lib/crypto');

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
        const {hashedPassword, salt} = PBKDF2(password,iterations,keylen, algorithm);
        res.send({
            pbkdf2Password: hashedPassword,
            plainStr: password,
            salt,
            iterations,
            keylen,
            algorithm
        });
    },
    encrypt: (req, res, next) => {
        const {algorithm, keyPassword, data} = req.body;
        const {encryptedData, key, iv} = encrypt(algorithm, keyPassword, data);
        res.send({
            encryptedData,
            key,
            iv,
            algorithm,
            plainData: data
        });
    },
    decrypt: (req, res, next) => {
        const {algorithm, key, iv, encryptedData} = req.body;
        const decryptedData = decrypt(algorithm, key, iv, encryptedData);

        res.send({
            decryptedData,
            key,
            iv
        });
    }
};

