const bignum = require("bignum");

module.exports = {
    build: function(input) {
        const fullUrl = percentEncode(input.url).toUpperCase(); //not sure about the escaping yet.

        const fullUrlBuffer = Buffer.from(fullUrl, "utf8");
        const accessTokenBuffer = Buffer.from(input.accessToken, "utf8");

        const timeBuffer = bignum(input.timestamp).toBuffer({
            endian: "big",
            size: 8
        });

        const expectedProofBuffer = Buffer.concat([
            getLengthIn4Bytes(accessTokenBuffer),
            accessTokenBuffer,
            getLengthIn4Bytes(fullUrlBuffer),
            fullUrlBuffer,
            getLengthIn4Bytes(timeBuffer),
            timeBuffer
        ]);

        return expectedProofBuffer;
    }
};

function getLengthIn4Bytes(buff) {
    const lengthBuffer = Buffer.alloc(4);
    lengthBuffer.writeUIntBE(buff.length, 0, 4);
    return lengthBuffer;
}

function percentEncode(url) {
    return url;
}
