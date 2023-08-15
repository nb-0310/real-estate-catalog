const crypto = require('crypto');

// Generate a random secure key
const generateSecretKey = () => {
  return crypto.randomBytes(32).toString('hex'); // 256 bits (32 bytes)
};

// Usage
const secretKey = generateSecretKey();
console.log('Generated Secret Key:', secretKey);