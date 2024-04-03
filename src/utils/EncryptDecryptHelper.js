var CryptoJS = require("crypto-js");

const secretKey = 'VIDDHANU@!@#';

export const fnDecrypt = (params) => {
	// const ciphertext = CryptoJS.enc.Hex.parse("8E441411D9890BED64BD7931DE3230C3");
	const ciphertext = CryptoJS.enc.Hex.parse(params);
	const pwhash = CryptoJS.SHA1(CryptoJS.enc.Utf8.parse(secretKey));
	const key = CryptoJS.enc.Hex.parse(pwhash.toString(CryptoJS.enc.Hex).substr(0, 32));

	const decrypted = CryptoJS.AES.decrypt({
		ciphertext: ciphertext
	}, key, {
		mode: CryptoJS.mode.ECB,
		padding: CryptoJS.pad.Pkcs7
	});

	const plaintext = decrypted.toString(CryptoJS.enc.Utf8);

	// $('#result').text(plaintext);
	return plaintext.substring(8,plaintext.length);
}

export const fnEncryption = (params) => {
	const plaintext = params;
	const pwhash = CryptoJS.SHA1(CryptoJS.enc.Utf8.parse(secretKey));
	const key = CryptoJS.enc.Hex.parse(pwhash.toString(CryptoJS.enc.Hex).substr(0, 32));
	var text = "";
    var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

    for (var i = 0; i < 8; i++)
      text += possible.charAt(Math.floor(Math.random() * possible.length));
    let encrPwd = text + params;
    var encrypted = CryptoJS.AES.encrypt(encrPwd, key, {
      mode: CryptoJS.mode.ECB,
      padding: CryptoJS.pad.Pkcs7
    });

    var ciphertext=encrypted.ciphertext.toString(CryptoJS.enc.Hex);
	// $('#result').text(ciphertext);
	// console.log(ciphertext);
	return ciphertext;
}