const debug = require("debug")("wopiproof");
const timeConverter = require("./timeConverter");
const payloadBuilder = require("./payloadBuilder");
const signatureChecker = require("./signatureChecker");

const twentyMinutes = 20 * 60 * 1000;

module.exports = {
    check: function(input, signatures, proofKeys, ignoreTime) {
        debug("input", input);
        if(ignoreTime){
            console.warn("Don't pass ignoreTime in production!")
        } else {
            if (+new Date() - timeConverter(input.timestamp) > twentyMinutes) {
                debug("input.timestamp older than 20 minutes");
                return false;
            }
        }

        return signatureChecker.verifySignature(
            {
                payload: payloadBuilder.build(input),
                proof: signatures.proof,
                proofold: signatures.proofold
            },
            proofKeys
        );
    }
};
