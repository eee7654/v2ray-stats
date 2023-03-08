'use strict';
const { createSigner,createVerifier } = require('fast-jwt')

module.exports = {
	sign: (payload, options) => {
		const signSync = createSigner({
			key: process.env.AUTH_SEC,
			aud: 'PWA',
			expiresIn: options.exp
		})
		return signSync(payload)
	},
	verify: (token, verfOnly) => {
		const verifySync = createVerifier({ 
			key: process.env.AUTH_SEC,
			allowedAud: ['Customers'],
			complete: verfOnly ? false : true,
			cache: true
		})
		try{
			return verifySync(token)
		}catch (err){
			return false;
		}
	}
}