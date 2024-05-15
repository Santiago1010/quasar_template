import CryptoJS from 'crypto-js'
import jwt from 'jsonwebtoken'

/**
 * Encodes a string using AES encryption.
 *
 * @param {string} string - The string to be encoded.
 * @return {string} The encrypted string.
 */
const encodeAes = (string) => {
  const key = CryptoJS.enc.Utf8.parse(import.meta.env.VITE_AES_KEY)
  const iv = CryptoJS.enc.Utf8.parse(import.meta.env.VITE_AES_IV)

  return CryptoJS.AES.encrypt(string, key, { iv }).toString()
}

/**
 * Encodes a given string using SHA256 algorithm.
 *
 * @param {string} string - The string to be encoded.
 * @return {string} The encoded string.
 */
const encodeSHA256 = (string) => {
  return CryptoJS.SHA256(string).toString()
}

/**
 * Encodes a string using SHA256 and AES algorithms.
 *
 * @param {string} string - The string to be encoded.
 * @return {string} The encoded string.
 */
const setNewPassword = (string) => {
  return encodeSHA256(encodeAes(string))
}

/**
 * Validates a JWT session token.
 *
 * @param {string} [incomingToken=null] - The incoming token to validate. If provided, it will overwrite the token stored in localStorage.
 * @throws {Error} If no token is found in localStorage or if the JWT_SECRET is not defined in the .env file.
 * @throws {Error} If the JWT has expired or if the issuer or audience is invalid in production or pre-production environments.
 * @return {Object} An object with the following properties:
 *   - valid: A boolean indicating whether the token is valid or not.
 *   - payload: The decoded payload of the token.
 *   - token: The stored token.
 */
const validateSessionJwt = (incomingToken = null) => {
  try {
    const localStorageTokenName = import.meta.env.VITE_LOCAL_STORAGE_TOKEN_NAME // Name of the key in localStorage

    let storedToken = localStorage.getItem(localStorageTokenName) // Get token stored in localStorage

    // If a new token is provided, overwrite the stored token
    if (incomingToken) {
      storedToken = incomingToken
      localStorage.setItem(localStorageTokenName, storedToken) // Store the new token in localStorage
    }

    if (!storedToken) {
      throw new Error('No token found')
    }

    const decodedIncomingToken = jwt.decode(storedToken, { complete: true })

    // Validate JWT signature (secret key should come from a secure environment)
    const secretKey = import.meta.env.VITE_JWT_SECRET
    if (!secretKey) {
      throw new Error('JWT_SECRET is not defined in the .env file')
    }

    jwt.verify(storedToken, secretKey)

    // Additional validation (e.g., expiration) only in production or pre-production environments
    const isProductionOrPreProduction =
      import.meta.env.VITE_NODE_ENV === 'production' ||
      import.meta.env.VITE_NODE_ENV === 'pre-production'

    if (isProductionOrPreProduction) {
      const now = Math.floor(Date.now() / 1000)

      // Check expiration date (exp)
      if (decodedIncomingToken.payload.exp && decodedIncomingToken.payload.exp < now) {
        throw new Error('JWT has expired')
      }

      // Check issuer (iss) if required
      const expectedIssuer = import.meta.env.VITE_JWT_ISSUER
      if (expectedIssuer && decodedIncomingToken.payload.iss !== expectedIssuer) {
        throw new Error('Invalid issuer in JWT')
      }

      // Check audience (aud) if required
      const expectedAudience = import.meta.env.VITE_JWT_AUDIENCE
      if (expectedAudience && decodedIncomingToken.payload.aud !== expectedAudience) {
        throw new Error('Invalid audience in JWT')
      }
    }

    return {
      valid: true,
      payload: decodedIncomingToken.payload,
      token: storedToken,
    }
  } catch (error) {
    console.error('Error validating JWT:', error.message)
    return {
      valid: false,
      payload: null,
    }
  }
}

export { setNewPassword, validateSessionJwt }
