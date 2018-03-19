const modExpToPem = require("rsa-pem-from-mod-exp");
const crypto = require("crypto");
const debug = require("debug")("wopiproof");

module.exports = {
    verifySignature: function(input, proofKeys) {
        const asymetricCryptoItems = createLazyConverterMap(
            {
                keyNew: [proofKeys.modulus, proofKeys.exponent],
                keyOld: [proofKeys.oldmodulus, proofKeys.oldexponent],
                proofNew: input.proof,
                proofOld: input.proofold
            },
            {
                keyNew: convertKey,
                keyOld: convertKey,
                proofNew: convertBase64ToBuffer,
                proofOld: convertBase64ToBuffer
            }
        );

        const combinationsToCheck = [
            {
                key: "keyNew",
                proof: "proofNew"
            },
            {
                key: "keyNew",
                proof: "proofOld"
            },
            {
                key: "keyOld",
                proof: "proofNew"
            }
        ];

        //.some function breaks iteration on first truthy result
        return combinationsToCheck.some(function isValid(combination) {
            //new verifier instance is required for each verification,
            // it's just a wraper that builds an openssl command
            const verifier = crypto.createVerify("RSA-SHA256");
            verifier.update(input.payload);
            const result = verifier.verify(
                asymetricCryptoItems[combination.key],
                asymetricCryptoItems[combination.proof]
            );
            debug("verification result ", combination, result);
            return result;
        });
    }
};

function convertKey(keyRaw) {
    return modExpToPem(keyRaw[0], keyRaw[1]);
}

function convertBase64ToBuffer(proof) {
    return new Buffer(proof, "base64");
}

function createLazyConverterMap(values, conversions) {
    const cache = {};
    return Object.keys(values).reduce(function(lazyConverter, key) {
        Object.defineProperty(lazyConverter, key, {
            get: function() {
                if (!cache[key]) {
                    cache[key] = conversions[key](values[key]);
                }
                return cache[key];
            }
        });
        return lazyConverter;
    }, {});
}
